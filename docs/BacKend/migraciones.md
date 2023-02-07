---
sidebar_position: 3
---

# Migraciones

## ¿Qué es una migración?

Una **migración** en Laravel es un archivo de PHP que describe una operación de base de datos, como la creación de una tabla o la modificación de una columna existente. Las migraciones permiten que los desarrolladores gestionen los cambios en la estructura de la base de datos de manera sencilla y segura, ya que todos los cambios se realizan a través de archivos que se pueden controlar con un sistema de control de versiones como Git.

Cuando se ejecutan las migraciones, Laravel las aplica automáticamente a la base de datos mediante una serie de comandos SQL. Esto garantiza que la estructura de la base de datos sea la misma en todas las instancias del proyecto, ya sea en un entorno de desarrollo local, en un servidor de pruebas o en producción.

Además, las migraciones también proporcionan un mecanismo para revertir los cambios en la base de datos, lo que es útil en caso de que se deban hacer cambios en la estructura de la base de datos y luego se deba revertir a una versión anterior.

En resumen, las migraciones en Laravel son una herramienta esencial para el desarrollo de aplicaciones que requieren una gestión de base de datos robusta y fácil de usar.
:::tip Para saber más
Para más información consulte [la documentación oficial de Laravel.](https://laravel.com/docs/9.x/migrations#generating-migrations)
:::

## Generando migraciones en Laravel

Tecle el siguiente comando para crear la migración de la tabla categorias.

´´´bash
php artisan make:migration create_categorias_table
´´´´

Para generar una migración en Laravel 9, puedes usar el comando Artisan make:migration:

Abre la terminal en la raíz de tu proyecto Laravel
Ejecuta el siguiente comando: 
```bash title="Como generar una migración"
php artisan make:migration NombreDeLaMigracion --create=nombre_de_la_tabla
```
Donde NombreDeLaMigracion es el nombre que le quieres dar a la migración y nombre_de_la_tabla es el nombre de la tabla que se creará en la base de datos.

Esto creará un archivo de migración en la carpeta database/migrations con un nombre similar a yyyy_mm_dd_hhmmss_NombreDeLaMigracion.php.

Luego, puedes editar ese archivo para definir las columnas que deseas agregar a la tabla. Finalmente, ejecuta el comando php artisan migrate para aplicar las migraciones a la base de datos.

## Definiendo las tablas de la BB.DD

### Tabla categorias
Para crear la migración ejecute el siguiente comando desde su terminal.

```bash title="Migración de categorias"
php artisan make:migration create_categorias_table
```
Si todo a marchado bien, deberia haberse creado un fichero PHP dentro de la carpeta database/migrations.

:::caution Importante
Siga la convención en sus creaciones de tabla  utilizando **create_nombre_de_tabla_table**, si quiere evitarse problemas en el futuro.
:::

Dirijase al directorio database/migrations y edite al fichero con la migración.

Copie el siguiente código y sustituya el código del fichero.
```php

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
            $table->timestamps();
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


El código crea una clase anónima que extiende la clase Migration de Illuminate y define dos métodos: up() y down().

El método up() es invocado cuando se ejecuta el comando php artisan migrate y se utiliza para crear la tabla "categorias" en la base de datos con las siguientes columnas:

id: una columna con clave primaria que se genera automáticamente como una secuencia incremental.
nombre: una columna de tipo cadena con un tamaño máximo de 150 caracteres que es única.
descripcion: una columna de tipo texto.
imagen: una columna de tipo texto que puede ser nula.
created_at y updated_at: dos columnas de tipo fecha y hora que se generan automáticamente y se actualizan automáticamente al insertar o actualizar un registro.
El método down() es invocado cuando se ejecuta el comando php artisan migrate:rollback y se utiliza para eliminar la tabla "categorias".

### Tabla subcategorias

Para crear la migración ejecute el siguiente comando desde su terminal.

```bash title="Migración de categorias"
php artisan make:migration create_subcategorias_table
```
Dirijase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el código generado por el siguinte código:
```PHP
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
            $table->timestamps();
            
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
Este código define una migración en Laravel. Una migración es un archivo que contiene instrucciones para crear, modificar o eliminar tablas en la base de datos.

El código crea una clase anónima que extiende la clase Migration de Illuminate y define dos métodos: up() y down().

El **método up()** es invocado cuando se ejecuta el comando php artisan migrate y se utiliza para crear la tabla "subcategorias" en la base de datos con las siguientes columnas:

- **id**: una columna con clave primaria que se genera automáticamente como una secuencia incremental.
- **nombre:** una columna de tipo cadena con un tamaño máximo de 150 caracteres que es única.
- **descripcion:** una columna de tipo texto.
- **imagen:** una columna de tipo texto que puede ser nula.
- **categoria_id:** una columna sin signo que representa un identificador de categoría.

La columna categoria_id está definida como una clave foránea que se refiere a la columna id de la tabla categorias.
- **created_at y updated_at:** dos columnas de tipo fecha y hora que se generan automáticamente y se actualizan automáticamente al insertar o actualizar un registro.
El **método down()** es invocado cuando se ejecuta el comando php artisan migrate:rollback y se utiliza para eliminar la tabla "subcategorias".

### Tabla ivas

Para crear la migración ejecute el siguiente comando desde su terminal.

```bash title="Migración de categorias"
php artisan make:migration create_ivas_table
```
Dirijase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el código generado por el siguinte código:
```PHP
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
            $table->timestamps();
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

### Tabla productos

Para crear la migración ejecute el siguiente comando desde su terminal.

```bash title="Migración de categorias"
php artisan make:migration create_productos_table
```
Dirijase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el código generado por el siguinte código:
```PHP
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
            $table->timestamps();
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
### Tabla ofertas

Para crear la migración ejecute el siguiente comando desde su terminal.

```bash title="Migración de ofertas"
php artisan make:migration create_ofertas_table
```
Dirijase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el código generado por el siguinte código:
```PHP
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

            $table->timestamps();
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
### Tabla proveedores

Para crear la migración ejecute el siguiente comando desde su terminal.

```bash title="Migración de proveedores"
php artisan make:migration create_proveedores_table
```
Dirijase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el código generado por el siguinte código:
```PHP
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
            $table->timestamps();
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














