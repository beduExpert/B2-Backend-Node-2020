# Reto 2

1. Instalar el paquete cron de npm con el comando `npm i cron`
2. Crear un script con el siguiente código

    ```jsx
    var CronJob = require('cron').CronJob;
    var job = new CronJob('* * * * * *', function() {
      console.log('Verás este mensaje cada segundo');
    }, null, true, 'America/Mexico_city');
    job.start();

    ```

3. Modificar la sintaxis de asteriscos para que imprima el mensaje cada 30 segundos.

    La siguiente [herramienta puede serte de ayuda:](https://crontab.guru/)
