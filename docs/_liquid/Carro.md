---
layout: default
title: Carro
published: true
---

{% raw %}

> Para ver las variables de  [[Checkout Éxito, click aquí | Checkout Éxito]]
>
> **[[Componente "Carro > Detalle" | Componente Carro Detalle y Cotizador]]**

## Variantes generales 

| Código             | Descripción | 
| ------------------ | ----------- |
| `{{subtotal}}`     | subtotal del carro, suma de todos los subtotales de los productos |
| `{{items}}`        | Cantidad de items |
| `{{url_checkout}}` | url del checkout Bsale |
| `{{cart_d}}` | `object` [items del carro](#items-del-carro) |



## items del carro
Corresponde al detalle del carro (arreglo).

Se utiliza "for". Ejemplo:
```liquid
{% for item in cart_d %}
     {{item.quantity}}
     {{item.value}}
     {{item.discount}}
     {{item.name}}
     {{item.subTotal}}
     {{item.id}}
     {{item.discountId}}
     {{item.image}}
     {{item.variantId}}
     {{item.sku}}
     {{item.link}}
     {{item.description}}
{% endfor %}
```

| Nuevo                | Descripción                       |
| -------------------- | --------------------------------- |
|`{{item.quantity}}`   | Unidades de un producto del carro |
|`{{item.value}}`      | Valor del Producto |
|`{{item.discount}}`   | Descuento |
|`{{item.name}}`       | Nombre del producto (`nombre producto` + `nombre variante`) |
|`{{item.subTotal}}`   | Subtotal del producto, calculo entre unidades y valor del producto |
|`{{item.id}}`         | ID del producto dentro del carro |
|`{{item.discountId}}` | ID del descuento |
|`{{item.image}}`      | Imagen del producto |
|`{{item.variantId }}` | ID de la variante|
|`{{item.sku}}`        | SKU |
|`{{item.link}}`       | url de la página del producto |
|`{{item.description}}`| Descripción del producto |


## URLS de api carro

### 1. TOTAL CARRO
```
/cart/get_total_cart
```

#### Respuesta sin datos
```js
{
   success:true,
   data: {
      cart: {
          total: null,
          items: null,
          mgs: "text/html"
      }
   }
}
```

#### Respuesta con datos (productos en el carro)
```js
{
   success:true,
   data: {
      cart: {
          total:"$ 99.999",
          items: 99,
          mgs: "text/html"
      }
   }
}
```

{% endraw %}