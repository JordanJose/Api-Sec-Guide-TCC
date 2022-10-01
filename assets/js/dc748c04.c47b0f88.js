"use strict";(self.webpackChunkapi_security_basic_guide=self.webpackChunkapi_security_basic_guide||[]).push([[998],{3905:(e,a,r)=>{r.d(a,{Zo:()=>d,kt:()=>m});var n=r(7294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=n.createContext({}),l=function(e){var a=n.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},d=function(e){var a=l(e.components);return n.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=t,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,i(i({ref:a},d),{},{components:r})):n.createElement(f,i({ref:a},d))}));function m(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},767:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),t=(r(7294),r(3905));const o={sidebar_position:1},i="Descri\xe7\xe3o",s={unversionedId:"Vulnerabilidades/SQL Injection/descricao",id:"Vulnerabilidades/SQL Injection/descricao",title:"Descri\xe7\xe3o",description:"Vulnerabilidades que envolvam inje\xe7\xe3o maliciosa de dados em APIs est\xe3o em oitavo lugar nas vulnerabilidades mais comuns em interfaces de programa\xe7\xe3o de aplica\xe7\xf5es segundo levantamento feito pela OWASP.",source:"@site/docs/Vulnerabilidades/SQL Injection/descricao.md",sourceDirName:"Vulnerabilidades/SQL Injection",slug:"/Vulnerabilidades/SQL Injection/descricao",permalink:"/Api-Sec-Guide-TCC/docs/Vulnerabilidades/SQL Injection/descricao",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"SQL Injection",permalink:"/Api-Sec-Guide-TCC/docs/category/sql-injection"},next:{title:"Explora\xe7\xe3o",permalink:"/Api-Sec-Guide-TCC/docs/Vulnerabilidades/SQL Injection/exploracao"}},c={},l=[{value:"SQL Injection",id:"sql-injection",level:2},{value:"Mais refer\xeancias dispon\xedveis na OWASP.",id:"mais-refer\xeancias-dispon\xedveis-na-owasp",level:4}],d={toc:l};function u(e){let{components:a,...r}=e;return(0,t.kt)("wrapper",(0,n.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"descri\xe7\xe3o"},"Descri\xe7\xe3o"),(0,t.kt)("p",null,"Vulnerabilidades que envolvam inje\xe7\xe3o maliciosa de dados em APIs est\xe3o em oitavo lugar nas vulnerabilidades mais comuns em interfaces de programa\xe7\xe3o de aplica\xe7\xf5es segundo levantamento feito pela OWASP."),(0,t.kt)("p",null,"Em nossa aplica\xe7\xe3o vulner\xe1vel trataremos especificamente do SQL Injection, por\xe9m, as medidas de tratativa s\xe3o similares para os demais tipos."),(0,t.kt)("h2",{id:"sql-injection"},"SQL Injection"),(0,t.kt)("p",null,"Consiste em inserir uma query SQL de forma maliciosa por meio de inputs de dados nas aplica\xe7\xf5es. Em caso de sucesso da explora\xe7\xe3o, \xe9 poss\xedvel realizar a leitura e altera\xe7\xe3o de informa\xe7\xf5es, executar comandos de administrador do banco de dados e, at\xe9 mesmo, explorar diretamente o sistema operacional."),(0,t.kt)("p",null,"A seguir temos um exemplo de trecho de c\xf3digo em python vulner\xe1vel ao SQL Injection:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"cursor.execute(\"SELECT * FROM users WHERE user = '{}' AND password = '{}'\".format(user, password))\n")),(0,t.kt)("p",null,"O trecho de c\xf3digo em quest\xe3o n\xe3o possui nenhum tipo de tratamento ou sanitiza\xe7\xe3o dos inputs da query string, fazendo com que ela seja executada pelo SGBD de forma arbitr\xe1ria. Isso permite que um atacante manipule a query para alterar o seu contexto e burlar a autentica\xe7\xe3o do sistema."),(0,t.kt)("p",null,"Por exemplo, o atacante poderia injetar a seguinte string no campo de usu\xe1rio da aplica\xe7\xe3o:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"jordan'or'1'='1';--\n")),(0,t.kt)("p",null,"A query enviada ao SGBD para execu\xe7\xe3o seria:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM users WHERE username = 'jordan' or '1'='1';-- AND password = '';\n")),(0,t.kt)("p",null,"\xc9 poss\xedvel notar que a valida\xe7\xe3o da senha do usu\xe1rio se tornou um coment\xe1rio, al\xe9m disso a declara\xe7\xe3o '1'='1' sempre ser\xe1 verdadeira. Dessa forma, o atacante poder\xe1 fazer login na conta do usu\xe1rio jordan."),(0,t.kt)("h4",{id:"mais-refer\xeancias-dispon\xedveis-na-owasp"},"Mais refer\xeancias dispon\xedveis na ",(0,t.kt)("a",{parentName:"h4",href:"https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa8-injection.md"},"OWASP"),"."))}u.isMDXComponent=!0}}]);