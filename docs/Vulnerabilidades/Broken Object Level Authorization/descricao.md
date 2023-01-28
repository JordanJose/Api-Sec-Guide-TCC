---
sidebar_position: 1
---

# Descrição
---
A quebra do nível de autorização de objetovs está em **primeiro** lugar nas vulnerabilidades mais comuns em interfaces de programação de aplicações segundo levantamento feito pela OWASP.

Ela acontece quando um usuário pode acessar informações e objetos que não são explicitamente atribuídas a ele, alguns exemplos são:
- Carrinhos de compras de outros usuários
- Histórico de vendas de um produto
- Boletos e faturas de terceiros

Autorização no nível de objeto é uma implementação feita, geralmente, diretamente no código, usada para validar se um usuário possui a capacidade de acessar um determinado objeto.

Metodologias de autorização e controle de acessos, em qualquer tipo de aplicação, são complexas e altamente difundidas, sendo implementadas em várias camadas de um serviço.

Porém, mesmo que haja uma infraestrutura preparada para a verificação de um usuário, um desenvolvedor pode acabar falhando nessa implementação ou, em boa parte dos casos, não chega a implementar uma forma de verificação antes de acessar objetos em um endpoint de uma API.

A exploração dessa vulnerabilidade é relativamente simples, uma simples alteração no ID de um objeto durante uma requisição em um endpoint já é o suficiente e, dependendo da reposta do serviço, já é possível determinar que essa vulnerabilidade está presente na API.

## Questionamentos chave

Com o cenário apresentado acima é possível fazer alguns questionamentos antes de realizar a descoberta e exploração da vulnerabilidade.
- É possível realizar o acesso à algum objeto apenas utilizando o seu ID?
- Um usuário pode acessar informações de outro usuário?


#### Mais referências disponíveis na [OWASP](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa1-broken-object-level-authorization.md).