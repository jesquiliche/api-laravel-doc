---
sidebar_position: 2
---

# 📖Configuración BB.DD del proyecto

Para configurar una base de datos en un proyecto Laravel, necesitas realizar los siguientes pasos:


Crear una nueva base de datos en MySQL y anotar su nombre, usuario y contraseña.
En nuestro caso la BB.DD se llamara comercio, el usuario sera root sin contraseña. 
<video controls class="video">
  <source src="/Videos/video.mp4" type="video/mp4" />
  Lo siento, tu navegador no soporta videos en formato MKV.
</video>

:::caution A tener en cuenta
En un sistema de producción real sería altamente recomendable cambiar el usuario y la contraseña, para evitar posibles ataques de Hacker
:::


Abrir el archivo .env en el directorio raíz de tu proyecto Laravel y actualizar las siguientes líneas con los detalles de tu base de datos:


```basch title="Configuración del archivo .env"
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=comercio
DB_USERNAME=root
DB_PASSWORD=
```
Ejecuta el siguiente comando en la terminal de tu proyecto para verificar la conexión a la base de datos:

```bash
php artisan config:cache
```
Si todo está configurado correctamente, puedes crear tus tablas y comenzar a trabajar con la base de datos en tu aplicación Laravel.



