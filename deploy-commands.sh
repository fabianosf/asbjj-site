#!/bin/bash

# ============================================
# SCRIPT DE DEPLOY ASBJJ - COMANDOS PRONTOS
# ============================================
# Copie e cole estes comandos no servidor VPS
# IP: 92.113.33.16
# Domínio: asbjj.com.br
# ============================================

# 1. Criar diretório e clonar repositório
mkdir -p /var/www/asbjj.com.br
cd /var/www/
git clone https://github.com/fabianosf/asbjj-site.git asbjj.com.br
cd asbjj.com.br

# 2. Instalar dependências e fazer build
npm install
npm run build

# 3. Configurar permissões
sudo chown -R www-data:www-data /var/www/asbjj.com.br
sudo chmod -R 755 /var/www/asbjj.com.br

# 4. Criar configuração do Nginx
sudo tee /etc/nginx/sites-available/asbjj.com.br > /dev/null <<'EOF'
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

# 5. Ativar site no Nginx
sudo ln -s /etc/nginx/sites-available/asbjj.com.br /etc/nginx/sites-enabled/

# 6. Testar configuração do Nginx
sudo nginx -t

# 7. Recarregar Nginx
sudo systemctl reload nginx

# 8. Verificar status
echo "✅ Deploy concluído!"
echo "🌐 Acesse: http://asbjj.com.br"
echo ""
echo "Para verificar se está funcionando:"
echo "  sudo systemctl status nginx"
echo "  sudo tail -f /var/log/nginx/asbjj-access.log"

