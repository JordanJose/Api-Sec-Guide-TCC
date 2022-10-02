---
sidebar_position: 3
---

# Correção

No geral, não há muito segredo para corrigir esse tipo de vulnerabilidade:

- É preciso garantir que os usuários somente tenham acesso a funcionalidades à eles competidas. Por exemplo, apenas usuários de administrador possam acessar funções de administrador.

- As regras de negócio devem ser seguidas e implementadas, definindo os perfis que acessarão endpoints e funções da API.

- Outra prática adicional é fazer com que a aplicação recuse qualquer tipo de acesso vindo de usuários que não estejam logados.

## Identificando trecho de código vulnerável
Para que uma correção possa ser realizada, é necessário encontrar o(s) trecho(s) de código da aplicação que utilizam esse método de autenticação falho.

Ao analisar a rota `/users/v1/{username}/password` na documentação da VAmPI (disponível de acordo com o formato [OpenAPI 3.0](https://swagger.io/specification/)), é possível encontrar a função responsável pela alteração da senha lendo o `operationId`.

```yml title="openapi3.yml - /users/v1/{username}/password"
...
operationId: api_views.users.update_password
...
```
Agora, basta seguir o caminho entre os arquivos da VAmPI para encontrar a função vulnerável na aplicação.

```python title="api_views/users.update_password"
def update_password(username):
    request_data = request.get_json()
    resp = token_validator(request.headers.get('Authorization'))
    if "expired" in resp:
        return Response(error_message_helper(resp), 401, mimetype="application/json")
    elif "Invalid token" in resp:
        return Response(error_message_helper(resp), 401, mimetype="application/json")
    else:
        if request_data.get('password'):
            user = User.query.filter_by(username=username).first()
            if user:
                user.password = request_data.get('password')
                db.session.commit()
            else:
                return Response(error_message_helper("User Not Found"), 400, mimetype="application/json")
            responseObject = {
                'status': 'success',
                'Password': 'Updated.'
            }
            return Response(json.dumps(responseObject), 204, mimetype="application/json")
        else:
            return Response(error_message_helper("Malformed Data"), 400, mimetype="application/json")
```

A suposição feita no tópico anterior estava correta, a função utiliza o token JWT apenas como formar de garantir que um usuário logado está fazendo a requisição. Mas, usa o nome de usuário diretamente no método `query.filter_by()` da classe `User`, abrindo uma brecha de segurança.

```python title="Trecho de código vulnerável"
user = User.query.filter_by(username=username).first()
```
Então, a solução seria: Utilizar o token JWT como forma de autenticação do usuário e excluindo o envio do nome de usuário diretamente para o banco de dados.

Ao analisar o código da função, também é possível perceber que uma outra função é chamada, a `token_validator()`, sendo usada para validar o token JWT.

```python
resp = token_validator(request.headers.get('Authorization'))
```

Essa função pode ser a solução do problema, tendo em vista que ela retorna o nome do usuário após realizar a validação do token.

```python
def token_validator(auth_header):
    if auth_header:
        try:
            auth_token = auth_header.split(" ")[1]
        except:
            auth_token = ""
    else:
        auth_token = ""
    if auth_token:
        # Caso o token de autenticação seja válido, a função retorna o nome de usuário
        return User.decode_auth_token(auth_token)
    else:
        return "Invalid token"
```

Então, a correção é relativamente simples, basta utilizar uma função que já está disponível no código e que é subutilizada.

```python
def update_password(username):
    request_data = request.get_json()
    resp = token_validator(request.headers.get('Authorization'))
    if "expired" in resp:
        return Response(error_message_helper(resp), 401, mimetype="application/json")
    elif "Invalid token" in resp:
        return Response(error_message_helper(resp), 401, mimetype="application/json")
    else:
        if request_data.get('password'):
            user = User.query.filter_by(username=resp).first() #correção de vulnerabilidade
            user.password = request_data.get('password')
            db.session.commit()
        responseObject = {
            'status': 'success',
            'Password': 'Updated.'
        }
        return Response(json.dumps(responseObject), 204, mimetype="application/json")
        else:
            return Response(error_message_helper("Malformed Data"), 400, mimetype="application/json")
```
A correção foi realizada e a prova de identidade por meio exclusivo do nome de usuário já não é mais utilizada, agora o JWT é o responsável pela autenticidade do usuário na hora da alteração da senha.

```python
user = User.query.filter_by(username=resp).first()
```

#### Mais referências disponíveis na [OWASP](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa8-injection.md).