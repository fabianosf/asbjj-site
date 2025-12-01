#!/bin/bash

# Script de teste de conexão

VPS_IP="92.113.33.16"
PROJECT_USER="fabianosf"
PROJECT_PASS="123"
VPS_USER="root"
VPS_PASS="123"

echo "🔍 Testando conexão com o servidor..."
echo ""

# Testar com fabianosf
echo "Testando com usuário: $PROJECT_USER"
if sshpass -p "$PROJECT_PASS" ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o ConnectTimeout=10 \
    "$PROJECT_USER@$VPS_IP" "echo '✅ Conexão OK com $PROJECT_USER'" 2>&1; then
    echo "✅ Sucesso com $PROJECT_USER!"
    exit 0
else
    echo "❌ Falha com $PROJECT_USER"
    echo ""
    echo "Testando com usuário: $VPS_USER"
    if sshpass -p "$VPS_PASS" ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o ConnectTimeout=10 \
        "$VPS_USER@$VPS_IP" "echo '✅ Conexão OK com $VPS_USER'" 2>&1; then
        echo "✅ Sucesso com $VPS_USER!"
        exit 0
    else
        echo "❌ Falha com ambos os usuários"
        exit 1
    fi
fi

