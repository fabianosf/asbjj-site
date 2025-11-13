# 🔄 Como Atualizar o Site Após Fazer Mudanças

## Processo Completo de Atualização

### 1️⃣ **No Seu Computador Local** (onde você desenvolve)

#### Passo 1: Fazer as alterações no código
- Edite os arquivos que precisar
- Teste localmente com `npm run dev`

#### Passo 2: Fazer build do projeto
```bash
npm run build
```

#### Passo 3: Commitar e enviar para o GitHub
```bash
# Adicionar todas as mudanças
git add .

# Fazer commit com uma mensagem descritiva
git commit -m "Descrição das mudanças feitas"

# Enviar para o GitHub
git push origin master
```

---

### 2️⃣ **No Servidor VPS** (onde o site está hospedado)

#### Conectar ao servidor
```bash
ssh root@92.113.33.16
```

#### Atualizar o site
```bash
# Ir para o diretório do projeto
cd /var/www/asbjj.com.br

# Baixar as mudanças do GitHub
git pull origin master

# Instalar novas dependências (se houver)
npm install

# Fazer build do projeto
npm run build

# Recarregar o Nginx para aplicar as mudanças
systemctl reload nginx
```

---

## 📝 Resumo Rápido (Comandos em Sequência)

### No seu computador:
```bash
npm run build
git add .
git commit -m "Sua mensagem aqui"
git push origin master
```

### No servidor:
```bash
cd /var/www/asbjj.com.br
git pull origin master
npm install
npm run build
systemctl reload nginx
```

---

## 🚀 Script Automatizado para o Servidor

Você pode criar um script no servidor para facilitar:

```bash
# Criar script de atualização
nano /root/atualizar-asbjj.sh
```

Cole este conteúdo:
```bash
#!/bin/bash
cd /var/www/asbjj.com.br
echo "📥 Baixando atualizações do GitHub..."
git pull origin master
echo "📦 Instalando dependências..."
npm install
echo "🔨 Fazendo build..."
npm run build
echo "🔄 Recarregando Nginx..."
systemctl reload nginx
echo "✅ Site atualizado com sucesso!"
```

Tornar executável:
```bash
chmod +x /root/atualizar-asbjj.sh
```

Depois, sempre que precisar atualizar, basta executar:
```bash
/root/atualizar-asbjj.sh
```

---

## ⚠️ Dicas Importantes

1. **Sempre teste localmente primeiro** com `npm run build` antes de enviar para produção
2. **Faça commits descritivos** para saber o que foi alterado
3. **Verifique se o site está funcionando** após atualizar: `http://asbjj.com.br`
4. **Se algo der errado**, você pode voltar a versão anterior:
   ```bash
   cd /var/www/asbjj.com.br
   git log  # Ver histórico de commits
   git checkout <hash-do-commit-anterior>  # Voltar para versão anterior
   npm run build
   systemctl reload nginx
   ```

---

## 🔍 Verificar se Está Funcionando

Após atualizar, verifique:
```bash
# Ver logs do Nginx
tail -f /var/log/nginx/asbjj-access.log

# Ver status do Nginx
systemctl status nginx

# Testar configuração do Nginx
nginx -t
```

---

## 📋 Checklist de Atualização

- [ ] Fazer alterações no código localmente
- [ ] Testar com `npm run dev`
- [ ] Fazer build: `npm run build`
- [ ] Commitar mudanças: `git add . && git commit -m "..." && git push`
- [ ] Conectar ao servidor: `ssh root@92.113.33.16`
- [ ] Atualizar no servidor: `cd /var/www/asbjj.com.br && git pull && npm install && npm run build && systemctl reload nginx`
- [ ] Verificar se está funcionando no navegador

