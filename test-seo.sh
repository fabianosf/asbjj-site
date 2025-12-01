#!/bin/bash

# Script de Teste de SEO - ASBJJ
# Execute: ./test-seo.sh

echo "🧪 TESTES DE SEO - ASBJJ"
echo "=========================="
echo ""

SITE_URL="https://asbjj.com.br"

echo "1️⃣  Testando Sitemap..."
if curl -s -f "$SITE_URL/sitemap.xml" > /dev/null; then
    echo "   ✅ Sitemap acessível"
    curl -s "$SITE_URL/sitemap.xml" | grep -c "<url>" | xargs -I {} echo "   📄 {} URLs encontradas"
else
    echo "   ❌ Sitemap não acessível"
fi
echo ""

echo "2️⃣  Testando Robots.txt..."
if curl -s -f "$SITE_URL/robots.txt" > /dev/null; then
    echo "   ✅ Robots.txt acessível"
    if curl -s "$SITE_URL/robots.txt" | grep -q "sitemap"; then
        echo "   ✅ Sitemap referenciado no robots.txt"
    else
        echo "   ⚠️  Sitemap não encontrado no robots.txt"
    fi
else
    echo "   ❌ Robots.txt não acessível"
fi
echo ""

echo "3️⃣  Testando Página Principal..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL/")
if [ "$HTTP_CODE" = "200" ]; then
    echo "   ✅ Página principal acessível (HTTP $HTTP_CODE)"
else
    echo "   ❌ Erro HTTP $HTTP_CODE"
fi
echo ""

echo "4️⃣  Verificando Meta Tags..."
echo "   Título:"
curl -s "$SITE_URL/" | grep -i "<title>" | head -1
echo ""
echo "   Meta Description:"
curl -s "$SITE_URL/" | grep -i 'name="description"' | head -1
echo ""
echo "   Open Graph:"
curl -s "$SITE_URL/" | grep -i 'property="og:title"' | head -1
echo ""

echo "5️⃣  Verificando Dados Estruturados..."
SCHEMA_COUNT=$(curl -s "$SITE_URL/" | grep -o 'application/ld\+json' | wc -l)
if [ "$SCHEMA_COUNT" -gt 0 ]; then
    echo "   ✅ $SCHEMA_COUNT schema(s) encontrado(s)"
else
    echo "   ⚠️  Nenhum schema encontrado"
fi
echo ""

echo "6️⃣  Verificando Indexação no Google..."
echo "   Busque no Google: site:asbjj.com.br"
echo "   Ou acesse: https://www.google.com/search?q=site:asbjj.com.br"
echo ""

echo "✅ Testes básicos concluídos!"
echo ""
echo "📋 TESTES RECOMENDADOS (Acesse no navegador):"
echo ""
echo "   🔍 Rich Results Test:"
echo "   https://search.google.com/test/rich-results?url=$SITE_URL"
echo ""
echo "   📱 Mobile-Friendly Test:"
echo "   https://search.google.com/test/mobile-friendly?url=$SITE_URL"
echo ""
echo "   ⚡ PageSpeed Insights:"
echo "   https://pagespeed.web.dev/analysis?url=$SITE_URL"
echo ""
echo "   🏷️  Meta Tags Analyzer:"
echo "   https://metatags.io/?url=$SITE_URL"
echo ""
echo "   📊 Google Search Console:"
echo "   https://search.google.com/search-console"
echo ""

