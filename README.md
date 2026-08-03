# Boilerplate API

Boilerplate inicial para criar APIs REST com **Node.js**, **Express** e **TypeScript**.

## Stack

- Node.js
- pnpm
- TypeScript
- Express
- CORS

## Pre-requisitos

- Node.js 22 ou superior
- pnpm

## Instalacao

```bash
pnpm install
```

## Como executar

```bash
pnpm dev
```

Por padrao, a API sobe em `http://localhost:5000`.

## Endpoint disponivel

### Verificacao de saude

```http
GET /healthy
```

Exemplo:

```bash
curl http://localhost:5000/healthy
```

Resposta esperada:

```json
{
  "message": "Server is healthy"
}
```

## Estrutura inicial

```text
.
|-- src/
|   `-- index.ts
|-- package.json
|-- tsconfig.json
`-- pnpm-lock.yaml
```

## Scripts disponiveis

```bash
pnpm dev
```

Inicia o servidor em modo desenvolvimento com recarga automatica usando `ts-node-dev`.

## O que este boilerplate ja entrega

- Servidor Express configurado
- Parsing de JSON com `express.json()`
- CORS habilitado
- Endpoint `GET /healthy` para teste rapido
- Estrutura inicial em TypeScript

## Proximos passos

- Separar rotas e controllers
- Adicionar variaveis de ambiente
- Definir tratamento centralizado de erros
- Criar scripts de build e testes
