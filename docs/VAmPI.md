---
sidebar_position: 2
---

# VAmPI Api
---

A VAmPI é um projeto Open Source disponível no [GitHub](https://github.com/erev0s/VAmPI) de uma API propositalmente vulnerável, feita com base no [OWASP TOP 10 APIs](https://owasp.org/www-project-api-security/).

Uma rápida explicação sobre a VAmPI e suas rotas:

| **Tipo de requisição** |            **Rota**           |                      **Detalhes**                    |
|:----------:|:-----------------------------:|:--------------------------------------------------:|
|     GET    |           /createdb           | Cria e popula o banco de dados com dados sem valor |
|     GET    |               /               |                     Home da VAmPI                     |
|     GET    |           /users/v1           |      Exibe todos os usuários com informações básicas     |
|     GET    |        /users/v1/_debug       |         Exibe todos os detalhes de todos os usuários         |
|    POST    |       /users/v1/register      |                  Registrar um novo usuário                 |
|    POST    |        /users/v1/login        |                   Login na VAmPI                   |
|     GET    |      /users/v1/{username}     |              Exibe um usuário pelo seu nome de usuário             |
|   DELETE   |      /users/v1/{username}     |       Deleta usuários pelo nome de usuário (Apenas Administradores) |
|     PUT    |   /users/v1/{username}/email  |             Altera o e-mail de um usuário                                 |
|     PUT    | /users/v1/{username}/password |                Altera a senha de um usuário          |
|     GET    |           /books/v1           |                 Trás todos os livros                 |
|    POST    |           /books/v1           |                    Adiciona um novo livro            |
|     GET    |        /books/v1/{book}       |      Trás os livro pelo titulo junto com seu segredo |
