# Ejemplo 2
## Objetivo

+ Conocer algunas herramientas de terceros para desarrollar aplicaciones para la terminal.

+ Aprender a utilizar las principales funcionalidades del paquete **yargs.**

## Requerimientos

+ NodeJS instalado y funcionando en nuestra terminal
+ Editor de código

## Desarrollo

El paquete [yargs](https://www.npmjs.com/package/yargs) nos provee de algunas funciones para trabajar con la línea de comandos de una manera interactiva, nos permite procesar argumentos y opciones de una manera más simple y elegante.

1. Instalar yargs con el comando `npm install yargs`
2. **Objeto argv**

    El uso del objeto argv de yargs nos ayuda a obtener los argumentos por su nombre, ya que se almacenan como propiedades de este mismo objeto.

    ```jsx
    const {argv} = require('yargs')

    switch (argv.operacion) {
        case 'suma':
        console.log(`${argv.num1} + ${argv.num2} = ${argv.num1 + argv.num2}`)
        break;
      case 'resta':
        console.log(`${argv.num1} - ${argv.num2} = ${argv.num1 - argv.num2}`)
        break;
      case 'multiplica':
        console.log(`${argv.num1} * ${argv.num2} = ${argv.num1 * argv.num2}`)
        break;
      case 'divide':
        console.log(`${argv.num1} / ${argv.num2} = ${argv.num1 / argv.num2}`)
        break;
      default:
        break;
    }
    ```

    Ahora la conversión de números es automática.

Adicionalmente yargs nos permite agregar descripciones para crear un menú de ayuda y algunas opciones adicionales para cada parámetro. También podemos añadir valores por defecto y alias de las opciones para que la entrada de argumentos sea más sencilla.

### Ejemplo:

1. Agregaremos lo siguiente en la primera línea de nuestro script

    ```jsx
    const yargs = require('yargs');

    yargs
    .option(
      'operacion',
      {
        alias: 'o',
        describe: 'Que operación se va a ejecutar',
        choices: ['suma', 'resta', 'multiplica', 'divide'],
    		default: 'suma'
      })
      .option('numero',
        {
          alias: 'n',
          describe: 'sirve para ingresar números a operar de manera ordenada'
        }
      )
      .help();

    const argv = yargs.argv
    ```

2. Ahora podremos mostrar el menú de ayuda con el *flag* `—help`

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/33b346bc-6d51-4779-b5b5-6935d876622a/Screen_Shot_2020-09-03_at_18.06.09.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/33b346bc-6d51-4779-b5b5-6935d876622a/Screen_Shot_2020-09-03_at_18.06.09.png)

3. Al pasar varios valores con la opción `-n` estos quedarán almacenados en un arreglo, así que ahora podemos operar multiples números en la propiedad `numero` del objeto `argv`

```jsx
...
switch (argv.operacion) {
  case 'suma':
    console.log(`${argv.numero[0]} + ${argv.numero[1]} = ${argv.numero[0] + argv.numero[1]}`)
    break;
  case 'resta':
    console.log(`${argv.numero[0]} - ${argv.numero[1]} = ${argv.numero[0] - argv.numero[1]}`)
    break;
  case 'multiplica':
    console.log(`${argv.numero[0]} * ${argv.numero[1]} = ${argv.numero[0] * argv.numero[1]}`)
    break;
  case 'divide':
    console.log(`${argv.numero[0]} / ${argv.numero[1]} = ${argv.numero[0] / argv.numero[1]}`)
    break;
  default:
    break;
}
```

> 💡**Nota:**
>
>Yargs también nos permite pasar argumentos de manera posicional y también argumentos opcionales. Puedes revisar todas las opciones de esta librería en su [documentación oficial](https://github.com/yargs/yargs).
