# 🚀 Como Fazer Deploy Automático no VPS

## Scripts Disponíveis

### 1. `deploy-auto.sh` (Recomendado - usa sshpass)
Script principal que faz login automático e atualiza o site.

**Uso:**
```bash
./deploy-auto.sh
```

**O que ele faz:**
- Conecta automaticamente ao servidor VPS (92.113.33.16) - tenta primeiro com usuário `fabianosf`, depois com `root`
- Baixa as atualizações do GitHub
- Instala dependências
- Faz o build do projeto
- Ajusta permissões
- Recarrega o Nginx

**Requisitos:**
- `sshpass` instalado (o script tenta instalar automaticamente)

---

### 2. `deploy-auto-expect.sh` (Alternativa - usa expect)
Versão alternativa caso o sshpass não funcione.

**Uso:**
```bash
./deploy-auto-expect.sh
```

**Requisitos:**
- `expect` instalado: `sudo apt-get install expect`

---

### 3. `deploy-vps.sh` (Manual)
Script que conecta ao servidor mas pede senha manualmente.

**Uso:**
```bash
./deploy-vps.sh
```

---

## Credenciais Configuradas

- **Servidor:** 92.113.33.16
- **Usuário principal:** fabianosf / senha: 123
- **Usuário alternativo:** root / senha: 123

> **Nota:** O script tenta primeiro com o usuário `fabianosf` e, se falhar, tenta com `root`.

---

## Fluxo de Trabalho

1. **Fazer alterações no código localmente**
2. **Commitar e enviar para o GitHub:**
   ```bash
   git add .
   git commit -m "Descrição das alterações"
   git push origin master
   ```
3. **Executar o script de deploy:**
   ```bash
   ./deploy-auto.sh
   ```

Pronto! O site será atualizado automaticamente no VPS.

---

## Troubleshooting

### Erro: "sshpass: command not found"
```bash
sudo apt-get install sshpass
```

### Erro: "Permission denied"
- Verifique se as credenciais estão corretas no script
- Verifique se o usuário tem permissão para acessar o servidor

### Erro: "Host key verification failed"
O script já configura para ignorar verificação de host, mas se persistir:
```bash
ssh-keygen -R 92.113.33.16
```

### Erro no build
- Verifique os logs no servidor
- Conecte manualmente e execute: `cd /var/www/asbjj.com.br && npm run build`

---

## Comandos Úteis

**Ver logs do Nginx:**
```bash
ssh fabianosf@92.113.33.16 "tail -f /var/log/nginx/asbjj-access.log"
# ou
ssh root@92.113.33.16 "tail -f /var/log/nginx/asbjj-access.log"
```

**Verificar status do Nginx:**
```bash
ssh fabianosf@92.113.33.16 "sudo systemctl status nginx"
# ou
ssh root@92.113.33.16 "sudo systemctl status nginx"
```

**Conectar manualmente ao servidor:**
```bash
ssh fabianosf@92.113.33.16
# ou
ssh root@92.113.33.16
```

