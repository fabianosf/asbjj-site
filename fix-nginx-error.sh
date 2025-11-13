#!/bin/bash

# ============================================
# CORRIGIR ERRO DO NGINX
# ============================================
# Execute estes comandos no servidor para corrigir o erro
# ============================================

# 1. Verificar se o arquivo existe
echo "Verificando arquivo de configuração..."
ls -la /etc/nginx/sites-available/asbjj.com.br

# 2. Remover link simbólico antigo (se existir)
echo "Removendo links antigos..."
rm -f /etc/nginx/sites-enabled/asbjj
rm -f /etc/nginx/sites-enabled/asbjj.com.br

# 3. Verificar se o arquivo de configuração existe e criar se não existir
if [ ! -f "/etc/nginx/sites-available/asbjj.com.br" ]; then
    echo "Criando arquivo de configuração..."
    cat > /etc/nginx/sites-available/asbjj.com.br <<'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name asbjj.com.br www.asbjj.com.br;

    root /var/www/asbjj.com.br/dist;
    index index.html;

    access_log /var/log/nginx/asbjj-access.log;
    error_log /var/log/nginx/asbjj-error.log;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    client_max_body_size 10M;
}
EOF
fi

# 4. Criar link simbólico corretamente
echo "Criando link simbólico..."
ln -sf /etc/nginx/sites-available/asbjj.com.br /etc/nginx/sites-enabled/asbjj.com.br

# 5. Verificar links criados
echo "Verificando links..."
ls -la /etc/nginx/sites-enabled/ | grep asbjj

# 6. Testar configuração
echo "Testando configuração do Nginx..."
nginx -t

# 7. Se o teste passar, recarregar
if [ $? -eq 0 ]; then
    echo "✅ Configuração OK! Recarregando Nginx..."
    systemctl reload nginx
    echo "✅ Nginx recarregado com sucesso!"
else
    echo "❌ Erro na configuração. Verifique os erros acima."
fi

