---
sidebar_position: 2
---

# 📖Pruebas con Postman
<p class="image-center">
  <img src="/img/postman.png" alt="Descripción de la imagen"/>
</p>

## ¿Qué es Postman?

Postman es una aplicación de software que se utiliza para realizar solicitudes HTTP y probar APIs (Interfaces de Programación de Aplicaciones). Permite a los desarrolladores realizar solicitudes a un servidor y ver la respuesta que reciben, lo que les permite probar y depurar sus aplicaciones y servicios web. Postman ofrece una gran cantidad de funciones, incluyendo la posibilidad de guardar y compartir solicitudes, generar código para diferentes lenguajes de programación y utilizar variables y entornos para probar diferentes configuraciones. En resumen, Postman es una herramienta esencial para cualquier desarrollador que trabaje con APIs y servicios web.

## Realización de solicitudes a la API (GET, POST, PUT, DELETE)
### 📇Registro de usuario

Comenzaremos por registrarnos como usuario en nuestra base de datos. Esta solicitud utiliza el método POST que normalmente se utiliza para las altas. La petición debería quedar tal como muestra la imagen, donde deberemos especificar el *nombre de nuestro usuario, el email y el password* de nuestro usuario. No se olvide de arrancar la aplicación Laravel con **php artisan serve".

![Mi imagen](/img/register1.png)

Una vez enviada la solicitud deberíamos obtener la siguiente respuesta:

![Mi imagen](/img/register2.png)

### 📇Login

Después del correspondiente registro de usuario procederemos a autenticarnos, este proceso  nos devolverá el token de acceso. En el Json deberá escribir el nombre y el password con los cuales se ha registrado en el proceso de registro.

![Mi imagen](/img/login1.png)

Después de enviar la solicitud deberemos obtener una respuesta similar a la siguiente:

![Mi imagen](/img/login2.png)

Deberemos copiar el token para poder realizar el resto de peticiones que requieren de autenticación.

### 📇Consultando datos (método GET)

A continuación vamos a utilizar un ejemplo para consultar datos a traves de nuestra API. Obtendremos un Json con todas las provincias de España, para ello utilizaremos el método GET, pero primero deberemos introducir el token el apartado habilitado para ello en Postman. En el campo type deberemos escoger bearer y el campo Token deberemos introducir el token que hemos copiado anteriormente.

![Mi imagen](/img/auth.png)

Una vez hecho esto enviamos la petición y deberíamos recibir una respuesta parecida a esta:

![Mi imagen](/img/provincias.png)

### 📇Añadiendo una nueva categoria (método POST)

Continuando con nuestro ejemplos procederemos a dar de alta una nueva categoria. Ejecute la siguiente petición:

![Mi imagen](/img/post_categorias.png)

Deberías obtener una respuesta similar a la de la imagen anterior.

### 📇Modificando una categoria (método PUT)

Ahora vamos a modificar la categoria anterior. Para ello tome como ejemplo la siguiente imagen. El número 8 de la uri es el id de la categoria a modificar.

![Mi imagen](/img/put_categorias.png)

### 📇Obtener todas las categorías (método GET)

Ahora vamos a ver como obtener todas las categorías. Para ello tome como ejemplo la siguiente imagen: 

![Mi imagen](/img/get_categorias.png)

### 📇Obtener una categoria concreta (método GET)

Este ejemplo ilustra como obtener los datos de una categoria concreta, el número 2 en la uri indica el id de la categoria.

![Mi imagen](/img/get_categorias2.png)

### 📇Borrar una categoria concreta (método DELETE)

Este ejemplo ilustra como borrar una categoria, el número 7 en la uri indica el id de la categoria.

![Mi imagen](/img/delete_categorias.png)

### 📇Status code

Todas las peticiones devuelven un códgio de estado, el cual aparece en la siguiente imagen.
![Mi imagen](/img/status.png)

:::tip Lista de los status code más comunes

- **200 OK:** la solicitud se completó correctamente
- **201 Created:** se ha creado un nuevo recurso
- **204 No Content:** la solicitud se completó correctamente pero no hay contenido para devolver
- **400 Bad Request:** la solicitud no se puede cumplir debido a una sintaxis incorrecta
- **401 Unauthorized**: el usuario no está autenticado y no tiene permiso para acceder al recurso
- **403 Forbidden:** el usuario está autenticado pero no tiene permiso para acceder al recurso
- **404 Not Found**:** el recurso no se pudo encontrar
- **405 Method Not Allowed:** se intentó utilizar un método HTTP no válido para el recurso
- **500 Internal Server Error:** se produjo un error interno en el servidor

Hay muchos otros códigos de estado HTTP, pero estos son algunos de los más comunes.
:::

















