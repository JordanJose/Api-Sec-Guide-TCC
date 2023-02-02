"use strict";(self.webpackChunkapi_security_basic_guide=self.webpackChunkapi_security_basic_guide||[]).push([[4338],{3905:(e,o,r)=>{r.d(o,{Zo:()=>p,kt:()=>m});var t=r(7294);function a(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function n(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(o){a(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function s(e,o){if(null==e)return{};var r,t,a=function(e,o){if(null==e)return{};var r,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||(a[r]=e[r]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),u=function(e){var o=t.useContext(l),r=o;return e&&(r="function"==typeof e?e(o):i(i({},o),e)),r},p=function(e){var o=u(e.components);return t.createElement(l.Provider,{value:o},e.children)},c={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},d=t.forwardRef((function(e,o){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,b=d["".concat(l,".").concat(m)]||d[m]||c[m]||n;return r?t.createElement(b,i(i({ref:o},p),{},{components:r})):t.createElement(b,i({ref:o},p))}));function m(e,o){var r=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<n;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9053:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var t=r(7462),a=(r(7294),r(3905));const n={sidebar_position:3},i="Corre\xe7\xe3o",s={unversionedId:"Vulnerabilidades/Broken_Object_Level_Authorization/correcao",id:"Vulnerabilidades/Broken_Object_Level_Authorization/correcao",title:"Corre\xe7\xe3o",description:"---",source:"@site/docs/Vulnerabilidades/3_Broken_Object_Level_Authorization/correcao.md",sourceDirName:"Vulnerabilidades/3_Broken_Object_Level_Authorization",slug:"/Vulnerabilidades/Broken_Object_Level_Authorization/correcao",permalink:"/Api-Sec-Guide-TCC/docs/Vulnerabilidades/Broken_Object_Level_Authorization/correcao",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Explora\xe7\xe3o",permalink:"/Api-Sec-Guide-TCC/docs/Vulnerabilidades/Broken_Object_Level_Authorization/exploracao"},next:{title:"Refer\xeancias",permalink:"/Api-Sec-Guide-TCC/docs/Vulnerabilidades/Broken_Object_Level_Authorization/referencias"}},l={},u=[{value:"Identificando trecho de c\xf3digo vulner\xe1vel",id:"identificando-trecho-de-c\xf3digo-vulner\xe1vel",level:2},{value:"Mais refer\xeancias dispon\xedveis na OWASP.",id:"mais-refer\xeancias-dispon\xedveis-na-owasp",level:4}],p={toc:u};function c(e){let{components:o,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"corre\xe7\xe3o"},"Corre\xe7\xe3o"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Corrigir esse tipo de vulnerabilidade varia de acordo com as regras de neg\xf3cio da aplica\xe7\xe3o, por\xe9m, h\xe1 alguns pontos que devem ser levados em conta:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Implementar um controle de acessos que respeite a hierarquia de usu\xe1rios e regras de neg\xf3cio")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"N\xe3o utilizar identifica\xe7\xf5es de objetos previs\xedveis, preferencialmente aleat\xf3rios")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fa\xe7a uma valida\xe7\xe3o do usu\xe1rio em todas as fun\xe7\xf5es que realizem algum tipo de acesso ao banco de dados da aplica\xe7\xe3o"))),(0,a.kt)("h2",{id:"identificando-trecho-de-c\xf3digo-vulner\xe1vel"},"Identificando trecho de c\xf3digo vulner\xe1vel"),(0,a.kt)("p",null,"Para que uma corre\xe7\xe3o possa ser realizada, \xe9 necess\xe1rio encontrar o(s) trecho(s) de c\xf3digo da aplica\xe7\xe3o que acessam esse objeto, realizando uma autentica\xe7\xe3o fraca."),(0,a.kt)("p",null,"Ao analisar a rota ",(0,a.kt)("inlineCode",{parentName:"p"},"/books/v1/{book_title}")," na documenta\xe7\xe3o da VAmPI (dispon\xedvel de acordo com o formato ",(0,a.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI 3.0"),"), \xe9 poss\xedvel encontrar a fun\xe7\xe3o respons\xe1vel pela altera\xe7\xe3o da senha lendo o ",(0,a.kt)("inlineCode",{parentName:"p"},"operationId"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="openapi3.yml - /users/v1/{username}/password"',title:'"openapi3.yml',"-":!0,'/users/v1/{username}/password"':!0},"...\noperationId: api_views.books.get_by_title\n...\n")),(0,a.kt)("p",null,"Agora, basta seguir o caminho entre os arquivos da VAmPI para encontrar a fun\xe7\xe3o vulner\xe1vel na aplica\xe7\xe3o."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="api_views/books.get_by_title"',title:'"api_views/books.get_by_title"'},'def get_by_title(book_title):\n    resp = token_validator(request.headers.get(\'Authorization\'))\n    if "expired" in resp:\n        return Response(error_message_helper(resp), 401, mimetype="application/json")\n    elif "Invalid token" in resp:\n        return Response(error_message_helper(resp), 401, mimetype="application/json")\n    else:\n        book = Book.query.filter_by(book_title=str(book_title)).first()\n        if book:\n            responseObject = {\n                \'book_title\': book.book_title,\n                \'secret\': book.secret_content,\n                \'owner\': book.user.username\n            }\n            return Response(json.dumps(responseObject), 200, mimetype="application/json")\n        else:\n            return Response(error_message_helper("Book not found!"), 404, mimetype="application/json")\n')),(0,a.kt)("p",null,"Como esperado, h\xe1 apenas uma pesquisa no banco de dados usando diretamente o t\xedtulo, sem envolver informa\xe7\xf5es de autentica\xe7\xe3o do usu\xe1rio."),(0,a.kt)("p",null,"Dessa forma \xe9 poss\xedvel acessar as informa\xe7\xf5es de todos os livros que est\xe3o na base de dados, sendo necess\xe1rio conhecer apenas os respectivos t\xedtulos (ou adivinh\xe1-los com for\xe7a bruta)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Trecho de c\xf3digo vulner\xe1vel"',title:'"Trecho',de:!0,"c\xf3digo":!0,'vulner\xe1vel"':!0},"book = Book.query.filter_by(book_title=str(book_title)).first()\n")),(0,a.kt)("p",null,"Ent\xe3o, a solu\xe7\xe3o seria: Utilizar o token JWT como forma de autentica\xe7\xe3o do usu\xe1rio, fornecendo acesso apenas aos livros pertencentes ao usu\xe1rio."),(0,a.kt)("p",null,"Ao analisar o c\xf3digo da fun\xe7\xe3o, tamb\xe9m \xe9 poss\xedvel perceber que uma outra fun\xe7\xe3o \xe9 chamada, a ",(0,a.kt)("inlineCode",{parentName:"p"},"token_validator()"),", sendo usada para validar o token JWT."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"resp = token_validator(request.headers.get('Authorization'))\n")),(0,a.kt)("p",null,"Essa fun\xe7\xe3o pode ser a solu\xe7\xe3o do problema, tendo em vista que ela retorna o nome do usu\xe1rio ap\xf3s realizar a valida\xe7\xe3o do token."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def token_validator(auth_header):\n    if auth_header:\n        try:\n            auth_token = auth_header.split(" ")[1]\n        except:\n            auth_token = ""\n    else:\n        auth_token = ""\n    if auth_token:\n        # Caso o token de autentica\xe7\xe3o seja v\xe1lido, a fun\xe7\xe3o retorna o nome de usu\xe1rio\n        return User.decode_auth_token(auth_token)\n    else:\n        return "Invalid token"\n')),(0,a.kt)("p",null,"Ent\xe3o, a corre\xe7\xe3o \xe9 relativamente simples, basta utilizar uma fun\xe7\xe3o que j\xe1 est\xe1 dispon\xedvel no c\xf3digo e que \xe9 subutilizada."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def get_by_title(book_title):\n    resp = token_validator(request.headers.get(\'Authorization\'))\n    if "expired" in resp:\n        return Response(error_message_helper(resp), 401, mimetype="application/json")\n    elif "Invalid token" in resp:\n        return Response(error_message_helper(resp), 401, mimetype="application/json")\n    else:\n        #Usando JWT para acessar o username do usu\xe1rio\n        user = User.query.filter_by(username=resp).first()\n        \n        #Corre\xe7\xe3o da vulnerabilidade\n        book = Book.query.filter_by(user=user, book_title=str(book_title)).first()\n        if book:\n            responseObject = {\n                \'book_title\': book.book_title,\n                \'secret\': book.secret_content,\n                \'owner\': book.user.username\n            }\n            return Response(json.dumps(responseObject), 200, mimetype="application/json")\n        else:\n            return Response(error_message_helper("Book not found!"), 404, mimetype="application/json")\n')),(0,a.kt)("p",null,"Agora, a consulta ao banco de dados \xe9 feita levando em considera\xe7\xe3o os livros que o usu\xe1rio autenticado possui, limitando o acesso apenas aos livros daquele usu\xe1rio."),(0,a.kt)("p",null,"Ou seja, com a pequena altera\xe7\xe3o usando as duas linhas de c\xf3digo abaixo, a vulnerabilidade deixou de existir."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"user = User.query.filter_by(username=resp).first()\nbook = Book.query.filter_by(user=user, book_title=str(book_title)).first()\n")),(0,a.kt)("h4",{id:"mais-refer\xeancias-dispon\xedveis-na-owasp"},"Mais refer\xeancias dispon\xedveis na ",(0,a.kt)("a",{parentName:"h4",href:"https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa1-broken-object-level-authorization.md"},"OWASP"),"."))}c.isMDXComponent=!0}}]);