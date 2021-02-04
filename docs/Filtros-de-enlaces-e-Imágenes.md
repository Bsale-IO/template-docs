## Archivos

* **variable_de_archivo:** pueden ser archivos `js` o `css` alojados en el menú:
> `Tienda en Linea` **>** `Diseño` **>** `Archivos` 
```django
{{ variable_de_archivo | asset_url }}
```
### Ejemplo
```django
<link rel="stylesheet" media="all" href="{{'modificaciones.css' | asset_url }}">
```

## Imágenes 

* **variable_de_imagen:** puede ser el nombre de la imagen a utilizar `"imagen.jpg"`(entre comillas) o una variable que contiene una imagen `{{product.image}}`(sin comillas)

```js
{{ product.image | image_url: "formato" }}

{{ "nombre_image.jpg" | image_url: "formato" }}

{{ "nombre_image.png" | image_url: "formato" }}
```
| formato | dimensiones |
| ------- | ------------|
| **"O"** | Tamaño original de la imagen |  
| **"X"** | 1200px* |
| **"L"** | 800px* | 
| **"M"** | 400px* | 
| **"S"** | 240px* | 
| **"T"** | 100px* | 
> *ancho o alto, la condición que se cumpla primero. 

### Ejemplo

```django
<img src="{{"image.jpg" | image_url: "L"}}">
```
