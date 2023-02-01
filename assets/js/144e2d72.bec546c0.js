"use strict";(self.webpackChunkapi_security_basic_guide=self.webpackChunkapi_security_basic_guide||[]).push([[994],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>p});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),u=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=u(e.components);return r.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(t),p=n,f=m["".concat(l,".").concat(p)]||m[p]||c[p]||o;return t?r.createElement(f,s(s({ref:a},d),{},{components:t})):r.createElement(f,s({ref:a},d))}));function p(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7781:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(7462),n=(t(7294),t(3905));const o={sidebar_position:1},s="Descri\xe7\xe3o",i={unversionedId:"Vulnerabilidades/User_and_Password_Enumeration/descricao",id:"Vulnerabilidades/User_and_Password_Enumeration/descricao",title:"Descri\xe7\xe3o",description:"---",source:"@site/docs/Vulnerabilidades/6_User_and_Password_Enumeration/descricao.md",sourceDirName:"Vulnerabilidades/6_User_and_Password_Enumeration",slug:"/Vulnerabilidades/User_and_Password_Enumeration/descricao",permalink:"/Api-Sec-Guide-TCC/docs/Vulnerabilidades/User_and_Password_Enumeration/descricao",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"User and Password Enumeration",permalink:"/Api-Sec-Guide-TCC/docs/category/user-and-password-enumeration"},next:{title:"Explora\xe7\xe3o",permalink:"/Api-Sec-Guide-TCC/docs/Vulnerabilidades/User_and_Password_Enumeration/exploracao"}},l={},u=[{value:"Brute force",id:"brute-force",level:2},{value:"Enumera\xe7\xe3o",id:"enumera\xe7\xe3o",level:2},{value:"Questionamentos chave",id:"questionamentos-chave",level:2},{value:"Mais refer\xeancias dispon\xedveis na OWASP.",id:"mais-refer\xeancias-dispon\xedveis-na-owasp",level:4}],d={toc:u};function c(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"descri\xe7\xe3o"},"Descri\xe7\xe3o"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"A quebra de autentica\xe7\xe3o do usu\xe1rio est\xe1 em segundo lugar nas vulnerabilidades mais comuns em interfaces de programa\xe7\xe3o de aplica\xe7\xf5es, segundo levantamento feito pela OWASP."),(0,n.kt)("p",null,"Essa vulnerabilidade consiste em conseguir acesso \xe0 conta de um usu\xe1rio ou v\xe1rios usu\xe1rios, de v\xe1rias maneiras que poderiam ser bloqueadas pela pr\xf3pria aplica\xe7\xe3o, dentre elas h\xe1:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enumera\xe7\xe3o de usu\xe1rios e/ou senhas, por exemplo, usando uma lista de usu\xe1rios e senhas comuns"),(0,n.kt)("li",{parentName:"ul"},"Uso de For\xe7a Bruta, ou seja, testar v\xe1rios usu\xe1rios e senhas em uma aplica\xe7\xe3o sem nenhum tipo de limita\xe7\xe3o"),(0,n.kt)("li",{parentName:"ul"},"Uso de senhas fracas pelos usu\xe1rios"),(0,n.kt)("li",{parentName:"ul"},"Armazenamento inseguro de senhas"),(0,n.kt)("li",{parentName:"ul"},"Tr\xe1fego inseguro de credenciais e tokens de autentica\xe7\xe3o")),(0,n.kt)("h2",{id:"brute-force"},"Brute force"),(0,n.kt)("p",null,"Um ataque de for\xe7a bruta, ou brute force, consiste em testar de forma exaustiva v\xe1rias combina\xe7\xf5es de usu\xe1rios e/ou senhas a fim de conseguir acesso \xe0 alguma conta."),(0,n.kt)("p",null,"Existem listas p\xfablicas na internet que fazem compilados de milh\xf5es de senhas e nomes de usu\xe1rio (como a ",(0,n.kt)("a",{parentName:"p",href:"https://www.kaggle.com/datasets/wjburns/common-password-list-rockyoutxt"},"RockYou"),"), facilitando que um ataque desse tipo seja realizado."),(0,n.kt)("p",null,"Por se tratar de um ataque relativamente simples, uma aplica\xe7\xe3o que n\xe3o possua algum tipo de limitador de tentativas de autentica\xe7\xe3o est\xe1 vulner\xe1vel a esse ataque."),(0,n.kt)("h2",{id:"enumera\xe7\xe3o"},"Enumera\xe7\xe3o"),(0,n.kt)("p",null,"A enumera\xe7\xe3o pode acontecer em conjunto com o Brute Force, dependendo de como a aplica\xe7\xe3o se comporta ao autenticar um usu\xe1rio."),(0,n.kt)("p",null,"Se trata de descobrir senhas ou nomes de usu\xe1rios que sejam v\xe1lidos em uma aplica\xe7\xe3o a partir de certos ind\xedcios, por exemplo, uma aplica\xe7\xe3o que tenha o seguinte comportamento:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Usu\xe1rio"),(0,n.kt)("th",{parentName:"tr",align:null},"Senha"),(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Mensagem"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Existente"),(0,n.kt)("td",{parentName:"tr",align:null},"Incorreta"),(0,n.kt)("td",{parentName:"tr",align:null},"Falha"),(0,n.kt)("td",{parentName:"tr",align:null},"Senha Incorreta")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Inexistente"),(0,n.kt)("td",{parentName:"tr",align:null},"Incorreta"),(0,n.kt)("td",{parentName:"tr",align:null},"Falha"),(0,n.kt)("td",{parentName:"tr",align:null},"Usu\xe1rio Inexistente")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Inexistente"),(0,n.kt)("td",{parentName:"tr",align:null},"Correta"),(0,n.kt)("td",{parentName:"tr",align:null},"Falha"),(0,n.kt)("td",{parentName:"tr",align:null},"Senha pertencente a outro usu\xe1rio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Existente"),(0,n.kt)("td",{parentName:"tr",align:null},"Correta"),(0,n.kt)("td",{parentName:"tr",align:null},"Sucesso"),(0,n.kt)("td",{parentName:"tr",align:null},"Confirma\xe7\xe3o de login")))),(0,n.kt)("p",null,"Dessa forma, ser\xe1 poss\xedvel enumerar os nomes de usu\xe1rio e senhas que tiveram alguma intera\xe7\xe3o diferente, demonstrando que elas est\xe3o presentes em algum lugar na base de usu\xe1rios, criando uma nova lista de usu\xe1rios e senhas espec\xedfica daquela aplica\xe7\xe3o."),(0,n.kt)("h2",{id:"questionamentos-chave"},"Questionamentos chave"),(0,n.kt)("p",null,"Com o cen\xe1rio apresentado acima \xe9 poss\xedvel fazer alguns questionamentos antes de realizar a descoberta e explora\xe7\xe3o da vulnerabilidade."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Quais s\xe3o todos os fluxos poss\xedveis de autentica\xe7\xe3o na aplica\xe7\xe3o?"),(0,n.kt)("li",{parentName:"ul"},"H\xe1 algum limitador de tentativas de login, como um captcha?"),(0,n.kt)("li",{parentName:"ul"},"As mensagens de erro e sucesso d\xe3o detalhes em excesso?"),(0,n.kt)("li",{parentName:"ul"},"A aplica\xe7\xe3o permite que usu\xe1rios criem senhas fracas?"),(0,n.kt)("li",{parentName:"ul"},"O armazenamento e gest\xe3o de senhas e tokens \xe9 seguro?")),(0,n.kt)("h4",{id:"mais-refer\xeancias-dispon\xedveis-na-owasp"},"Mais refer\xeancias dispon\xedveis na ",(0,n.kt)("a",{parentName:"h4",href:"https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa2-broken-user-authentication.md"},"OWASP"),"."))}c.isMDXComponent=!0}}]);