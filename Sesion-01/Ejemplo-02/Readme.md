# Ejemplo 2

## Objetivo

Conocer y trabajar con módulos del core y módulos de terceros.

## Requerimientos

Tener instalado Nodejs y npm

## Desarrollo

### Módulos del core

Nodejs tiene varios módulos compilados que se encuentran en la instalación de Nodejs en la carpeta **lib/**

Los módulos del core se describen en la documentación de Nodejs la siguiente página: 

[Node.js v14.5.0 Documentation](https://nodejs.org/dist/latest-v12.x/docs/api/modules.html#modules_core_modules)

Para cargar módulos se deben importar utilizando la función **require()** con la siguiente sintaxis:

```jsx
var module = require('module_name')
```

### Usando módulos del core

1. Crear una carpeta para la sesión Ej. sesion1
2. Crear un archivo con extensión (**.js**) ****dentro de la carpeta creada Ej. ****ejemplo1.js 
3. Crear un archivo **txt** dentro de la carpeta creada Ej. ejemplo1.txt con el siguiente texto

    ```
    Hola Mundo
    ¡Bienvenido(a) al curso Backend con Nodejs!
    ```

4. Abre la carpeta utilizando el editor de código de tu gusto.
5. En el siguiente código se carga el módulo **File System** con **fs**, con la función **readFile()** se lee el archivo *ejemplo1.txt*

    ```jsx
    const fs = require('fs');

    fs.readFile('ejemplo1.txt', function (err, data) {
        if (err) throw err;
        console.log(data);
    });
    ```

6. Copia y pega el código anterior y ejecuta en la terminal

    ```bash
    node ejemplo1.js
    ```

### Usando módulos de terceros con npm

1. Iniciar npm en el proyecto en el directorio actual **sesion1/**

    ```bash
    npm init -y
    ```

2. A continuación, se creará un archivo package.json con está configuración que más adelante revisaremos a detalle

    ```bash
    {
      "name": "sesion1",
      "version": "1.0.0",
      "description": "",
      "main": "ejemplo1.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC"
    }
    ```

3.  Para este ejemplo vamos a utilizar la librería [moment.js](https://momentjs.com/timezone/) utilizando el comando:

```bash
npm i moment-timezone
```

```bash
+ moment-timezone@0.5.31
added 2 packages from 6 contributors and audited 2 packages in 0.911s
found 0 vulnerabilities
```

Revisando el archivo package.json notamos que sea agrega el campo *dependencies* y dentro el módulo instalado, además, se creó el directorio **node_modules/** que será la carpeta dónde estarán todos los archivos de los paquetes instalados:

```json
"dependencies": {
    "moment-timezone": "^0.5.31"
  }
```

De modo que si por alguna razón borramos la carpeta **node_modules/** dejarán de funcionar estos módulos. Si ocurre esto bastará con ejecutar el comando :

```bash
npm i
```

Ya que, nuestros módulos instalados se encuentran especificados en el archivo package.json

4. Para cargar esto módulos ocupamos la misma función **require()**

```jsx
const moment = require('moment-timezone')
```

5. Copiar y pegar el siguiente ejemplo en *ejemplo1.js*

```jsx
const moment = require("moment-timezone");

let now = moment().tz("America/Havana").format("DD-MM-YYYY");
let yesterday = moment().subtract(1, "d").format("DD-MM-YYYY");
let tomorrow = moment().add(1, "d").format("DD-MM-YYYY");

console.log(`Hoy es ${now}`);
console.log(`Ayer fue ${yesterday}`);
console.log(`Mañana es ${tomorrow}`);
```

6. Ejecuta el ejemplo con:

```bash
node ejemplo1.js
```

```bash
Hoy es 02-07-2020
Ayer fue 01-07-2020
Mañana es 03-07-2020
```