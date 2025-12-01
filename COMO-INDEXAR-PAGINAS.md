# 📋 Como Indexar Páginas no Google Search Console

## 🎯 Passo a Passo para Indexar Todas as Páginas

### 1. **Acessar Google Search Console**
1. Acesse: https://search.google.com/search-console
2. Selecione a propriedade: `asbjj.com.br`

---

### 2. **Verificar Páginas Não Indexadas**
1. No menu lateral, clique em **"Cobertura"** ou **"Cobertura do índice"**
2. Veja quais páginas estão com problemas:
   - ❌ Páginas excluídas
   - ⚠️ Páginas válidas com avisos
   - ✅ Páginas válidas

---

### 3. **Solicitar Indexação Manual (Página por Página)**

Para cada página que não está indexada:

1. No Google Search Console, vá em **"Inspeção de URL"** (barra de pesquisa no topo)
2. Cole a URL da página (ex: `https://asbjj.com.br/modalidades`)
3. Clique em **"Testar URL em tempo real"**
4. Aguarde alguns segundos
5. Se a página estiver OK, clique em **"Solicitar indexação"**
6. Repita para cada página

**Páginas que devem estar indexadas:**
- ✅ https://asbjj.com.br/
- ✅ https://asbjj.com.br/sobre
- ✅ https://asbjj.com.br/modalidades
- ✅ https://asbjj.com.br/horarios
- ✅ https://asbjj.com.br/galeria
- ✅ https://asbjj.com.br/contato
- ✅ https://asbjj.com.br/privacidade

---

### 4. **Reenviar Sitemap**

1. No menu lateral, clique em **"Sitemaps"**
2. Se já houver um sitemap, clique em **"Remover"** e depois **"Adicionar novo sitemap"**
3. Adicione: `sitemap.xml`
4. Clique em **"Enviar"**
5. Aguarde alguns minutos e verifique se foi processado

**URL do Sitemap:** `https://asbjj.com.br/sitemap.xml`

---

### 5. **Verificar Problemas de Indexação**

No Google Search Console, vá em **"Cobertura"** e verifique:

#### Problemas Comuns:

**❌ "Página excluída por 'noindex'"**
- **Solução:** Verifique se há tag `<meta name="robots" content="noindex">` na página
- Remova essa tag se existir

**❌ "Página excluída: duplicada sem canonical"**
- **Solução:** Verifique se todas as páginas têm canonical URL
- Já implementado no código ✅

**❌ "Erro 404"**
- **Solução:** Verifique se a URL está correta
- Teste a URL diretamente no navegador

**❌ "Página não encontrada (404)"**
- **Solução:** Verifique se o servidor está retornando 200 para todas as rotas
- O .htaccess já está configurado para SPA routing ✅

---

### 6. **Usar a Ferramenta de Inspeção em Lote**

1. No Google Search Console, vá em **"Inspeção de URL"**
2. Use a barra de pesquisa para testar múltiplas URLs
3. Para cada URL válida, clique em **"Solicitar indexação"**

---

### 7. **Verificar Indexação Atual**

**Busque no Google:**
```
site:asbjj.com.br
```

**Deve mostrar todas as páginas:**
- Página inicial
- /sobre
- /modalidades
- /horarios
- /galeria
- /contato
- /privacidade

---

## 🚀 Método Rápido (API - Avançado)

Se você tiver acesso à API do Google Search Console, posso criar um script para solicitar indexação automaticamente. Mas o método manual acima é mais seguro e recomendado.

---

## ✅ Checklist de Indexação

Execute estes passos:

- [ ] Acessar Google Search Console
- [ ] Verificar "Cobertura" para ver páginas não indexadas
- [ ] Testar cada URL em "Inspeção de URL"
- [ ] Solicitar indexação para cada página válida
- [ ] Reenviar sitemap.xml
- [ ] Aguardar 1-3 dias
- [ ] Verificar novamente com `site:asbjj.com.br`

---

## 📊 Monitoramento

Após solicitar indexação:

1. **Aguarde 1-3 dias** para o Google processar
2. Verifique novamente em **"Cobertura"**
3. Monitore em **"Performance"** para ver se as páginas começam a receber tráfego

---

## 🔧 Se Ainda Não Indexar

### Verificar:
1. ✅ Sitemap está acessível? `https://asbjj.com.br/sitemap.xml`
2. ✅ Robots.txt permite indexação? `https://asbjj.com.br/robots.txt`
3. ✅ Páginas retornam HTTP 200?
4. ✅ Não há tag `noindex` nas páginas?
5. ✅ Canonical URLs estão corretas?

### Testar Páginas:
```bash
# Teste cada página
curl -I https://asbjj.com.br/
curl -I https://asbjj.com.br/sobre
curl -I https://asbjj.com.br/modalidades
# etc...
```

Todas devem retornar `HTTP/1.1 200 OK`

---

**Última atualização:** 01/12/2025

