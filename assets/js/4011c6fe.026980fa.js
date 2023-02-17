"use strict";(self.webpackChunkapi_laravel_doc=self.webpackChunkapi_laravel_doc||[]).push([[222],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>b});var r=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function t(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d(e,a){if(null==e)return{};var n,r,o=function(e,a){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var a=r.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):t(t({},a),e)),n},c=function(e){var a=i(e.components);return r.createElement(l.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return n?r.createElement(b,t(t({ref:a},c),{},{components:n})):r.createElement(b,t({ref:a},c))}));function b(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var s=n.length,t=new Array(s);t[0]=m;var d={};for(var l in a)hasOwnProperty.call(a,l)&&(d[l]=a[l]);d.originalType=e,d[u]="string"==typeof e?e:o,t[1]=d;for(var i=2;i<s;i++)t[i]=n[i];return r.createElement.apply(null,t)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1557:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const s={sidebar_position:5},t="\ud83d\udcd6Rellenando la BB.DD",d={unversionedId:"BacKend/seeders",id:"BacKend/seeders",title:"\ud83d\udcd6Rellenando la BB.DD",description:"Seeders",source:"@site/docs/BacKend/seeders.md",sourceDirName:"BacKend",slug:"/BacKend/seeders",permalink:"/api-laravel-doc/docs/BacKend/seeders",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/BacKend/seeders.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd6Creando los modelos",permalink:"/api-laravel-doc/docs/BacKend/modelos"},next:{title:"Creaci\xf3n de una API REST en Laravel",permalink:"/api-laravel-doc/docs/category/creaci\xf3n-de-una-api-rest-en-laravel"}},l={},i=[{value:"Seeders",id:"seeders",level:2},{value:"\ud83d\udcc7\xbfQu\xe9 es un seeder?",id:"qu\xe9-es-un-seeder",level:3},{value:"\ud83d\udcc7\xbfC\xf3mo se crea un seeder?",id:"c\xf3mo-se-crea-un-seeder",level:3},{value:"\ud83d\udcc7ivaSeeder",id:"ivaseeder",level:3},{value:"\ud83d\udcc7marcaSeeder",id:"marcaseeder",level:3},{value:"\ud83d\udcc7poblacionSeeder",id:"poblacionseeder",level:3},{value:"\ud83d\udcc7provinciaSeeder",id:"provinciaseeder",level:3},{value:"\ud83d\udcc7Ejecuci\xf3n masiva de los Seeders",id:"ejecuci\xf3n-masiva-de-los-seeders",level:3}],c={toc:i},u="wrapper";function p(e){let{components:a,...s}=e;return(0,o.kt)(u,(0,r.Z)({},c,s,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rellenando-la-bbdd"},"\ud83d\udcd6Rellenando la BB.DD"),(0,o.kt)("h2",{id:"seeders"},"Seeders"),(0,o.kt)("h3",{id:"qu\xe9-es-un-seeder"},"\ud83d\udcc7\xbfQu\xe9 es un seeder?"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Seeder",src:n(5649).Z,width:"600",height:"300"})),(0,o.kt)("p",null,"Un seeder en Laravel es una clase que se utiliza para poblar una base de datos con datos de prueba. Los seeders son \xfatiles para probar aplicaciones, crear datos de prueba para desarrolladores y para personalizar una base de datos con informaci\xf3n espec\xedfica."),(0,o.kt)("p",null,"Cada seeder en Laravel extiende de la clase ",(0,o.kt)("strong",{parentName:"p"},"Illuminate\\Database\\Seeder")," y contiene un m\xe9todo run que se ejecuta cuando se llama el comando ",(0,o.kt)("strong",{parentName:"p"},"php artisan db:seed"),". Dentro de este m\xe9todo, puedes escribir cualquier l\xf3gica que necesites para insertar datos en tu base de datos."),(0,o.kt)("p",null,"Puedes crear varios seeders y ejecutarlos todos o solo algunos seg\xfan tus necesidades. Al ejecutar un seeder, sus datos se insertan en la base de datos de forma autom\xe1tica, lo que te permite rellenar tus tablas de forma r\xe1pida y sencilla."),(0,o.kt)("h3",{id:"c\xf3mo-se-crea-un-seeder"},"\ud83d\udcc7\xbfC\xf3mo se crea un seeder?"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/assets/images/bd3.jpg",alt:"Descripci\xf3n de la imagen",className:"image-center"})),(0,o.kt)("p",null,"Para crear un seeder en Laravel, puedes usar el siguiente comando de Artisan:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:seeder NombreSeeder\n")),(0,o.kt)("p",null,"Donde NombreSeeder es el nombre que le quieres dar a tu seeder. Este comando crear\xe1 un archivo en la carpeta database/seeds con el nombre que le hayas especificado y con una estructura b\xe1sica de c\xf3digo para que puedas empezar a escribir tu l\xf3gica de seeding."),(0,o.kt)("p",null,"Aqu\xed tienes un ejemplo b\xe1sico de c\xf3digo para un seeder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<?php\nuse Illuminate\\Database\\Seeder;\nuse Illuminate\\Support\\Facades\\DB;\n\nclass NombreSeeder extends Seeder\n{\n    /**\n     * Run the database seeds.\n     *\n     * @return void\n     */\n    public function run()\n    {\n        DB::table('table_name')->insert([\n            'column1' => 'value1',\n            'column2' => 'value2',\n            // ...\n        ]);\n    }\n}\n?>\n")),(0,o.kt)("p",null,"Puedes agregar m\xe1s datos o l\xf3gica para rellenar tus tablas de forma m\xe1s compleja."),(0,o.kt)("p",null,"Para ejecutar los seeders, puedes usar el siguiente comando:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan db:seed\n")),(0,o.kt)("p",null,"Tambi\xe9n puedes ejecutar un seeder espec\xedfico utilizando el siguiente comando:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan db:seed --class=NombreSeeder\n")),(0,o.kt)("h3",{id:"ivaseeder"},"\ud83d\udcc7ivaSeeder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n\nnamespace Database\\Seeders;\nnamespace Database\\Seeders;\n\nuse Illuminate\\Database\\Console\\Seeds\\WithoutModelEvents;\nuse Illuminate\\Database\\Seeder;\nuse Illuminate\\Support\\Facades\\DB;\n\nclass IvaSeeder extends Seeder\n{\n    /**\n     * Run the database seeds.\n     *\n     * @return void\n     */\n    \n    public function run()\n    {\n        $data=[\n            [\n                'tanto_porciento'=>4,\n                'nombre'=>\"Super reducido\"\n            ],\n            [\n                'tanto_porciento'=>10,\n                'nombre'=>\"Reducido\"\n            ],\n            [\n                'tanto_porciento'=>21,\n                'nombre'=>\"General\"\n            ]\n            ];\n            DB::table('ivas')->insert($data);\n    }\n}\n")),(0,o.kt)("p",null,"Este c\xf3digo es un script de semilla (seeder) en PHP utilizando el marco Laravel. La clase ",(0,o.kt)("strong",{parentName:"p"},"IvaSeeder"),' extiende la clase base Seeder y define un m\xe9todo run() que inserta datos en una tabla llamada "ivas".'),(0,o.kt)("p",null,"El m\xe9todo run() primero crea una matriz de datos que contiene tres elementos, cada uno de los cuales representa un registro con un tanto por ciento de IVA y un nombre asociado. Luego, se usa la funci\xf3n ",(0,o.kt)("strong",{parentName:"p"},"DB :: table ('ivas') -> insert ($ data)"),' para insertar estos datos en la tabla "ivas".'),(0,o.kt)("p",null,'La clase IvaSeeder se puede ejecutar utilizando el comando Artisan de Laravel "php artisan db:seed --class=IvaSeeder" para poblar la tabla "ivas" con los datos definidos en el m\xe9todo run().'),(0,o.kt)("h3",{id:"marcaseeder"},"\ud83d\udcc7marcaSeeder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="database\\seeders\\MarcaSeeder.php"',title:'"database\\seeders\\MarcaSeeder.php"'},"<?php\n\nnamespace Database\\Seeders;\n\nuse Illuminate\\Database\\Console\\Seeds\\WithoutModelEvents;\nuse Illuminate\\Database\\Seeder;\nuse Illuminate\\Support\\Facades\\DB;\n\n\nclass MarcaSeeder extends Seeder\n{\n    /**\n     * Run the database seeds.\n     *\n     * @return void\n     */\n    public function run()\n    {\n        $data=[\n       \n        [\n            \n            'nombre'=>\"SAMSUNG\"\n        ],\n        [\n            \n            'nombre'=>\"XIAOMI\"\n        ],\n        [\n            \n            'nombre'=>\"SONY\"\n        ],\n        [\n            \n            'nombre'=>\"ACER\"\n        ],\n        [\n            \n            'nombre'=>\"LG\"\n        ],\n        [\n            \n            'nombre'=>\"LENOVO\"\n        ],\n        [\n            \n            'nombre'=>\"CORBERO\"\n        ],\n        [\n            \n            'nombre'=>\"PHILIPS\"\n        ],\n        [\n            \n            'nombre'=>\"APPLE\"\n        ],\n        [\n            \n            'nombre'=>\"AEG\"\n        ],\n       \n       \n        ];\n        DB::table('marcas')->insert($data);\n        //\n    }\n}\n")),(0,o.kt)("p",null,'Este c\xf3digo es un script de semilla (seeder) en PHP utilizando el marco Laravel. La clase MarcaSeeder extiende la clase base Seeder y define un m\xe9todo run() que inserta datos en una tabla llamada "marcas".'),(0,o.kt)("p",null,"El m\xe9todo run() primero crea una matriz de datos que contiene diez elementos, cada uno de los cuales representa un registro con un nombre de marca. Luego, se usa la funci\xf3n ",(0,o.kt)("strong",{parentName:"p"},"DB :: table ('marcas') -> insert ($ data)"),' para insertar estos datos en la tabla "marcas".'),(0,o.kt)("p",null,"La clase MarcaSeeder se puede ejecutar utilizando el comando Artisan de Laravel ",(0,o.kt)("strong",{parentName:"p"},'"php artisan db:seed --class=MarcaSeeder"'),' para poblar la tabla "marcas" con los datos definidos en el m\xe9todo run().'),(0,o.kt)("h3",{id:"poblacionseeder"},"\ud83d\udcc7poblacionSeeder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n\nnamespace Database\\Seeders;\n\nuse App\\Models\\Poblacion;\nuse Illuminate\\Database\\Console\\Seeds\\WithoutModelEvents;\nuse Illuminate\\Database\\Seeder;\nuse Illuminate\\Support\\Facades\\DB;\nuse \\Illuminate\\Support\\Facades\\File;\n\nclass PoblacionSeeder extends Seeder\n{\n    /**\n     * Run the database seeds.\n     *\n     * @return void\n     */\n    public function run()\n    {\n        DB::table('poblaciones')->delete();\n        $json = File::get(\"database/data/poblaciones.json\");\n        $data = json_decode($json);\n        foreach ($data as $obj) {\n            Poblacion::create(array(\n                \n                'codigo' => $obj->codigo,\n                'provincia_cod'=>substr($obj->codigo,0,2),\n                'nombre' => $obj->nombre,\n            ));\n            print \"Insertando poblaci\xf3n -> \".$obj->codigo.\" \".$obj->nombre.\"\\n\";\n        }\n\n    }\n}\n")),(0,o.kt)("p",null,'Este c\xf3digo es un script de semilla (seeder) en PHP utilizando el marco Laravel. La clase PoblacionSeeder extiende la clase base Seeder y define un m\xe9todo run() que inserta datos en una tabla llamada "poblaciones".'),(0,o.kt)("p",null,'El m\xe9todo run() primero elimina todos los datos existentes en la tabla "poblaciones" usando DB :: table (\'poblaciones\') -> delete (). Luego, se carga un archivo JSON en el servidor llamado "poblaciones.json" usando la funci\xf3n File :: get ("database / data / poblaciones.json"). La funci\xf3n json_decode ($ json) se utiliza para convertir el contenido del archivo JSON en un objeto PHP.'),(0,o.kt)("p",null,'A continuaci\xf3n, se itera sobre cada objeto dentro de $ data y se usa el m\xe9todo create () de la clase Poblacion para insertar los datos en la tabla "poblaciones". Cada registro contiene un c\xf3digo, una provincia_cod (el c\xf3digo de provincia, que se obtiene cortando los primeros 2 caracteres del c\xf3digo), y un nombre.'),(0,o.kt)("p",null,"Cada vez que se inserta un registro, se muestra un mensaje de impresi\xf3n en la consola indicando el registro que se est\xe1 insertando."),(0,o.kt)("p",null,'La clase PoblacionSeeder se puede ejecutar utilizando el comando Artisan de Laravel "php artisan db:seed --class=PoblacionSeeder" para poblar la tabla "poblaciones" con los datos definidos en el archivo "poblaciones.json".'),(0,o.kt)("h3",{id:"provinciaseeder"},"\ud83d\udcc7provinciaSeeder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<?php\n\nnamespace Database\\Seeders;\n\nuse Illuminate\\Database\\Console\\Seeds\\WithoutModelEvents;\nuse Illuminate\\Database\\Seeder;\nuse Illuminate\\Support\\Facades\\DB;\n\nclass ProvinciaSeeder extends Seeder\n{\n    /**\n     * Run the database seeds.\n     *\n     * @return vocodigo\n     */\n    public function run()\n    {\n        //\n        $provincias = array (\n            array (\'codigo\' => "01", "nombre" => "ALAVA"),\n            array (\'codigo\' => "02", "nombre" => "ALBACETE"),\n            array (\'codigo\' => "03", "nombre" => "ALICANTE"),\n            array (\'codigo\' => "04", "nombre" => "ALMERIA"),\n            array (\'codigo\' => "33", "nombre" => "ASTURIAS"),\n            array (\'codigo\' => "05", "nombre" => "AVILA"),\n            array (\'codigo\' => "06", "nombre" => "BADAJOZ"),\n            array (\'codigo\' => "08", "nombre" => "BARCELONA"),\n            array (\'codigo\' => "09", "nombre" => "BURGOS"),\n            array (\'codigo\' => "10", "nombre" => "CACERES"),\n            array (\'codigo\' => "11", "nombre" => "CADIZ"),\n            array (\'codigo\' => "39", "nombre" => "CANTABRIA"),\n            array (\'codigo\' => "12", "nombre" => "CASTELLON"),\n            array (\'codigo\' => "51", "nombre" => "CEUTA"),\n            array (\'codigo\' => "13", "nombre" => "CIUDAD REAL"),\n            array (\'codigo\' => "14", "nombre" => "CORDOBA"),\n            array (\'codigo\' => "15", "nombre" => "CORU\xd1A"),\n            array (\'codigo\' => "16", "nombre" => "CUENCA"),\n            array (\'codigo\' => "17", "nombre" => "GIRONA"),\n            array (\'codigo\' => "18", "nombre" => "GRANADA"),\n            array (\'codigo\' => "19", "nombre" => "GUADALAJARA"),\n            array (\'codigo\' => "20", "nombre" => "GUIPUZCOA"),\n            array (\'codigo\' => "21", "nombre" => "HUELVA"),\n            array (\'codigo\' => "22", "nombre" => "HUESCA"),\n            array (\'codigo\' => "07", "nombre" => "ILLES BALEARS"),\n            array (\'codigo\' => "23", "nombre" => "JAEN"),\n            array (\'codigo\' => "24", "nombre" => "LEON"),\n            array (\'codigo\' => "25", "nombre" => "LLEcodigoA"),\n            array (\'codigo\' => "27", "nombre" => "LUGO"),\n            array (\'codigo\' => "28", "nombre" => "MADRID"),\n            array (\'codigo\' => "29", "nombre" => "MALAGA"),\n            array (\'codigo\' => "52", "nombre" => "MELILLA"),\n            array (\'codigo\' => "30", "nombre" => "MURCIA"),\n            array (\'codigo\' => "31", "nombre" => "NAVARRA"),\n            array (\'codigo\' => "32", "nombre" => "OURENSE"),\n            array (\'codigo\' => "34", "nombre" => "PALENCIA"),\n            array (\'codigo\' => "35", "nombre" => "PALMAS, LAS"),\n            array (\'codigo\' => "36", "nombre" => "PONTEVEDRA"),\n            array (\'codigo\' => "26", "nombre" => "RIOJA, LA"),\n            array (\'codigo\' => "37", "nombre" => "SALAMANCA"),\n            array (\'codigo\' => "38", "nombre" => "SANTA CRUZ DE TENERIFE"),\n            array (\'codigo\' => "40", "nombre" => "SEGOVIA"),\n            array (\'codigo\' => "41", "nombre" => "SEVILLA"),\n            array (\'codigo\' => "42", "nombre" => "SORIA"),\n            array (\'codigo\' => "43", "nombre" => "TARRAGONA"),\n            array (\'codigo\' => "44", "nombre" => "TERUEL"),\n            array (\'codigo\' => "45", "nombre" => "TOLEDO"),\n            array (\'codigo\' => "46", "nombre" => "VALENCIA"),\n            array (\'codigo\' => "47", "nombre" => "VALLADOLID"),\n            array (\'codigo\' => "48", "nombre" => "VIZCAYA"),\n            array (\'codigo\' => "49", "nombre" => "ZAMORA"),\n            array (\'codigo\' => "50", "nombre" => "ZARAGOZA")\n       );\n       print "Insertando provincias\\n";\n       DB::table(\'provincias\')->insert($provincias);\n    }\n}\n')),(0,o.kt)("p",null,"Este es un ejemplo de un Seeder en Laravel que inserta datos en una tabla llamada ",(0,o.kt)("strong",{parentName:"p"},'"provincias"'),'. El Seeder utiliza un array que contiene informaci\xf3n sobre las provincias y luego inserta ese array en la tabla utilizando el m\xe9todo "insert" de la clase "DB". Para ejecutar este Seeder, puedes utilizar el comando ',(0,o.kt)("strong",{parentName:"p"},'"php artisan db:seed --class=ProvinciaSeeder"'),"."),(0,o.kt)("h3",{id:"ejecuci\xf3n-masiva-de-los-seeders"},"\ud83d\udcc7Ejecuci\xf3n masiva de los Seeders"),(0,o.kt)("p",null,"Para ejecutar m\xfaltiples seeders en Laravel, puedes utilizar el comando de ",(0,o.kt)("em",{parentName:"p"},"Artisan db:seed"),". Este comando se utiliza para llenar la base de datos con datos iniciales y se ejecuta en la consola."),(0,o.kt)("p",null,"Por defecto, el comando ",(0,o.kt)("strong",{parentName:"p"},"db:seed")," ejecutar\xe1 todos los seeders registrados en el archivo DatabaseSeeder.php en el directorio database/seeds. El archivo ",(0,o.kt)("strong",{parentName:"p"},"DatabaseSeeder.php")," deber\xeda contener una clase que extienda de ",(0,o.kt)("strong",{parentName:"p"},"Illuminate\\Database\\Seeder")," y que llame a los seeders individuales a trav\xe9s del m\xe9todo call."),(0,o.kt)("p",null,"Aqu\xed esta el fichero ",(0,o.kt)("strong",{parentName:"p"},"DatabaseSeeder.php")," que ejecuta todo los seeders:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n\nnamespace Database\\Seeders;\n\nuse Illuminate\\Database\\Console\\Seeds\\WithoutModelEvents;\nuse Illuminate\\Database\\Seeder;\n\nclass DatabaseSeeder extends Seeder\n{\n    /**\n     * Seed the application's database.\n     *\n     * @return void\n     */\n    public function run()\n    {\n        $this->call(IvaSeeder::class);\n        $this->call(CategoriaSeeder::class);\n        $this->call(MarcaSeeder::class);\n        $this->call(SubcategoriaSeeder::class);\n        $this->call(ProductoSeeder::class);\n        $this->call(ProvinciaSeeder::class);\n        $this->call(PoblacionSeeder::class);\n        $this->call(ProveedorSeeder::class);\n    }\n}\n\n")),(0,o.kt)("p",null,"Una vez que tengas tu archivo DatabaseSeeder.php configurado, puedes ejecutar el comando db:seed en la consola de la siguiente manera:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan db:seed\n")),(0,o.kt)("p",null,"Esto ejecutar\xe1 todos los seeders registrados en el archivo DatabaseSeeder.php y llenar\xe1 la base de datos con los datos iniciales especificados en cada seeder."),(0,o.kt)("p",null,"Tambi\xe9n puede ejecutar los sideers despu\xe9s de ejecutar las migraciones con el siguiente comando:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan migrate --seed\n")))}p.isMDXComponent=!0},5649:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/bd-c79b1820edc033d09f811de2dea41af8.webp"}}]);