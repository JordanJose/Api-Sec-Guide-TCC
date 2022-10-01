---
sidebar_position: 1
---

# Bem vindo!

Conheça o guia de desenvolvimento seguro para interfaces de programação de aplicações desenvolvido como trabalho de conclusão de curso do aluno Jose Jordan Giordano Alcantara da Universidade do Estado do Amazonas.

## Visão Geral

Nesse guia você conhecerá as vulnerabilidades mais comuns em APIs segundo a **[OWASP](https://owasp.org/www-project-api-security/)** com o uso do projeto Open Source **[VAmPI](https://github.com/erev0s/VAmPI)** para exemplificação.

### Cada vulnerabilidade possuirá 3 tópicos principais

#### Descrição

Aqui serão abordados os conceitos por trás da vulnerabilidade.

#### Exploração

Serão utilizadas as ferramentas **[Postman](https://www.postman.com)** e **[Burp Suite Community Edition](https://portswigger.net/burp/communitydownload)** para realização dos testes de segurança.

Em todos os testes o PostMan estará operando usando o Burp Suite como proxy para realizar a conexão com a VAmPI. Assim será possível analisar as requisições no Burp Suite e manipulá-las a fim de descobrir possíveis brechas de segurança.

#### Correção

Formas de correção da vulnerabilidade serão mostradas para que você possa conhecer boas práticas de desenvolvimento.