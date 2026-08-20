# Cadastro de Usuários

Aplicação full stack para cadastro e gerenciamento de usuários. O projeto possui uma API REST em Node.js com Express e Prisma, além de uma interface web em React com Vite.

## Funcionalidades

- Cadastrar usuários com nome, idade e e-mail.
- Listar usuários cadastrados.
- Excluir usuários.
- Consultar usuários pela API usando filtros de nome, e-mail ou idade.
- Atualizar usuários pela API.

> A interface atual disponibiliza cadastro, listagem e exclusão. Os recursos de filtro e atualização estão disponíveis nos endpoints do backend.

## Tecnologias

### Backend

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- CORS

### Frontend

- React 19
- Vite
- Axios
- CSS

## Estrutura do projeto

```text
.
├── backend-node-js/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   ├── package.json
│   ├── prisma.config.ts
│   └── server.js
└── frontend-react/
    └── cadastro-usuarios/
        ├── src/
        │   ├── pages/Home/
        │   └── services/api.js
        ├── package.json
        └── vite.config.js
```

## Pré-requisitos

- Node.js 18 ou superior.
- npm.
- PostgreSQL em execução.
- Um banco de dados PostgreSQL criado para a aplicação.

## Configuração do backend

Entre na pasta do backend e instale as dependências:

```bash
cd backend-node-js
npm install
```

Crie um arquivo `.env` dentro de `backend-node-js/` com a URL de conexão do PostgreSQL:

```env
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/NOME_DO_BANCO?schema=public"
```

Aplique as migrações e gere o cliente Prisma:

```bash
npx prisma migrate deploy
npx prisma generate
```

Inicie a API:

```bash
npm start
```

O backend estará disponível em `http://localhost:3000`.

## Configuração do frontend

Em outro terminal, entre na pasta do frontend e instale as dependências:

```bash
cd frontend-react/cadastro-usuarios
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador o endereço informado pelo Vite, normalmente `http://localhost:5173`.

O frontend está configurado para consumir a API em `http://localhost:3000`.

## API

### Criar usuário

```http
POST /usuarios
Content-Type: application/json
```

```json
{
  "name": "Maria Silva",
  "email": "maria@example.com",
  "age": 28
}
```

### Listar usuários

```http
GET /usuarios
```

Filtros opcionais:

```http
GET /usuarios?name=Maria
GET /usuarios?email=maria@example.com
GET /usuarios?age=28
```

### Atualizar usuário

```http
PUT /usuarios/:id
Content-Type: application/json
```

```json
{
  "name": "Maria Souza",
  "email": "maria.souza@example.com",
  "age": 29
}
```

### Excluir usuário

```http
DELETE /usuarios/:id
```

## Scripts disponíveis

### Backend

- `npm start`: inicia a API na porta 3000.

### Frontend

- `npm run dev`: inicia o servidor de desenvolvimento do Vite.
- `npm run build`: gera a versão de produção.
- `npm run preview`: executa uma prévia da build.
- `npm run lint`: verifica o código com ESLint.

## Banco de dados

O modelo `user` possui os seguintes campos:

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `id` | `String` | Identificador UUID gerado automaticamente |
| `name` | `String` | Nome do usuário |
| `email` | `String` | E-mail do usuário |
| `age` | `Int` | Idade do usuário |

## Licença

Este projeto está distribuído sob a licença ISC, conforme definido no `package.json` do backend.
