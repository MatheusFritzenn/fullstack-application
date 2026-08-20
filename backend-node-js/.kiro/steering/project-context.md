# Contexto do Projeto - Backend Node.js

## Visão Geral

Este é o backend de uma aplicação fullstack de CRUD de usuários, criada como primeiro projeto prático com a stack Node.js + React.

## Stack

- **Runtime:** Node.js
- **Framework:** Express 5
- **Linguagem:** JavaScript (ES Modules — `"type": "module"` no package.json)
- **Banco de dados:** PostgreSQL
- **ORM:** Prisma
- **Variáveis de ambiente:** dotenv

## Arquitetura

- Arquivo principal: `server.js`
- O projeto usa ES Modules (`import/export`), não CommonJS (`require`).
- O servidor roda na porta 3000.

## Banco de Dados

- Usar PostgreSQL como banco relacional.
- Usar Prisma como ORM para modelagem, migrações e queries.
- A connection string do banco deve ficar em um arquivo `.env` (variável `DATABASE_URL`).

## Convenções de Código

- Rotas em português (ex: `/usuarios`).
- Respostas em JSON.
- Status HTTP semânticos (201 para criação, 200 para leitura, etc.).
- Código limpo e direto, sem abstrações desnecessárias — o foco é aprendizado.

## Frontend (futuro)

- Será construído com React.
- Se conectará a este backend via HTTP (fetch/axios).
- Considerar configuração de CORS quando o frontend for integrado.

## Objetivo

Aplicação simples de CRUD de usuários para prática da stack completa. Manter tudo simples e funcional.
