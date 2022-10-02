---
sidebar_position: 3
---

# Correção
---
Vulnerabilidades envolvendo injeção maliciosa de strings SQL podem ser resolvidas seguindo alguns princípios básicos, onde o principal é manter os dados separados dos comandos e das queries SQL.

## Identificando trecho de código vulnerável
Para que uma correção possa ser realizada, é necessário encontrar o(s) trecho(s) de código da aplicação que possam estar utilizando queries SQL sem qualquer tipo de sanitização ou tratamento especial.

Ao analisar a rota `/users/v1/{username}` na documentação da VAmPI (disponível de acordo com o formato [OpenAPI 3.0](https://swagger.io/specification/)), é possível encontrar a função responsável pelos dados lendo o `operationId`.

```yml title="openapi3.yml - /users/v1/{username}"
...
operationId: api_views.users.get_by_username
...
```
Agora, basta seguir o caminho entre os arquivos da VAmPI para encontrar a função vulnerável na aplicação.
```python title="api_views/users.get_by_username"
def get_by_username(username):
    if User.get_user(username):
        return Response(str(User.get_user(username)), 200, mimetype="application/json")
    else:
        return Response(error_message_helper("User not found"), 404, mimetype="application/json")
```
A função usa o método `get_user()` da classe `User` para retornar as informações do usuário, classe essa que é importada do `models/user_model`.
```python
from models.user_model import User
```
Logo, a vulnerabilidade está na forma como o método `User.get_user` trata o username dos usuários, então é necessário fazer uma revisão de código a fim de encontrar o ponto de falha e realizar as correções.
```python
def get_user(username):
    user_query = f"SELECT * FROM users WHERE username = '{username}'"
    query = db.session.execute(user_query)
    ret = query.fetchone()
    if ret:
        fin_query = '{"username": "%s", "email": "%s"}' % (ret[1], ret[3])
    else:
        fin_query = None
    return fin_query
```
A vulnerabilidade está justamente na forma como o username é usado para compor a query SQL, não há nenhum tipo de tratamento ou sanitização da entrada no trecho `f"SELECT * FROM users WHERE username = '{username}'"`.

Dessa forma, há duas alternativas que podem ser interessantes para a correção dessa vulnerabilidade:
- Sanitização da string username, evitando que caracteres maliciosos sejam usados;
- Uso do método nativo do SQLAlchemy para consulta no banco de dados.

A solução mais rápida e confiável é o uso do método `query.filter_by()` do próprio SQLAlchemy, disponível na [documentação da biblioteca](https://flask-sqlalchemy.palletsprojects.com/en/2.x/quickstart/#quickstart).

Após a correção, o trecho de código abaixo será o `get_user()`:
```python
def get_user(username):
    fin_query = User.query.filter_by(username=username).first()
    return fin_query
```

Além da melhoria de segurança, usando a função disponível na própria biblioteca do SQLAlchemy o método se tornou muito menor e mais legível.

#### Mais referências disponíveis na [OWASP](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa8-injection.md).