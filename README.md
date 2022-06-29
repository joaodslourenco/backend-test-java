<h1 align="center">Estacionamento API - TypeScript + Node</h1>

<p align="center">
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias-utilizadas">Tecnologias</a> •
  <a href="#-como-executar-o-projeto"> 
Como executar o projeto </a>
</p>

# ⚙️ Funcionalidades

- Cadastro de estabelecimentos;
- Cadastro de veículos;
- Cada estabelecimento guarda uma lista de veículos estacionados.

# 🛠️ Tecnologias utilizadas

As seguintes tecnologias foram utilizadas:

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/pt-br)

# 🚀 Como executar o projeto
### Primeiro, clone o projeto:
```bash
$ git clone https://github.com/joaodslourenco/backend-test-java.git
```

### Entre na pasta do projeto e, na raiz, rode o comando:
```bash
yarn 
```
OU
```bash
npm install
```

Crie um arquivo .env na raiz do projeto, definindo a seguinte variável:

```bash
PORT=(chave informada através do e-mail de entrega do projeto)
MONGO_URL=(chave informada através do e-mail de entrega do projeto)
```

## Para rodar o projeto, basta executar os seguintes comandos

```bash
yarn dev
```
OU
```bash
npm run dev
```

## Uma vez que o servidor esteja rodando, já é possível testar os endpoints através do aplicativo Postman. Para isso, dentro do Postman, selecione a opção "Import" e selecione o arquivo "endpoints-postman.json", incluído na pasta raiz do projeto. Desta feita, todos os endpoints estarão disponíveis e com os bodies das requisições prontos.
