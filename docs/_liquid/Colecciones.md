---
layout: liquid
title: Colecciones y Busquedas
published: true
---

{% raw %}

>Las variables de colección las puedes usar en 4 tipos de páginas: <br>
> _**Colección**_, _**Marca**_, _**Búsqueda**_ e [[Inicio | Plantilla Inicio]]

> Para más detalles de _**Búsqueda**_ revisar _[[Parámetros de búsqueda]]_


Se utiliza:
```css
     {{collection.title}} 
     {{collection.description}}
     {{collection.link}}
     {{collection.size}}
     {{collection.limitPrice}}
     {{collection.limitPrice.maxPrice}}
     {{collection.limitPrice.minPrice}}
     {{collection.attributes}}
     {{collection.sorting}}
     {{collection.products}}
     {{collection.image}}
```

| variable | descripción |
| -------- | ----------- |
| `{{collection.title}}` | Corresponde al Nombre de la Colección |
| `{{collection.link}}` | Corresponde al **Link** de la Colección |
| `{{collection.size}}` | Corresponde a la **Cantidad de ítem** en la Colección |
| `{{collection.limitPrice}}` | `objeto` que trae el precio más alto y más bajo en un producto dentro de la colección |
| `{{collection.limitPrice.maxPrice}}` | precio mas alto |
| `{{collection.limitPrice.minPrice}}` | precio mas bajo |
| `{{collection.attributes}}` | `objeto` Atributos de los productos asociados en la Colección. |
| `{{collection.sorting}}` | ***en Beta*** |
| `{{collection.products}}` | `objeto` Corresponde a los **Productos** de la colección.|
| `{{collection.image}}` | Corresponde a la **Url** de la imágen en la colección. |



## Mostrar los productos de una colección

```liquid
{% for product in collection.products %}
  {{product.id}}
  {{product.productId}}
  {{product.title}}
  {{product.link}}
  {{product.notice}}
  {{product.defaultImage}}
  {{product.images}}
  {{product.priceList}}
  {{product.videoUrl}}
  {{product.description}}
  {{product.descriptions}}
  {{product.variantId}}
  {{product.discountRate}}
  {{product.discountCant}}
  {{product.finalPrice}}
  {{product.fpWithoutDiscount}}
  {{product.taxPrice}}
  {{product.brand}}
  {{product.totalStock}}
  {{product.allowNegativeStock}}
  {{product.stockControl}}    
{% endfor%}
```

| variable | descripción |
| -------- | ----------- |
|`{{product.id}}`|ID del producto en el e-commerce|
|`{{product.productId}}`| ID del producto en Bsale |
|`{{product.title}}`| Nombre del producto |
|`{{product.link}}`| `url` de la página del producto `/product/[nombre producto]`
|`{{product.notice}}`| texto destacado producto |
|`{{product.defaultImage}}`| Imagen por defecto del producto |
|`{{product.images}}`| `objeto` todas las imagenes del producto |
|`{{product.images.href}}`| `url` de imagen dentro del objeto images |
|`{{product.priceList}}`| ID de la lista de precio del producto | 
|`{{product.videoUrl}}`| `url` del video del producto
|`{{product.description}}`| Descripción del producto | 
|`{{product.descriptions}}`| `objeto` otras descripciones del producto |
|`{{product.variantId}}`| ID de la __variante por defecto__ del producto|
|~`{{product.variantPrice}}`~|`DESCONTINUADA` precio de la variante por defecto |
|**Precio y Descuentos**  || 
|`{{product.discountRate}}`| Descuento del producto |
|`{{product.discountCant}}`| Productos desde los cuales se aplica el descuento |
|`{{product.finalPrice}}`| Precio del producto con descuento |
|`{{product.fpWithoutDiscount}}`| precio final sin descuento | 
|`{{product.taxPrice}}`| **new** Impuestos aplicados al precio | 
|~`{{product.hasDecimal}}`~| `DESCONTINUADA` indica si el producto permite venta en decimales |
|~{{product.discountName}}~| `DESCONTINUADA` Nombre del descuento del producto |
|**Marca**||
|`{{product.brand.id}}`| ID de la Marca del producto |
|`{{product.brand.name}}`| Nombre de la Marca del Producto | 
|`{{product.brand.LogoImg}}`| link marca del producto |
|`{{product.brand.link}}`| url de la marca del producto `/brand/[nombre marca]` |
|**Stock**||
|`{{product.totalStock}}`| **new** devuelve el stock total del producto |
|`{{product.allowNegativeStock}}`| `0` no permite venta no stock negativo<br> `1` permite venta no stock negativo |
|`{{product.stockControl}}`| `0` no controla stock <br> `1` controla stock |

## Stock de un producto

### Forma Nueva

* Si el producto _**No es un servicio**_ Válida:
  * Si el stock es menor a 1 y controla stock
  * Si el stock es menor a 1 y No permite stock negativo

* Nota: Comportamiento en packs
  * Si tan solo un producto CONTROLA STOCK dentro del pack, todo el pack pasa a CONTROLAR STOCK. La variable stockControl será igual a 1.
  * Si tan solo un producto NO PERMITE VENTA CON STOCK NEGATIVO dentro del pack, todo el pack NO PERMITIRÁ LA VENTA CON STOCK NEGATIVO. La variable allowNegativeStock será igual a 0. 

```js
{% assign outStock = false %}
{% if product.classification != 1 %}
   {% if product.totalStock < 1 and product.stockControl == 1 %}
      {% if product.allowNegativeStock == 0 %}
         {% assign outStock = true %}
         <div class="bs-stock">Sin Stock</div>
      {% endif %}
   {% endif %}
{%endif%}
```

> ### Forma antigua `DESCONTINUADA`
>
> Para obtener el stock del producto debes ~definir una nueva variable dentro del arreglo `{%for%}`~
>
> ```js
> {% for product in collection %}
>   {% assign product_stock = product.id | get_product_stock %} // define la variable producto_stock
>   {{ product_stock }} // llama a la variable
> {% endfor %}
> ```

### Implementación

* Ubicar el componente que muestra la colección.
* Dentro del componente existe la siguiente estructura de código que se debe eliminar.

```liquid
//Eliminar
{%if product.classification != 1 %}
     {% assign stock = product.id | get_product_stock%}
{% endif %}
```
* Luego se debe ubicar la estructura de código que muestra la etiqueta sin stock
```liquid
//Reemplazar por la nueva estructura
{% if stock < 1 and product.classification != 1%}
    <div class="bs-stock">Sin stock</div>
{% endif%}
```
* Finalmente se debe reemplazar el código anterior por la estructura nueva de código
```liquid
//nueva estructura
{% assign outStock = false %}
{% if product.classification != 1 %}
   {% if product.totalStock < 1 and product.stockControl == 1 %}
      {% if product.allowNegativeStock == 0 %}
         {% assign outStock = true %}
         <div class="bs-stock">Sin Stock</div>
      {% endif %}
   {% endif %}
{%endif%}
``` 

* Cuando se cambia la nueva estructura de la etiqueta sin stock, se debe cambiar la validación que tiene el boton agregar al carro desde colección. 
* Reemplazar la validación por la variable outStock
* La estructura del botón se encuentra en la parte final del componente.

```liquid
//Estructura  del boton agregar al carro desde colección
{% if addToCart %}
   <div class="bs-product-cart mt-auto">
      {% if outStock %} //debe quedar así 
          <button class="btn btn-primary mt-1 invisible" disabled>
              Agotado
          </button>
      {%else%}
          <button class="btn btn-primary mt-1" data-bs="cart.add.collection">
              Agregar al carro
          </button>
      {%endif%}
   </div>
{%endif%}
```

## Otras descripciones del producto
```liquid
{% for product in collection.products %}
   {% for des in product.descriptions %}
      {{des.id}}
      {{des.descriptionName}}
      {{des.html}}
      {{des.default}}
      {{des.order}}
   {% endfor %}
{% endfor %}

```

## Imágenes del producto


Hay dos formas de imprimir las imágenes del producto.

1. Mediante la variable `{{product.defaultImage}}` 
```liquid
{% for product in collection %}
   ...
   <img src="{{ product.defaultImage | image_url }}" title="{{product.title}}"> 
   ...
{% endfor %}
```

2. Iterando dentro del objeto `{{producto.images}}`
```liquid
{% for product in collection %}
   ...
   {% for img in product.images %}
      <img src="{{ img.href | image_url }}" title="{{product.title}}"> 
   {% endfor %}
   ...
{% endfor %}
```

## Productos por página:

En bsale puedes obtener el número de productos por cada página de la colección, para esto existen 2 variables

| variable | descripción |
| -------- | ----------- |
| `{{item_per_page}}` | número de productos por pagina definido por el cliente | 
| `{{total_item}}` | número total de productos en la colección | 

Sin embargo, para definir el número de productos que esta mostrando la pagina de la colección debe crear una nueva variable 
`{{item_in_page}}`



```liquid
{% assign item_in_page = item_per_page %}
{% for i in collection %}
   {%if forloop.last %} 
      {% if forloop.index < item_per_page %} 
         {% assign item_in_page = forloop.index %}
      {%endif%}
   {%endif%}
{% endfor %}
{%if total_item == 0%}
   {% assign item_in_page = 0 %}
{% endif %}
```

Utilización 
```liquid
<span>{{item_in_page}}</span> de <span>{{total_item}}</small>
```

## Imágen en la colección

Para poder agregar esta funcionalidad en los templates, es necesario agregar el siguiente bloque de código en el componente : Coleccion - Buscador - Marca

```liquid
{% if collection.image %}
     <img src="{{collection.image}}">
{%endif%}
```

Estructura final del componente
```html
<section class="bs-collection">
    <div class="container">
       
        <!-- Bloque agregado para visualizar la imágen en la colección -->
        {% if collection.image %}
            <img class="image-collection" src="{{collection.image}}">
        {%endif%}
         

        <div class="row">
            <h1 class="col-lg-9 offset-lg-3">
                {%if current_url contains '/search?'%}
                    Resultado de busqueda: {{title}}
                {%else%}
                    {{title}}
                {%endif%}
            </h1>
            
            {{'Coleccion - Buscador - Marca > filtros' | get_component }}
            
            {% if collection.size > 0 %}
            <article class="col-lg-9">
                {{ 'Coleccion - Buscador - Marca > orden' | get_component }}
                {{'Coleccion' | get_component }}
                {{'Coleccion - Buscador - Marca > paginacion' | get_component }}
            </article>
            {% else %}
            {{'error > coleccion' | get_component }}
            {%endif%}
        </div>
    </div>
</section>
```

{% endraw %}