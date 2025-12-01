#!/bin/bash

# ============================================
# SCRIPT DE DEPLOY AUTOMÁTICO - ASBJJ
# ============================================
# Faz login automático no VPS e atualiza o site
# ============================================

VPS_IP="92.113.33.16"
VPS_USER="root"
VPS_PASS="123"
PROJECT_USER="fabianosf"
PROJECT_PASS="123"

echo "🚀 Iniciando deploy automático para o VPS..."
echo ""

# Verificar se sshpass está instalado
if ! command -v sshpass &> /dev/null; then
    echo "📦 sshpass não encontrado. Tentando instalar..."
    
    # Detectar o gerenciador de pacotes
    if command -v apt-get &> /dev/null; then
        sudo apt-get update -qq
        sudo apt-get install -y sshpass 2>/dev/null
    elif command -v yum &> /dev/null; then
        sudo yum install -y sshpass 2>/dev/null
    elif command -v dnf &> /dev/null; then
        sudo dnf install -y sshpass 2>/dev/null
    else
        echo "⚠️  Não foi possível instalar sshpass automaticamente."
        echo "Por favor, instale manualmente:"
        echo "  Debian/Ubuntu: sudo apt-get install sshpass"
        echo "  CentOS/RHEL: sudo yum install sshpass"
        echo "  Fedora: sudo dnf install sshpass"
        exit 1
    fi
    
    # Verificar novamente
    if ! command -v sshpass &> /dev/null; then
        echo "❌ Falha ao instalar sshpass. Use o script deploy-auto-expect.sh como alternativa."
        exit 1
    fi
    
    echo "✅ sshpass instalado com sucesso!"
fi

# Função para executar comandos no servidor
deploy_to_server() {
    local user=$1
    local pass=$2
    
    echo "🔐 Conectando como $user@$VPS_IP..."
    
    # Testar conexão primeiro
    if ! sshpass -p "$pass" ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o ConnectTimeout=10 \
        "$user@$VPS_IP" "echo 'Conexão OK'" 2>&1; then
        echo "❌ Falha ao conectar com $user"
        return 1
    fi
    
    echo "✅ Conectado ao servidor!"
    echo ""
    
    # Executar comandos de deploy
    if sshpass -p "$pass" ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null \
        "$user@$VPS_IP" bash << EOF
        # Verificar se o diretório existe
        if [ ! -d "/var/www/asbjj.com.br" ]; then
            echo "❌ Diretório do projeto não encontrado!"
            echo "Execute o deploy inicial primeiro."
            exit 1
        fi
        
        cd /var/www/asbjj.com.br
        
        # Verificar se está no diretório correto
        if [ ! -f "package.json" ]; then
            echo "❌ Erro: Diretório do projeto não encontrado!"
            exit 1
        fi
        
        # Ajustar permissões do diretório do projeto e .git antes de fazer qualquer operação
        echo "🔐 Ajustando permissões do repositório Git..."
        CURRENT_USER=\$(whoami)
        
        # Remover locks do Git se existirem
        echo "$pass" | sudo -S rm -f /var/www/asbjj.com.br/.git/index.lock 2>/dev/null || true
        echo "$pass" | sudo -S rm -f /var/www/asbjj.com.br/.git/FETCH_HEAD.lock 2>/dev/null || true
        
        # Ajustar ownership de TODO o diretório do projeto para o usuário atual
        echo "   Ajustando ownership de todo o diretório..."
        echo "$pass" | sudo -S chown -R \$CURRENT_USER:\$CURRENT_USER /var/www/asbjj.com.br 2>/dev/null || true
        
        # Garantir permissões de escrita
        echo "$pass" | sudo -S chmod -R u+w /var/www/asbjj.com.br 2>/dev/null || true
        
        # Configurar Git safe.directory (resolve problema de ownership)
        echo "⚙️  Configurando Git..."
        git config --global --add safe.directory /var/www/asbjj.com.br 2>/dev/null || true
        git config --global --add safe.directory '*' 2>/dev/null || true
        
        # Verificar se é um repositório git válido
        if [ ! -d ".git" ]; then
            echo "⚠️  Diretório .git não encontrado. Inicializando repositório..."
            git init 2>/dev/null || true
            git remote add origin https://github.com/fabianosf/asbjj-site.git 2>/dev/null || \
            git remote set-url origin https://github.com/fabianosf/asbjj-site.git 2>/dev/null || true
        fi
        
        # Baixar atualizações do GitHub
        echo "📥 Baixando atualizações do GitHub..."
        
        # Fazer stash das mudanças locais se houver
        if ! git diff --quiet || ! git diff --cached --quiet; then
            echo "   Fazendo stash das mudanças locais..."
            git stash 2>/dev/null || true
        fi
        
        # Tentar pull
        if ! git pull origin master 2>&1; then
            echo "⚠️  Pull falhou. Tentando reset hard..."
            # Remover locks novamente
            echo "$pass" | sudo -S rm -f /var/www/asbjj.com.br/.git/index.lock 2>/dev/null || true
            
            # Fazer fetch e reset hard
            git fetch origin master 2>&1 || true
            
            # Limpar mudanças locais
            git clean -fd 2>/dev/null || true
            
            # Tentar reset hard
            if ! git reset --hard origin/master 2>&1; then
                echo "⚠️  Reset hard falhou. Ajustando permissões e tentando novamente..."
                # Ajustar permissões novamente
                echo "$pass" | sudo -S chown -R \$CURRENT_USER:\$CURRENT_USER /var/www/asbjj.com.br 2>/dev/null || true
                echo "$pass" | sudo -S chmod -R u+w /var/www/asbjj.com.br 2>/dev/null || true
                
                # Tentar reset novamente
                if ! git reset --hard origin/master 2>&1; then
                    echo "❌ Erro ao fazer pull do GitHub mesmo após ajustar permissões!"
                    exit 1
                fi
            fi
        fi
        
        # Instalar dependências
        echo "📦 Instalando/atualizando dependências..."
        npm install || {
            echo "⚠️  Aviso: Algum problema ao instalar dependências, continuando..."
        }
        
        # Fazer build
        echo "🔨 Fazendo build do projeto..."
        if ! npm run build; then
            echo "❌ Erro ao fazer build!"
            exit 1
        fi
        
        # Ajustar permissões
        echo "🔐 Ajustando permissões..."
        echo "$pass" | sudo -S chown -R www-data:www-data /var/www/asbjj.com.br/dist 2>/dev/null || true
        echo "$pass" | sudo -S chmod -R 755 /var/www/asbjj.com.br/dist 2>/dev/null || true
        
        # Recarregar Nginx
        echo "🔄 Recarregando Nginx..."
        if echo "$pass" | sudo -S systemctl reload nginx 2>/dev/null; then
            echo ""
            echo "✅ Site atualizado com sucesso!"
            echo "🌐 Acesse: http://asbjj.com.br"
            echo ""
        else
            echo "⚠️  Aviso: Não foi possível recarregar Nginx automaticamente"
            echo "Execute manualmente: sudo systemctl reload nginx"
        fi
EOF
    then
        return 0
    else
        return 1
    fi
}

# Tentar primeiro com fabianosf, depois com root
echo "🔄 Tentando conectar com usuário: $PROJECT_USER"
CONNECTION_WORKED=false

# Testar se consegue conectar com fabianosf
if sshpass -p "$PROJECT_PASS" ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o ConnectTimeout=10 \
    "$PROJECT_USER@$VPS_IP" "echo 'OK'" 2>/dev/null; then
    CONNECTION_WORKED=true
    echo "✅ Conexão com $PROJECT_USER funcionou, executando deploy..."
    if deploy_to_server "$PROJECT_USER" "$PROJECT_PASS"; then
        echo ""
        echo "🎉 Deploy concluído com sucesso!"
        exit 0
    else
        echo ""
        echo "❌ Deploy falhou com $PROJECT_USER (mas conexão funcionou)"
        echo "Verifique os logs acima para mais detalhes."
        exit 1
    fi
fi

# Se não conseguiu conectar com fabianosf, tentar root
if [ "$CONNECTION_WORKED" = false ]; then
    echo "⚠️  Não foi possível conectar com $PROJECT_USER. Tentando com root..."
    if deploy_to_server "$VPS_USER" "$VPS_PASS"; then
        echo ""
        echo "🎉 Deploy concluído com sucesso!"
        exit 0
    else
        echo ""
        echo "❌ Falha no deploy com ambos os usuários."
        echo ""
        echo "Verifique:"
        echo "  - As credenciais estão corretas?"
        echo "  - O servidor está acessível? (ping $VPS_IP)"
        echo "  - O SSH está habilitado no servidor?"
        exit 1
    fi
fi

