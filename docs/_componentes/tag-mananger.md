---
layout: default
title: Tag Manager
category: Google
published: true
---
{% raw %}

## Componente Nuevo

<div class="alert alert-warning">
    <strong>¡Importante! ⚠</strong>
    <p>Antes de actualizar este componente es necesario que actualices el componente <a href="../componentes/load-json-bsale#load-head-para-bsale-55">load head para Bsale 5.5</a></p>
</div>

### Componente `tagmanager_head`

- Busca el componente `tagmanager_head`
- Copiar y Pega este código dentro del componente `tagmanager_head`

```liquid
{% if site.track_manager_id.size > 0 %}
    <script>
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','{{ site.track_manager_id | upcase | strip }}');
    </script>
{% endif %}
```
#### Instalación 
Revisa que el componente esté siendo llamado dentro de [componente head](../componentes/head)

```liquid
{{ "tagmanager_head" | get_component }}
```

### Componente `tagmanager_body`

- Busca el componente `tagmanager_body`
- Copiar y Pega este código dentro del componente `tagmanager_body`

```liquid
{%if site.track_manager_id.size > 0 %}
   <noscript><iframe src="https://www.googletagmanager.com/ns.html?id={{site.track_manager_id | upcase | strip}}"
   height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
{%endif%}
```
#### Instalación 
Revisa que el componente esté siendo llamado dentro de [componente body](../componentes/body)

```liquid
{{ "tagmanager_body" | get_component }}
```

## Componente Antiguo

<div class="alert alert-warning" role="alert">
    <strong>¡Importante! ⚠</strong>
    <p>Este componente sólo es compatible con <a href="../eventos/analytics-ua">Universal Analytics</a> y <a href="../eventos/tag-manager-ua-eventos">Tag Manager con Universal Analytics</a></p>
    <p>Para implementar <strong>Analytics GA4</strong> se necesita <strong>actualizar componente</strong> y tener la versión Bsale 5.5</p>
    <ul>
        <li><a href="../componentes/analytics">Analytics GA4 Componente</a></li>
        <li><a href="#componente-nuevo">Tag Manager Componente nuevo</a></li>
        <li><a href="../componentes/load-json-Bsale#load-head-para-bsale-55">Componente load head</a></li>
    </ul>
</div>

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

#### Instalación 
Revisa que el componente esté siendo llamado dentro de [componente head](../componentes/head)

```liquid
{{ "tagmanager_head" | get_component }}
```

### componente `tagmanager_body`

```liquid
{%if site.track_manager_id.size > 0 %}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id={{site.track_manager_id | upcase | strip}}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
{%endif%}
```
#### Instalación 
Revisa que el componente esté siendo llamado dentro de [componente body](../componentes/body)

```liquid
{{ "tagmanager_body" | get_component }}
```

## Comprobar instalación

1. Necesitas instalar google tag assistant en tu navegador google chrome o microsoft edge
- [instalar extensión](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=es)

2. Revisar que las etiquetas se estén registrando, puedes ver este [tutorial](https://support.google.com/analytics/answer/1008083?hl=es)






{% endraw %}