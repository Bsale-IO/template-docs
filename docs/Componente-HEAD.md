<sub><sup>[[Home]] > [[Componente]] > Componente HEAD </sup></sub>

Es un componente básico que debe ir dentro de la etiqueta `<head>`, dentro de el debe llamar a las "[[TagManager-Head | Google Tag Manager]]", "[[Metadata]]", "[[script js]]" y "[[estilos css]]"

Dentro del componente **head** debes llamar a los siguientes componentes
```
{{ 'Metadata' | get_component }}
{{ 'estilos css' | get_component }}
{{ 'script js' | get_component }}
{{ 'TagManager-Head' | get_component }}
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