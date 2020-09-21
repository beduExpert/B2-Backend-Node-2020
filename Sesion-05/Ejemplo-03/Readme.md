
## Ejemplo 3 

## Objetivo

Comprender el concepto de rutas en nuestra API y la mejor manera de establecerlas para acceder a recursos.

## Requerimientos

Haber completado instalación de NodeJS

Haber completado la instalación de los paquetes del Ejemplo 1

## Desarrollo

Para hacer peticiones en una ruta (endpoint) en específico, debemos establecer una estructura específica.

Para esto utilizaremos el Router que nos provee la librería Express.

La sintaxis `(req, res) => { ... }` representa una función que será ejecutada cuando llegue alguna petición en las direcciones uri que especificamos, también se le puede llamar ***handler*** o ***callback***. 

Al hacer una petición a esta ruta podremos ver que nos está devolviendo información sobre la versión uno de nuestra API.

### Probando nuestro servidor

1. Acceder a nuestro navegador web
2. Mantener corriendo nuestro servidor con el comando:

    ```bash
    npm run dev
    ```

3. Acceder con la siguiente url en nuestro navegador

    [localhost:3000/v1/](http://localhost:3000/v1/)

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0090fc9a-4ddd-45c9-9797-6eb8a61976fb/Screen_Shot_2020-09-21_at_15.04.55.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0090fc9a-4ddd-45c9-9797-6eb8a61976fb/Screen_Shot_2020-09-21_at_15.04.55.png)

    Es una buena práctica colocar la versión de nuestra app como una ruta principal, ya que así en un futuro si hay un cambio demasiado grande puede mantenerse funcionando ambas apis y conservar compatibilidad.

### Creando rutas

En los siguientes pasos crearemos el esqueleto de nuestra API para el recurso `posts`, declarando las rutas para crear, obtener actualizar y eliminar posts (CRUD)

Los siguientes *endpoints* estarán siendo importados en el archivo `index.js` y bajo la ruta `v1/posts` de nuestra api.

1. En el directorio `models/` agregamos el archivo `index.js` con el siguiente código

    ```jsx
    const express = require("express");
    const router = express.Router();

    router.use("/posts", require('./posts'))

    module.exports = router;
    ```

    Usamos un router de Express

2. Crea las siguiente estructura de archivos en la carpeta `routes`:

    routes/

    comentarios.js

    index.js

    posts.js

    usuarios.js

3. En el archivo `posts.js` en `routes` añade el siguiente código:

    ```jsx
    const express = require("express");
    const router = express.Router();

    const { crearPost, obtenerPosts, modificarPost, eliminarPost } = require('../controllers/posts')

    router.get('/', obtenerPosts)
    router.post('/', crearPost)
    router.put('/:id', modificarPost)
    router.delete('/:id', eliminarPost)

    module.exports = router;
    ```

    En el siguiente código utilizamos las funciones definidas en `controllers/`que a su vez reciben como parámetros (req, res) y será mandado a llamar cada que se haga una petición en la rutas de nuestra API.

4. Agregamos la línea de código a nuestro archivo `app.js` para importar nuestras rutas

    ```jsx
    app.use('/v1', require('./routes'))
    ```

    El archivo app.js tiene que quedar algo parecido a lo siguiente:

    ```jsx
    const express = require('express');
    const bodyParser = require('body-parser')
    const app = express();

    const PORT = 3000

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get(['/v1', '/'], (req, res) => {
        res.status(200).send({ ok: 'true', mensaje: 'Bienvenido a la API' })
    });
    app.use('/v1', require('./routes'))

    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`)
    });
    ```
