---
layout: default
title: Tag Manager UA
category: Google
published: true
---
{% raw %}

<div class="alert alert-warning" role="alert">
¡Importante! ⚠
Este componente sólo es compatible con [[Universal Analytics]] y [[Tag Manager con Universal Analytics| Tag Manager con Universal Analytics Eventos]]

Para implementar _**`Analytics GA4`**_ se necesita _**actualizar componente**_ y tener la versión Bsale 5.5
- [[ Analytics GA4 Componente]]
- [[ Tag Manager Componente ]]
- [Componente load head](load-json-Bsale#load-head-para-bsale-55)
</div>

## Componentes Tag Manager

Se deben crear 2 componentes, uno que se pega dentro de [[Componente HEAD]] y el otro dentro de [[Componente BODY]]

### componente `tagmanager_head`

```liquid
{% if site.google_analytics_id.size > 0 %}
    <script async src="https://www.googletagmanager.com/gtag/js?id={{ site.google_analytics_id | upcase | strip }}"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '{{ site.google_analytics_id | upcase | strip }}');
        window.INIT.config.analytics = true
    </script>
{% endif %}
{% if site.track_manager_id.size > 0 %}
    <script>
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','{{ site.track_manager_id | upcase | strip }}');
        window.INIT.config.gtm = true
    </script>
{% endif %}
```
### componente `tagmanager_body`

```liquid
{%if site.track_manager_id.size > 0 %}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id={{site.track_manager_id | upcase | strip}}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
{%endif%}
```

## Implementación

1. Dentro del componente [[Componente HEAD]] pega el siguiente código 

```liquid
{{ 'tagmanager_head' | get_component }}
```

2. Dentro del componente [[Componente BODY]] pega el siguiente código

```liquid
{{ 'tagmanager_body' | get_component }}
```

## Comprobar instalación

1. Necesitas instalar google tag assistant en tu navegador google chrome o microsoft edge
- [instalar extensión](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=es)

2. Revisar que las etiquetas se estén registrando, puedes ver este [tutorial](https://support.google.com/analytics/answer/1008083?hl=es)

{% endraw %}