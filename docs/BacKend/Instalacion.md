---
sidebar_position: 1
---

# Instalación de Laravel 9

Para instalar **Laravel 9**, necesitará tener **PHP** y un gestor de paquetes como **Composer** instalados en su sistema. Siga estos pasos para instalar Laravel 9:

Abra su terminal o línea de comandos.

Ejecute el siguiente comando para descargar la última versión de Laravel:

:::tip Información
Nuestro proyecto se llamara api_comercio, sustituir nombre de proyecto por api_comercio.
:::
```ps
composer create-project --prefer-dist laravel/laravel nombre_de_proyecto "9.*"
```
Una vez que la descarga esté completa, acceda a la carpeta del proyecto con el siguiente comando:

```ps
cd nombre_de_proyecto
```
Finalmente, ejecute el siguiente comando para verificar la instalación:
```ps
php artisan serve
'''
Esto debería iniciar un servidor local y abrir Laravel en su navegador en la dirección http://localhost:8000.

Ahora está listo para comenzar a desarrollar su aplicación con Laravel 9.