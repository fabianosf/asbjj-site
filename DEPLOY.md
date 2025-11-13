# Guia de Deploy - ASBJJ para VPS Hostinger

## Pré-requisitos
- Acesso SSH ao servidor (92.113.33.16)
- Domínio configurado e apontando para o IP do servidor
- Nginx instalado e configurado

## Passo 1: Preparar o Build Localmente (JÁ FEITO ✅)
```bash
npm run build
```
A pasta `dist` já está pronta com os arquivos otimizados.

## Passo 2: Conectar ao Servidor VPS
```bash
ssh root@92.113.33.16
# ou
ssh usuario@92.113.33.16
```

## Passo 3: Criar Diretório para o Site
```bash
# No servidor VPS
mkdir -p /var/www/asbjj.com.br
cd /var/www/asbjj.com.br
```

## Passo 4: Enviar Arquivos para o Servidor

### Opção A: Via Git (Recomendado)
```bash
# No servidor VPS
cd /var/www/
git clone https://github.com/fabianosf/asbjj-site.git asbjj.com.br
cd asbjj.com.br
npm install --production=false
npm run build
```

### Opção B: Via SCP (Enviar apenas dist)
```bash
# No seu computador local
scp -r dist/* root@92.113.33.16:/var/www/asbjj.com.br/
```

## Passo 5: Configurar Nginx

### 5.1 Criar arquivo de configuração
```bash
# No servidor VPS
sudo nano /etc/nginx/sites-available/asbjj.com.br
```

### 5.2 Cole a configuração:
```nginx
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
```

### 5.3 Ativar o site
```bash
# Criar link simbólico
sudo ln -s /etc/nginx/sites-available/asbjj.com.br /etc/nginx/sites-enabled/

# Testar configuração do Nginx
sudo nginx -t

# Se tudo estiver OK, recarregar Nginx
sudo systemctl reload nginx
```

## Passo 6: Configurar Permissões
```bash
# No servidor VPS
sudo chown -R www-data:www-data /var/www/asbjj.com.br
sudo chmod -R 755 /var/www/asbjj.com.br
```

## Passo 7: Configurar SSL/HTTPS (Opcional mas Recomendado)
```bash
# Instalar Certbot (se ainda não tiver)
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Obter certificado SSL
sudo certbot --nginx -d asbjj.com.br -d www.asbjj.com.br

# O Certbot vai atualizar automaticamente a configuração do Nginx
```

## Passo 8: Verificar se está funcionando
Acesse seu domínio no navegador e verifique se o site está carregando corretamente.

## Comandos Úteis para Manutenção

### Atualizar o site (quando fizer mudanças):
```bash
# No servidor VPS
cd /var/www/asbjj.com.br
git pull origin master
npm install
npm run build
sudo systemctl reload nginx
```

### Ver logs do Nginx:
```bash
sudo tail -f /var/log/nginx/asbjj-access.log
sudo tail -f /var/log/nginx/asbjj-error.log
```

### Verificar status do Nginx:
```bash
sudo systemctl status nginx
```

## Troubleshooting

### Se o site não carregar:
1. Verifique se o Nginx está rodando: `sudo systemctl status nginx`
2. Verifique os logs de erro: `sudo tail -f /var/log/nginx/error.log`
3. Verifique as permissões dos arquivos
4. Verifique se o domínio está apontando para o IP correto

### Se der erro 404:
- Verifique se o caminho no Nginx está correto: `/var/www/asbjj.com.br/dist`
- Verifique se os arquivos estão no lugar certo

### Se der erro 403 (Forbidden):
- Verifique as permissões: `sudo chown -R www-data:www-data /var/www/asbjj.com.br`
- Verifique se o index.html existe

