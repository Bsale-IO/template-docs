<sub><sup>[[Home]] > [[Componente]] > [[Componentes SEO]] > Google Tag Manager</sup></sub>

## Configuración
1. [[ Crear cuenta | Analytics crear cuenta]]
2. [[ Habilitad comercio electrónico en analytics | Analytics habilitar comercio electrónico]]
3. [[ Fijar Objetivos, Configurar Embudo (Funnel) | Analytics configurar embudo, funnel]]
4. [[Excluir de tráfico | Analytics Excluir de tráfico  ]] 

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

## Implementación

1. Dentro del componente [[Componente HEAD]] pega el siguiente código 

```js
{{ 'tagmanager_head' | get_component }}
```

2. Dentro del componente [[Componente BODY]] pega el siguiente código

```js
{{ 'tagmanager_body' | get_component }}
```

## Comprobar que ads words quedo bien instalado 

1. Necesitas instalar google tag assistant en tu navegador google chrome o microsoft edge
- [instalar extensión](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=es)

2. Revisar que las etiquetas se estén registrando, puedes ver este [tutorial](https://support.google.com/analytics/answer/1008083?hl=es)