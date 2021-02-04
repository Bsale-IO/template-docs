## Variables 
``` 
{{ product.finalPrice | money_filter }}
```
Precio final del producto, `money_filter` le agrega el formato de la moneda |

| variables liquid | significado | 
| --- | --- |
| `discProgresive` | estructura html que se mostrará cuando el producto tenga descuento progresivo según la cantidad de productos a comprar |
| `discSingle` | estructura html que se mostrará cuando el producto tenga descuentos desde la primera unidad|

```django
{% capture discProgresive %}
   <!-- pega aquí cómo quieres que se muestre el código, carga variables dinámicas  -->

   <!---->
{% endcapture %}

{% capture discSingle %}
   <!-- pega aquí cómo quieres que se muestre el código, carga variables dinámicas -->

   <!---->
{% endcapture %}
```

| variables dinámicas | significado |
| ---- | ---- |
|`{price}`| precio del producto sin descuento | 
|`{finalPrice}`| precio final del producto, precio final menos descuento | 
|`{discountCant}`| cantidad del descuento en porcentaje |
 
***importante:*** las variables dinámicas deben respectar las siguientes reglas para ser leídas por _javascript_
 * NO tener espacios, tildes o similares
 * ser escritos en camelCase
 * llevar llaves simples

 `{variableDinamica}`

## Estructura Completa del componente

Toda las estructuras html se pueden cambiar o editar, sólo se deben conservar las etiquetas `data-bs` y `data-info` sin modificaciones
```django
<!-- define plantilla según tipo de descuento -->

    {% capture discProgresive %}
        <!-- pega aquí cómo quieres que se muestre el código, carga variables dinámicas -->
        
        <div class="h5"> Precio Normal {price}</div>
        <div class="h3">Sólo {finalPrice}</div>
        <small>Por compras sobre {discountCant} unidades</small>

        <!-- -->
    {% endcapture %}
        
    {% capture discSingle %}
        <!-- pega aquí cómo quieres que se muestre el código, carga variables dinámicas -->

        Antes<del>{price}</del>
        </br>
        <span class="h2">{finalPrice}<span>

        <!-- -->
    {% endcapture %}
        
<!-- donde se carga el precio --> 

<div data-bs="product.completePrice" 
     data-info='{
        "progresive" : "{{ discProgresive | strip_newlines | replace: '"','\"' | replace: "'" , '\"'}}",
        "single": "{{ discSingle | strip_newlines | replace: '"','\"' | replace: "'" , '\"'}}"}'>
        
        <!-- plantilla precio por defecto -->

        <span class="h2" data-bs="product.finalPrice">
          {{ product.finalPrice | money_filter }}
        </span>
  
        <!-- pantilla precio por defecto // fin --> 
    
</div>
```

