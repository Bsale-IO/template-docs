Cada template de bsale se construye en base diferentes tipos de plantillas, cada una de estas representa una tipo de página dentro de tu sitio

## Tipos de Plantillas
* [[ Tipo de Plantillas | Plantillas URL ecommerce Bsale ]]

## Estructura Básica
La estructura básica de una plantilla debe utilizar los componentes [[head | componente head]], [[body| componente body]], [[Cabecera | componente cabecera]] y [[Pie de Página | Componente pie de página]].

```html
<!DOCTYPE html>
<html lang="es">
   <head>
      {{ 'head' | get_component }}
   </head>
   <body>
      {{ 'body' | get_component }}
      {{ 'Cabecera' | get_component }}
      ...
      {{ 'Pie de Página' | get_component }}
   </body>
</html>
```
Cada plantilla tiene una estructura única de [url](Plantillas-URL-ecommerce-Bsale) que permite identificar el tipo de contenido 

