#!/bin/bash

# Script para fazer deploy no VPS via SSH
# Uso: ./deploy-vps.sh

echo "🚀 Conectando ao VPS e atualizando o site..."
echo ""
echo "Você precisará inserir a senha do servidor quando solicitado."
echo ""

# Conecta ao servidor e executa o script de atualização
ssh root@92.113.33.16 'bash /var/www/asbjj.com.br/atualizar-site.sh'

# Alternativa: executar comandos diretamente
# ssh root@92.113.33.16 << 'EOF'
# cd /var/www/asbjj.com.br
# git pull origin master
# npm install
# npm run build
# sudo chown -R www-data:www-data /var/www/asbjj.com.br/dist
# sudo chmod -R 755 /var/www/asbjj.com.br/dist
# sudo systemctl reload nginx
# echo "✅ Deploy concluído!"
# EOF

