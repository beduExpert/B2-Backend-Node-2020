# Ejercicio 1

## Objetivo

Comprender el modelo asíncrono y no bloqueante de Javascript y la importancia de los callbacks en la asincronia.

## Requerimientos

Instalación de Node completada

## Desarrollo

### ¿Qué es un callback?

Es una simple función que pasa como argumento a otra función y que se ejecuta cuando algún evento sucede. En Javascript, las funciones son objetos, por ello, las funciones admiten funciones como argumentos y pueden ser devueltas por otras funciones. 

Importante: Cualquier función que se pase como argumento se denomina función **Callback**, no hay requisito para usar una función como callback

### ¿Por qué necesitamos callbacks?

Javascript es un lenguaje orientado a eventos, por lo que, en lugar de esperar una respuesta para avanzar, seguirá ejecutándose mientras escucha otros eventos 

Veamos, el siguiente ejemplo:

```jsx
function primero() {
  console.log("Soy el 1");
}

function segundo() {
  console.log("Soy el 2");
}

function tercero() {
  console.log("Soy el 3");
}

primero();
segundo();
tercero();
```

Ejecuta el código con el comando:

```bash
node ejercicio1.js
```

```bash
Soy el 1
Soy el 2
Soy el 3
```

Tenemos el resultado que esperabamos se ejecuta *primero*, luego *segundo* y por último *tercero*

Ahora, supongamos que *primero* es una función que hace una petición *http* a alguna API y tenemos que esperar por la respuesta de la petición, para simular esto, usaremos *setTimeout* adaptando el código anterior

```jsx
function primero() {
  //Simula petición http
  setTimeout(function () {
    console.log("Soy el 1");
  }, 1000);
}

function segundo() {
  console.log("Soy el 2");
}

function tercero() {
  console.log("Soy el 3");
}

primero();
segundo();
tercero();
```

```bash
node ejercicio1.js
```

```bash
Soy el 2
Soy el 3
Soy el 1
```

Por ahora, no es necesario entender el funcionamiento de *setTimeout* sólo que en nuestro ejemplo simula una petición a una API creando un retardo de *1 seg*. 

El resultado no está en el orden en el mandamos a llamar a las funciones, lo que sucede es que Javascript no ha esperado a la respuesta *primero* para avanzar. En este ejemplo es importante esperar por la respuesta antes de avanzar en el código, ya que tendremos que saber su la petición sucedió con éxito o no, en caso de no hacerlo lo más lógico sería manejar el error.

Javascript utiliza un modelo **asíncrono y no bloqueante con un loop de eventos con un sólo hilo de ejecución.** Para que Javascript funcione de manera asíncrona existen los siguientes mecanismos que trataremos en esta sesión:

- Callbacks
- Promises
- Async / await

### Callbacks

Como lo hemos dicho anteriormente, un callback no es más que una función que pasa como argumento a otra función y es utilizado como un **modo para asegurar que cierto código no se ejecute hasta que otro código haya terminado de ejecutarse.**

### Callback Hell

Los callbacks también pueden lanzar a su vez funciones asíncronas, lo que hace que pueda anidarse tanto como se desee

Podríamos tener un ejemplo cómo el siguiente:

```jsx
setTimeout(function () {
  console.log("Soy el 1");
  setTimeout(function () {
    console.log("Soy el 2");
    setTimeout(function () {
      console.log("Soy el 3");
      setTimeout(function () {
        console.log("Soy el 4");
        // Podría a ver más llamadas asíncronas
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);
```

```bash
Soy el 1
Soy el 2
Soy el 3
Soy el 4
```

Si se implementará más llamadas anidadas, sin duda tenemos una problemática de identación, legibilidad, dificulta el mantenimiento, etc., a esto se le conoce como **Callback Hell** o también **Pyramid of Doom**.

El siguiente post muestra este problema ya descrito y también a cómo solucionarlo, es una guía introductoria a lo que será el resto de la sesión

[Callback Hell](http://callbackhell.com/)