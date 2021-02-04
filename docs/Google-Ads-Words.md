

## Componente `Google Ads Words`

### Código del componente

Copia y pega este código dentro del componente `Google Ads Words`
```django
{% assign GoogleAdsCode = "" %}<!-- pon acá el código ej: AW-123456789 -->

{% if site.google_analytics_id.size > 0 %}
   <script>gtag('config', '{{GoogleAdsCode}}');</script>
{% else %}
   <script async src='https://www.googletagmanager.com/gtag/js?id={{GoogleAdsCode}}'></script>
   <script> 
      window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} 
      gtag('js', new Date()); 
      gtag('config','{{GoogleAdsCode}}'); 
  </script>
{% endif %}
```

Este componente debe ir al final del [[Componente HEAD]]

```django
{{ "Google Ads Words" | get_component }}

```
## Componente `Conversión Google Ads`

```jinja
{% assign Google_Conversion_Tracking_ID_and_Label = "" %}<!-- Ejemplo AW-123456789/7qiwCOf0lHgQvYDv2QM -->

<script>
  gtag('event', 'conversion', {
    'send_to': '{{Google_Conversion_Tracking_ID_and_Label}}',
    'value': {{checkout.total}},
    'currency': '{{site.currency.isoCode}}',
    'transaction_id':'{{checkout.numberDocumentTax}}'
  });
</script>
```
Este componente debe ir en la pantalla [[Checkout Éxito]]

```jinja
{{ "Conversión Google Ads" | get_component }}
```

## Comprobar que ads words quedo bien instalado 

1. Necesitas instalar google tag assistant en tu navegador google chrome o microsoft edge
- [instalar extensión](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=es)

2. Revisar que las etiquetas se esten registrando, puedes ver este [Tutorial en video](https://www.youtube.com/watch?v=VD1qRE1mjkY)