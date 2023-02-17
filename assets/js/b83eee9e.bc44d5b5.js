"use strict";(self.webpackChunkapi_laravel_doc=self.webpackChunkapi_laravel_doc||[]).push([[533],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>g});var o=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,o,t=function(e,a){if(null==e)return{};var n,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=o.createContext({}),i=function(e){var a=o.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=i(e.components);return o.createElement(p.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=t,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(g,l(l({ref:a},c),{},{components:n})):o.createElement(g,l({ref:a},c))}));function g(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[d]="string"==typeof e?e:t,l[1]=s;for(var i=2;i<r;i++)l[i]=n[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6187:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var o=n(7462),t=(n(7294),n(3905));const r={sidebar_position:4},l="\ud83d\udcd6Creando los modelos",s={unversionedId:"BacKend/modelos",id:"BacKend/modelos",title:"\ud83d\udcd6Creando los modelos",description:"\xbfQu\xe9 es Elocuent?",source:"@site/docs/BacKend/modelos.md",sourceDirName:"BacKend",slug:"/BacKend/modelos",permalink:"/api-laravel-doc/docs/BacKend/modelos",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/BacKend/modelos.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd6Migraciones",permalink:"/api-laravel-doc/docs/BacKend/migraciones"},next:{title:"\ud83d\udcd6Rellenando la BB.DD",permalink:"/api-laravel-doc/docs/BacKend/seeders"}},p={},i=[{value:"\xbfQu\xe9 es Elocuent?",id:"qu\xe9-es-elocuent",level:2},{value:"\xbfC\xf3mo crear un modelo?",id:"c\xf3mo-crear-un-modelo",level:2},{value:"Relaciones en Elocuent(Conceptos)",id:"relaciones-en-elocuentconceptos",level:2},{value:"Tinker",id:"tinker",level:2},{value:"Modelos",id:"modelos",level:2},{value:"\ud83d\udcc7Categor\xeda",id:"categor\xeda",level:3},{value:"\ud83d\udcc7Subcategor\xeda",id:"subcategor\xeda",level:3},{value:"\ud83d\udcc7Producto",id:"producto",level:3},{value:"\ud83d\udcc7Iva",id:"iva",level:3},{value:"\ud83d\udcc7Marca",id:"marca",level:3},{value:"\ud83d\udcc7Oferta",id:"oferta",level:3},{value:"\ud83d\udcc7Provincia",id:"provincia",level:3},{value:"\ud83d\udcc7Poblacion",id:"poblacion",level:3},{value:"\ud83d\udcc7Proveedor",id:"proveedor",level:3}],c={toc:i},d="wrapper";function u(e){let{components:a,...n}=e;return(0,t.kt)(d,(0,o.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"creando-los-modelos"},"\ud83d\udcd6Creando los modelos"),(0,t.kt)("h2",{id:"qu\xe9-es-elocuent"},"\xbfQu\xe9 es Elocuent?"),(0,t.kt)("p",null,(0,t.kt)("img",{src:"/img/orm.png",alt:"Descripci\xf3n de la imagen",className:"image-center"})),"Eloquent es el ORM (Object-Relational Mapping) integrado en Laravel, que permite trabajar con las bases de datos de manera objetual. Es decir, Eloquent permite interactuar con las tablas de la base de datos a trav\xe9s de modelos en lugar de escribir consultas SQL manualmente. Cada modelo de Eloquent representa una tabla de la base de datos y proporciona m\xe9todos para interactuar con la informaci\xf3n almacenada en la tabla. Con Eloquent, se pueden realizar operaciones comunes de CRUD (Crear, Leer, Actualizar y Borrar) de manera f\xe1cil y sencilla.",(0,t.kt)("admonition",{title:"CRUD con Eloquent",type:"tip"},(0,t.kt)("p",{parentName:"admonition"},"Aqu\xed hay algunos comandos b\xe1sicos de Eloquent:"),(0,t.kt)("p",{parentName:"admonition"},"$model = new ModelName: Crea una nueva instancia del modelo."),(0,t.kt)("p",{parentName:"admonition"},"$model->save(): Guarda un nuevo registro en la base de datos."),(0,t.kt)("p",{parentName:"admonition"},"ModelName::create(","[data]","): Crea un nuevo registro en la base de datos con los datos especificados."),(0,t.kt)("p",{parentName:"admonition"},"ModelName::find($id): Obtiene un registro en base a su identificador.")),(0,t.kt)("p",null,"No se preocupe si de momento no entiende estos comandos los iremos viendo a medida que vallamos realizando este proyecto.\nPara m\xe1s informaci\xf3n consulte la ",(0,t.kt)("a",{parentName:"p",href:"https://laravel.com/docs/9.x/readme"},"documentaci\xf3n oficial")),(0,t.kt)("h2",{id:"c\xf3mo-crear-un-modelo"},"\xbfC\xf3mo crear un modelo?"),(0,t.kt)("p",null,"Para crear un modelo en Laravel, se puede utilizar el comando de Artisan en la terminal:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:model NombreDelModelo\n")),(0,t.kt)("p",null,"Este comando crear\xe1 un archivo en la carpeta app con el nombre especificado. A continuaci\xf3n, se puede agregar la l\xf3gica y atributos del modelo en este archivo."),(0,t.kt)("p",null,"Por ejemplo, si queremos crear un modelo para una tabla de productos, podemos ejecutar el siguiente comando:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:model Producto\n")),(0,t.kt)("p",null,"Este comando crear\xe1 un archivo Producto.php en la carpeta app con la siguiente estructura b\xe1sica:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Producto extends Model\n{\n    //\n}\n")),(0,t.kt)("p",null,"Despu\xe9s de crear el modelo, se pueden agregar los atributos y m\xe9todos necesarios para interactuar con la tabla correspondiente en la base de datos.\xe7\xe7"),(0,t.kt)("h2",{id:"relaciones-en-elocuentconceptos"},"Relaciones en Elocuent(Conceptos)"),(0,t.kt)("admonition",{title:"Uno a uno",type:"tip"},(0,t.kt)("p",{parentName:"admonition"},'En Laravel, una relaci\xf3n "uno a uno" significa que un registro de una tabla est\xe1 asociado con exactamente un registro en otra tabla. Por ejemplo, un usuario puede tener un solo perfil, y un perfil puede ser de un solo usuario.'),(0,t.kt)("p",{parentName:"admonition"},'Para definir una relaci\xf3n "uno a uno" en Laravel, primero debes crear los modelos para las tablas implicadas en la relaci\xf3n. Luego, debes usar el m\xe9todo hasOne en el modelo que representa la tabla con la clave for\xe1nea y el m\xe9todo belongsTo en el modelo que representa la tabla principal.'),(0,t.kt)("p",{parentName:"admonition"},'Aqu\xed hay un ejemplo de c\xf3mo crear una relaci\xf3n "uno a uno" entre las tablas de usuarios y perfiles:'),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},"Copy code\n// Archivo User.php\nclass User extends Model\n{\n    public function profile()\n    {\n        return $this->hasOne('App\\Profile');\n    }\n}\n\n// Archivo Profile.php\nclass Profile extends Model\n{\n    public function user()\n    {\n        return $this->belongsTo('App\\User');\n    }\n}\n")),(0,t.kt)("p",{parentName:"admonition"},"Luego, puedes acceder a la informaci\xf3n del perfil de un usuario de la siguiente manera:"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},"$user = User::find(1);\n$profile = $user->profile;\n")),(0,t.kt)("p",{parentName:"admonition"},"Esto te permitir\xe1 acceder a los atributos del perfil asociado con un usuario determinado.")),(0,t.kt)("admonition",{title:"Uno a muchos",type:"tip"},(0,t.kt)("p",{parentName:"admonition"},'En Laravel Eloquent, una relaci\xf3n de uno a muchos se establece en un modelo mediante el uso del m\xe9todo "hasMany".'),(0,t.kt)("p",{parentName:"admonition"},'Por ejemplo, si tienes un modelo "User" y un modelo "Order", y cada usuario puede tener muchos pedidos, la relaci\xf3n ser\xeda:'),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Relaci\xf3n uno a muchos"',title:'"Relaci\xf3n',uno:!0,a:!0,'muchos"':!0},"class User extends Model\n{\n    public function orders()\n    {\n        return $this->hasMany(Order::class);\n    }\n}\n")),(0,t.kt)("p",{parentName:"admonition"},"Entonces, puedes acceder a los pedidos de un usuario de la siguiente manera:"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},"$user = User::find(1);\n$orders = $user->orders;\n")),(0,t.kt)("p",{parentName:"admonition"},"Tambi\xe9n puedes personalizar la clave for\xe1nea en la relaci\xf3n, por ejemplo:"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},"class Order extends Model\n{\n    public function user()\n    {\n        return $this->belongsTo(User::class, 'user_id');\n    }\n}\n")),(0,t.kt)("p",{parentName:"admonition"},'Esto significa que Eloquent buscar\xe1 una columna "user_id" en la tabla de "orders" para hacer la relaci\xf3n con la tabla de "users".')),(0,t.kt)("admonition",{title:"Muchos a muchos",type:"tip"},(0,t.kt)("p",{parentName:"admonition"},'En Laravel Eloquent, una relaci\xf3n de muchos a muchos se establece mediante el uso del m\xe9todo "belongsToMany".'),(0,t.kt)("p",{parentName:"admonition"},'Por ejemplo, si tienes un modelo "User" y un modelo "Role", y cada usuario puede tener varios roles y cada rol puede ser asignado a varios usuarios, la relaci\xf3n ser\xeda:'),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},"class User extends Model\n{\n    public function roles()\n    {\n        return $this->belongsToMany(Role::class);\n    }\n}\n")),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},"class Role extends Model\n{\n    public function users()\n    {\n        return $this->belongsToMany(User::class);\n    }\n}\n")),(0,t.kt)("p",{parentName:"admonition"},"Entonces, puedes acceder a los roles de un usuario de la siguiente manera:"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},"$user = User::find(1);\n$roles = $user->roles;\n")),(0,t.kt)("p",{parentName:"admonition"},"Y puedes acceder a los usuarios de un rol de la siguiente manera:"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"$role = Role::find(1);\n$users = $role->users;\n")),(0,t.kt)("p",{parentName:"admonition"},'Por defecto, Eloquent buscar\xe1 una tabla intermedia con nombres en plural en orden alfab\xe9tico de las dos tablas relacionadas, por ejemplo, "role_user". Sin embargo, puedes especificar un nombre personalizado para la tabla intermedia utilizando el segundo argumento en el m\xe9todo "belongsToMany", por ejemplo:'),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},"return $this->belongsToMany(Role::class, 'user_roles');\n"))),(0,t.kt)("h2",{id:"tinker"},"Tinker"),(0,t.kt)("p",null,"Tinker es una herramienta de ",(0,t.kt)("strong",{parentName:"p"},"REPL (Read-Eval-Print Loop)")," de Laravel que te permite interactuar con tu aplicaci\xf3n de Laravel desde la consola. Con Tinker, puedes ejecutar c\xf3digo PHP, consultar y modificar la informaci\xf3n en la base de datos, y ejecutar otros comandos relacionados con Laravel."),(0,t.kt)("p",null,"Para usar ",(0,t.kt)("strong",{parentName:"p"},"Tinker"),", abre la consola en tu proyecto de Laravel y ejecuta el comando php artisan tinker. Una vez que se abra la sesi\xf3n de Tinker, puedes escribir cualquier c\xf3digo PHP y ver los resultados en tiempo real. Por ejemplo, puedes consultar informaci\xf3n de la base de datos, crear nuevos registros y modificar registros existentes."),(0,t.kt)("p",null,"Aqu\xed hay algunos ejemplos de lo que puedes hacer con Tinker:"),(0,t.kt)("p",null,"Consultar informaci\xf3n de una tabla:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},">>> App\\Models\\Producto::all()\n")),(0,t.kt)("p",null,"Crear un nuevo registro:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'>>> $producto = new App\\Models\\Producto;\n>>> $producto->nombre = "Producto 1";\n>>> $producto->save()\n')),(0,t.kt)("p",null,"Modificar un registro existente:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'>>> $producto = App\\Models\\Producto::find(1);\n>>> $producto->nombre = "Producto actualizado";\n>>> $producto->save()\n')),(0,t.kt)("p",null,"Tinker es una herramienta muy \xfatil para probar c\xf3digo r\xe1pidamente y ver los resultados sin tener que recargar la p\xe1gina o escribir c\xf3digo adicional en tu aplicaci\xf3n de Laravel. \xa1Disfruta!"),(0,t.kt)("h2",{id:"modelos"},"Modelos"),(0,t.kt)("h3",{id:"categor\xeda"},"\ud83d\udcc7Categor\xeda"),(0,t.kt)("p",null,"Ejecute el siguiente comando en su terminal:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:model Categoria\n")),(0,t.kt)("admonition",{title:"Importante",type:"tip"},(0,t.kt)("p",{parentName:"admonition"},"El nombre del modelo debe empezar en may\xfascula y estar en singular, pues Eloquent va a buscar la tabla correspondiente al modelo a\xf1adiendo una s al final.\nEn este caso al modelo Categoria le corresponde la tabla categorias. M\xe1s adelante cuando llegue el caso estudiaremos como cambiar este comportamiento.")),(0,t.kt)("p",null,"Una vez ejecutado el comando edite el siguiente fichero:\n",(0,t.kt)("strong",{parentName:"p"},"app\\Models\\Categoria.php")),(0,t.kt)("p",null,"Sustituye el contenido por el siguiente c\xf3digo PHP:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app\\Models\\Categoria.php"',title:'"app\\Models\\Categoria.php"'},"<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Categoria extends Model\n{\n    use HasFactory;\n    protected $fillable = ['nombre','descripcion'];\n    public function subcategorias(){\n        return $this->hasMany('App\\Models\\Subcategoria');\n\n    }\n}\n")),(0,t.kt)("p",null,"En el ejemplo anterior se crea un modelo en Laravel llamado ",(0,t.kt)("strong",{parentName:"p"},'"Categoria"'),' que representa una tabla de categor\xedas en la base de datos. Este modelo es una clase que extiende de la clase "Model" de Eloquent, lo que significa que tiene todas las funcionalidades y propiedades necesarias para interactuar con la tabla ',(0,t.kt)("strong",{parentName:"p"},'"categor\xedas"')," en la base de datos."),(0,t.kt)("p",null,"La propiedad ",(0,t.kt)("strong",{parentName:"p"},'"fillable"'),' especifica los campos que pueden ser rellenados por asignaci\xf3n masiva, es decir, aquellos campos que pueden ser modificados a trav\xe9s de un array o objeto. En este caso, los campos "nombre" y ',(0,t.kt)("strong",{parentName:"p"},'"descripcion"')," son los \xfanicos que pueden ser modificados."),(0,t.kt)("p",null,"El m\xe9todo ","*",(0,t.kt)("strong",{parentName:"p"},"*",'subcategorias"'),' define una relaci\xf3n de uno a muchos con la tabla "subcategor\xedas". Esta relaci\xf3n significa que una categor\xeda puede tener muchas subcategor\xedas, y que cada subcategor\xeda pertenece a una sola categor\xeda. La relaci\xf3n se define usando el m\xe9todo "hasMany", que indica que la clase "Categoria" tiene muchas subcategor\xedas. El argumento de "hasMany" es una cadena con el nombre de la clase ',(0,t.kt)("strong",{parentName:"p"},'"Subcategoria"'),"."),(0,t.kt)("p",null,"Esta relaci\xf3n permite acceder a las subcategor\xedas de una categor\xeda dada usando el m\xe9todo ",(0,t.kt)("strong",{parentName:"p"},'"subcategorias"'),", por ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"$categoria = App\\Models\\Categoria::find(1);\n\nforeach ($categoria->subcategorias as $subcategoria) {\n    echo $subcategoria->nombre;\n}\n")),(0,t.kt)("p",{align:"center"},(0,t.kt)("img",{src:"/img/categoria.png",alt:"Descripci\xf3n de la imagen"})),"Este c\xf3digo busca una categor\xeda con ID 1 y luego imprime el nombre de todas sus subcategor\xedas.",(0,t.kt)("h3",{id:"subcategor\xeda"},"\ud83d\udcc7Subcategor\xeda"),(0,t.kt)("p",null,"Ejecute el siguiente comando en su terminal:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:model Subcategoria\n")),(0,t.kt)("p",null,"Una vez ejecutado el comando, dir\xedjase a la carpeta ",(0,t.kt)("strong",{parentName:"p"},"App/Models")," y edite el fichero ",(0,t.kt)("strong",{parentName:"p"},'"Subcategoria"'),". Substituya el c\xf3digo generado por el siguiente c\xf3digo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app\\Models\\Subcategoria.php"',title:'"app\\Models\\Subcategoria.php"'},"<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Subcategoria extends Model\n{\n    use HasFactory;\n\n    protected $fillable = [\n        'nombre',\n        'descripcion',\n        'categoria_id'\n    ];\n\n    public function categoria(){\n        return $this->belongsTo('App\\Models\\Categoria');\n    }\n\n    public function productos(){\n        return $this->hasMany('App\\Models\\Producto');\n    }\n}\n")),(0,t.kt)("p",null,"El modelo utiliza la funci\xf3n ",(0,t.kt)("strong",{parentName:"p"},'"HasFactory"')," que permite crear f\xe1bricas de objetos para probar y realizar pruebas en el modelo."),(0,t.kt)("p",null,'La propiedad "$fillable" define los campos que se pueden asignar masivamente en la base de datos y est\xe1 compuesta por los campos ',(0,t.kt)("strong",{parentName:"p"},'"nombre"'),", ",(0,t.kt)("strong",{parentName:"p"},'"descripci\xf3n"')," y ",(0,t.kt)("strong",{parentName:"p"},'"categoria_id"'),"."),(0,t.kt)("p",null,'La funci\xf3n "categoria()" es una relaci\xf3n ',(0,t.kt)("strong",{parentName:"p"},'"belongsTo"'),' que indica que una subcategor\xeda pertenece a una sola categoria. La relaci\xf3n se establece con el modelo "Categoria" de la aplicaci\xf3n.'),(0,t.kt)("p",null,"La funci\xf3n ",(0,t.kt)("strong",{parentName:"p"},'"productos()"')," es una relaci\xf3n ",(0,t.kt)("strong",{parentName:"p"},'"hasMany"')," que indica que una subcategor\xeda puede tener varios productos asociados a ella. La relaci\xf3n se establece con el modelo ",(0,t.kt)("em",{parentName:"p"},'"Producto"')," de la aplicaci\xf3n."),(0,t.kt)("h3",{id:"producto"},"\ud83d\udcc7Producto"),(0,t.kt)("p",null,"Ejecute el siguiente comando en su terminal:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:model Producto\n")),(0,t.kt)("p",null,"Una vez ejecutado el comando, dir\xedjase a la carpeta ",(0,t.kt)("strong",{parentName:"p"},"App/Models")," y edite el fichero ",(0,t.kt)("strong",{parentName:"p"},'"Producto"'),". Substituya el c\xf3digo generado por el siguiente c\xf3digo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app\\Models\\Producto.php"',title:'"app\\Models\\Producto.php"'},"<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Producto extends Model\n{\n    use HasFactory;\n    protected $table=\"productos\";\n    \n\n    protected $fillable = [\n        'nombre',\n        'descripcion',\n        'precio',\n        'imagen',\n        'subcategoria_id',\n        'iva_id',\n        'marca_id'\n    ];\n\n    public function subcategoria(){\n        return $this->belongsTo('App\\Models\\Subcategoria');\n    }\n\n    public function iva(){\n        return $this->belongsTo('App\\Models\\Iva');\n    }\n    public function marca(){\n        return $this->belongsTo('App\\Models\\Marca');\n    }\n    public function oferta(){\n        return $this->belongsTo('App\\Models\\Oferta');\n    }\n    //Relacion muchos a muchos\n    public function proveedores(){\n        return $this->belongsToMany(Producto::class);\n    }\n}\n")),(0,t.kt)("p",null,"Este este c\xf3digo de un modelo ",(0,t.kt)("strong",{parentName:"p"},'"Producto"')," en Laravel utilizando Eloquent. En este c\xf3digo se establecen relaciones uno a muchos con los modelos ",(0,t.kt)("strong",{parentName:"p"},'"Subcategoria", "Iva", "Marca"')," y ",(0,t.kt)("strong",{parentName:"p"},'"Oferta"'),", as\xed como tambi\xe9n una relaci\xf3n muchos a muchos con el modelo ",(0,t.kt)("strong",{parentName:"p"},'"Proveedor"'),"."),(0,t.kt)("p",null,'La propiedad "table" especifica el nombre de la tabla en la base de datos que almacenar\xe1 los datos de los productos. La propiedad ',(0,t.kt)("strong",{parentName:"p"},'"fillable"')," especifica los campos que pueden ser rellenados y almacenados en la base de datos cuando se crea o actualiza un producto."),(0,t.kt)("p",null,"Los m\xe9todos ",(0,t.kt)("strong",{parentName:"p"},'"subcategoria"'),", ",(0,t.kt)("strong",{parentName:"p"},'"iva"'),", ",(0,t.kt)("strong",{parentName:"p"},'"marca"')," y ",(0,t.kt)("strong",{parentName:"p"},'"oferta"')," definen las relaciones uno a muchos con los modelos correspondientes. Por ejemplo, el m\xe9todo ",(0,t.kt)("strong",{parentName:"p"},'"subcategoria"')," devuelve una instancia del modelo ",(0,t.kt)("strong",{parentName:"p"},'"Subcategoria"')," al que pertenece un producto."),(0,t.kt)("p",null,"El m\xe9todo ",(0,t.kt)("strong",{parentName:"p"},'"proveedores"')," define la relaci\xf3n muchos a muchos con el modelo ",(0,t.kt)("strong",{parentName:"p"},'"Proveedor"'),", que permite que un producto tenga muchos proveedores y que un proveedor pueda proveer muchos productos."),(0,t.kt)("p",null,"Estos m\xe9todos se utilizan para acceder a los datos relacionados, por ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"$product = Producto::find(1);\n$subcategory = $product->subcategoria;\n$iva = $product->iva;\n$brand = $product->marca;\n$offer = $product->oferta;\n$suppliers = $product->proveedores;\n")),(0,t.kt)("h3",{id:"iva"},"\ud83d\udcc7Iva"),(0,t.kt)("p",null,"Ejecute el siguiente comando en su terminal:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:model Iva\n")),(0,t.kt)("p",null,"Una vez ejecutado el comando, dir\xedjase a la carpeta ",(0,t.kt)("strong",{parentName:"p"},"App/Models")," y edite el fichero ",(0,t.kt)("strong",{parentName:"p"},'"Iva"'),". Substituya el c\xf3digo generado por el siguiente c\xf3digo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app\\Models\\Iva.php"',title:'"app\\Models\\Iva.php"'},"<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Iva extends Model\n{\n    use HasFactory;\n\n    protected $fillable = ['tanto_porciento','nombre'];\n    \n    public function productos(){\n        return $this->hasMany('App\\Models\\Producto');\n        \n    }\n}\n")),(0,t.kt)("p",null,"Este es un ejemplo de c\xf3digo de un modelo ",(0,t.kt)("strong",{parentName:"p"},'"Iva"')," en Laravel utilizando Eloquent. En este c\xf3digo se establece una relaci\xf3n uno a muchos con el modelo ",(0,t.kt)("strong",{parentName:"p"},'"Producto"'),"."),(0,t.kt)("p",null,"La propiedad ",(0,t.kt)("strong",{parentName:"p"},'"fillable"')," especifica los campos que pueden ser rellenados y almacenados en la base de datos cuando se crea o actualiza un registro de iva."),(0,t.kt)("p",null,"El m\xe9todo ",(0,t.kt)("strong",{parentName:"p"},'"productos"')," define la relaci\xf3n uno a muchos con el modelo ",(0,t.kt)("strong",{parentName:"p"},'"Producto"'),". Este m\xe9todo devuelve una colecci\xf3n de todos los productos que pertenecen a un registro de iva."),(0,t.kt)("p",null,"Estos m\xe9todos se utilizan para acceder a los datos relacionados, por ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"$iva = Iva::find(1);\n$products = $iva->productos;\n")),(0,t.kt)("h3",{id:"marca"},"\ud83d\udcc7Marca"),(0,t.kt)("p",null,"Ejecute el siguiente comando en su terminal:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:model Marca\n")),(0,t.kt)("p",null,"Una vez ejecutado el comando, dir\xedjase a la carpeta ",(0,t.kt)("strong",{parentName:"p"},"App/Models")," y edite el fichero ",(0,t.kt)("strong",{parentName:"p"},'"Marca"'),". Substituya el c\xf3digo generado por el siguiente c\xf3digo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app\\Models\\Marca.php"',title:'"app\\Models\\Marca.php"'},"<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Marca extends Model\n{\n    protected $fillable = ['nombre'];\n    use HasFactory;\n\n    function productos(){\n        return $this->hasMany('App\\Models\\Producto');    \n    }\n\n}\n")),(0,t.kt)("p",null,"Este es un ejemplo de c\xf3digo de un modelo ",(0,t.kt)("strong",{parentName:"p"},'"Marca"')," en Laravel utilizando Eloquent. En este c\xf3digo se establece una relaci\xf3n uno a muchos con el modelo ",(0,t.kt)("strong",{parentName:"p"},'"Producto"'),"."),(0,t.kt)("p",null,"La propiedad ",(0,t.kt)("strong",{parentName:"p"},'"fillable"')," especifica los campos que pueden ser rellenados y almacenados en la base de datos cuando se crea o actualiza un registro de marca."),(0,t.kt)("p",null,"El m\xe9todo ",(0,t.kt)("strong",{parentName:"p"},'"productos"')," define la relaci\xf3n uno a muchos con el modelo ",(0,t.kt)("strong",{parentName:"p"},'"Producto"'),". Este m\xe9todo devuelve una colecci\xf3n de todos los productos que pertenecen a un registro de marca."),(0,t.kt)("p",null,"Estos m\xe9todos se utilizan para acceder a los datos relacionados, por ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"$marca = Marca::find(1);\n$products = $marca->productos;\n")),(0,t.kt)("h3",{id:"oferta"},"\ud83d\udcc7Oferta"),(0,t.kt)("p",null,"Ejecute el siguiente comando en su terminal:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:model Oferta\n")),(0,t.kt)("p",null,"Una vez ejecutado el comando, dir\xedjase a la carpeta ",(0,t.kt)("strong",{parentName:"p"},"App/Models")," y edite el fichero ",(0,t.kt)("strong",{parentName:"p"},'"Oferta"'),". Substituya el c\xf3digo generado por el siguiente c\xf3digo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app\\Models\\Oferta.php"',title:'"app\\Models\\Oferta.php"'},"<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Oferta extends Model\n{\n    use HasFactory;\n    protected $fillable = [\n        'precio',\n        'descripcion',\n        'fecha_ini',\n        'fecha_fin',\n        'producto_id'\n    ];\n\n    function productos(){\n        return $this->hasMany('App\\Models\\Producto');    \n    }\n}\n")),(0,t.kt)("p",null,"Este es un ejemplo de c\xf3digo de un modelo ",(0,t.kt)("strong",{parentName:"p"},'"Oferta"'),' en Laravel utilizando Eloquent. En este c\xf3digo se establece una relaci\xf3n uno a muchos con el modelo "Producto".'),(0,t.kt)("p",null,"La propiedad ",(0,t.kt)("strong",{parentName:"p"},'"fillable"')," especifica los campos que pueden ser rellenados y almacenados en la base de datos cuando se crea o actualiza un registro de oferta."),(0,t.kt)("p",null,"El m\xe9todo ",(0,t.kt)("strong",{parentName:"p"},'"productos"')," define la relaci\xf3n uno a muchos con el modelo ",(0,t.kt)("strong",{parentName:"p"},'"Producto"'),". Este m\xe9todo devuelve una colecci\xf3n de todos los productos que pertenecen a un registro de oferta."),(0,t.kt)("p",null,"Estos m\xe9todos se utilizan para acceder a los datos relacionados, por ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"$oferta = Oferta::find(1);\n$products = $oferta->productos;\n")),(0,t.kt)("h3",{id:"provincia"},"\ud83d\udcc7Provincia"),(0,t.kt)("p",null,"Ejecute el siguiente comando en su terminal:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:model Provincia\n")),(0,t.kt)("p",null,"Una vez ejecutado el comando, dir\xedjase a la carpeta ",(0,t.kt)("strong",{parentName:"p"},"App/Models")," y edite el fichero ",(0,t.kt)("strong",{parentName:"p"},'"Provincia"'),". Substituya el c\xf3digo generado por el siguiente c\xf3digo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app\\Models\\Provincia.php"',title:'"app\\Models\\Provincia.php"'},"<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Provincia extends Model\n{\n    protected $fillable = [\n        'codigo',\n        'nombre'\n       \n    ];\n    use HasFactory;\n}\n")),(0,t.kt)("p",null,"Este es un modelo de Laravel para una tabla de ",(0,t.kt)("strong",{parentName:"p"},'"Provincias"'),". La clase extiende de ",(0,t.kt)("strong",{parentName:"p"},"Illuminate\\Database\\Eloquent\\Model"),", lo que significa que est\xe1 siendo utilizada como un modelo Eloquent."),(0,t.kt)("p",null,"El atributo ",(0,t.kt)("strong",{parentName:"p"},"$fillable")," especifica los campos que pueden ser asignados masivamente (por ejemplo, cuando se crea o se actualiza un registro en la tabla de ",(0,t.kt)("strong",{parentName:"p"},'"Provincias"'),")."),(0,t.kt)("p",null,"El trait HasFactory proporciona una forma conveniente de crear nuevos registros en la tabla utilizando f\xe1bricas, lo que puede ser \xfatil en desarrollo y pruebas."),(0,t.kt)("p",null,"Con este modelo, puedes interactuar con la tabla ",(0,t.kt)("strong",{parentName:"p"},'"provincias"')," en la base de datos usando las capacidades de Laravel. Por ejemplo, puedes consultar registros existentes o crear nuevos registros con una llamada simple al modelo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"$provincia = new Provincia();\n$provincia->codigo = '01';\n$provincia->nombre = 'Buenos Aires';\n$provincia->save();\n")),(0,t.kt)("p",null,'Tambi\xe9n puedes consultar registros existentes de la tabla de "Provincias" de la siguiente manera:'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'$provincias = Provincia::all();\nEsto te dar\xe1 una colecci\xf3n de todos los registros en la tabla "provincias".\n')),(0,t.kt)("h3",{id:"poblacion"},"\ud83d\udcc7Poblacion"),(0,t.kt)("p",null,"Ejecute el siguiente comando en su terminal:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:model Poblacion\n")),(0,t.kt)("p",null,"Una vez ejecutado el comando, dir\xedjase a la carpeta ",(0,t.kt)("strong",{parentName:"p"},"App/Models")," y edite el fichero ",(0,t.kt)("strong",{parentName:"p"},'"Poblacion"'),". Substituya el c\xf3digo generado por el siguiente c\xf3digo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app\\Models\\Poblacion.php"',title:'"app\\Models\\Poblacion.php"'},"<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Poblacion extends Model\n{\n    use HasFactory;\n    protected $table=\"poblaciones\";\n    protected $fillable = ['codigo','nombre'];\n    \n}\n")),(0,t.kt)("p",null,"Este es una definici\xf3n de clase PHP para un modelo Eloquent en el marco de trabajo Laravel. La clase se llama ",(0,t.kt)("strong",{parentName:"p"},'"Poblacion"')," y extiende la clase ",(0,t.kt)("strong",{parentName:"p"},'"Model"'),"\nincorporada. La clase representa una tabla de base de datos ",(0,t.kt)("strong",{parentName:"p"},'"poblaciones"')," y especifica qu\xe9 columnas en esa tabla se pueden llenar con datos (la propiedad ",(0,t.kt)("strong",{parentName:"p"},'"fillable"'),") - en este caso, ",(0,t.kt)("strong",{parentName:"p"},'"codigo"')," y ",(0,t.kt)("strong",{parentName:"p"},'"nombre"'),"."),(0,t.kt)("h3",{id:"proveedor"},"\ud83d\udcc7Proveedor"),(0,t.kt)("p",null,"Ejecute el siguiente comando en su terminal:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:model Proveedor\n")),(0,t.kt)("p",null,"Una vez ejecutado el comando, dir\xedjase a la carpeta ",(0,t.kt)("strong",{parentName:"p"},"App/Models")," y edite el fichero ",(0,t.kt)("strong",{parentName:"p"},'"Proveedor"'),". Substituya el c\xf3digo generado por el siguiente c\xf3digo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app\\Models\\Proveedor.php"',title:'"app\\Models\\Proveedor.php"'},"<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Proveedor extends Model\n{\n    protected $table=\"proveedores\";\n    use HasFactory;\n    protected $fillable = [\n        'nif',\n        'nombre',\n        'cod_postal',\n        'cod_provincia',\n        'calle',\n        'numero',\n        'notas'\n    ];\n    public function productos(){\n        return $this->BelongsToMany('App\\Models\\Producto');\n    }\n}\n")),(0,t.kt)("p",null,"Este es un modelo de Laravel para una tabla de ",(0,t.kt)("strong",{parentName:"p"},'"Proveedores"'),". La clase extiende de Illuminate\\Database\\Eloquent\\Model, lo que significa que est\xe1 siendo utilizada como un modelo Eloquent."),(0,t.kt)("p",null,"El atributo ",(0,t.kt)("strong",{parentName:"p"},"$table")," especifica el nombre de la tabla en la base de datos a la que est\xe1 asociada este modelo."),(0,t.kt)("p",null,"El atributo ",(0,t.kt)("strong",{parentName:"p"},"$fillable"),' especifica los campos que pueden ser asignados masivamente (por ejemplo, cuando se crea o se actualiza un registro en la tabla de "Proveedores").'),(0,t.kt)("p",null,"El trait HasFactory proporciona una forma conveniente de crear nuevos registros en la tabla utilizando f\xe1bricas, lo que puede ser \xfatil en desarrollo y pruebas."),(0,t.kt)("p",null,"El m\xe9todo productos define una relaci\xf3n ",(0,t.kt)("strong",{parentName:"p"},'"muchos a muchos"')," con la tabla ",(0,t.kt)("strong",{parentName:"p"},'"Productos"'),". Esta relaci\xf3n significa que un proveedor puede proporcionar m\xfaltiples productos y un producto puede ser proporcionado por m\xfaltiples proveedores."),(0,t.kt)("p",null,"Con este modelo, puedes interactuar con la tabla ",(0,t.kt)("strong",{parentName:"p"},'"proveedores"')," en la base de datos usando las capacidades de Laravel. Por ejemplo, puedes consultar registros existentes o crear nuevos registros con una llamada simple al modelo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"$proveedor = new Proveedor();\n$proveedor->nif = '12345678A';\n$proveedor->nombre = 'Proveedor S.A.';\n$proveedor->cod_postal = '1234';\n$proveedor->cod_provincia = '01';\n$proveedor->calle = 'Calle 1';\n$proveedor->numero = '1';\n$proveedor->notas = 'Notas adicionales';\n$proveedor->save();\n")),(0,t.kt)("p",null,'Tambi\xe9n puedes consultar registros existentes de la tabla de "Proveedores" de la siguiente manera:'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"$proveedores = Proveedor::all();\n")),(0,t.kt)("p",null,'Esto te dar\xe1 una colecci\xf3n de todos los registros en la tabla "proveedores". Adem\xe1s, puedes acceder a los productos asociados con un proveedor determinado de la siguiente manera:'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"$proveedor = Proveedor::find(1);\n$productos = $proveedor->productos;\n")),(0,t.kt)("p",null,"Esto te dar\xe1 una colecci\xf3n de todos los productos asociados con el proveedor con id 1."))}u.isMDXComponent=!0}}]);