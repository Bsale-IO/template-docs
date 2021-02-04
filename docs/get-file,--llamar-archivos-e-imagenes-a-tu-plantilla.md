<sub><sup>[[Home]] > [[Liquid Bsale]] > [[Filtros | Filtros Bsale Liquid]] > Filtros  de Enlaces</sup></sub>

Los filtros de enlace retornan estructuras `url` según [archivos](#archivos) o [imágenes](#imágenes)

## Archivos
si tienes un archivo llamado "estilos.css" dentro de los [[archivos]] de tu e-commerce debes usar el siguiente filtro

#### CSS y JS
```
{{ 'estilos.css' | asset_url}}
{{ 'script.js' | asset_url}}
```
Utilización 
```html
<link rel="stylesheet" href="{{ 'estilos.css' | asset_url}}" media="screen">

<script src="{{ 'script.js' | asset_url }}"></script>
```

## Imágenes
```
{{'nombre-de-image.jpg' | image_url }}
```
Utilización
```
<img src="{{'nombre-de-image.jpg' | image_url }}">
```

### Tamaños de Imagen

En Bsale existen **6 tamaños** predeterminados de imagen, al utilizar un filtro de tamaño se obtiene una imagen de dimensiones **igual o menor** al filtro, es decir si aplico un filtro `image_url: "M"` y tengo una imagen de `300 x 300` pixeles esta seguirá de este tamaño. Si por el contrario la imagen mide `600 x 600` pixeles, al aplicar un filtro `image_url: "M"` quedara de `600 x 600`

| filtro | tamaño imagen (pixeles) | utilización |
| ------ | ----------------------- | ----------- |
| T      | 100 x 100       | {{'nombre-de-image.jpg' \| image_url: 'T' }} |
| S      | 240 x 240       | {{'nombre-de-image.jpg' \| image_url: 'S' }} |
| M      | 400 x 400       | {{'nombre-de-image.jpg' \| image_url: 'M' }} |
| L      | 800 x 800       | {{'nombre-de-image.jpg' \| image_url: 'L' }} |
| X      | 1200 x 1200     | {{'nombre-de-image.jpg' \| image_url: 'X' }} |
| O      | tamaño original | {{'nombre-de-image.jpg' \| image_url: 'O' }} |

Utilización
```
<img src="{{'nombre-de-image.jpg' | image_url: 'M' }}">
```

### Mis imágenes no son cuadradas ¿Cómo quedaran si aplico un filtro?

Si tus imágenes no son cuadradas no hay problema, ya que se escala respetando su `ratio`, por ejemplo:
* La imagen mide `800 x 200`, aplico un filtro `M` = `400 x 100`
* La imagen mide `200 x 800`, aplico un filtro `M` = `100 x 400`