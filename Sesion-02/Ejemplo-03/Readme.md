# Ejemplo 3

## Http y Https

### HTTP

El módulo `http` de NodeJS nos da acceso a herramientas y funciones que trabajan con el protocolo HTTP. Con ella podemos crear clientes y servidores web.

1. Empezaremos importando el módulo

    ```jsx
    var http = require("http");
    ```

2. Utilizaremos la función `createServer` para crear nuestro primer servidor

    ```jsx
    var server = http.createServer(function (peticion, respuesta){
       respuesta.end(`<h1>Hola mundo</h1>`);
    });
    ```

3. Para poner en marcha al servidor utilizaremos

    ```jsx
    server.listen(3000, function(){
       console.log("Servidor escuchando en el puerto " + this.address().port);
    });
    ```

4. Ahora guarda este código en el archivo `server.js`
5. Al ejecutarlo nos mostrará el mensaje `Servidor escuchando en el puerto 3000`
6. Para probarlo puedes utilizar el comando `wget [http://localhost:3000](http://localhost:3000)` o accediendo a la url en el servidor 

    ![Screen_Shot_2020-08-12_at_19.29.55.png](Screen_Shot_2020-08-12_at_19.29.55.png)

    ![Screen_Shot_2020-08-12_at_19.29.40.png](Screen_Shot_2020-08-12_at_19.29.40.png)

### HTTPS

El módulo `https` de NodeJS provee la misma funcionalidad que el módulo `http` pero sobre el protocolo TLS/SSL que nos brinda una capa adicional de seguridad.

Con estos módulos también podemos realizar peticiones a servidores por medio del método `get`

Para el siguiente ejemplo peticionaremos a la API de la NASA para obtener la imagen del día.

1.