---
sidebar_position: 1
---

# Descrição
---
Injeções maliciosas de dados em APIs estão em oitavo lugar nas vulnerabilidades mais comuns em interfaces de programação de aplicações segundo levantamento feito pela OWASP.

Em nossa aplicação vulnerável trataremos especificamente do SQL Injection, porém, as medidas de tratativa são similares para os demais tipos.

## SQL Injection
Consiste em inserir uma query SQL de forma maliciosa por meio de inputs de dados nas aplicações. Em caso de sucesso da exploração, é possível realizar a leitura e alteração de informações, executar comandos de administrador do banco de dados e, até mesmo, explorar diretamente o sistema operacional.

A seguir temos um exemplo de trecho de código em python vulnerável ao SQL Injection:
```python
cursor.execute("SELECT * FROM users WHERE user = '{}' AND password = '{}'".format(user, password))
```
O trecho de código em questão não possui nenhum tipo de tratamento ou sanitização dos inputs da query string, fazendo com que ela seja executada pelo SGBD de forma arbitrária. Isso permite que um atacante manipule a query para alterar o seu contexto e burlar a autenticação do sistema.

Por exemplo, o atacante poderia injetar a seguinte string no campo de usuário da aplicação:
```sql
jordan'or'1'='1';--
```
A query enviada ao SGBD para execução seria:
```sql
SELECT * FROM users WHERE username = 'jordan' or '1'='1';-- AND password = '';
```
É possível notar que a validação da senha do usuário se tornou um comentário, além disso a declaração '1'='1' sempre será verdadeira. Dessa forma, o atacante poderá fazer login na conta do usuário jordan.



#### Mais referências disponíveis na [OWASP](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa8-injection.md).