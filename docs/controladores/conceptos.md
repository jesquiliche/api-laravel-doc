---
sidebar_position: 1
---
# 馃摉Conceptos b谩sicos
<p align="center">
  <img src="/img/rest_api.png" alt="Descripci贸n de la imagen" className="image-center"/>
</p>

## Conceptos
**Recursos:** Un recurso es cualquier elemento o entidad sobre la que se realizan operaciones en una API REST. Por ejemplo, un usuario, una tarea, una publicaci贸n, etc. Cada recurso se identifica de manera 煤nica mediante una direcci贸n URL.

**Representaciones:** Una representaci贸n es la forma en que un recurso se presenta al cliente. Por ejemplo, un recurso puede estar representado como un JSON o como un XML. La representaci贸n de un recurso es lo que se env铆a al cliente como respuesta a una petici贸n.

**Verbos HTTP:** Los verbos HTTP son los comandos que se utilizan para interactuar con los recursos. 

Estos son los conceptos b谩sicos de API REST y suelen ser suficientes para crear aplicaciones simples. Sin embargo, existen otros verbos HTTP y conceptos m谩s avanzados que tambi茅n pueden ser 煤tiles en algunos casos.

## Verbos HTTP

Los **verbos HTTP** son los comandos que se utilizan para interactuar con los recursos en una API REST. Aqu铆 est谩 una explicaci贸n detallada de los verbos HTTP m谩s comunes:

- **GET:** Este verbo se utiliza para obtener informaci贸n de un recurso o de un conjunto de recursos. Por ejemplo, si queremos obtener la informaci贸n de un usuario espec铆fico, realizar铆amos una petici贸n GET a la URL que representa ese usuario. La respuesta a esta petici贸n ser铆a la representaci贸n del usuario en cuesti贸n.

- **POST**: Este verbo se utiliza para crear un nuevo recurso. Por ejemplo, si queremos crear un nuevo usuario, realizar铆amos una petici贸n POST a la URL que representa el conjunto de usuarios. La petici贸n incluir铆a la informaci贸n necesaria para crear el nuevo usuario, y la respuesta a la petici贸n ser铆a la representaci贸n del usuario reci茅n creado.

- **PUT:** Este verbo se utiliza para actualizar un recurso existente. Por ejemplo, si queremos actualizar la informaci贸n de un usuario espec铆fico, realizar铆amos una petici贸n PUT a la URL que representa ese usuario. La petici贸n incluir铆a la informaci贸n actualizada, y la respuesta a la petici贸n ser铆a la representaci贸n del usuario actualizado.

- **DELETE:** Este verbo se utiliza para eliminar un recurso existente. Por ejemplo, si queremos eliminar un usuario espec铆fico, realizar铆amos una petici贸n DELETE a la URL que representa ese usuario. La respuesta a esta petici贸n confirmar铆a que el usuario ha sido eliminado.

Estos son los verbos HTTP m谩s comunes en API REST, y en la mayor铆a de los casos son suficientes para implementar una API REST. Sin embargo, existen otros verbos HTTP menos utilizados que tambi茅n pueden ser 煤tiles en algunos casos. Es importante tener en cuenta que los verbos HTTP deben ser utilizados de manera coherente para garantizar la compatibilidad con los clientes y para mantener la consistencia en la API.

## Peticiones Request y Response

Las peticiones **Request** y **Response** son parte integral del funcionamiento de las API REST. Una petici贸n Request es una solicitud hecha por un cliente a un servidor para recibir alg煤n tipo de informaci贸n o realizar una acci贸n. Por otro lado, una respuesta Response es la respuesta que el servidor le da al cliente a una petici贸n Request.

Una petici贸n **Request** puede incluir informaci贸n adicional, como los datos que se van a enviar a un servidor, el formato en el que se quiere recibir la informaci贸n (por ejemplo, JSON o XML), el m茅todo HTTP que se est谩 utilizando (GET, POST, PUT, DELETE, entre otros) y la URL a la que se est谩 haciendo la petici贸n.

Por su parte, una respuesta Response puede incluir informaci贸n como el c贸digo de estado HTTP (por ejemplo, 200 OK si la petici贸n fue exitosa o 404 Not Found si la URL especificada no existe), los datos que se est谩n enviando como respuesta, el formato de los datos (por ejemplo, JSON o XML) y cualquier cabecera HTTP adicional.

:::tip JSON
JSON es un formato de intercambio de datos ligeros y de f谩cil lectura para los humanos. JSON es una sigla que significa "JavaScript Object Notation".

JSON es un formato de texto plano que se utiliza para transmitir informaci贸n en la Web. La informaci贸n se almacena como un objeto de JavaScript, que es una colecci贸n de pares clave-valor. La clave es una cadena y el valor puede ser una cadena, n煤mero, objeto, matriz u otro tipo de valor.

Ejemplo de un objeto JSON:

```js
{
  "nombre": "John Doe",
  "edad": 32,
  "email": "johndoe@ejemplo.com",
  "direccion": {
    "calle": "1ra Calle",
    "ciudad": "Ciudad de Prueba",
    "pais": "Pa铆s de Prueba"
  }
}
```
JSON es ampliamente compatible con diferentes lenguajes de programaci贸n, incluidos JavaScript, PHP, Python, Ruby, Java, C# y muchos otros. Esto hace que sea f谩cil de leer y escribir, lo que lo hace ideal para su uso en aplicaciones web y m贸viles.

Adem谩s, JSON es muy similar a la sintaxis de objetos y matrices de JavaScript, lo que lo hace f谩cil de entender y usar para los desarrolladores de JavaScript. Esto hace que JSON sea una de las opciones m谩s populares para la transmisi贸n de datos en la Web.
:::


