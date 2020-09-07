# Prework

**Node.js** es un entorno de ejecución de **JavaScript** que ha aportado mucho a este lenguaje, dándole por primera vez la posibilidad de actuar del lado del servidor. Convirtiendo así a JavaScript en un lenguaje que abarca tanto el **Frontend** como **Backend**, lo que se conoce también como **Full Stack**.

Este es un entorno extremadamente popular hoy en día. Tanto, que compañías tan grandes como **PayPal**, la **NASA** y **Netflix** lo utilizan.

Destaca sobretodo por su modelo asíncrono y orientado a eventos, con el cual no tendremos necesidad de recargar la página para ver las actualizaciones de esta. Node.js es ideal para crear funciones a tiempo real como podrían ser un chat o un sistema de notificaciones en vivo.

## **¿QUÉ ES NODE.JS?**

![./Untitled.png](./Untitled.png)

**Node.js** es un entorno de ejecución para **JavaScript** construido con el motor de **JavaScript V8** de **Chrome**. Node.js usa un modelo de operaciones **E/S** sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. El ecosistema de paquetes de Node.js, **npm**, es el ecosistema mas grande de librerías de código abierto en el mundo.

[Documentación | Node.js](https://nodejs.org/es/docs/)

En windows los comandos tienen diversas variaciones. Si tienes problemas basta con googlear para buscar su equivalente.

**Nota:** 

Así que básicamente es un **entorno** de **ejecución** para Javascript y por lo tanto, ten en cuenta que Node.js **no** es una **librería** ni tampoco es un **Framework** de JavaScript.

## **¿PARA QUÉ SIRVE NODE.JS?**

- **CHATS**

Debido a la naturaleza asíncrona y orientada a eventos de node.js, este es ideal para desarrollar **chats**. Si lo piensas estas son las características que necesita un chat para ser funcional.

Tanto el servidor como el cliente estarán siempre comunicados en tiempo real entre sí y por supuesto, sin ninguna necesidad de actualizar la página. Imaginemos que tenemos que actualizar la página cada vez que alguien escribe un nuevo texto en un chat para poder visualizarlo, **¡Sería horrible!**

- **REDES SOCIALES**

Vivimos en un mundo dominado por las Redes Sociales, cada día hay más y más y son millones las personas las que las utilizan a diario. Nunca sabes si puedes crear la próxima Red Social exitosa, ya sea mundialmente o en su nicho y por supuesto es una muy buena idea crearla con Node.js.

Una Red Social debe funcionar a tiempo real y en ese aspecto Node.js es el rey.

- **FOROS**

Con Node.js también se podría crear un foro estupendo y muy por encima de los que estamos acostumbrados hoy en día.

Imagínate un foro donde las nuevas publicaciones se actualicen en tiempo real. Estás en un hilo popular leyendo un tema que te interesa y estás leyendo el último aporte del foro y de repente… ¡Pop! Te carga en tiempo real un nuevo aporte por parte de un usuario. **¿Sería fantástico no?**

## **¿QUÉ ES UN ENTORNO DE EJECUCIÓN?**

Un **entorno de ejecución** (runtime environment en inglés) es un estado de **máquina virtual** que suministra servicios para los procesos de un programa de computadora que se está ejecutando. Puede pertenecer al mismo sistema operativo, o ser creado por el software del programa en ejecución.

Es decir, que node.js lo que hace es proporcionar **servicios extra** a JavaScript mientras este se está ejecutando.

### CARACTERÍSTICAS DE NODE.JS

- **Construido con V8:**

    ![./Untitled%201.png](./Untitled%201.png)

    **¿Qué es V8?**

    V8 es un motor open-source escrito en C++ para compilar JavaScript y WebAssembly en código máquina. Esto quiere decir que traduce JavasScript a un código puramente digital capaz de ser interpretado por la CPU donde se ejecuta.

    Este motor fue desarrollado por **Google** para **Google Chrome** y su primera versión vio la luz en 2008 junto con la primera versión del navegador.

    Además de Chrome, el resto de navegadores basados en **Chromium** también usan este motor como, por ejemplo, en el nuevo **Microsoft Edge**. El motivo por el que este motor es tan eficiente y rápido es precisamente porque compila el código JavaScript en lugar de interpretarlo, lo cual baja drásticamente su tiempo de ejecución.

    Además de esto, V8 se encarga de gestionar el **call stack**, que es la pila de ejecución; el **memory heap**, que es la zona de almacenamiento dinámica donde se almacenan las **variables declaradas** en los **bloques** y el **garbage** **collector** para **limpiar** y **liberar** **espacio**. Por último, proporciona todos los tipos de **datos**, **operadores**, **objetos** y **funciones**.

    [V8](https://v8.dev)

    **V8 y node.js**

    Una característica del motor V8 es que es independiente del navegador en el que está alojado. Esta característica fue clave el rápido auge de Node.js.

    V8 fue elegido para ser el motor que impulsó Node.js en 2009. A medida que la popularidad de Node.js creció, V8 se convirtió en un gran motor para ejecutar JavaScript del lado del servidor.

    Además, ha sumado al ecosistema grandes herramientas para ejecutar JavaScript también es escritorio como **Electron** o las famosas **PWA**.

    Por su parte, V8 v8.0 ya está aquí. La esperada versión del famoso motor JavaScript y Web Assembly vio la luz hace unos días y, además de las típicas correcciones de bugs, nos trae varias novedades.

    **Tamaño y velocidad**

    Gracias a la compresión de punteros es capar de reducir en un 40% el uso de memoria. En la práctica, esto se traduce en una carga más rápida de las webs. Estos son los números de las pruebas que ha hecho el equipo de V8 sobre webs reales:

    ![./Untitled%202.png](./Untitled%202.png)

    - **JavaScript en servidor/backend**

    JavaScript siempre ha sido conocido por ser el lenguaje de programación web que actúa en el lado del **cliente** (Frontend), nunca ha podido interactuar por el lado del **servidor** (Backend). Para esta labor siempre se han encargado otros lenguajes como por ejemplo **PHP**, **Python** o **Ruby**.

    Pero todo esto ha cambiado con Node.js. Ahora JavaScript puede actuar por los dos lados, tanto para el lado del cliente como para el del servidor, pudiendo así encargarse de todo por si mismo.

    - **Modelo asíncrono orientado a eventos**

    Estamos muy acostumbrados a que cuando se realiza algún cambio en la página para visualizarlo tenemos que volver a recargar dicha página.

    Por ejemplo; si se cambia el texto de este post mientras tu estás leyendo, hasta que tú no recargues la página no serías capaz de ver los cambios, y por supuesto, nadie te avisará de ello.

    Node.js funciona en **tiempo real** y por ello, cada vez que ocurra algún evento este será modificado inmediatamente de forma que el cliente aun estando dentro de la página vea el cambio.

    Esta es de hecho una de las características principales y uno de los motivos por los cuales Node.js se utiliza tanto hoy en día. Se podría considerar como la programación del futuro, una programación más eficiente, sólida e interactiva.

    - **E/S sin bloqueos**

    JavaScript siempre ha tenido el problema de ser **secuencial**, pero las cosas han cambiado con Node.js.

    Pero… **¿Qué significa esto de Entrada y Salida sin Bloqueos?** Básicamente que las operaciones que deba realizar el entorno se pueden hacer en modo **multi-tarea**. Es decir, que si hay que realizar **3 procesos** por ejemplo, estos tres se **realizaran a la vez** en lugar de ir de **uno en uno**.

    ¿Y esto sirve para algo? ¡Pues claro! Mejorará muchísimo la velocidad de procesado, imagínate que tienes que realizar en una función 5 procesos y que cada uno tarda 1 segundo en procesarse. Si los procesos se realizarán de uno en uno, nos llevaría un total de 5 segundos en realizarlos todos, pero en su lugar tardará solo 1 segundo, ya que los cinco se procesarán simultáneamente.

    Esto obviamente tiene sus límites, pero sin ninguna duda convierte a Node.js en un entorno muy **eficiente**.

    - **Trabaja con BBDD NoSql**

    Cuando nos referimos a una **BBDD NoSQL** nos referimos a una base de datos que no trabaja, como suele ser lo común, con el lenguaje SQL.

    Node.js trabaja con MongoDB, que no es la típica base de datos basada en tablas. Es una base de datos **documental**.

    Al principio cuesta un poco imaginarse una BBDD que no utilice tablas, filas, columnas y ese tipo de cosas; pero con el tiempo te acostumbras. **¿Que cómo funciona MongoDB entonces?** Pues básicamente con **JSON**, en realidad con **BSON** (que es JSON en binario), pero de eso no debes preocuparte, ya que será la propia MongoDB la que pase de JSON a BSON.

    Todos los datos serán cadenas de JSON y esto tiene tanto ventajas como inconvenientes, pero de eso hablaremos en otro momento.

    - **Incluye NPM**

    Si eres desarrollador web, sobre todo en la parte del frontend, seguramente ya conozcas NPM. **NPM es un gestor de paquetes para Javascript.** Es una especie de Maven (si usas Java te sonará) para paquetes Javascript, es decir, sirve para instalar y gestionar versiones de paquetes y librerías js.

    **NPM** lleva mucho tiempo siendo el referente en cuanto a gestores de paquetes javascript, pero desde hace un tiempo le ha salido un competidor: **Yarn**. Los de yarn aseguran que su gestor de librerías js es mucho más rápido y potente, pero como la mayoría de gente usa NPM he decidido hablar sobre él.

    ## **¿QUÉ ES NPM?**

    ![./Untitled%203.png](./Untitled%203.png)

    **npm** es el gestor de paquetes que viene incluído en la instalación de Node.js, así que para instalarlo simplemente tendrás que instalar NodeJS. 

    Pero… **¿Qué es esto de un gestor de paquetes?** Para los que hayan trabajado con el sistema de LINUX ya sabrán de sobras que es todo esto, pero para los que no… Un gestor de paquetes es un conjunto de utilidades o herramientas diseñadas para mejorar algo, en el caso de npm son mejoras para el entorno de Node.js.

    [npm](https://www.npmjs.com)

    ### ¿PARA QUÉ SIRVE NPM?

    Como hemos visto NPM es un gestor de paquetes, eso quiere decir que puede:

    - Descargar librerías **js**
    - Actualizar en caso de nueva versión las librerías instaladas
    - Descargar una versión en específico de la librería
    - Gestionar las dependencias entre paquetes

    Una de las ventajas de npm es que todos los paquetes los descarga de un **repositorio** de paquetes llamado **npmjs**.

    NPM usa un fichero especial llamado **package.json** en el que se declaran las librerías y sus versiones. Esto es muy útil ya que puedes tener este archivo con todas las librerías que necesites para que con un simple comando se descarguen todas y no tengas que estar buscándolas en sus respectivos repositorios.

    Lo bueno es que al repositorio de librerías puedes subir las tuyas propias de tal forma que si actualizas la librería y la subes al repositorio, con un comando dentro del proyecto en el que se usa se actualiza a la nueva versión.

    ⚠️**ProTip**

    ![./Group_4.png](./Group_4.png)