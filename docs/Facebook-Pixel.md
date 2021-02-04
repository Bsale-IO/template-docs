<sub><sup>[[Home]] > [[Componente]] > [[Componentes SEO]] > Facebook Pixel</sup></sub>

> # ¡Importante!
> ### _Plugin de navegador como <ins>adblock</ins> o similares realizan un bloqueo de la librería de Facebook pixel_

Se debe crear un componente llamado facebook_pixel y pegar el siguiente código
> Se necesita template versión 4 o superior

``` js
{% if site.facebook_pixel_id.size > 0 %}
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '{{ site.facebook_pixel_id }}');
  fbq('track', 'PageView');
  window.INIT.config.pixel = true;
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id={{ site.facebook_pixel_id }}&ev=PageView&noscript=1"
/></noscript>
{% endif %}
```

Luego insertarlo en [[Componente HEAD]]

```html
{{ 'facebook_pixel' | get_component }}
```