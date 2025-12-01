#!/bin/bash

# Script para testar todas as páginas e verificar se estão acessíveis
# Útil para identificar problemas antes de solicitar indexação no Google Search Console

echo "🔍 Verificando Acessibilidade das Páginas - ASBJJ"
echo "=================================================="
echo ""

SITE_URL="https://asbjj.com.br"

PAGES=(
    "/"
    "/sobre"
    "/modalidades"
    "/horarios"
    "/galeria"
    "/contato"
    "/privacidade"
)

echo "Testando páginas do site..."
echo ""

for page in "${PAGES[@]}"; do
    URL="${SITE_URL}${page}"
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$URL")
    
    if [ "$HTTP_CODE" = "200" ]; then
        echo "✅ $page - HTTP $HTTP_CODE - OK"
    else
        echo "❌ $page - HTTP $HTTP_CODE - ERRO"
    fi
done

echo ""
echo "📋 Próximos Passos:"
echo ""
echo "1. Acesse o Google Search Console:"
echo "   https://search.google.com/search-console"
echo ""
echo "2. Para cada página acima, faça:"
echo "   - Vá em 'Inspeção de URL'"
echo "   - Cole a URL completa"
echo "   - Clique em 'Testar URL em tempo real'"
echo "   - Se OK, clique em 'Solicitar indexação'"
echo ""
echo "3. Reenvie o sitemap:"
echo "   - Vá em 'Sitemaps'"
echo "   - Adicione: sitemap.xml"
echo "   - Clique em 'Enviar'"
echo ""

