---
sidebar_position: 1
---

# Descrição

A quebra do nível de autorização de funções está em quinto lugar nas vulnerabilidades mais comuns em interfaces de programação de aplicações segundo levantamento feito pela OWASP.

Essa vulnerabilidade consiste basicamente em utilizar funções que deveriam possuir níveis de autenticação seguros antes de serem acessadas mas, por problemas de desenvolvimento, há pouca ou nenhuma verificação de identidade.

Em nossa aplicação vulnerável nós trataremos o cenário real de um usuário tendo a necessidade de realizar a alteração da sua senha.

## Funcão de alteração da senha
A alteração de senha é um processo muito delicado em qualquer tipo de aplicação, há pouquíssimos cenários em que essa função pode ser acessada, dentre eles há:
- _Alteração da senha por um perfil de administrador._
- _Alteração da senha pelo próprio usuário, utilizando o botão "esqueci minha senha", por exemplo._

Esse cenário pode mudar dependendo da aplicação e das suas regras de negócio que, futuramente, se tornarão requisitos de segurança.

No caso da VAmPI, apenas o próprio usuário pode solicitar a alteração da sua senha.

## Questionamentos chave

Com o cenário apresentado acima é possível fazer alguns questionamentos antes de realizar a descoberta e exploração da vulnerabilidade.
- Um usuário comum pode ter acesso a endpoints de administração da API?
- Um usuário pode realizar ações sensíveis na aplicação sem possuir acesso?
- Funções disponíveis para um grupo de usuários podem ser utilizadas por outro grupo (sendo necessário descobrir apenas o endpoint da API)?


#### Mais referências disponíveis na [OWASP](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa5-broken-function-level-authorization.md).