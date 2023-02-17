"use strict";(self.webpackChunkapi_laravel_doc=self.webpackChunkapi_laravel_doc||[]).push([[473],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>b});var r=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,r,o=function(e,a){if(null==e)return{};var n,r,o={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var a=r.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=l(e.components);return r.createElement(c.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,o=e.mdxType,t=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||t;return n?r.createElement(b,s(s({ref:a},u),{},{components:n})):r.createElement(b,s({ref:a},u))}));function b(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var t=n.length,s=new Array(t);s[0]=m;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<t;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2138:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const t={sidebar_position:1},s="\ud83d\udcd6Conceptos b\xe1sicos",i={unversionedId:"controladores/conceptos",id:"controladores/conceptos",title:"\ud83d\udcd6Conceptos b\xe1sicos",description:"Conceptos",source:"@site/docs/controladores/conceptos.md",sourceDirName:"controladores",slug:"/controladores/conceptos",permalink:"/api-laravel-doc/docs/controladores/conceptos",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/controladores/conceptos.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Creaci\xf3n de una API REST en Laravel",permalink:"/api-laravel-doc/docs/category/creaci\xf3n-de-una-api-rest-en-laravel"},next:{title:"\ud83d\udcd6Controladores",permalink:"/api-laravel-doc/docs/controladores/"}},c={},l=[{value:"Conceptos",id:"conceptos",level:2},{value:"Verbos HTTP",id:"verbos-http",level:2},{value:"Peticiones Request y Response",id:"peticiones-request-y-response",level:2}],u={toc:l},p="wrapper";function d(e){let{components:a,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"conceptos-b\xe1sicos"},"\ud83d\udcd6Conceptos b\xe1sicos"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/images/rest_api.png",alt:"Descripci\xf3n de la imagen",className:"image-center"})),(0,o.kt)("h2",{id:"conceptos"},"Conceptos"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Recursos:")," Un recurso es cualquier elemento o entidad sobre la que se realizan operaciones en una API REST. Por ejemplo, un usuario, una tarea, una publicaci\xf3n, etc. Cada recurso se identifica de manera \xfanica mediante una direcci\xf3n URL."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Representaciones:")," Una representaci\xf3n es la forma en que un recurso se presenta al cliente. Por ejemplo, un recurso puede estar representado como un JSON o como un XML. La representaci\xf3n de un recurso es lo que se env\xeda al cliente como respuesta a una petici\xf3n."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Verbos HTTP:")," Los verbos HTTP son los comandos que se utilizan para interactuar con los recursos. "),(0,o.kt)("p",null,"Estos son los conceptos b\xe1sicos de API REST y suelen ser suficientes para crear aplicaciones simples. Sin embargo, existen otros verbos HTTP y conceptos m\xe1s avanzados que tambi\xe9n pueden ser \xfatiles en algunos casos."),(0,o.kt)("h2",{id:"verbos-http"},"Verbos HTTP"),(0,o.kt)("p",null,"Los ",(0,o.kt)("strong",{parentName:"p"},"verbos HTTP")," son los comandos que se utilizan para interactuar con los recursos en una API REST. Aqu\xed est\xe1 una explicaci\xf3n detallada de los verbos HTTP m\xe1s comunes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"GET:")," Este verbo se utiliza para obtener informaci\xf3n de un recurso o de un conjunto de recursos. Por ejemplo, si queremos obtener la informaci\xf3n de un usuario espec\xedfico, realizar\xedamos una petici\xf3n GET a la URL que representa ese usuario. La respuesta a esta petici\xf3n ser\xeda la representaci\xf3n del usuario en cuesti\xf3n.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"POST"),": Este verbo se utiliza para crear un nuevo recurso. Por ejemplo, si queremos crear un nuevo usuario, realizar\xedamos una petici\xf3n POST a la URL que representa el conjunto de usuarios. La petici\xf3n incluir\xeda la informaci\xf3n necesaria para crear el nuevo usuario, y la respuesta a la petici\xf3n ser\xeda la representaci\xf3n del usuario reci\xe9n creado.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"PUT:")," Este verbo se utiliza para actualizar un recurso existente. Por ejemplo, si queremos actualizar la informaci\xf3n de un usuario espec\xedfico, realizar\xedamos una petici\xf3n PUT a la URL que representa ese usuario. La petici\xf3n incluir\xeda la informaci\xf3n actualizada, y la respuesta a la petici\xf3n ser\xeda la representaci\xf3n del usuario actualizado.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"DELETE:")," Este verbo se utiliza para eliminar un recurso existente. Por ejemplo, si queremos eliminar un usuario espec\xedfico, realizar\xedamos una petici\xf3n DELETE a la URL que representa ese usuario. La respuesta a esta petici\xf3n confirmar\xeda que el usuario ha sido eliminado."))),(0,o.kt)("p",null,"Estos son los verbos HTTP m\xe1s comunes en API REST, y en la mayor\xeda de los casos son suficientes para implementar una API REST. Sin embargo, existen otros verbos HTTP menos utilizados que tambi\xe9n pueden ser \xfatiles en algunos casos. Es importante tener en cuenta que los verbos HTTP deben ser utilizados de manera coherente para garantizar la compatibilidad con los clientes y para mantener la consistencia en la API."),(0,o.kt)("h2",{id:"peticiones-request-y-response"},"Peticiones Request y Response"),(0,o.kt)("p",null,"Las peticiones ",(0,o.kt)("strong",{parentName:"p"},"Request")," y ",(0,o.kt)("strong",{parentName:"p"},"Response")," son parte integral del funcionamiento de las API REST. Una petici\xf3n Request es una solicitud hecha por un cliente a un servidor para recibir alg\xfan tipo de informaci\xf3n o realizar una acci\xf3n. Por otro lado, una respuesta Response es la respuesta que el servidor le da al cliente a una petici\xf3n Request."),(0,o.kt)("p",null,"Una petici\xf3n ",(0,o.kt)("strong",{parentName:"p"},"Request")," puede incluir informaci\xf3n adicional, como los datos que se van a enviar a un servidor, el formato en el que se quiere recibir la informaci\xf3n (por ejemplo, JSON o XML), el m\xe9todo HTTP que se est\xe1 utilizando (GET, POST, PUT, DELETE, entre otros) y la URL a la que se est\xe1 haciendo la petici\xf3n."),(0,o.kt)("p",null,"Por su parte, una respuesta Response puede incluir informaci\xf3n como el c\xf3digo de estado HTTP (por ejemplo, 200 OK si la petici\xf3n fue exitosa o 404 Not Found si la URL especificada no existe), los datos que se est\xe1n enviando como respuesta, el formato de los datos (por ejemplo, JSON o XML) y cualquier cabecera HTTP adicional."),(0,o.kt)("admonition",{title:"JSON",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'JSON es un formato de intercambio de datos ligeros y de f\xe1cil lectura para los humanos. JSON es una sigla que significa "JavaScript Object Notation".'),(0,o.kt)("p",{parentName:"admonition"},"JSON es un formato de texto plano que se utiliza para transmitir informaci\xf3n en la Web. La informaci\xf3n se almacena como un objeto de JavaScript, que es una colecci\xf3n de pares clave-valor. La clave es una cadena y el valor puede ser una cadena, n\xfamero, objeto, matriz u otro tipo de valor."),(0,o.kt)("p",{parentName:"admonition"},"Ejemplo de un objeto JSON:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "nombre": "John Doe",\n  "edad": 32,\n  "email": "johndoe@ejemplo.com",\n  "direccion": {\n    "calle": "1ra Calle",\n    "ciudad": "Ciudad de Prueba",\n    "pais": "Pa\xeds de Prueba"\n  }\n}\n')),(0,o.kt)("p",{parentName:"admonition"},"JSON es ampliamente compatible con diferentes lenguajes de programaci\xf3n, incluidos JavaScript, PHP, Python, Ruby, Java, C# y muchos otros. Esto hace que sea f\xe1cil de leer y escribir, lo que lo hace ideal para su uso en aplicaciones web y m\xf3viles."),(0,o.kt)("p",{parentName:"admonition"},"Adem\xe1s, JSON es muy similar a la sintaxis de objetos y matrices de JavaScript, lo que lo hace f\xe1cil de entender y usar para los desarrolladores de JavaScript. Esto hace que JSON sea una de las opciones m\xe1s populares para la transmisi\xf3n de datos en la Web.")))}d.isMDXComponent=!0}}]);