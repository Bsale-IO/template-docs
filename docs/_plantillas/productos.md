---
layout: default
title: Productos
published: true
category: liquid
---
{% raw %}

La Plantilla de Producto carga toda la información de la descripción web del producto, 

## URL

Para acceder a la plantilla de un producto es necesario acceder a la url

```
/product/nombre-producto
```

**Ejemplo**

| sitio web | nombre producto | url |
|---|---|---|
| mitienda.com| Camisa Roja | `mitienda.com/product/camisa-roja`

## Estructura

```html
<!DOCTYPE html>
<html lang="es">
   <head>
      {{ 'head' | get_component }}
   </head>
   <body>
      {{ 'Cabecera' | get_component }}
            <main>
                {{ 'Producto' | get_component }}
            </main>
      {{ 'Pie de Página' | get_component }}
   </body>
</html>
```
## Variables

Los componentes que se carguen dentro de esta plantilla pueden acceder a las siguientes variables  

### Información del producto 

| Código | Descripción |
| ------ | ----------- |
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
| ------ | -------------- |
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
| ------ | ----------- |
| `{{ product.brand.name }}` | Nombre de la marca |
| `{{product.brand.logoImg}}` | Logo de la marca |
| `{{product.brand.link}}` | url de la colección de la marca |

### Otras Descripciones:
Un producto puede tener más de una sola descripción general como por ejemplo la ficha técnica para traer esta información a pantalla es necesario realizar un arreglo `{% for %}` 

```liquid
{% for descripcion in product.descriptions%}
     {{descripcion.descriptionName}}
     {{descripcion.id}}
     {{descripcion.html}}
     {{descripcion.order}}
     {{descripcion.default}}
{% endfor%}
```

| Código | Descripción |
| ------ | ----------- |
| `{{descripcion.descriptionName}}` | Es el nombre de la descripción|
| `{{descripcion.id}}` | Corresponde al id de la descripción|
| `{{descripcion.html}}` | Es el contenido de la descripción|
| `{{descripcion.order}}` | Corresponde al **orden de la descripción en la base de datos|
| `{{descripcion.default}}` | Define si corresponde a la descripción predeterminada|

### Variantes 

Los Productos se pueden separar en variantes por ejemplo un vendo unos zapatos y tengo un zapata rojo y otro azul cada uno de ellos es una variante. 
Para imprimir las variantes dentro de la página producto debo usar en arreglo {%for%}

```liquid
{% for var in variant %}
   {{var.title}}
   {{var.price}}
   {{var.id}}
   {{var.discount.name}}
   {{var.discount.percent}}
   {{var.discount.minimumQuantity}}
   {{var.finalPrice}}
   {{var.hasDecimal}}
   {{var.sku}}
   {{var.unlimitedStock}}
   {{var.allowNegativeStock}}
   {{var.taxes}}
   {{var.shipping.weight}}
   {{var.shipping.width}}
   {{var.shipping.lenght}}
   {{var.shipping.deph}}
{% endfor %}
```

| Código | Descripción |
| ------ | ----------- |
|`{{var.title}}` | Nombre de la variante |
| `{{var.price}}` | `número` Precio de la variante |
|  `{{var.id}}` | `número` id de la variante |
|  `{{var.discount.name}}` | Nombre del Descuento |
|  `{{var.discount.percent}}` | `número` Porcentaje de Descuento |
| `{{var.discount.minimumQuantity}}` | Cantidad Mínima de productos para que se aplique el descuento |
|  `{{var.finalPrice}}` | `numero`Precio con Descuento |
|  `{{var.hasDecimal}}` |  |
| `{{var.sku}}` | Sku de la variante |
|`{{var.unlimitedStock}}` | `boolean`  |
| `{{var.allowNegativeStock}}` | `boolean` |
| `{{var.taxes}}` | Impuestos totales aplicados a un producto |
|`{{var.shipping.weight}}` | Peso del producto|
|`{{var.shipping.width}}` | Ancho de la caja producto|
| `{{var.shipping.lenght}}` | Largo de la caja del producto|
|`{{var.shipping.deph}}` | Profundidad de la caja del producto |

### Stock de la Variante:

```liquid
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

### Imágenes:

Corresponde a un grupo/arreglo de imágenes del producto.

```liquid
{% for image in product.images %}
   {{image.id}}
   {{image.LegendImage}}
   {{image.href}}
   {{image.state}}
{%endfor%}
```
| Codigo | Descripción |
| -------------- | ----------- |
| `{{image.id}}` | Corresponde al ID de la imagen.|
| `{{image.legendImage}}` | Nombre de la variable asociada a la imagen |
| `{{image.href}}` | Corresponde a la URL de la imagen.|
|`{{image.state}}`||


## Accessories:

Corresponde a un grupo/arreglo de accesorios de un producto.

```liquid
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

## Productos Relacionados:

Corresponde al grupo/arreglo relacionados a un producto.

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
```liquid
    <!--seleccion los atributos que no deseas mostrar -->
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

## Bsale JSON

Para acceder al JSON de Bsale desde una página de producto 

1. Abre la consola de tu navegador 
2. Escribe:

```
Bsale.products[0]
```

{% endraw %}