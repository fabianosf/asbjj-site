#!/bin/bash

# ============================================
# SCRIPT DE ATUALIZAÇÃO DO SITE ASBJJ
# ============================================
# Use este script no servidor para atualizar o site
# ============================================

echo "🔄 Iniciando atualização do site ASBJJ..."

# Ir para o diretório do projeto
cd /var/www/asbjj.com.br

# Verificar se está no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ Erro: Diretório do projeto não encontrado!"
    exit 1
fi

# Baixar atualizações do GitHub
echo "📥 Baixando atualizações do GitHub..."
git pull origin master

if [ $? -ne 0 ]; then
    echo "❌ Erro ao fazer pull do GitHub!"
    exit 1
fi

# Instalar dependências
echo "📦 Instalando/atualizando dependências..."
npm install

# Fazer build
echo "🔨 Fazendo build do projeto..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erro ao fazer build!"
    exit 1
fi

# Ajustar permissões
echo "🔐 Ajustando permissões..."
chown -R www-data:www-data /var/www/asbjj.com.br/dist
chmod -R 755 /var/www/asbjj.com.br/dist

# Recarregar Nginx
echo "🔄 Recarregando Nginx..."
systemctl reload nginx

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Site atualizado com sucesso!"
    echo "🌐 Acesse: http://asbjj.com.br"
    echo ""
    echo "Para verificar logs:"
    echo "  tail -f /var/log/nginx/asbjj-access.log"
else
    echo "❌ Erro ao recarregar Nginx!"
    exit 1
fi

