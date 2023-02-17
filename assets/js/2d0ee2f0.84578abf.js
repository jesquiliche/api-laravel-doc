"use strict";(self.webpackChunkapi_laravel_doc=self.webpackChunkapi_laravel_doc||[]).push([[83],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>g});var o=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=c(e.components);return o.createElement(l.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||n;return t?o.createElement(g,i(i({ref:a},d),{},{components:t})):o.createElement(g,i({ref:a},d))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1675:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const n={sidebar_position:2},i="\ud83d\udcd6Pruebas con Postman",s={unversionedId:"jwr/test1",id:"jwr/test1",title:"\ud83d\udcd6Pruebas con Postman",description:"\xbfQu\xe9 es Postman?",source:"@site/docs/jwr/test1.md",sourceDirName:"jwr",slug:"/jwr/test1",permalink:"/api-laravel-doc/docs/jwr/test1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/jwr/test1.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd6JSON Web Token",permalink:"/api-laravel-doc/docs/jwr/jwt"}},l={},c=[{value:"\xbfQu\xe9 es Postman?",id:"qu\xe9-es-postman",level:2},{value:"Realizaci\xf3n de solicitudes a la API (GET, POST, PUT, DELETE)",id:"realizaci\xf3n-de-solicitudes-a-la-api-get-post-put-delete",level:2},{value:"\ud83d\udcc7Registro de usuario",id:"registro-de-usuario",level:3},{value:"\ud83d\udcc7Login",id:"login",level:3},{value:"\ud83d\udcc7Consultando datos (m\xe9todo GET)",id:"consultando-datos-m\xe9todo-get",level:3},{value:"\ud83d\udcc7A\xf1adiendo una nueva categoria (m\xe9todo POST)",id:"a\xf1adiendo-una-nueva-categoria-m\xe9todo-post",level:3},{value:"\ud83d\udcc7Modificando una categoria (m\xe9todo PUT)",id:"modificando-una-categoria-m\xe9todo-put",level:3},{value:"\ud83d\udcc7Obtener todas las categor\xedas (m\xe9todo GET)",id:"obtener-todas-las-categor\xedas-m\xe9todo-get",level:3},{value:"\ud83d\udcc7Obtener una categoria concreta (m\xe9todo GET)",id:"obtener-una-categoria-concreta-m\xe9todo-get",level:3},{value:"\ud83d\udcc7Borrar una categoria concreta (m\xe9todo DELETE)",id:"borrar-una-categoria-concreta-m\xe9todo-delete",level:3},{value:"\ud83d\udcc7Status code",id:"status-code",level:3}],d={toc:c},u="wrapper";function p(e){let{components:a,...n}=e;return(0,r.kt)(u,(0,o.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pruebas-con-postman"},"\ud83d\udcd6Pruebas con Postman"),(0,r.kt)("p",{class:"image-center"},(0,r.kt)("img",{src:"/assets/images/postman.png",alt:"Descripci\xf3n de la imagen"})),(0,r.kt)("h2",{id:"qu\xe9-es-postman"},"\xbfQu\xe9 es Postman?"),(0,r.kt)("p",null,"Postman es una aplicaci\xf3n de software que se utiliza para realizar solicitudes HTTP y probar APIs (Interfaces de Programaci\xf3n de Aplicaciones). Permite a los desarrolladores realizar solicitudes a un servidor y ver la respuesta que reciben, lo que les permite probar y depurar sus aplicaciones y servicios web. Postman ofrece una gran cantidad de funciones, incluyendo la posibilidad de guardar y compartir solicitudes, generar c\xf3digo para diferentes lenguajes de programaci\xf3n y utilizar variables y entornos para probar diferentes configuraciones. En resumen, Postman es una herramienta esencial para cualquier desarrollador que trabaje con APIs y servicios web."),(0,r.kt)("h2",{id:"realizaci\xf3n-de-solicitudes-a-la-api-get-post-put-delete"},"Realizaci\xf3n de solicitudes a la API (GET, POST, PUT, DELETE)"),(0,r.kt)("h3",{id:"registro-de-usuario"},"\ud83d\udcc7Registro de usuario"),(0,r.kt)("p",null,"Comenzaremos por registrarnos como usuario en nuestra base de datos. Esta solicitud utiliza el m\xe9todo POST que normalmente se utiliza para las altas. La petici\xf3n deber\xeda quedar tal como muestra la imagen, donde deberemos especificar el ",(0,r.kt)("em",{parentName:"p"},"nombre de nuestro usuario, el email y el password"),' de nuestro usuario. No se olvide de arrancar la aplicaci\xf3n Laravel con **php artisan serve".'),(0,r.kt)("p",null,"Una vez enviada la solicitud deber\xedamos obtener la siguiente respuesta:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mi imagen",src:t(6988).Z,width:"897",height:"283"})),(0,r.kt)("h3",{id:"login"},"\ud83d\udcc7Login"),(0,r.kt)("p",null,"Despu\xe9s del correspondiente registro de usuario procederemos a autenticarnos, este proceso  nos devolver\xe1 el token de acceso. En el Json deber\xe1 escribir el nombre y el password con los cuales se ha registrado en el proceso de registro."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mi imagen",src:t(9034).Z,width:"887",height:"256"})),(0,r.kt)("p",null,"Despu\xe9s de enviar la solicitud deberemos obtener una respuesta similar a la siguiente:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mi imagen",src:t(1331).Z,width:"891",height:"436"})),(0,r.kt)("p",null,"Deberemos copiar el token para poder realizar el resto de peticiones que requieren de autenticaci\xf3n."),(0,r.kt)("h3",{id:"consultando-datos-m\xe9todo-get"},"\ud83d\udcc7Consultando datos (m\xe9todo GET)"),(0,r.kt)("p",null,"A continuaci\xf3n vamos a utilizar un ejemplo para consultar datos a traves de nuestra API. Obtendremos un Json con todas las provincias de Espa\xf1a, para ello utilizaremos el m\xe9todo GET, pero primero deberemos introducir el token el apartado habilitado para ello en Postman. En el campo type deberemos escoger bearer y el campo Token deberemos introducir el token que hemos copiado anteriormente."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mi imagen",src:t(62).Z,width:"888",height:"206"})),(0,r.kt)("p",null,"Una vez hecho esto enviamos la petici\xf3n y deber\xedamos recibir una respuesta parecida a esta:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mi imagen",src:t(7241).Z,width:"884",height:"542"})),(0,r.kt)("h3",{id:"a\xf1adiendo-una-nueva-categoria-m\xe9todo-post"},"\ud83d\udcc7A\xf1adiendo una nueva categoria (m\xe9todo POST)"),(0,r.kt)("p",null,"Continuando con nuestro ejemplos procederemos a dar de alta una nueva categoria. Ejecute la siguiente petici\xf3n:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mi imagen",src:t(467).Z,width:"908",height:"502"})),(0,r.kt)("p",null,"Deber\xedas obtener una respuesta similar a la de la imagen anterior."),(0,r.kt)("h3",{id:"modificando-una-categoria-m\xe9todo-put"},"\ud83d\udcc7Modificando una categoria (m\xe9todo PUT)"),(0,r.kt)("p",null,"Ahora vamos a modificar la categoria anterior. Para ello tome como ejemplo la siguiente imagen. El n\xfamero 8 de la uri es el id de la categoria a modificar."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mi imagen",src:t(1311).Z,width:"904",height:"497"})),(0,r.kt)("h3",{id:"obtener-todas-las-categor\xedas-m\xe9todo-get"},"\ud83d\udcc7Obtener todas las categor\xedas (m\xe9todo GET)"),(0,r.kt)("p",null,"Ahora vamos a ver como obtener todas las categor\xedas. Para ello tome como ejemplo la siguiente imagen: "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mi imagen",src:t(3365).Z,width:"905",height:"535"})),(0,r.kt)("h3",{id:"obtener-una-categoria-concreta-m\xe9todo-get"},"\ud83d\udcc7Obtener una categoria concreta (m\xe9todo GET)"),(0,r.kt)("p",null,"Este ejemplo ilustra como obtener los datos de una categoria concreta, el n\xfamero 2 en la uri indica el id de la categoria."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mi imagen",src:t(3498).Z,width:"903",height:"503"})),(0,r.kt)("h3",{id:"borrar-una-categoria-concreta-m\xe9todo-delete"},"\ud83d\udcc7Borrar una categoria concreta (m\xe9todo DELETE)"),(0,r.kt)("p",null,"Este ejemplo ilustra como borrar una categoria, el n\xfamero 7 en la uri indica el id de la categoria."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mi imagen",src:t(4045).Z,width:"910",height:"502"})),(0,r.kt)("h3",{id:"status-code"},"\ud83d\udcc7Status code"),(0,r.kt)("p",null,"Todas las peticiones devuelven un c\xf3dgio de estado, el cual aparece en la siguiente imagen.\n",(0,r.kt)("img",{alt:"Mi imagen",src:t(1339).Z,width:"903",height:"503"})),(0,r.kt)("admonition",{title:"Lista de los status code m\xe1s comunes",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"200 OK:")," la solicitud se complet\xf3 correctamente"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"201 Created:")," se ha creado un nuevo recurso"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"204 No Content:")," la solicitud se complet\xf3 correctamente pero no hay contenido para devolver"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"400 Bad Request:")," la solicitud no se puede cumplir debido a una sintaxis incorrecta"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"401 Unauthorized"),": el usuario no est\xe1 autenticado y no tiene permiso para acceder al recurso"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"403 Forbidden:")," el usuario est\xe1 autenticado pero no tiene permiso para acceder al recurso"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"404 Not Found"),":** el recurso no se pudo encontrar"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"405 Method Not Allowed:")," se intent\xf3 utilizar un m\xe9todo HTTP no v\xe1lido para el recurso"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"500 Internal Server Error:")," se produjo un error interno en el servidor")),(0,r.kt)("p",{parentName:"admonition"},"Hay muchos otros c\xf3digos de estado HTTP, pero estos son algunos de los m\xe1s comunes.")))}p.isMDXComponent=!0},62:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/auth-3260fcbd7effdbc3fffb2bcaec83d45d.png"},4045:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/delete_categorias-437d5f070e3e388f15aafeec72863aff.png"},3365:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/get_categorias-2b4f55a0f7db655221b6037c454d8033.png"},3498:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/get_categorias2-365b365cf80e01265d4b2f37215b2b32.png"},9034:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/login1-cd757abec7983544fe0c69425e3820f5.png"},1331:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/login2-283695b5429549efbe3a46b2b94481d1.png"},467:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/post_categorias-cd92bac9dffb71816e8e8aac11fa51a6.png"},7241:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/provincias-8aee8ce35f3b590a42d1cad27df94cbc.png"},1311:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/put_categorias-560cb09470bcfc0fd9c3495190591298.png"},6988:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/register2-6185d0deb00fc61e50b64bc13cbe3c55.png"},1339:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/status-77f62c824969c743b9960d6f1d9edb98.png"}}]);