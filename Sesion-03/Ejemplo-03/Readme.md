# Ejercicio 3

## Objetivo

Comprender el uso de async/await como mecanismo asíncrono de Javascript

## Requerimientos

- Instalación de Node completada
- Conexión a internet

## Desarrollo

Importante: Para empezar con async/await es importante dominar callbacks y promesas, tal cual se ha visto para esta sesión

### Async/Await

Los operadores de async/await se incluyeron a partir de ECMAScript 7 para simplificar la forma de trabajar con las promesas, la finalidad es tener implementaciones aún más legibles de código, de esta forma será posible esperar por una respuesta y descartando el uso de *then* ****y *catch*

**Conceptos básicos**

- **async** es el operador para declarar una función
- **await** debe ser usada dentro de la función **async**
- La función **async** retorna una **promesa**.

El siguiente video puede ser de utilidad para comprender la idea anterior

[Cómo funciona Async/Await en JavaScript](https://youtu.be/qY65YXZDyIk)

Hasta este punto sabemos como funciona la asincronía y porqué es importante usarla, veamos un ejemplo:

1. Creamos una promesa, pasando de callback a promesa *setTimeout()*

    ```jsx
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    ```

2. Creamos la siguiente función

    ```jsx

    ```

### Declarar una función async()

- Manera clásica:

    ```jsx
    async function quienEsePokemon(){
    	//TODO
    }
    ```

- Con arrow functions:

    ```jsx
    let quienEsePokemon = async () => {
      //TODO
    }
    ```

### Manejo de errores

Cuando usamos promesas la manera de controlar los errores es con *catch* con async/await es utilizando try/catch aunque también podemos utilizar *catch*

Ejemplo:

```jsx
try {
  let pokemon = await quienEsEsePokemon()
  console.log(`El pokemon es${pokemon.name}`);
} catch (error) {
  console.error(error);
}
```

Usando catch:

```jsx
 await quienEsEsePokemon()
   .then((pokemon) => console.log(`El pokemon es${pokemon.name}`))
   .catch((error) => console.error(error));
 return;
```