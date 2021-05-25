---
layout: default
title: Tag Manager GA4 Componente
category: Google
published: true
---
{% raw %}
<div class="alert alert-warning">
    <strong>¡Importante! ⚠</strong>
    <p>Antes de actualizar este componente es necesario que actualices el componente <a href="../componentes/load-json-Bsale#load-head-para-bsale-55">load head para Bsale 5.5</a></p>
</div>

## 1. Componente `tagmanager_head`

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
### Instalación 
Revisa que el componente esté siendo llamado dentro de [[componente head]]

```liquid
{{ "tagmanager_head" | get_component }}
```

## 2. Componente `tagmanager_body`

- Busca el componente `tagmanager_body`
- Copiar y Pega este código dentro del componente `tagmanager_body`

```liquid
{%if site.track_manager_id.size > 0 %}
   <noscript><iframe src="https://www.googletagmanager.com/ns.html?id={{site.track_manager_id | upcase | strip}}"
   height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
{%endif%}
```
### Instalación 
Revisa que el componente esté siendo llamado dentro de [[componente body]]

```liquid
{{ "tagmanager_body" | get_component }}
```
{% endraw %}