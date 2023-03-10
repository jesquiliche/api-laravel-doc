---
sidebar_position: 3
---
# 馃摉Migraciones
### 馃搰Modelo ER
Este es el modelo entidad/relaci贸n de nuestra BB.DD.
<p align="center">
  <img src="/img/modelo.png" alt="Descripci贸n de la imagen"/>
</p>

### 馃搰Creaci贸n de relaciones

En Laravel, puedes crear relaciones entre tablas usando migraciones. Aqu铆 hay un ejemplo de c贸digo que muestra c贸mo crear una relaci贸n de uno a muchos:
```js
<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->text('body');
            $table->unsignedInteger('user_id');
            $table->timestambash();
            
            $table->foreign('user_id')
                  ->references('id')->on('users')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
?>
```
:::tip Explicaci贸n
En este ejemplo, se est谩 creando una tabla posts con una columna user_id que hace referencia a la columna id en la tabla users. La opci贸n onDelete('cascade') indica que si un usuario es eliminado, sus publicaciones tambi茅n deben ser eliminadas.

Luego de crear la migraci贸n, debes ejecutar el comando php artisan migrate para aplicar los cambios en la base de datos. Para m谩s informaci贸n consulte [la documentaci贸 oficial](httbash://laravel.com/docs/9.x/readme)
:::


## 驴Qu茅 es una migraci贸n?

Una **migraci贸n** en Laravel es un archivo de PHP que describe una operaci贸n de base de datos, como la creaci贸n de una tabla o la modificaci贸n de una columna existente. Las migraciones permiten que los desarrolladores gestionen los cambios en la estructura de la base de datos de manera sencilla y segura, ya que todos los cambios se realizan a trav茅s de archivos que se pueden controlar con un sistema de control de versiones como Git.

Cuando se ejecutan las migraciones, Laravel las aplica autom谩ticamente a la base de datos mediante una serie de comandos SQL. Esto garantiza que la estructura de la base de datos sea la misma en todas las instancias del proyecto, ya sea en un entorno de desarrollo local, en un servidor de pruebas o en producci贸n.

Adem谩s, las migraciones tambi茅n proporcionan un mecanismo para revertir los cambios en la base de datos, lo que es 煤til en caso de que se deban hacer cambios en la estructura de la base de datos y luego se deba revertir a una versi贸n anterior.

En resumen, las migraciones en Laravel son una herramienta esencial para el desarrollo de aplicaciones que requieren una gesti贸n de base de datos robusta y f谩cil de usar.
:::tip Para saber m谩s
Para m谩s informaci贸n consulte [la documentaci贸n oficial de Laravel.](httbash://laravel.com/docs/9.x/migrations#generating-migrations)
:::

## Generando migraciones en Laravel

Tecle el siguiente comando para crear la migraci贸n de la tabla categor铆as.

```bash
php artisan make:migration create_categorias_table
```

Para generar una migraci贸n en Laravel 9, puedes usar el comando Artisan make:migration:

Abre la terminal en la ra铆z de tu proyecto Laravel
Ejecuta el siguiente comando: 
```bash title="Como generar una migraci贸n"
php artisan make:migration NombreDeLaMigracion --create=nombre_de_la_tabla
```
Donde NombreDeLaMigracion es el nombre que le quieres dar a la migraci贸n y nombre_de_la_tabla es el nombre de la tabla que se crear谩 en la base de datos.

Esto crear谩 un archivo de migraci贸n en la carpeta database/migrations con un nombre similar a yyyy_mm_dd_hhmmss_NombreDeLaMigracion.php.

Luego, puedes editar ese archivo para definir las columnas que deseas agregar a la tabla. Finalmente, ejecuta el comando php artisan migrate para aplicar las migraciones a la base de datos.

## Definiendo las tablas de la BB.DD

### 馃搰Tabla categor铆as
Para crear la migraci贸n ejecute el siguiente comando desde su terminal.

```bash title="Migraci贸n de categor铆as"
php artisan make:migration create_categorias_table
```
Si todo a marchado bien, deberia haberse creado un fichero PHP dentro de la carpeta database/migrations.

:::caution Importante
Siga la convenci贸n en sus creaciones de tabla  utilizando **create_nombre_de_tabla_table**, si quiere evitarse problemas en el futuro.
:::

Dir铆jase al directorio database/migrations y edite al fichero con la migraci贸n.

Copie el siguiente c贸digo y sustituya el c贸digo del fichero.
```js

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Validation\Rules\Unique;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categorias', function (Blueprint $table) {
            $table->id();
            $table->string("nombre",150)->Unique();
            $table->text("descripcion");
            $table->text("imagen")->nullable();
            $table->timestambash();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categorias');
    }
};
```
:::tip tipos de datos m谩s comunes en Laravel
En Laravel, los tipos de datos en las migraciones se refieren a las especificaciones de los tipos de columnas en las tablas de la base de datos. Algunos de los tipos de datos m谩s comunes incluyen:

- bigIncrements: Incremento autom谩tico de ID grande
- bigInteger: Entero grande
- binary: Datos binarios
- boolean: Valor booleano
- char: Cadena fija de longitud
- date: Fecha
- dateTime: Fecha y hora
- decimal: N煤mero decimal con precisi贸n y escala espec铆ficas
- double: N煤mero de punto flotante de doble precisi贸n
- enum: Valor de una lista predefinida
- float: N煤mero de punto flotante
- increments: Incremento autom谩tico de ID
- integer: Entero
- json: Datos en formato JSON
- longText: Texto largo
- mediumText: Texto de tama帽o medio
- smallInteger: Entero peque帽o
- string: Cadena
- text: Texto
- time: Tiempo
- timestamp: Marca de tiempo
- unsignedBigInteger: Entero grande sin signo
- unsignedInteger: Entero sin signo.

Estos son algunos de los tipos de datos m谩s comunes que puedes usar en tus migraciones en Laravel.
:::






El c贸digo crea una clase an贸nima que extiende la clase Migration de Illuminate y define dos m茅todos: up() y down().

El m茅todo up() es invocado cuando se ejecuta el comando php artisan migrate y se utiliza para crear la tabla "categor铆as" en la base de datos con las siguientes columnas:

id: una columna con clave primaria que se genera autom谩ticamente como una secuencia incremental.
nombre: una columna de tipo cadena con un tama帽o m谩ximo de 150 caracteres que es 煤nica.
descripcion: una columna de tipo texto.
imagen: una columna de tipo texto que puede ser nula.
created_at y updated_at: dos columnas de tipo fecha y hora que se generan autom谩ticamente y se actualizan autom谩ticamente al insertar o actualizar un registro.
El m茅todo down() es invocado cuando se ejecuta el comando php artisan migrate:rollback y se utiliza para eliminar la tabla "categor铆as".

### 馃搰Tabla subcategor铆as

Para crear la migraci贸n ejecute el siguiente comando desde su terminal.

```bash title="Migraci贸n de categor铆as"
php artisan make:migration create_categorias_table
```
Dir铆jase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el c贸digo generado por el siguiente c贸digo:
```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subcategorias', function (Blueprint $table) {
            $table->id();
            $table->string("nombre",150)->unique();
            $table->text("descripcion");
            $table->text("imagen")->nullable();
            $table->unsignedBigInteger("categoria_id");
            $table->foreign("categoria_id")->references("id")->on("categorias");
            $table->timestambash();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subcategorias');
    }
};
```
Este c贸digo define una migraci贸n en Laravel. Una migraci贸n es un archivo que contiene instrucciones para crear, modificar o eliminar tablas en la base de datos.

El c贸digo crea una clase an贸nima que extiende la clase Migration de Illuminate y define dos m茅todos: up() y down().

El **m茅todo up()** es invocado cuando se ejecuta el comando php artisan migrate y se utiliza para crear la tabla "subcategorias" en la base de datos con las siguientes columnas:

- **id**: una columna con clave primaria que se genera autom谩ticamente como una secuencia incremental.
- **nombre:** una columna de tipo cadena con un tama帽o m谩ximo de 150 caracteres que es 煤nica.
- **descripcion:** una columna de tipo texto.
- **imagen:** una columna de tipo texto que puede ser nula.
- **categoria_id:** una columna sin signo que representa un identificador de categor铆a.

La columna categoria_id est谩 definida como una clave for谩nea que se refiere a la columna id de la tabla categorias.
- **created_at y updated_at:** dos columnas de tipo fecha y hora que se generan autom谩ticamente y se actualizan autom谩ticamente al insertar o actualizar un registro.
El **m茅todo down()** es invocado cuando se ejecuta el comando php artisan migrate:rollback y se utiliza para eliminar la tabla "subcategorias".

### 馃搰Tabla ivas

Para crear la migraci贸n ejecute el siguiente comando desde su terminal.

```bash title="Migraci贸n de categorias"
php artisan make:migration create_ivas_table
```
Dir铆jase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el c贸digo generado por el siguinte c贸digo:
```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ivas', function (Blueprint $table) {
            $table->id();
            $table->float("tanto_porciento",4,2);
            $table->string("nombre",50);
            $table->timestambash();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ivas');
    }
};
```

### 馃搰Tabla productos

Para crear la migraci贸n ejecute el siguiente comando desde su terminal.

```bash title="Migraci贸n de categorias"
php artisan make:migration create_productos_table
```
Dir铆jase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el c贸digo generado por el siguinte c贸digo:
```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->string("nombre")->unique();
            $table->text("descripcion");
            $table->float("precio");
            $table->text("imagen")->nullable();
            $table->unsignedBigInteger("subcategoria_id");
            $table->foreign("subcategoria_id"
            )->references("id")->on("subcategorias");
            $table->unsignedBigInteger("iva_id");
            $table->foreign("iva_id")->references("id")->on("ivas");
            $table->unsignedBigInteger("marca_id");
            $table->foreign("marca_id")->references("id")->on("marcas");
            $table->timestambash();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('productos');
    }
};


```
### 馃搰Tabla ofertas

Para crear la migraci贸n ejecute el siguiente comando desde su terminal.

```bash title="Migraci贸n de ofertas"
php artisan make:migration create_ofertas_table
```
Dir铆jase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el c贸digo generado por el siguinte c贸digo:
```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ofertas', function (Blueprint $table) {
            $table->id();
            $table->float("precio");
            $table->string("descripcion");
            $table->date("fecha_ini");
            $table->date("fecha_fin");
            $table->unsignedBigInteger("producto_id");
            $table->foreign("producto_id")->references("id")->on("productos");

            $table->timestambash();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ofertas');
    }
};

```
### 馃搰Tabla proveedores

Para crear la migraci贸n ejecute el siguiente comando desde su terminal.

```bash title="Migraci贸n de proveedores"
php artisan make:migration create_proveedores_table
```
Dir铆jase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el c贸digo generado por el siguinte c贸digo:
```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proveedores', function (Blueprint $table) {
            $table->id();
            $table->string("nif",9);
            $table->string("nombre");
            $table->string("cod_provincia",2);
            $table->string("cod_postal",5);
            $table->string("calle");
            $table->integer("numero");
            $table->text("notas")->nullable();
            $table->timestambash();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('proveedores');

    }
};
```

### 馃搰Tabla producto_proveedor

Para crear la migraci贸n ejecute el siguiente comando desde su terminal.

```bash title="Migraci贸n de producto_proveerdor"
php artisan make:migration create_producto_proveedor_table
```
Dir铆jase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

:::tip informaci贸n
Esta tabla se utiliza para crear una relaci贸n mucho a muchos entre productos y proveedores.
:::


Sustituya el c贸digo generado por el siguinte c贸digo:
```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('producto_proveedor', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("producto_id");
            $table->unsignedBigInteger("proveedor_id");
            $table->foreign("producto_id")->references("id")->on("productos");
            $table->foreign("proveedor_id")->references("id")->on("proveedores");
            $table->timestambash();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('producto_proveedor');
    }
};
```
La migraci贸n crea una tabla llamada "producto_proveedor" en la base de datos que tendr谩 los siguientes campos:

- **id:** campo de identificaci贸n (clave primaria) que se generar谩 autom谩ticamente
- **producto_id:** campo que almacena la identificaci贸n de un producto
- **proveedor_id:** campo que almacena la identificaci贸n de un proveedor
- **timestambash:** dos campos de tiempo que registran la fecha y hora de creaci贸n y actualizaci贸n de cada registro en la tabla.

Adem谩s, establece relaciones entre la tabla "producto_proveedor" y las tablas "productos" y "proveedores" mediante claves for谩neas. La funci贸n "up" se utiliza para aplicar la migraci贸n y crear la tabla, mientras que la funci贸n "down" se utiliza para revertir la migraci贸n y eliminar la tabla.

### 馃搰Tabla provincias

Para crear la migraci贸n ejecute el siguiente comando desde su terminal.

```bash title="Migraci贸n de provincias"
php artisan make:migration create_provincias_table
```
Dir铆jase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el c贸digo generado por el siguinte c贸digo:
```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('provincias', function (Blueprint $table) {
            $table->id();
            $table->string("codigo",2)->unique();
            $table->string("nombre");
            $table->timestambash();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('provincias');
    }
};

```
La migraci贸n crea una tabla llamada provincias donde se guaradaran todas las provincias de Espa帽a.

### 馃搰Tabla poblaciones

Para crear la migraci贸n ejecute el siguiente comando desde su terminal.

```bash title="Migraci贸n de poblaciones"
php artisan make:migration create_poblaciones_table
```
Dir铆jase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el c贸digo generado por el siguinte c贸digo:
```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('poblaciones', function (Blueprint $table) {
            $table->id();
            $table->string("codigo",5)->unique();
            $table->string("nombre");
            $table->string("provincia_cod",2);
            $table->foreign("provincia_cod")->references("codigo")->on("provincias");
            $table->timestambash();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('poblaciones');
    }
};

```
La migraci贸n crea una tabla llamada poblaciones donde se guaradaran todas las provincias de Espa帽a.

### 馃搰Modificando la tabla proveedores

En la siguiente migraci贸n modificaremos la tabla proveedores.

```bash title="Modficaci贸n de la tabla proveedores"
php artisan make:migration add_foreign_key_proveedores_table
```
Sustituya el c贸digo generador por el siguiente c贸digo:

```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
    
        DB::statement("CREATE OR REPLACE
        VIEW `v_productos` AS
        SELECT 
            `p`.`id` AS `id`,
            `p`.`nombre` AS `nombre`,
            `p`.`descripcion` AS `descripcion`,
            `p`.`iva_id` AS `iva_id`,
            `s`.`nombre` AS `subcategoria`,
            `c`.`nombre` AS `categoria`,
            `m`.`nombre` AS `marca`,
            `p`.`imagen` AS `imagen`
        FROM
            (((`productos` `p`
            LEFT JOIN `subcategorias` `s` ON ((`p`.`subcategoria_id` = `s`.`id`)))
            JOIN `categorias` `c` ON ((`c`.`id` = `s`.`categoria_id`)))
            JOIN `marcas` `m` ON ((`m`.`id` = `p`.`marca_id`))) ORDER BY CATEGORIA,SUBCATEGORIA;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW v_productos;');
    }
};

```
 La migraci贸n modifica la tabla "proveedores" agreg谩ndole una relaci贸n con la tabla "poblaciones" mediante una clave for谩nea. La columna "cod_postal" de la tabla "proveedores" se vincula con la columna "codigo" de la tabla "poblaciones". 

## Creaci贸n de vistas

### 馃搰Vista v_productos
Ejecute la siguiente orde en su consola o terminal:

```bash title="Creaci贸n vista v_productos"
php artisan make:migration create_view_productos
```
:::tip Explicaci贸n de la vista
La migraci贸n crea una vista llamada "v_productos" en la base de datos. La vista es una selecci贸n de informaci贸n de varias tablas (productos, subcategorias, categorias y marcas) con una combinaci贸n de JOINs y proyecciones de columnas. La funci贸n "up" se utiliza para crear la vista, mientras que la funci贸n "down" se utiliza para eliminar la vista en caso de que sea necesario revertir la migraci贸n. La cl谩usula "ORDER BY" ordena los resultados de la vista por categor铆a y subcategor铆a.
:::

Sustituya el c贸digo generado por el siguiente c贸digo:
```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
    
        DB::statement("CREATE OR REPLACE
        VIEW `v_productos` AS
        SELECT 
            `p`.`id` AS `id`,
            `p`.`nombre` AS `nombre`,
            `p`.`descripcion` AS `descripcion`,
            `p`.`iva_id` AS `iva_id`,
            `s`.`nombre` AS `subcategoria`,
            `c`.`nombre` AS `categoria`,
            `m`.`nombre` AS `marca`,
            `p`.`imagen` AS `imagen`
        FROM
            (((`productos` `p`
            LEFT JOIN `subcategorias` `s` ON ((`p`.`subcategoria_id` = `s`.`id`)))
            JOIN `categorias` `c` ON ((`c`.`id` = `s`.`categoria_id`)))
            JOIN `marcas` `m` ON ((`m`.`id` = `p`.`marca_id`))) ORDER BY CATEGORIA,SUBCATEGORIA;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW v_productos;');
    }
};
```
### 馃搰Vista v_ofertas

Ejecute el siguiente comando en su terminal:

```bash title="Creaci贸n vista v_ofertas"
php artisan make:migration create_view_ofertas
```
:::tip Explicaci贸n de la vista
Este c贸digo define una migraci贸n en PHP para la creaci贸n y eliminaci贸n de una vista en una base de datos relacional. La vista se llama "v_ofertas" y se crea a partir de una uni贸n de los datos de las tablas "v_productos" y "ofertas". La vista incluir谩 las siguientes columnas: "id", "nombre", "descripci贸n", "iva_id", "subcategor铆a", "categor铆a", "marca", "imAGEN", "descripci贸n_oferta" y "id_oferta". La funci贸n "down" se utiliza para eliminar la vista.
:::

```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
    
        DB::statement("CREATE OR REPLACE
        ALGORITHM = UNDEFINED 
        DEFINER = `admin`@`localhost` 
        SQL SECURITY DEFINER
    VIEW `v_ofertas` AS
        SELECT 
            `v`.`id` AS `id`,
            `v`.`nombre` AS `nombre`,
            `v`.`descripcion` AS `descripcion`,
            `v`.`iva_id` AS `iva_id`,
            `v`.`subcategoria` AS `subcategoria`,
            `v`.`categoria` AS `categoria`,
            `v`.`marca` AS `marca`,
            `v`.`imAGEN` AS `imAGEN`,
            `o`.`descripcion` AS `descripcio_oferta`,
            `o`.`id` AS `id_oferta`
        FROM
            (`v_productos` `v`
            JOIN `ofertas` `o` ON ((`v`.`id` = `o`.`producto_id`)));");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement("DROP VIEW v_ofertas");
    }
};
```

### 馃搰Vista v_proveedor

Ejecute el siguiente comando desde su terminal:

```bach
php artisan 

```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
        DB::statement("CREATE OR REPLACE v_proveedores AS SELECT pr.*,pob.nombre as poblacion,pro.nombre as provincia 
        FROM comercio.proveedores pr INNER JOIN poblaciones pob ON pr.cod_postal=pob.codigo
        INNER JOIN provincias pro ON pro.codigo=pob.provincia_cod;");
    }
    

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('v_proveedores');
    }
};
?>
```
Este c贸digo crea una migraci贸n de Laravel para crear una vista llamada **"v_proveedores"**. La vista se basa en una consulta SQL que une tres tablas: **"proveedores", "poblaciones" y "provincias"**. La vista mostrar谩 informaci贸n de los proveedores con los nombres de la poblaci贸n y la provincia correspondiente.

El m茅todo "up" se ejecuta cuando se ejecuta el comando **"php artisan migrate"** para aplicar la migraci贸n y crear la vista. El m茅todo "down" se ejecuta cuando se ejecuta el comando **"php artisan migrate:rollback"** para revertir la migraci贸n y eliminar la vista.
## 驴C贸mo ejecutar las migraciones?

Desde la terminal ejecutar el siguiente comando:

```bash title="Creaci贸n vista v_ofertas"
php artisan make:migration create_view_proveedor
```

```bash
php artisan migrate
```
:::tip Opciones del comando
php artisan migrate es un comando que se utiliza en Laravel para realizar migraciones en la base de datos. Con este comando, Laravel crea o modifica las tablas en la base de datos seg煤n las definiciones especificadas en las migraciones.

Adem谩s, tambi茅n existen otros comandos relacionados con migraciones en Laravel:

- **php artisan migrate:install:** Este comando crea la tabla de migraciones en la base de datos.

- **php artisan migrate:rollback:** Este comando revierte la 煤ltima migraci贸n realizada.

- **php artisan migrate:status:** Este comando muestra el estado de las migraciones, es decir, si est谩n pendientes, realizadas o revertidas.

- **php artisan migrate:refresh:** Este comando revierte todas las migraciones y las vuelve a ejecutar.

- **php artisan migrate:fresh:** Este  comando borra todas las tablas de la base de datos y crea todas las tablas y vuelve a ejecutar el m茅todo up. Se utiliza en sustituci贸n de **refresh** cuando alguna tabla no ha podido borrarse.
- **php artisan migrate:reset:** Este comando revierte todas las migraciones.

Estos son algunos de los comandos m谩s comunes que se utilizan con el fin de gestionar las migraciones en Laravel.
:::



