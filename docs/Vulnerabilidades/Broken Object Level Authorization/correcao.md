---
sidebar_position: 3
---

# Correção
---
Corrigir esse tipo de vulnerabilidade varia de acordo com as regras de negócio da aplicação, porém, há alguns pontos que devem ser levados em conta:

- Implementar um controle de acessos que respeite a hierarquia de usuários e regras de negócio

- Não utilizar identificações de objetos previsíveis, preferencialmente aleatórios

- Faça uma validação do usuário em todas as funções que realizem algum tipo de acesso ao banco de dados da aplicação

## Identificando trecho de código vulnerável
Para que uma correção possa ser realizada, é necessário encontrar o(s) trecho(s) de código da aplicação que acessam esse objeto, realizando uma autenticação fraca.

Ao analisar a rota `/books/v1/{book_title}` na documentação da VAmPI (disponível de acordo com o formato [OpenAPI 3.0](https://swagger.io/specification/)), é possível encontrar a função responsável pela alteração da senha lendo o `operationId`.

```yml title="openapi3.yml - /users/v1/{username}/password"
...
operationId: api_views.books.get_by_title
...
```
Agora, basta seguir o caminho entre os arquivos da VAmPI para encontrar a função vulnerável na aplicação.

```python title="api_views/books.get_by_title"
def get_by_title(book_title):
    resp = token_validator(request.headers.get('Authorization'))
    if "expired" in resp:
        return Response(error_message_helper(resp), 401, mimetype="application/json")
    elif "Invalid token" in resp:
        return Response(error_message_helper(resp), 401, mimetype="application/json")
    else:
        book = Book.query.filter_by(book_title=str(book_title)).first()
        if book:
            responseObject = {
                'book_title': book.book_title,
                'secret': book.secret_content,
                'owner': book.user.username
            }
            return Response(json.dumps(responseObject), 200, mimetype="application/json")
        else:
            return Response(error_message_helper("Book not found!"), 404, mimetype="application/json")
```

Como esperado, há apenas uma pesquisa no banco de dados usando diretamente o título, sem envolver informações de autenticação do usuário.

Dessa forma é possível acessar as informações de todos os livros que estão na base de dados, sendo necessário conhecer apenas os respectivos títulos (ou adivinhá-los com força bruta).

```python title="Trecho de código vulnerável"
book = Book.query.filter_by(book_title=str(book_title)).first()
```
Então, a solução seria: Utilizar o token JWT como forma de autenticação do usuário, fornecendo acesso apenas aos livros pertencentes ao usuário.

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
def get_by_title(book_title):
    resp = token_validator(request.headers.get('Authorization'))
    if "expired" in resp:
        return Response(error_message_helper(resp), 401, mimetype="application/json")
    elif "Invalid token" in resp:
        return Response(error_message_helper(resp), 401, mimetype="application/json")
    else:
        #Usando JWT para acessar o username do usuário
        user = User.query.filter_by(username=resp).first()
        
        #Correção da vulnerabilidade
        book = Book.query.filter_by(user=user, book_title=str(book_title)).first()
        if book:
            responseObject = {
                'book_title': book.book_title,
                'secret': book.secret_content,
                'owner': book.user.username
            }
            return Response(json.dumps(responseObject), 200, mimetype="application/json")
        else:
            return Response(error_message_helper("Book not found!"), 404, mimetype="application/json")
```
Agora, a consulta ao banco de dados é feita levando em consideração os livros que o usuário autenticado possui, limitando o acesso apenas aos livros daquele usuário.

Ou seja, com a pequena alteração usando as duas linhas de código abaixo, a vulnerabilidade deixou de existir.

```python
user = User.query.filter_by(username=resp).first()
book = Book.query.filter_by(user=user, book_title=str(book_title)).first()
```

#### Mais referências disponíveis na [OWASP](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa8-injection.md).