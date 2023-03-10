---
sidebar_position: 2
---

# 馃摉Pruebas con Postman
<p class="image-center">
  <img src="/img/postman.png" alt="Descripci贸n de la imagen"/>
</p>

## 驴Qu茅 es Postman?

Postman es una aplicaci贸n de software que se utiliza para realizar solicitudes HTTP y probar APIs (Interfaces de Programaci贸n de Aplicaciones). Permite a los desarrolladores realizar solicitudes a un servidor y ver la respuesta que reciben, lo que les permite probar y depurar sus aplicaciones y servicios web. Postman ofrece una gran cantidad de funciones, incluyendo la posibilidad de guardar y compartir solicitudes, generar c贸digo para diferentes lenguajes de programaci贸n y utilizar variables y entornos para probar diferentes configuraciones. En resumen, Postman es una herramienta esencial para cualquier desarrollador que trabaje con APIs y servicios web.

## Realizaci贸n de solicitudes a la API (GET, POST, PUT, DELETE)
### 馃搰Registro de usuario

Comenzaremos por registrarnos como usuario en nuestra base de datos. Esta solicitud utiliza el m茅todo POST que normalmente se utiliza para las altas. La petici贸n deber铆a quedar tal como muestra la imagen, donde deberemos especificar el *nombre de nuestro usuario, el email y el password* de nuestro usuario. No se olvide de arrancar la aplicaci贸n Laravel con **php artisan serve".

![Mi imagen](/img/register1.png)

Una vez enviada la solicitud deber铆amos obtener la siguiente respuesta:

![Mi imagen](/img/register2.png)

### 馃搰Login

Despu茅s del correspondiente registro de usuario procederemos a autenticarnos, este proceso  nos devolver谩 el token de acceso. En el Json deber谩 escribir el nombre y el password con los cuales se ha registrado en el proceso de registro.

![Mi imagen](/img/login1.png)

Despu茅s de enviar la solicitud deberemos obtener una respuesta similar a la siguiente:

![Mi imagen](/img/login2.png)

Deberemos copiar el token para poder realizar el resto de peticiones que requieren de autenticaci贸n.

### 馃搰Consultando datos (m茅todo GET)

A continuaci贸n vamos a utilizar un ejemplo para consultar datos a traves de nuestra API. Obtendremos un Json con todas las provincias de Espa帽a, para ello utilizaremos el m茅todo GET, pero primero deberemos introducir el token el apartado habilitado para ello en Postman. En el campo type deberemos escoger bearer y el campo Token deberemos introducir el token que hemos copiado anteriormente.

![Mi imagen](/img/auth.png)

Una vez hecho esto enviamos la petici贸n y deber铆amos recibir una respuesta parecida a esta:

![Mi imagen](/img/provincias.png)

### 馃搰A帽adiendo una nueva categoria (m茅todo POST)

Continuando con nuestro ejemplos procederemos a dar de alta una nueva categoria. Ejecute la siguiente petici贸n:

![Mi imagen](/img/post_categorias.png)

Deber铆as obtener una respuesta similar a la de la imagen anterior.

### 馃搰Modificando una categoria (m茅todo PUT)

Ahora vamos a modificar la categoria anterior. Para ello tome como ejemplo la siguiente imagen. El n煤mero 8 de la uri es el id de la categoria a modificar.

![Mi imagen](/img/put_categorias.png)

### 馃搰Obtener todas las categor铆as (m茅todo GET)

Ahora vamos a ver como obtener todas las categor铆as. Para ello tome como ejemplo la siguiente imagen: 

![Mi imagen](/img/get_categorias.png)

### 馃搰Obtener una categoria concreta (m茅todo GET)

Este ejemplo ilustra como obtener los datos de una categoria concreta, el n煤mero 2 en la uri indica el id de la categoria.

![Mi imagen](/img/get_categorias2.png)

### 馃搰Borrar una categoria concreta (m茅todo DELETE)

Este ejemplo ilustra como borrar una categoria, el n煤mero 7 en la uri indica el id de la categoria.

![Mi imagen](/img/delete_categorias.png)

### 馃搰Status code

Todas las peticiones devuelven un c贸dgio de estado, el cual aparece en la siguiente imagen.
![Mi imagen](/img/status.png)

:::tip Lista de los status code m谩s comunes

- **200 OK:** la solicitud se complet贸 correctamente
- **201 Created:** se ha creado un nuevo recurso
- **204 No Content:** la solicitud se complet贸 correctamente pero no hay contenido para devolver
- **400 Bad Request:** la solicitud no se puede cumplir debido a una sintaxis incorrecta
- **401 Unauthorized**: el usuario no est谩 autenticado y no tiene permiso para acceder al recurso
- **403 Forbidden:** el usuario est谩 autenticado pero no tiene permiso para acceder al recurso
- **404 Not Found**:** el recurso no se pudo encontrar
- **405 Method Not Allowed:** se intent贸 utilizar un m茅todo HTTP no v谩lido para el recurso
- **500 Internal Server Error:** se produjo un error interno en el servidor

Hay muchos otros c贸digos de estado HTTP, pero estos son algunos de los m谩s comunes.
:::

















