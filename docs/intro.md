---
sidebar_position: 1
---
# Introducción a las APIs:
<p class="image-center">
  <img src="/img/api_rest.png" alt="Descripción de la imagen"/>
</p>

## ¿Qué son las APIs?

Una API (Application Programming Interface) es un conjunto de reglas y estándares que se utilizan para permitir que diferentes software interactúen entre sí. En otras palabras, es una interfaz de programación que permite a diferentes sistemas compartir y acceder a información y funcionalidades entre ellos.

Las APIs son esenciales para el desarrollo de aplicaciones y plataformas modernas, ya que permiten la integración de diferentes sistemas y tecnologías. Por ejemplo, una aplicación puede utilizar la API de un servicio en línea para acceder a información sobre el clima, el tráfico, o la localización.

Las APIs también son ampliamente utilizadas por las empresas para permitir que terceros accedan a sus datos y funcionalidades en una forma controlada y segura. Esto ha dado lugar a una gran cantidad de innovación, ya que permite a las empresas ofrecer sus servicios a través de diferentes canales y dispositivos.

En resumen, las APIs son una pieza clave para la conectividad y la integración en la era digital y permiten a los desarrolladores crear soluciones innovadoras y eficientes que puedan ser utilizadas por una amplia gama de aplicaciones y servicios.

## ¿Por qué usar una API?

Hay varias razones por las que alguien puede querer utilizar una API:

- Integración de sistemas: Las APIs permiten a los desarrolladores integrar diferentes sistemas y tecnologías para crear soluciones más eficientes y complejas.

- Acceso a datos y funcionalidades: Las APIs permiten a los desarrolladores acceder a los datos y funcionalidades de otras aplicaciones y servicios en una forma controlada y segura.

- Automatización: Las APIs permiten a los desarrolladores automatizar tareas y procesos, lo que ahorra tiempo y reduce errores.

- Creación de aplicaciones más complejas: Las APIs permiten a los desarrolladores acceder a los recursos de otras aplicaciones y servicios para crear soluciones más complejas y avanzadas.

- Mejora de la experiencia del usuario: Las APIs permiten a los desarrolladores crear aplicaciones más personalizadas y amigables para el usuario, lo que mejora la experiencia del usuario y aumenta la satisfacción.

En resumen, las APIs son una herramienta poderosa para los desarrolladores, que les permiten crear soluciones más eficientes, innovadoras y personalizadas para sus usuarios.

## Ejemplos de uso de APIs

Hay muchos ejemplos de cómo se pueden utilizar las APIs en diferentes contextos. Aquí hay algunos ejemplos comunes:

1. **Integración con servicios en línea:** Las APIs permiten a las aplicaciones integrarse con servicios en línea como Google Maps, Twitter, Facebook y muchos otros. Por ejemplo, una aplicación de viajes puede utilizar la API de Google Maps para mostrar mapas y rutas.

2. **Creación de aplicaciones móviles:** Las APIs permiten a los desarrolladores crear aplicaciones móviles que accedan a los datos y funcionalidades de otros servicios. Por ejemplo, una aplicación de mensajería puede utilizar la API de un servicio de mensajería para enviar y recibir mensajes.

3. **Automatización de procesos empresariales:** Las APIs permiten a las empresas automatizar tareas y procesos, lo que ahorra tiempo y reduce errores. Por ejemplo, una empresa puede utilizar una API para integrar sus sistemas de gestión de inventario con sus sistemas de pedidos y envío.

4. **Desarrollo de aplicaciones de análisis de datos**: Las APIs permiten a los desarrolladores acceder a grandes cantidades de datos para crear aplicaciones de análisis de datos. Por ejemplo, una aplicación de análisis de redes sociales puede utilizar la API de Twitter para acceder a los datos de tweets y analizarlos.

Estos son solo algunos ejemplos de cómo se pueden utilizar las APIs en diferentes contextos. Hay muchas otras formas en las que las APIs pueden ser útiles y hacer más eficientes los procesos y sistemas.

## Diferencia entre una API y una aplicación web tradicional

Una API (Application Programming Interface) es un conjunto de reglas y protocolos que permiten a diferentes sistemas interactuar y compartir datos y funcionalidades. Por otro lado, una página web tradicional es un documento HTML que se muestra en un navegador y se accede a través de una URL.

Aquí hay algunas de las principales diferencias entre una API y una página web tradicional:

1. **Accesibilidad:**  Las APIs se accede a través de aplicaciones o scripts, mientras que las páginas web se accede a través de un navegador.

2. **Finalidad:** Las APIs están diseñadas para compartir datos y funcionalidades con otros sistemas, mientras que las páginas web están diseñadas para ser visualizadas por personas.

3. **Formato de los datos:** Las APIs devuelven datos en formato de texto plano o en formato JSON o XML, mientras que las páginas web devuelven datos en formato HTML.

4. **Interacción con el usuario:** Las APIs no tienen una interacción directa con el usuario, mientras que las páginas web se muestran en un navegador y permiten a los usuarios interactuar con ellas.

En resumen, una API es una forma de compartir datos y funcionalidades entre diferentes sistemas, mientras que una página web es una forma de presentar información a los usuarios. Ambas son importantes en diferentes contextos y se complementan entre sí.

## Objetivos:
El objetivo principal de este proyecto es crear una **API REST** que permita a los desarrolladores acceder a los datos de manera rápida y segura. Además, se busca proporcionar una solución escalable y fácil de usar para integrar diferentes servicios web y aplicaciones móviles.

Para las pruebas de FronTend se ha desarrollado una aplicación en **React** que consume la API REST. Tambien se ha utilizado **POSTMAN**.

## Requisitos:
<p align="center">
  <img src="/img/back_front.png" alt="Descripción de la imagen"/>
</p>

### BackEnd
- **PHP:** Laravel 9 requiere PHP versión 8- o superior.
- **Servidor web:** Laravel 9 requiere un servidor web compatible con PHP, como Apache o Nginx.
- **Base de datos:** Laravel 9 soporta diversas bases de datos, incluyendo MySQL, PostgreSQL, SQLite y SQL Server.
- **Composer:** Laravel 9 utiliza Composer como su gestor de paquetes, por lo que es necesario tenerlo instalado en el sistema.
- **Extensiones PHP:** Laravel 9 requiere algunas extensiones PHP habilitadas, incluyendo OpenSSL, PDO, Mbstring y Tokenizer.

:::danger Precaución
Es importante verificar que su entorno cumpla con estos requisitos antes de proceder a la instalación de Laravel 9. Si cualquiera de estos requisitos no está cumplido, es posible que la instalación falle o que Laravel 9 no funcione correctamente.
:::

Para este proyecto se ha empleado el siguient software:

- **XAMPP** (PHP,MariaDB,Apache) [Enlace de descarga](https://www.apachefriends.org/es/download.html)
- **Visual Studio Code** [Enlace de descarga](https://code.visualstudio.com/download)
- **MySQL Community Server 8.0.32** [Enlace de descarga](https://dev.mysql.com/downloads/mysql/)
- **MySQL WORKBENCH** [Enlace de descarga](https://www.mysql.com/products/workbench/)

### FrontEnd


El FrontEnd ha sido desarrollado con REACT.
<p align="center">
  <img src="/img/react-logo.webp" alt="Descripción de la imagen"/>
</p>

Los siguientes son los requisitos mínimos para instalar React:

- **Node.js:** React es una biblioteca de JavaScript, por lo que necesitas tener Node.js instalado en tu equipo para ejecutar React. Puedes descargar Node.js desde el sitio web oficial (https://nodejs.org/).

- **Navegador compatible:** React es compatible con la mayoría de los navegadores modernos, incluyendo Google Chrome, Mozilla Firefox, Safari y Microsoft Edge.

- **Un editor de texto:** Puedes usar cualquier editor de texto que te guste, como Visual Studio Code, Sublime Text o Atom, para escribir y editar tu código.

:::caution Preucación
Es importante tener en cuenta que para trabajar con React en un proyecto más grande, es probable que tengas que instalar y configurar algunas herramientas adicionales, como un gestor de paquetes (como npm o Yarn), un sistema de compilación (como Webpack) y una biblioteca de pruebas (como Jest). Sin embargo, estos requisitos dependen de tus necesidades específicas y del proyecto que estás trabajando.
:::

## Resultados:
El proyecto se completó con éxito y se lograron todos los objetivos establecidos. Se creó una API RESTful que permite a los desarrolladores acceder a los datos de manera rápida y segura, y se implementaron medidas de seguridad robustas para proteger los datos sensibles y garantizar la privacidad de los usuarios. Además, se integró la API con diferentes servicios web y aplicaciones móviles.

## Conclusión:
En conclusión, el proyecto de desarrollo de la API Laravel 9 fue un éxito y logró todos los objetivos establecidos. Se creó una solución eficiente, segura y escalable para el acceso a los datos, y se proporcionó una solución fácil de usar para integrar diferentes servicios web y aplicaciones móviles. Este proyecto demuestra la capacidad de Laravel 9 como marco de trabajo para el desarrollo de aplicaciones web y la importancia de una metodología Agile Scrum para el éxito del proyecto.



