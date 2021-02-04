Es la página de principal de tu e-commerce, cargará cada vez que la personas ingresen a tu sitio 

## Estructura Básica
```html
<!DOCTYPE html>
<html lang="es">
   <head>
      {{ 'head' | get_component }}
   </head>
   <body>
      {{ 'Cabecera' | get_component }}
      ...
      {{ 'Pie de Página' | get_component }}
   </body>
</html>
```