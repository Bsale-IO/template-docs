# Indice
- [[¿Cómo utilizar imágenes en Bsale?|Imagenes#c%C3%B3mo-utilizar-im%C3%A1genes-en-bsale]]
  - [[1. Imágenes cómo Archivos  | Imagenes#1-Imágenes-cómo-archivos]]
  - [[2. Imágenes relacionadas a contenido | Imagenes#2-imágenes-relacionadas-a-contenido]]
- [[¿De que tamaño deben ser las imágenes? | Imagenes#de-que-tamaño-deben-ser-las-imágenes]]
  - [[Dimensiones | Imagenes#dimensiones]]
  - [[Filtros de dimensiones de imagen | Imagenes#filtros-de-dimensiones-de-imagen]]
  - [[Peso | Imagenes#peso]]
  - [[Formato de imagen | Imagenes#formato-de-imagen ]]
- [[ Imagen Responsiva | Imagenes#imagen-responsiva]]
- [[Mejora de carga Lazyload | Imagenes#mejora-de-carga-lazyload ]]


## ¿Cómo utilizar imágenes en Bsale?

Hay diferentes 2 formas de utilizar imágenes en Bsale:

### 1. Imágenes cómo Archivos 
Puedes utilizar cualquier imagen cargada desde el menú archivos en cualquier [[componente]] de tu sitio web.
#### Por ejemplo: 
> _"Si quiero poner en mi **pie de página (footer)** la imagen del logo de Sercotec y un logotipo de compra segura"_ 

Para poder utilizar  imágenes debes seguir los siguientes pasos:
1. Subir tus imágenes dentro del menú
   > `Tienda en línea` > `Diseño` > `Archivos`
   >
   >![](https://raw.githubusercontent.com/gmontero/bsale-market-design-doc/master/images/cargar%20imagenes.png)
   >
   > Hacer clic en el signo `+`
   > ![](https://raw.githubusercontent.com/gmontero/bsale-market-design-doc/master/images/subir-imagen.png)
   > 
   > Puedes cambiar el nombre de la imagen que estas subiendo, pero recuerdo siempre agregar la extesión del archivo.
   > > Si es `png` el nombre debe ir como `mi-imagen.png`
   >
   >![](https://raw.githubusercontent.com/gmontero/bsale-market-design-doc/master/images/mi-imagen.png)



2. Llamar a esta imagen dentro de un [[componente | Cómo-usar-Componentes]] o plantilla mediante el filtro liquid `image_url`
   > ```django
   > <img src="{{ "nombre-de-tu-image.png" | image_url }}">
   > ```
   > - El nombre de la imagen debe ir entre comillas `"nombre-de-tu-imagen.png"`

### 2. Imágenes relacionadas a contenido
Son imágenes que cargas mediante configuraciones relacionadas a contenido de tu sitio como:
* [[productos]]
* [[artículos | Blog y Artículos]]
* [[colecciones | Colección, Marcas y Búsqueda]]
* [[medios de pago]]
* [[sliders | https://github.com/gmontero/bsale-market-design-doc/wiki/Slider-Carrusel]]

Estas utilizan variables que son cargadas desde donde se crea este contenido.

#### Por ejemplo: 
> Para llamar a una imagen de producto:
> - Sebe cargar la imagen desde la "Descripción web"
> - Ir a un componente que se cargue en la plantilla del producto
> - Llamar a la imagen utilizando su [[variable | productos]].
> ```django
>  <img src="{{ product.defaultImage | image_url }}">
> ```




## ¿De que tamaño deben ser las imágenes? 

En los templates de  Bsale <ins>**no hay tamaños predefinidos**</ins>. Sin embargo es bueno considerar 3 aspectos para aprovechar mejor el desempeño de las imágenes en tu sitio.

### Dimensiones
Se refiere al ancho y alto de una imagen, <ins>**no hay dimensiones predefinidas**</ins>. Pero es bueno considerar estos formatos sugeridos para aprovechar mejor la pantalla del dispositivo que visite tu sitio. 

| imagen | ancho | alto| ratio | formato |
|---|---:|---:|:---:|---|
| Productos | 1080px | 1080px | 1:1| Cuadrado | 
| Slider Principal escritorio | 1920px | 1080px | 16:9 | Apaisado | 
| Slider Principal Celular | 1080px | 1080px | 1:1 | Cuadrado | 
| Cabecera Colección | 1920px | 640px | 21:9 | Apaisado |

#### Utiliza imágenes de dimensiones similares 
Trata siempre de subir imágenes de tamaño similar. Bsale no va a restringir que  si quieres subir una imagen de 2000px para un producto y una de 100px para otro, sin embargo esto puede causar que la imagen más pequeña se pixele.
Si usas también es bueno que subas imágenes de tamaños similares para mantener la uniformidad.

### Filtros de Dimensiones de imagen
Puede que en ocasiones tengas que utilizar imágenes en diferentes pantallas. Por ejemplo la imagen del producto dentro de su "descripción web" y la misma imagen dentro de la colección a la que fue publicado el producto. 

Para optimizar mejor la carga de tu sitio Bsale tiene un filtro de tamaño de imagen el cualquier te permite cargar una imagen a un tamaño menor del que fue cargado
#### Por Ejemplo 
> - En la descripción web del producto la imagen carga en un tamaño de 1080 x 1080 px
> - Pero la colección utiliza una grilla de 4 columnas, si consideramos que una pantalla estándar es de 1366px de ancho lo que da que cada columna mide 341.5 de ancho. Por esta razón cargar imágenes de 1080px hace que tu sitio sea más lento. 
> - Para mejorar la velocidad de carga es mejor cargar una imagen del tamaño adecuado, para esto utilizamos un filtro de imagen
 
| Filtro | ancho máximo | alto máximo | Ejemplo | 
|:---:|:---:|:---:|---| 
| T | 100 | 100 |`<img src="{{ "imagen.jpg" \| image_url: "T"}}">`|
| S | 240 | 240 |`<img src="{{ "imagen.jpg" \| image_url: "S"}}">`|
| M | 400 | 400 |`<img src="{{ "imagen.jpg" \| image_url: "M"}}">`|
| L | 800 | 800 |`<img src="{{ "imagen.jpg" \| image_url: "L"}}">`|
| X | 1200 | 1200 | `<img src="{{ "imagen.jpg" \| image_url: "X"}}">`|
| O | original | original | `<img src="{{ "imagen.jpg" \| image_url: "O"}}">`|
|  | original | original | `<img src="{{ "imagen.jpg" \| image_url }}">`|

#### ¿Cómo funciona el filtro? 
```django
   <img src="{{ "imagen.jpg" | image_url: "M" }}">
```
> - Se indica utilizando dos puntos `image_url:`
> - El valor debe ir en Mayúscula y entre comillas `image_url: "M"` 

El filtro toma la dimensión más grande, ya sea el ancho o el alto, y según esa dimensión achica la imagen proporcionalmente 

| Tamaño original | Filtro Aplicado | Tamaño final | 
|:---:|:---:|:---:|
| `1080*` x `600` | M | `400*` x `237` | 
| `900` x `1080*` | M | `333` x `400*` | 
| `750*` x `750*` | M | `400*` x `400*` |
| `300` x `300` | M | `300` x `300`**
> \* Dimensión más grande<br>
> \** Si la imagen es de dimensiones menor al tamaño del filtro se mantiene el tamaño original 

### Peso
Una Imagen para web no debería pesar más de 4mb, si una pesa más de ello puede ser por falta de compresión o formato erróneo. Esto se puede solucionar comprimiendo la imagen en sitio como este: [Comprimir Imagen](https://www.iloveimg.com/es/comprimir-imagen)

### Formato de Imagen
El formato también puede afectar el peso 

| formato | contenido | 
|---|---|
| `png` | logotipos, imagenes con transparencia | 
| `jpg` | fotos, imagenes de productos |
| `gif` | animaciones, pesan más | 
| webp | **No Soportado**, ya que no lo pueden leer dispositivos iOS | 

## Imagen Responsiva
Una Imagen resposiva (_responsive image /ing_) se refiere a una imagen que se adecua al tamaño de la pantalla. 
Todos los templates de Bsale son en base a [Bootstrap](https://getbootstrap.com/docs/4.5/content/images/#responsive-images) por lo que transformar una imagen en responsive se debe usar la clase `.img-fluid`

```django
<img class="img-fluid" src="{{ "image.png" | image_url }}" alt="…" title="...">
```
#### Responsive en HTML5

Desde [HTML5](https://developer.mozilla.org/es/docs/HTML/HTML5) se implemento la etiqueta `<source>` que permite informar al navegador web cual imagen cargar según el tamaño de la pantalla que esta usando el usuario. 

```django
<picture>
   <source media="(min-width: 1200px)" srcset="{{"image.png" | image_url: "O" }}">
   <source media="(min-width: 800px)" srcset="{{"image.png" | image_url: "X" }}">
   <source media="(min-width: 400px)" srcset="{{"image.png" | image_url: "L" }}">
   <source media="(min-width: 240px)" srcset="{{"image.png" | image_url: "M" }}">
   <source media="(min-width: 100px)" srcset="{{"image.png" | image_url: "S" }}">
   <img src="{{ "imageMobile.png" | image_url: "T" }}" loading="lazy" alt="…">
</picture>
``` 
Esto resulta en la siguiente tabla 

| Desde* | Hasta* | imagen que carga |
|---:|---:|:---:|
| 1200px | más grande | imagen original |
| 800px | 1199px| X | 
| 400px  |799px | L | 
| 240px | 399px| M | 
| 100px | 239px| S |
|  0 | 100px | T | 
> \* ancho de pantalla 

#### Responsive en Slider
Los Slider en Bsale te permiten subir 2 imágenes por cada diapositiva, una para imagen de escritorio(desktop) y otra para moviles(mobile)
Si estas utilizando `new_get_slider` para llamar al slider en la plantilla puedes usar estas variables 

| variable | descripción |
|---|---|
| {{ slide.imageUrl }} |	url imagen desktop|
|{{ slide.imageMobileUrl }}|	url imagen mobile|

Más información [[aquí| Slider Carrusel]]



## Mejora de carga Lazyload 
Lazyload es un patrón de diseño que permite distribuir el peso de la carga de imágenes de tu sitio web cargándolas sólo cuando van a ser visibles. Esto hace que tu sitio sea más ligero para los navegadores y por tanto más rápido.

### Native Lazyload

Los navegadores más modernos reconocen la propiedad `loading` de una imagen 
#### Imagen
```django
<img src="{{ "image.png" | image_url }}" loading="lazy" alt="…">
``` 

#### Imagen responsiva 
```django
<picture>
   <source media="(min-width: 800px)" srcset="{{"image.png" | image_url: "L" }}">
   <img src="{{ "imageMobile.png" | image_url: "M" }}" loading="lazy" alt="…">
</picture>
``` 

### Liberia Vanilla Lazyload
Los templates en Bsale cargan por defecto una libreria para los navegadores que no soportan native lazyload 
 
#### Imagen
```django
<img class="lazy" src="{{ "image.png" | image_url: "T" }}" data-src="{{ "image.png" | image_url: "M" }}"  alt="…">
``` 
- cargara primero la imagen **`T`**
- cuando la imagen sea visible para el usuario cargara la imagen **`M`**

#### Imagen responsiva 
```django
<picture>
   <source media="(min-width: 800px)" data-srcset="{{"image.png" | image_url: "L" }}">
   <img class="lazy" data-srcset="{{ "imageMobile.png" | image_url: "M" }}" loading="lazy" alt="…">
</picture>
```
más información sobre la libreria en: [vanilla-lazyload](https://github.com/verlok/vanilla-lazyload)

### Slider
Los slider tiene su propio sistema de lazyload que ya esta estructurado en los componente.
- [[Slider Carrusel]]



   
## Ver tambien 

- [[filtros de imagen |get-file,--llamar-archivos-e-imagenes-a-tu-plantilla#imágenes]]
- cómo obtener [[imagenes cuadradas | imagenes-siempre-cuadradas]]