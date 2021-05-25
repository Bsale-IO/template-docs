---
layout: default
title: Analytics GA4
category: Google
published: true
---
{% raw %}
<div class="alert alert-warning">
    <strong>¡Importante! ⚠</strong>
    <p>Antes de actualizar este componente es necesario que actualices el componente <a href="../componentes/load-json-bsale#load-head-para-bsale-55">load head para Bsale 5.5</a></p>
</div>

## Componente `analytics`

- Crea un componente con el nombre `analytics`
- Copiar y Pega este código dentro del componente `analytics`

```liquid
{% if site.google_analytics_id.size > 0 %}
    <script async src="https://www.googletagmanager.com/gtag/js?id={{ site.google_analytics_id | upcase | strip }}"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '{{ site.google_analytics_id | upcase | strip }}');
    </script>
{% endif %}
```
### Instalación 
Inserta este componente del del [componente head](../componentes/head)

```liquid
{{ "analytics" | get_component }}
```

{% endraw%}