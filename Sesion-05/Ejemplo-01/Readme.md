
## Ejemplo 1 

## Objetivo

Configurar un proyecto para desarrollar una API REST

## Requerimientos

- Instalación de NodeJS completada
- Instalación de MariaDB completada

## Desarrollo

1. Crear el directorio de nuestro proyecto

    ```bash
    mkdir blog
    ```

2. Iniciar un proyecto con npm

    ```bash
    npm init -y
    ```

3. Al haber iniciado el proyecto se creará el archivo *package.json* con la configuración

    ```json
    {
      "name": "blog",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }
    ```

    cambiamos el campo **main** por *"app.js"*

    ```bash
    {
      "name": "blog",
      "version": "1.0.0",
      "description": "",
      "main": "app.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }
    ```

4. Instalamos los siguiente paquetes que serán necesarios para el proyecto

    ```bash
    npm i express body-parser sequelize
    ```

    Recuerda revisar que las dependencias se encuentren en el *package.json* después de haber sido instaladas

5. Creamos el archivo *app.js* para crear el servidor

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

    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`)
    });
    ```

6. Probamos que el servidor se levante correctamente

    ```bash
    node app.js
    ```

    ```bash
    Servidor corriendo en el puerto 3000
    ```

7. Configurar nodemon, sin nodemon cada que hagamos un cambio en nuetra API tendremos que levantar el servidor, este paquete agiliza ese proceso pues detecta cada que haya un cambio en los archivos de nuestro proyecto

    Si no tienes instalado puedes instalar el paquete

    ```bash
    npm install -g nodemon
    ```

8. Agregar la siguiente linea en el campo *"scripts"* dentro *package.json*

    ```json
    "dev": "nodemon app.js"
    ```

    Para tener un resultado similar a:

    ```json
    {
      "name": "blog",
      "version": "1.0.0",
      "description": "",
      "main": "app.js",
      "scripts": {
        "dev": "nodemon app.js",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {
        "body-parser": "^1.19.0",
        "express": "^4.17.1",
        "sequelize": "^6.3.5"
      }
    }
    ```

9. Ingresamos el comando para verificar nuestra configuración con nodemon

    ```json
    npm run dev
    ```

    ```json
    > nodemon app.js

    [nodemon] 2.0.4
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node app.js`
    Servidor corriendo en el puerto 3000
    ```

    Listo, cada que hagamos un cambio en nuestra API, nodemon se encargará de recargar nuestro servidor


