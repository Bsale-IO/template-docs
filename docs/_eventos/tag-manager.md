---
layout: default
title: Tag Manager
category: Google
published: true
---
{% raw %}

> ### ¡Importante! ⚠
> Este componente sólo es compatible con [[Universal Analytics]] y [[Tag Manager con Universal Analytics| Tag Manager con Universal Analytics Eventos]]
>
> Para implementar _**`Analytics GA4`**_ se necesita _**actualizar componente**_ y tener la versión Bsale 5.5
> - [[ Analytics GA4 Componente]]
> - [[ Tag Manager Componente ]]
> - [Componente load head](load-json-Bsale#load-head-para-bsale-55)

## Componente tag_manager 

Se deben crear 2 componentes, uno que se pega dentro de [[Componente HEAD]] y el otro dentro de [[Componente BODY]]

### componente `tagmanager_head`

```django
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

```django
{%if site.track_manager_id.size > 0 %}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id={{site.track_manager_id | upcase | strip}}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
{%endif%}
```

## Versión Nueva Bsale 5.5

> **¡Importante! ⚠**
> Antes de actualizar este componente es necesario que actualices el componente [load head para Bsale 5.5](load-json-Bsale#load-head-para-bsale-55)

### 1. Componente `tagmanager_head`

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
Revisa que el componente esté siendo llamado dentro de [[componente head]]

```liquid
{{ "tagmanager_head" | get_component }}
```

### 2. Componente `tagmanager_body`

- Busca el componente `tagmanager_body`
- Copiar y Pega este código dentro del componente `tagmanager_body`

```liquid
{%if site.track_manager_id.size > 0 %}
   <noscript><iframe src="https://www.googletagmanager.com/ns.html?id={{site.track_manager_id | upcase | strip}}"
   height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
{%endif%}
```
#### Instalación 
Revisa que el componente esté siendo llamado dentro de [[componente body]]

```liquid
{{ "tagmanager_body" | get_component }}
```

## Versión Antigua Bsale 5.4 o anterior 

### Implementación

1. Dentro del componente [[Componente HEAD]] pega el siguiente código 

```liquid
{{ 'tagmanager_head' | get_component }}
```

2. Dentro del componente [[Componente BODY]] pega el siguiente código

```liquid
{{ 'tagmanager_body' | get_component }}
```

## Comprobar que Tag Manager quedó bien instalado 

1. Necesitas instalar google tag assistant en tu navegador google chrome o microsoft edge
- [instalar extensión](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=es)

2. Revisar que las etiquetas se estén registrando, puedes ver este [tutorial](https://support.google.com/analytics/answer/1008083?hl=es)

{% endraw %}