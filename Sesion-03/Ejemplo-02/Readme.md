# Ejercicio 2

## Objetivo

Comprender el uso de promesas como mecanismo asíncrono de Javascript

## Requerimientos

- Instalación de Node completada
- Conexión a internet

## Desarrollo

### ECMAScript

Es una especificación de leguaje de programación publicada por ECMA International, que a partir del 2015 a la actualidad se encarga de regir cómo debe ser interpretado y funcionar el lenguaje Javascript.

A partir de la edición 6 (ES6) se agregaron cambios significativos con el propósito de escribir aplicaciones complejas y con mejoras importantes en la sintaxis y entro ello tenemos las ***promesas.***

Para conocer más de este cambio entre ECMAScript 5 y ECMAScript6 consulta el siguiente artículo en el que además habla de la ediciones más recientes y la importancia de que exista está especificación:

[Qué es ECMAScript](https://openwebinars.net/blog/que-es-ecmascript/)

### Promesas

Como se planteo a partir de ES6 se agregó las ***promesas***  a la especificación, las promesas permiten solucionar el calback hell

**Recordar**: Una promesa sólo puede completarse con éxito o fallar una vez. El estado de una promesa es: Pendiente, Resulta y Rechazada

**Importante**: Las promesas tienen la particularidad de que se pueden *encadenar* ***then***, siendo el resultado de una promesa, los datos de entrada de otra posible función, además, tienen un mecanismo para el *manejo de errores* ***catch***

```jsx
let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let numero = Math.random();
    if (numero >= 0.5) resolve("Éxito");
    reject("Error");
  }, 2000);
});
promesa.then((data) => console.log(data)).catch((data) => console.log(data));
console.log("Inicio");
```

### Pasar de callback a promesa

Existen casos en el queremos usar una función que usa callbacks y requerimos usar promesas para que el código sea más legible, podríamos reescribir el código pero esto podría llevar más tiempo, entonces, como solución podemos utilizar el constructor *Promise()* para pasar de callback a promesa

El siguiente ejemplo hace uso de *fs* usando callbacks para leer un archivo, observamos que es usada como promesa con *then*, de leer con éxito mostrará en pantalla el contenido del archivo.

```jsx
const { fs } = require("fs")

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (error, data) => {
      if (error) return reject(error);
      return resolve(data);
    });
  });
}

readFile("./archivo.txt")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

### Promise.all y Promise.race

```jsx
var fs = require("fs");

// Función de utilidad para crear una promesa por conseguir el contenido de un
// archivo de forma asíncrona.
var getFile = function (file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(__dirname + "/" + file, "utf-8", function (err, data) {
      if (err) {
        return reject(err);
      }

      data = data.replace(/\r?\n/g, "");

      resolve(data);
    });
  });
};

console.log("Promesas inicializadas.");

var files = Promise.all([
  getFile("archivo1.txt"),
  getFile("archivo2.txt"),
  getFile("archivo3.txt"),
]);

// Mostrar los archivos que fueron leídos exitosamente
files.then(function (collection) {
  console.log("Promesas completadas:");

  collection.forEach(function (data, i) {
    console.log("Archivo " + (i + 1) + ":", data);
  });
});
```