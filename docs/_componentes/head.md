---
layout: default
title: head
published: true
---

Es un componente básico que debe ir dentro de la etiqueta `<head>`

Dentro del componente **head** debes llamar a los siguientes componentes
```liquid
{{ 'Metadata' | get_component }}
{{ 'estilos css' | get_component }}
{{ 'script js' | get_component }}
{{ 'tagmanager_head' | get_component }}
{{ 'analytics' | get_component }}
{{ 'facebook_pixel' | get_component }}
{{ 'Google Ads Words' | get_component }}
```

Donde poner el componente **head** dentro de una [[Plantilla | Plantillas]]

```html
<!DOCTYPE html>
<html lang="es">
   <head>
      {{ 'head' | get_component }}
   </head>
   <body>
      ...
   </body>
</html>
```