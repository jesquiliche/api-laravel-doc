---
sidebar_position: 4
---
# Rellenando la BB.DD
## Seeders

### ¿Qué es un seeder?

Un seeder en Laravel es una clase que se utiliza para poblar una base de datos con datos de prueba. Los seeders son útiles para probar aplicaciones, crear datos de prueba para desarrolladores y para personalizar una base de datos con información específica.

Cada seeder en Laravel extiende de la clase **Illuminate\Database\Seeder** y contiene un método run que se ejecuta cuando se llama el comando **php artisan db:seed**. Dentro de este método, puedes escribir cualquier lógica que necesites para insertar datos en tu base de datos.

Puedes crear varios seeders y ejecutarlos todos o solo algunos según tus necesidades. Al ejecutar un seeder, sus datos se insertan en la base de datos de forma automática, lo que te permite rellenar tus tablas de forma rápida y sencilla.

### ¿Como se crea un seeder?

Para crear un seeder en Laravel, puedes usar el siguiente comando de Artisan:
```bash
php artisan make:seeder NombreSeeder
```

Donde NombreSeeder es el nombre que le quieres dar a tu seeder. Este comando creará un archivo en la carpeta database/seeds con el nombre que le hayas especificado y con una estructura básica de código para que puedas empezar a escribir tu lógica de seeding.

Aquí tienes un ejemplo básico de código para un seeder:

```php
<?php
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NombreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('table_name')->insert([
            'column1' => 'value1',
            'column2' => 'value2',
            // ...
        ]);
    }
}
?>
```

Puedes agregar más datos o lógica para rellenar tus tablas de forma más compleja.

Para ejecutar los seeders, puedes usar el siguiente comando:

```bash
php artisan db:seed
```
También puedes ejecutar un seeder específico utilizando el siguiente comando:

```bash
php artisan db:seed --class=NombreSeeder
```
