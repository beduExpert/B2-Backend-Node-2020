# Ejemplo 3
## Objetivo

+ Conocer algunas herramientas de terceros para desarrollar aplicaciones para la terminal.
+ Aprender a utilizar las principales funcionalidades del paquete **inquirer.**

## Requerimientos

+ NodeJS instalado y funcionando en nuestra terminal
+ Editor de código

## Desarrollo

El módulo inquirer nos permite crear interfaces intuitivas para nuestras aplicaciones web de manera rápida.

Inquirer es utilizado en diversos paquetes importantes de la comunidad js, entre ellos están los asistentes de los tres frameworks de javascript para frontend: angular/cli, create-react-app y vue/cli.

### Inquirer

1. Crearemos un nuevo proyecto con un nuevo archivo  `investigador.js`
2. Instalaremos el paquete `inquirer.js` con el comando `npm install inquirer`
3. Agregaremos el siguiente código:

    ```jsx
    // investigador.js
    const inquirer = require('inquirer');
    inquirer
      .prompt({
        name: 'nombre',
        message: "¿Cómo te llamas?",
      })
      .then(answers => {
        console.log('Respuestas:', answers);
      })
    ```

    El método `prompt` nos permite pasar un objeto que representa una pregunta y nos devuelve una promesa. Es el método principal del módulo inquirer.

    El objeto está compuesto por distintas propiedades, pero solo necesitamos poblar la propiedad `name` y la propiedad `message` para poder tener una pregunta básica con su respectiva espera en la entrada de datos.

    Utilizando el método `then` podemos tener acceso a las respuestas.

3. Ejecutaremos esta primera pregunta.

![](http://imgfz.com/i/ZHAhRpS.png)

Cómo puedes ver al final tenemos una salida bastante simple y limpia.

### Tipos de preguntas en Inquirer

En inquirer contamos con distintos tipos de preguntas/respuestas, tenemos de opción multiple, lista de valores, de confirmación, checkbox, contraseña, entre otras.

Los tipos de preguntas se definen con la propiedad `type`.

Continuaremos con nuestro investigador añadiendo una preguntas de diversos tipos:

1. En el método `prompt` pasaremos el objeto a la primera casilla de un arreglo
2. Luego añadiremos una pregunta del tipo `list`:

    ```jsx
    const inquirer = require('inquirer');
    inquirer
      .prompt([{
        name: 'nombre',
        message: "¿Cómo te llamas?",
      },
      { // Nueva pregunta de opción múltiple
        name: 'edad',
        message: '¿Que edad tienes?',
        type: 'list',
        choices: [
          '0-18',
          '19-30',
          '31-40',
          '41-50',
          '50+ '
        ]
      }
      ])
      .then(answers => {
        console.log('Respuestas:', answers);
      })
      .catch(error => {
        console.log(error);
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else when wrong
        }
      });
    ```

3. Ejecutaremos el script.

    ![http://imgfz.com/i/CEJBNq8.png](http://imgfz.com/i/CEJBNq8.png)

    Como puedes observar ahora puedes elegir entre las 5 opciones seleccionando con el cursor.

4. Con `type: 'checkbox'` también podrás realizar preguntas con múltiples soluciones.

    ```jsx
    {
        name: 'rrss',
        message: '¿Que redes sociales ocupas?',
        type: 'checkbox',
        choices: [
          'Facebook',
          'Instagram',
          'Twiter',
          'Linkedin',
          'Tiktok'
        ]
      }
    ```

    ![](http://imgfz.com/i/lXNPQCA.png)

    ![](http://imgfz.com/i/B3by9uH.png)

5. Por último probaremos el tipo de dato password. No olvides capturar los errores de la petición `catch`.

```jsx
{
  name: 'password',
  message: 'Ingresa una contraseña:',
  type: 'password'
}
```
