#!/usr/bin/expect -f

# ============================================
# SCRIPT DE DEPLOY AUTOMÁTICO - ASBJJ (versão Expect)
# ============================================
# Usa expect para automação de login SSH
# ============================================

set VPS_IP "92.113.33.16"
set VPS_USER "root"
set VPS_PASS "123"
set PROJECT_USER "fabianosf"
set PROJECT_PASS "123"
set timeout 30

puts "🚀 Iniciando deploy automático para o VPS..."
puts ""

# Função para fazer deploy
proc deploy {user pass} {
    global VPS_IP
    puts "🔐 Conectando como $user..."
    
    spawn ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null "$user@$VPS_IP"
    
    expect {
        "password:" {
            send "$pass\r"
        }
        "Password:" {
            send "$pass\r"
        }
        timeout {
            puts "❌ Timeout ao conectar"
            exit 1
        }
    }
    
    expect {
        "$ " {
            puts "✅ Conectado ao servidor!"
        }
        "# " {
            puts "✅ Conectado ao servidor!"
        }
        timeout {
            puts "❌ Timeout após login"
            exit 1
        }
    }
    
    # Executar comandos de deploy
    send "cd /var/www/asbjj.com.br\r"
    expect {
        "$ " {}
        "# " {}
    }
    
    send "git pull origin master\r"
    expect {
        "$ " {}
        "# " {}
        timeout {
            puts "⚠️  Timeout no git pull"
        }
    }
    
    send "npm install\r"
    expect {
        "$ " {}
        "# " {}
        timeout {
            puts "⚠️  Timeout no npm install"
        }
    }
    
    send "npm run build\r"
    expect {
        "$ " {}
        "# " {}
        timeout {
            puts "⚠️  Timeout no build"
        }
    }
    
    send "sudo chown -R www-data:www-data /var/www/asbjj.com.br/dist\r"
    expect {
        "password" {
            send "$pass\r"
        }
        "$ " {}
        "# " {}
    }
    
    send "sudo chmod -R 755 /var/www/asbjj.com.br/dist\r"
    expect {
        "$ " {}
        "# " {}
    }
    
    send "sudo systemctl reload nginx\r"
    expect {
        "password" {
            send "$pass\r"
        }
        "$ " {}
        "# " {}
    }
    
    puts "✅ Deploy concluído!"
    send "exit\r"
    expect eof
}

# Tentar primeiro com root
if {[catch {deploy $VPS_USER $VPS_PASS} err]} {
    puts "⚠️  Tentando com usuário alternativo..."
    deploy $PROJECT_USER $PROJECT_PASS
}

puts ""
puts "🎉 Processo concluído!"

