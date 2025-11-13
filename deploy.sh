#!/bin/bash

# Script de Deploy para ASBJJ - VPS Hostinger
# Domínio: asbjj.com.br
# IP: 92.113.33.16

echo "🚀 Iniciando deploy do ASBJJ..."

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar se está no servidor
if [ ! -d "/var/www" ]; then
    echo -e "${RED}❌ Este script deve ser executado no servidor VPS${NC}"
    echo "Conecte-se ao servidor primeiro: ssh root@92.113.33.16"
    exit 1
fi

# Diretório do projeto
PROJECT_DIR="/var/www/asbjj.com.br"
NGINX_CONFIG="/etc/nginx/sites-available/asbjj.com.br"

echo -e "${YELLOW}📦 Clonando/Atualizando repositório...${NC}"
if [ -d "$PROJECT_DIR" ]; then
    echo "Diretório já existe, atualizando..."
    cd $PROJECT_DIR
    git pull origin master
else
    echo "Clonando repositório..."
    cd /var/www
    git clone https://github.com/fabianosf/asbjj-site.git asbjj.com.br
    cd $PROJECT_DIR
fi

echo -e "${YELLOW}📥 Instalando dependências...${NC}"
npm install

echo -e "${YELLOW}🔨 Fazendo build do projeto...${NC}"
npm run build

echo -e "${YELLOW}🔧 Configurando permissões...${NC}"
sudo chown -R www-data:www-data $PROJECT_DIR
sudo chmod -R 755 $PROJECT_DIR

echo -e "${YELLOW}⚙️  Verificando configuração do Nginx...${NC}"
if [ ! -f "$NGINX_CONFIG" ]; then
    echo -e "${YELLOW}⚠️  Arquivo de configuração do Nginx não encontrado.${NC}"
    echo "Criando arquivo de configuração..."
    sudo tee $NGINX_CONFIG > /dev/null <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name asbjj.com.br www.asbjj.com.br;

    root /var/www/asbjj.com.br/dist;
    index index.html;

    access_log /var/log/nginx/asbjj-access.log;
    error_log /var/log/nginx/asbjj-error.log;

    location / {
        try_files \$uri \$uri/ /index.html;
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
    echo -e "${GREEN}✅ Arquivo de configuração criado${NC}"
fi

# Verificar se o link simbólico existe
if [ ! -L "/etc/nginx/sites-enabled/asbjj.com.br" ]; then
    echo -e "${YELLOW}🔗 Criando link simbólico...${NC}"
    sudo ln -s $NGINX_CONFIG /etc/nginx/sites-enabled/
fi

echo -e "${YELLOW}🧪 Testando configuração do Nginx...${NC}"
if sudo nginx -t; then
    echo -e "${GREEN}✅ Configuração do Nginx está correta${NC}"
    echo -e "${YELLOW}🔄 Recarregando Nginx...${NC}"
    sudo systemctl reload nginx
    echo -e "${GREEN}✅ Deploy concluído com sucesso!${NC}"
    echo -e "${GREEN}🌐 Acesse: http://asbjj.com.br${NC}"
else
    echo -e "${RED}❌ Erro na configuração do Nginx. Verifique os logs.${NC}"
    exit 1
fi

