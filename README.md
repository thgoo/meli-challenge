# Meli Challange

## Descrição

Desafio técnico desenvolvido para a empresa Mercado Livre. O projeto é composto por um servidor e um cliente. O servidor é implementado em Node.js e o cliente é um aplicativo Next.js. A decisão de usar o Next.js foi por causa do SSR. Com isso temos um melhor SEO, mais performance, e, no final do dia, é React.

## Ferramentas Utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [React Testing Library](https://testing-library.com/react)
- [Jest](https://jestjs.io/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)


## Como Instalar

### Pré-requisitos

- Node.js
- pnpm (ou yarn, npm, etc)

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/thgoo/meli-challenge
```

2. Instale as dependências do servidor

```bash
cd ./server
pnpm install
```

3. Instale as dependências do cliente

```bash
cd ./client
pnpm install
```

## Como Rodar a Aplicação

### Servidor

No diretório `server`, execute:

```bash
pnpm run serve
```
Ps: Antes de rodar o servidor, a porta pode ser alterada no arquivo `./server/.env`.

### Cliente

No diretório `client`, execute:

```bash
pnpm run build && pnpm run start
```
Ps: Antes de rodar o cliente, verifique se o `API_URL` dentro de `./client/.env` está configurado corretamente.
Ps2: Caso a porta 3000 esteja em uso pelo servidor, utilize `pnpm run start -p 3001` para rodar na porta 3001 (ou qualquer outra de sua preferência).

Pronto, se tudo ocorreu bem, basta acessar a URL depois que o cliente estiver rodando.

## Bônus
Caso queira rodar os testes do cliente, basta acessar a pasta `client` e rodar:
```
pnpm run test
```
