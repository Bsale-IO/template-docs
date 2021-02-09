---
layout: liquid
title: Productos
published: true
---


{% raw %}

<sub><sup>[[Home]] > [[Liquid Bsale]] > [[Variables | Variables#tipos-de-variables-en-bsale]] > Productos </sup></sub>

Cada producto tiene una página particular dentro del sitio que puedes encontrar en la url `www.tusitio.cl/product/[nombre producto]` esta se genera en base a la [[Plantilla de Producto | Plantilla Producto]]

## Información del Producto
| Código | Descripción |
| --------------------- | ------------------- |
| `{{ product.title }}` | Nombre del Producto |
| `{{ product.collections }}`| `array` Colecciones a la que pertenece el producto |
| `{{ product.description }}` | Descripción principal del producto |
| `{{ product.descriptions }}` | `array` [Otras descripciones](#otras-descripciones) del producto |
| `{{ product.link }}` | url del producto `/product/[nombre-producto]` |
| `{{ product.id }}` | ID del producto dentro de tu ecommerce |
| `{{ product.variantId }}` | ID de la variante por defecto | 
| `{{ product.productId }}` | ID del producto dentro de **Bsale**  |
| `{{ product.notice }}` | Texto a destacar |
| `{{ product.defaultImage }}` | url de la Imagen por defecto |
| `{{ product.videoUrl }}` | link del video de uso del producto |
| `{{ product.hasDecimal }}` | Cantidad de Decimales que utiliza |
| `{{ product.classification }}` | tipo de producto ( `0` = producto, `1` = servicio, `3` = pack) |

### Descuento
| Código | Descripción |
| --------------------- | ------------------- |
| `{{product.discountRate}}` | Porcentaje de **Descuento** |
| `{{product.discountName}}` | Nombre del **Descuento** |
| `{{product.discountCant}}` | Número de unidades sobre las que se aplica el descuento **Descuento** ej: desde 2 productos |
### Precio
| Código | Descripción |
| --------------------- | ------------------- |
| `{{ product.priceList }}` | ID de la lista de precio |
| `{{product.variantPrice}}` | Precio del producto sin descuentos |
| `{{product.final_price}}` | Precio final del producto aplicando descuentos |

### Marca
| Código | Descripción |
| --------------------- | ------------------- |
| `{{ product.brand.name }}` | Nombre de la marca |
| `{{product.brand.logoImg}}` | Logo de la marca |
| `{{product.brand.link}}` | url `misitio.com/brand/[nombre marca]` |

## Otras Descripciones:
Un producto puede tener más de una sola descripción general como por ejemplo la ficha técnica para traer esta información a pantalla es necesario realizar un arreglo ``{%for%}`` 

**Se utiliza:**
```css
{% for descripcion in product.descriptions%}
     {{descripcion.descriptionName}}
     {{descripcion.id}}
     {{descripcion.html}}
     {{descripcion.order}}
     {{descripcion.default}}
{% endfor%}

```

| Código | Descripción |
| --------------------- | ------------------- |
| `{{descripcion.descriptionName}}` | Es el nombre de la descripción|
| `{{descripcion.id}}` | Corresponde al id de la descripción|
| `{{descripcion.html}}` | Es el contenido de la descripción|
| `{{descripcion.order}}` | Corresponde al **orden de la descripción en la base de datos|
| `{{descripcion.default}}` | Define si corresponde a la descripción predeterminada|


## Variant:
Los Productos se pueden separar en variantes por ejemplo un vendo unos zapatos y tengo un zapata rojo y otro azul cada uno de ellos es una variante. 
Para imprimir las variantes dentro de la página producto debo usar en arreglo {%for%}

**Se utiliza:**
```css
{% for variante in variant %}
   {{variante.title}}
   {{variante.price}}
   {{variante.id}}
   {{variant.discount.name}}
   {{variant.discount.percent}}
   {{variant.discount.minimumQuantity}}
   {{variante.finalPrice}}
   {{variante.hasDecimal}}
   {{variante.sku}}
   {{variante.unlimitedStock}}
   {{variante.allowNegativeStock}}
   {{variante.taxes}}
   {{variante.shipping.weight}}
   {{variante.shipping.width}}
   {{variante.shipping.lenght}}
   {{variante.shipping.deph}}
{% endfor %}
```
 Código Antiguo | Código | Descripción |
| -------------- | --------------------- | ------------------- |
| <sup>`{{var.descripcion_variante}}`</sup> | `{{var.title}}` | Nombre de la variante |
| <sup>`{{var.valor_variante}}`</sup> | `{{var.price}}` | `número` Precio de la variante |
| <sup>`{{var.id_variante_producto}}`</sup> |  `{{var.id}}` | `número` id de la variante |
| <sup>`{{var.discount_name}}`</sup> |  `{{var.discount.name}}` | Nombre del Descuento |
| <sup>`{{var.discount_rate}}`</sup> |  `{{var.discount.percent}}` | `número` Porcentaje de Descuento |
| <sup>`{{var.discount_cant}}`</sup> | `{{var.discount.minimumQuantity}}` | Cantidad Mínima de productos para que se aplique el descuento |
| <sup>`{{var.final_price}}`</sup> |  `{{var.finalPrice}}` | `numero`Precio con Descuento |
| <sup>`{{var.permite_decimal}}`</sup> |  `{{var.hasDecimal}}` |  |
|      | `{{var.sku}}` | Sku de la variante |
|     | `{{var.unlimitedStock}}` | `boolean`  |
|     | `{{var.allowNegativeStock}}` | `boolean` |
|     | `{{var.taxes}}` | Impuestos totales aplicados a un producto |
|   | `{{var.shipping.weight}}` | Peso del producto|
|   | `{{var.shipping.width}}` | Ancho de la caja producto|
|   | `{{var.shipping.lenght}}` | Largo de la caja del producto|
|  | `{{var.shipping.deph}}` | Profundidad de la caja del producto |

### Stock de la Variante:
Una forma de obtener el stock de cada variante es emplear el filtro `get_stock_variant`  [[ver link | Filtros-de-stock]]
```css
/* variante 1 = 20, variante 2 = 7 */
{% for var in variant %}
   {% assign variant_stock = var.id | get_stock_variant %}
   {{variant_stock}}
{% endfor %}
```
Si por el contrario necesitas información más detalla del stock como las tiendas en las que esta puedes utilizar la siguiente estructura. 

```css
{% for var in variant %}
   {% for stock in var.stock %}
      {{stock.officeId}}
      {{stock.office}}
      {{stock.quantity}}
      {{stock.quantityReserved}}
      {{stock.quantityAvailable}}
   {% endfor %}
{% endfor %}

```
| Código | Descripción |
| --------------------- | ------------------- |
| `{{stock.officeId}}` | ID de la Sucursal |
| `{{stock.office}}` | Nombre de la Sucursal |
| `{{stock.quantity}}` | Stock en la Sucursal |
| `{{stock.quantityReserved}}` | Stock reservados, en carros pero no comprados |
| `{{stock.quantityAvailable}}` | Stock habiliados |

ver [[Definir Mensaje de Stock | Mensaje Stock]]

## Imágenes:
Corresponde a un grupo/arreglo de imágenes del producto.

```css
{% for image in product.images %}
   {{image.id}}
   {{image.LegendImage}}
   {{image.href}}
   {{image.state}}
{%endfor%}
```
Donde:

| Variable Antiguo | Codigo | Descripción |
| ---------------- | -------------- | ----------- |
| `{{image.id_imagen}}` | `{{image.id}}` | Corresponde al ID de la imagen.|
| `{{image.imagen_leyenda}}` | `{{image.legendImage}}` | Nombre de la variable asociada a la imagen |
| `{{image.imagen_url}}` | `{{image.href}}` | Corresponde a la URL de la imagen.|
||{{image.state}}||


## Accessories:
Corresponde a un grupo/arreglo de accesorios de un producto.

Se utiliza:
```

{% for product in accessories%}
	{{product.title}}
	{{product.id}}
	{{product.id_producto}}
	{{product.notice}}
	{{product.variant_price}}
	{{product.variant_id}}
	{{product.default_image}}
	{{product.price_list}}
	{{product.video_url}}
	{{product.link}}
	{{product.description}}
	{{product.has_decimal}}
	{{product.discount_rate}}
	{{product.discount_name}}
	{{product.discount_cant}}
	{{product.final_price}}
{% endfor%}



```


***

## Related:
Corresponde al grupo/arreglo relacionados a un producto.

Se utiliza:
```

{% for product in related%}
	{{product.title}}
	{{product.id}}
	{{product.id_producto}}
	{{product.notice}}
	{{product.variant_price}}
	{{product.variant_id}}
	{{product.default_image}}
	{{product.price_list}}
	{{product.video_url}}
	{{product.link}}
	{{product.description}}
	{{product.has_decimal}}
	{{product.discount_rate}}
	{{product.discount_name}}
	{{product.discount_cant}}
	{{product.final_price}}
{% endfor%}
```
## Atributos del producto

funciona si el producto no tiene variantes
```js
    /*seleccion los atributos que no deseas mostrar */
    {% assign deleteAttributes = "Material,Color" | split: ',' %}
    
    {% for attr in product.attributes %}
        {%assign flagAttr = false %}
        {% for del in deleteAttributes %}
            {% if attr[0] == del %}
                {%assign flagAttr = true %}
                {{break}}
            {% endif %}
        {% endfor %}
        {%if flagAttr == false%}
            <!-- aqui escribe tu attr -->
            {% for val in attr[1].values %}
                {{attr[1].name}}: {{val}}
            {% endfor %}
            <!-- aqui escribe tu attr -->
        {%endif%}
    {% endfor %}
```
{% endraw %}