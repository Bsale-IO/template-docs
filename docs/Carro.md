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
```css
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

| Antiguo                           | Nuevo                | Descripción                       |
| --------------------------------- | -------------------- | --------------------------------- |
|<sup>`{{item.cd_q}}`                    |`{{item.quantity}}`   | Unidades de un producto del carro |
|<sup>`{{item.cd_unit_value}}`           |`{{item.value}}`      | Valor del Producto |
|<sup>`{{item.cd_discount}}`</sup>             |`{{item.discount}}`   | Descuento |
|<sup>`{{item.cd_item_name}}` </sup>           |`{{item.name}}`       | Nombre del producto (`nombre producto` + `nombre variante`) |
|<sup>`{{item.cd_sub_total}}`</sup>            |`{{item.subTotal}}`   | Subtotal del producto, calculo entre unidades y valor del producto |
|<sup>`{{item.cd_id}}`</sup>                   |`{{item.id}}`         | ID del producto dentro del carro |
|<sup>`{{item.cd_id_discount}}`</sup>          |`{{item.discountId}}` | ID del descuento |
|<sup>`{{item.cd_image}}`</sup>                |`{{item.image}}`      | Imagen del producto |
|<sup>`{{item.id_variante_producto}}`</sup>    |`{{item.variantId }}`  | ID de la variante|
|<sup>`{{item.codigo_variante_producto}}`</sup> |`{{item.sku}}`        | SKU |
|                                   |`{{item.link}}`       | url de la página del producto |
|                                   |`{{item.description}}`| Descripción del producto |


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
