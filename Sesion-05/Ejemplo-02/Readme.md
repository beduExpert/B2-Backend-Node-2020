
# Ejemplo 2 

## Objetivo

Crear los modelos de bases de datos necesarios para la API REST

## Requerimientos

Haber completado la instalación de los paquetes del Ejemplo 1

## Desarrollo

Ahora que sabemos que es un **ORM** e hicimos la instalación de Sequelize con npm, crearemos los modelos de datos necesarios para la manipulación de los datos de nuestra BD.

Recordando, un modelo de datos nos permite describir las estructuras de datos así como las restricciones de integridad. 

Sequelize es un **ORM** basado en **promesas** para Postgres, MySQL, MariaDB, SQLite y Microsoft SQL Server

Para nuestro ejemplo de API utilizaremos MariaDB como nuestro SGBD y Sequelize como **ORM**

### Creando los modelos de datos

1. Crear la conexión a nuestra base de datos local con la siguiente estructura

    ```jsx
    const { Sequelize } = require('sequelize');

    // Conexión a la bd
    const sequelize = new Sequelize(<bd>, <usuario> , <contraseña>, {
        host: "localhost...",
        dialect: "mariadb",
        logging: false,
    });

    const modelDefiniciones = [ require('./Comment'), require('./Post')]

    for(const definicion of modelDefiniciones) definicion(sequelize)

    module.exports = sequelize
    ```

    Remplaza los datos en *< >* por los datos en tu bd

2. Crear `Post.js` en `models/`

    ```jsx
    const { DataTypes } = require('sequelize');

    // Post.js
    /** Definición que representa la definicion de post*/
    module.exports = (sequelize) => {
        let Post = sequelize.define('Post', {
            id: { type: DataTypes.INTEGER, primaryKey: true }, 
            nombre: DataTypes.STRING,
            texto: DataTypes.STRING,
            fecha_publicacion: DataTypes.DATEONLY,
            etiquetas: DataTypes.STRING,
            categorias: DataTypes.STRING
        }) 
        return Post
    }
    ```

3. Crear `Comentario.js` en `models/`

    ```jsx
    const { DataTypes } = require('sequelize');

    // Comentario.js
    /** Definición que representa la definicion de comentario*/
    module.exports = (sequelize) => {
        let Comentario = sequelize.define('Comentario', {
            id: { type: DataTypes.INTEGER, primaryKey: true },
            texto: DataTypes.STRING,
            fecha_publicacion: DataTypes.DATEONLY,
            calificacion: DataTypes.INTEGER
        })
        return Comentario
    }
    ```

### Creando controladores

1. En la carpeta controllers/ crearemos el archivo posts.js con el siguiente código:

    ```jsx
    /*  Archivo controllers/posts.js
     *  Simulando la respuesta de objetos Post
     *  en un futuro aquí se utilizarán los modelos
     */

    const { models } = require('../models')

    const crearPost = (req, res) => {
        // Instanciar un objeto Post
        let post = new models.Post(req.body)
        return res.status(202).send(post)
    }

    const obtenerPosts = (req, res) => {
        // Simulando dos usuarios y respondiendolos
        let post1 = new models.Post(1, 'Bases de Datos Relacionales', 'Las bases de datos...', '2020-05-12', 'Bases de Datos Relacionales', 'Desarrollo de Software')
        let post2 = new models.Post(2, 'API REST', 'La arquitectura...', '2020-08-12', 'API', 'Desarrollo de Software')
        return res.status(200).send([post1, post2])
    }

    const modificarPost = (req, res) => {
        // Simulando post previamente utilizado
        let post1 = new models.Post(1, 'Bases de Datos Relacionales', 'Las bases de datos...', '2020-05-12', 'Bases de Datos Relacionales', 'Desarrollo de Software')
        var modificaciones = req.body
        post1 = { ...post1, ...modificaciones }
        return res.status(201).send(post1)
    }

    const eliminarPost = (req, res) => {
        return res.status(201).send(`Post ${req.params.id} eliminado`);
    }

    module.exports = {
        crearPost,
        obtenerPosts,
        modificarPost,
        eliminarPost
    }
    ```

    Es importante entender los dos argumentos de nuestras funciones, (req y res).

    El objeto [Request (req)](http://expressjs.com/es/4x/api.html#req) contiene un gran número de propiedades referentes a la petición HTTP como los parámetros, los *headers,* el cuerpo de la petición, y más.

    [Response (res)](http://expressjs.com/es/4x/api.html#res) es el objeto que utilizamos para componer la respuesta que enviaremos  con el método send.

