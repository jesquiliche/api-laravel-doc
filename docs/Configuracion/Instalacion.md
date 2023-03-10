---
sidebar_position: 1
---

# 馃摉Instalaci贸n de Laravel 9
<p>
  <img src="/img/install.jpg" alt="Descripci贸n de la imagen"  className="image-center"/>
</p>

## Instalaci贸n
Para instalar **Laravel 9**, necesitar谩 tener **PHP** y un gestor de paquetes como **Composer** instalados en su sistema. Siga estos pasos para instalar Laravel 9:

Existen dos m茅todos para instalar Laravel

:::tip Instalaci贸n local vs global
La diferencia entre una instalaci贸n global y una local de Laravel 9 radica en d贸nde se encuentra disponible el comando Laravel para su uso.

Una instalaci贸n global de Laravel significa que el comando Laravel est谩 disponible en cualquier ubicaci贸n en tu sistema, lo que te permite crear nuevos proyectos de Laravel y ejecutar comandos de Laravel desde cualquier directorio.

Por otro lado, una instalaci贸n local de Laravel significa que el comando laravel s贸lo est谩 disponible dentro del directorio del proyecto Laravel en el que lo instalaste.

En general, se recomienda realizar una instalaci贸n global de Laravel si deseas tener la capacidad de crear y gestionar varios proyectos de Laravel desde diferentes ubicaciones en tu sistema. Por otro lado, si s贸lo deseas trabajar en un 煤nico proyecto de Laravel, una instalaci贸n local puede ser m谩s adecuada.
:::

Abra su terminal o l铆nea de comandos.

Ejecute el siguiente comando para descargar la 煤ltima versi贸n de Laravel:

:::tip Informaci贸n
Nuestro proyecto se llamara api_comercio, sustituir nombre de proyecto por api_comercio.
:::
```bash title="Instalaci贸n local"
composer create-project --prefer-dist laravel/laravel nombre_de_proyecto "9.*"
```
```bash title="Instalaci贸n global"
composer global require laravel/installer
laravel new nombre_de_proyecto
```

Una vez que la descarga est茅 completa, acceda a la carpeta del proyecto con el siguiente comando:

```bash
cd nombre_de_proyecto
```
Finalmente, ejecute el siguiente comando para verificar la instalaci贸n:
```bash
php artisan serve
```
Esto deber铆a iniciar un servidor local y abrir Laravel en su navegador en la direcci贸n http://localhost:8000.

Ahora est谩 listo para comenzar a desarrollar su aplicaci贸n con Laravel 9.

## Estructura del proyecto

La estructura de un proyecto Laravel se divide en varias carpetas principales, que incluyen:

- **app**: Contiene la l贸gica de la aplicaci贸n, como modelos, controladores y - middleware.

- **config**: Contiene archivos de configuraci贸n para la aplicaci贸n.

- **database**: Contiene archivos relacionados con la base de datos, como migraciones y seeds.

- **public**: Contiene archivos est谩ticos como im谩genes, CSS y JavaScript, que se pueden acceder directamente desde el navegador.

- **resources**: Contiene archivos de vistas, archivos de lenguaje y archivos de recursos.

- **routes**: Contiene las definiciones de rutas para la aplicaci贸n.

- **storage**: Contiene archivos generados din谩micamente por la aplicaci贸n, como cach茅 y archivos subidos por el usuario.

- **tests**: Contiene pruebas unitarias para la aplicaci贸n.

- **vendor**: Contiene paquetes de terceros que se utilizan en la aplicaci贸n.

- **.env**: Contiene las variables de entorno de la aplicaci贸n.

- **composer.json**: Contiene las dependencias y la informaci贸n del proyecto para el administrador de paquetes Composer.

- **.gitignore**: Contiene una lista de archivos que deben ser ignorados por Git.

Esta es una descripci贸n general de la estructura de un proyecto Laravel. Cada proyecto puede tener una estructura ligeramente diferente seg煤n las necesidades espec铆ficas de cada aplicaci贸n.