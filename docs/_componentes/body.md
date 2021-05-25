---
layout: default
title: Componente Body
published: true
---
{% raw %}
Es un componente básico que debe ir dentro de la etiqueta `<head>`, dentro de él debe poner los componentes "[Google Tag Manager](../eventos/tag-manager.html)" y "[Schema](../seo/Schema.html)".

Dentro del componente **body** debes poner a los siguientes componentes

```liquid
{{ 'TagManager-Body' | get_component }}
{{ 'Schema' | get_component }}
```

Donde poner el componente **body** dentro de una [Plantilla](../plantillas/Plantilla)

```html
<!DOCTYPE html>
<html lang="es">
   <head>
    ...  
   </head>
   <body>
      {{ 'body' | get_component }}
      ...
   </body>
</html>
```
{% endraw %}