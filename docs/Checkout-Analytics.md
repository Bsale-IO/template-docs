Dentro de la configuración del **Checkout** puedes asignar un componente de analytics para poder registrar los eventos que que tengan lugar en el. 
> Se debe crear este componente ya que el checkout funciona aparte del sitio web. 

1. Crea un componente llamado _**checkout_analytics**_
2. Pega el siguiente código
> ```html
> <script>
>    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
>    ga('create', 'UA-XXXXXX-Y', 'auto');
>    ga('send', 'pageview');
> </script>
> <script async src='https://www.google-analytics.com/analytics.js'></script>
> ```

3. Reemplaza el código **UA-XXXXXX-Y** tu ID de analytics.
4. Anda a la configuración > checkout 
5. Activa la opción _**Habilitar track google analytics `Opcional`**_
6. Selecciona el componente _**checkout_analytics**_
7. Guarda la configuración