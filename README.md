# 🚀 Simple Node API

Este projeto é uma API RESTful simples construída com Node.js puro, sem a utilização de frameworks robustos como Express.js. O objetivo é demonstrar a criação de uma API leve e eficiente, ideal para quem busca entender os fundamentos do desenvolvimento backend com Node.js.

## ✨ Funcionalidades

Esta API oferece as seguintes funcionalidades básicas para gerenciamento de usuários:

- **GET /users**: Retorna uma lista de todos os usuários.

- **GET /users/:id**: Retorna os detalhes de um usuário específico pelo ID.

- **POST /users**: Cria um novo usuário.

- **PUT /users/:id**: Atualiza os dados de um usuário existente pelo ID.

- **DELETE /users/:id**: Exclui um usuário pelo ID.

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido com foco na simplicidade e no uso de tecnologias essenciais:

- **Node.js**: Plataforma de runtime JavaScript para construir aplicações de rede escaláveis.

- **Módulos Nativos do Node.js**: Utilização do módulo `http` para criar o servidor e lidar com requisições e respostas HTTP.

- **JavaScript (ES6+)**: Linguagem de programação principal, com recursos modernos para um código mais limpo e eficiente.

## ⚙️ Como Rodar o Projeto

Siga os passos abaixo para configurar e executar a API em sua máquina local:

### Pré-requisitos

Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

### Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/dev-cristhian/simple-node-api
```

1. **Navegue até o diretório do projeto:**

### Execução

Para iniciar o servidor da API, execute o seguinte comando:

```bash
node src/main.js
```

Após a execução, a API estará disponível em `http://localhost:3000`. 🌐

## 💡 Técnicas e Padrões de Design

Este projeto demonstra algumas técnicas e padrões de design importantes para o desenvolvimento de APIs:

- **API RESTful**: Implementação de endpoints seguindo os princípios REST para comunicação cliente-servidor.

- **Roteamento Manual**: Gerenciamento de rotas HTTP de forma manual, sem o uso de bibliotecas de roteamento, para um controle mais granular e entendimento do fluxo.

- **Controladores**: Separação da lógica de negócio em controladores (`user.controller.js`) para manter o código organizado e modular.

- **Mocks de Dados**: Utilização de dados mockados (`users.mock.js`) para simular um banco de dados e permitir o desenvolvimento e teste da API de forma independente.

- **Tratamento de Requisições e Respostas**: Implementação de um `HttpRequestBuilder` e `HttpValidators` para padronizar a construção de requisições e a validação de dados, garantindo consistência e robustez.

## 🚀 Próximas Funcionalidades (Roadmap)

Para tornar esta API ainda mais robusta e completa, as seguintes funcionalidades são consideradas para futuras implementações:

- **Persistência de Dados**: Integrar um banco de dados (ex: MongoDB, PostgreSQL) para armazenar os dados de forma persistente, substituindo os mocks atuais. 💾

- **Autenticação e Autorização**: Implementar um sistema de autenticação (ex: JWT) e autorização para proteger os endpoints da API. 🔒

- **Validação de Entrada**: Melhorar a validação dos dados de entrada com bibliotecas mais robustas (ex: Joi, Yup) para garantir a integridade dos dados. ✅

- **Testes Automatizados**: Adicionar testes unitários e de integração para garantir a qualidade e a estabilidade do código. 🧪

- **Documentação da API**: Gerar documentação interativa da API (ex: Swagger/OpenAPI) para facilitar o consumo por outros desenvolvedores. 📖

- **Tratamento de Erros Global**: Implementar um middleware de tratamento de erros global para capturar e responder a exceções de forma padronizada. 🚨

## 👨‍💻 Sobre o Criador

Feito com ❤️ por [Cristhian](https://github.com/dev-cristhian).

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dev-cristhian)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/cristhian-felipe-santos/)
