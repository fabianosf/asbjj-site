# 🖥️ Editar Diretamente no Servidor

## ⚠️ Aviso Importante

**Não é recomendado editar diretamente no servidor** porque:
- ❌ Perde o histórico de mudanças no Git
- ❌ Não tem backup das alterações
- ❌ Mais difícil de reverter erros
- ❌ Pode sobrescrever mudanças de outros lugares

**Mas se precisar fazer uma correção rápida**, é possível!

---

## 📝 Opção 1: Editar Diretamente no Servidor (Correção Rápida)

### Conectar ao servidor
```bash
ssh root@92.113.33.16
```

### Editar os arquivos
```bash
# Ir para o diretório do projeto
cd /var/www/asbjj.com.br

# Editar arquivos com nano (editor simples)
nano src/pages/About.tsx
# ou
nano src/pages/Contact.tsx
# etc...
```

### Após editar, fazer build e atualizar
```bash
# Fazer build
npm run build

# Recarregar Nginx
systemctl reload nginx
```

### ⚠️ IMPORTANTE: Fazer commit das mudanças
Depois de editar no servidor, você DEVE fazer commit para não perder as mudanças:

```bash
# Adicionar mudanças
git add .

# Fazer commit
git commit -m "Correção rápida feita no servidor"

# Enviar para o GitHub
git push origin master
```

---

## 📝 Opção 2: Editar Localmente e Fazer Deploy (Recomendado)

### No seu computador:
```bash
# 1. Editar arquivos
# 2. Testar localmente
npm run dev

# 3. Fazer build
npm run build

# 4. Commitar e enviar
git add .
git commit -m "Descrição das mudanças"
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

## 🔧 Editores Disponíveis no Servidor

### Nano (Mais fácil para iniciantes)
```bash
nano src/pages/About.tsx
# Salvar: Ctrl+X, depois Y, depois Enter
```

### Vim (Mais avançado)
```bash
vim src/pages/About.tsx
# Salvar: ESC, depois :wq, depois Enter
```

### VS Code via SSH (Melhor opção)
Se você tem VS Code instalado, pode usar a extensão "Remote - SSH":
1. Instalar extensão "Remote - SSH" no VS Code
2. Conectar ao servidor: `ssh root@92.113.33.16`
3. Editar arquivos como se estivesse localmente

---

## 🚀 Script Rápido: Editar + Build + Deploy

Crie este script no servidor para facilitar:

```bash
# Criar script
nano /root/editar-e-deploy.sh
```

Cole:
```bash
#!/bin/bash
cd /var/www/asbjj.com.br

echo "📝 Editando arquivo..."
nano $1

echo "🔨 Fazendo build..."
npm run build

echo "🔄 Recarregando Nginx..."
systemctl reload nginx

echo "✅ Pronto! Site atualizado."
echo "⚠️  Não esqueça de fazer commit:"
echo "   git add . && git commit -m 'Mudança' && git push"
```

Tornar executável:
```bash
chmod +x /root/editar-e-deploy.sh
```

Usar:
```bash
/root/editar-e-deploy.sh src/pages/About.tsx
```

---

## 📋 Comparação: Servidor vs Local

| Aspecto | Editar no Servidor | Editar Localmente |
|---------|-------------------|-------------------|
| **Velocidade** | ⚡ Mais rápido | 🐢 Mais lento |
| **Backup** | ❌ Sem backup | ✅ Git backup |
| **Histórico** | ❌ Perdido | ✅ Mantido |
| **Teste** | ❌ Sem teste local | ✅ Teste antes |
| **Reversão** | ❌ Difícil | ✅ Fácil (git) |
| **Recomendado** | ❌ Não | ✅ Sim |

---

## 💡 Dica: Melhor dos Dois Mundos

**Para correções rápidas**: Edite no servidor, mas SEMPRE faça commit depois:
```bash
# Depois de editar e fazer build
git add .
git commit -m "Correção rápida"
git push origin master
```

**Para mudanças maiores**: Sempre edite localmente, teste, e depois faça deploy.

---

## 🔄 Workflow Recomendado

```
┌─────────────────────────────────────┐
│  Correção Pequena/Urgente           │
│  → Editar no servidor               │
│  → npm run build                    │
│  → systemctl reload nginx           │
│  → git commit + push (IMPORTANTE!)  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  Mudança Grande/Nova Feature        │
│  → Editar localmente                │
│  → Testar com npm run dev           │
│  → git commit + push                │
│  → No servidor: git pull + build    │
└─────────────────────────────────────┘
```

