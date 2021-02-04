En Bsale puede aplicar descuentos con decimales a los tus productos, sin embargo estos descuentos aparecerán truncandos en Bsale. 

| Valor de descuento | como se muestra | 
| ---:|----:|
| `8.75%` | `8%` |
| `3.14159265359%` | `3%` |
| `10.9999999999%` | `10%` | 

## ¿ Por que se ocultan los decimales? 
- El mostrar todos los decimales puede causar deformación de las etiquetas de descuento en el sitio. 
- Para el cliente no es una información tan útil saber cuantos decimales se aplican en el descuento.

### Descuento Sin Decimal
![sin decimal](https://raw.githubusercontent.com/gmontero/bsale-market-design-doc/master/images/descuento-sin-decimal.png)
### Descuento Con Decimal 
![con decimal](https://raw.githubusercontent.com/gmontero/bsale-market-design-doc/master/images/descuento-con-decimal.png)

## ¿El monto de descuento en el template afecta el descuento real? 
* **NO,** el monto del descuento en los templates no se usa para calcular, el calculo se hace dentro de bsale. 
* El monto de descuento es sólo informativo y referencial. 

## ¿Truncar o Aproximar el monto de descuento? 

El monto de descuento se trunca para evitar que si el cliente realiza un cálculo manual de los descuentos den un monto menor de beneficio 

### Por ejemplo: 

- Producto tiene un descuento real de varios decimales

| | valor | descuento| valor final |
|:---|---:|---:|---:|
| Original | $ 2.390| 16,7364016736402% | $1.990 | 

|    | valor | descuento| valor final | precio publicado |  diferencia | 
|:---|------:|---------:|------------:|-----------------:|------------:|
| _**Truncado**_ | $ 2.390| 16,736... = 16% | $2.008 | $1.990 | +$18|
| _**Aproximado**_ |  $ 2.390| 16,736... = 17% | $1.984 | $ 1.990 |-$16 |

Si el descuento se muestra:

- _**<ins>TRUNCADO:</ins>**_ Si el cliente comprueba un descuento truncado(16%) obtendrá que el precio publicado es mayor al descuento aplicado con un beneficio de $18 a su favor
- _**<ins>APROXIMADO:</ins>**_ Por el contrario si el descuento es aproximado (17%) puede obtener un descuento menor comparando el precio publicado $1990 con el precio que debería tener el producto según el descuento aproximado 

## Quiero mostrar los decimales de mis descuentos 

Si quieres mostrar los decimales los descuento en el sitio:
1.  Debes editar cada componente que muestra descuentos
    - Colección
    - Producto > Detalle
    - Carro > Detalle
    - Inicio > Slider Colección
    - Inicio > Colección
2. Buscar un código con la etiqueta 
```django
<!--descuento -->
<div class="bs-discount {{discount_format}}{% if item.discount == 0 %} d-none{% endif %}" data-bs="cart.item.discount">
   <strong data-bs="cart.item.discount.value">
      -{{ item.discount | floor }}%
   </strong>
</div>
<!-- end:descuento -->
```

* La variable item.discount varia según la pantalla 


3. Cambiar el filtro `floor`

| Descuento | Filtro | Resultado |
|---:|---:|---:|
| 16,7364 | `{{ item.discount \| floor }}` | 16 | 
| 16,7364 | `{{ item.discount \| round }}` | 17 |
| 16,7364 | `{{ item.discount \| round: 2 }}` | 16,74 |  
| 16,7364 | `{{ item.discount }}` | 16,7364 | 


## Estilos de Descuento 
[Estilos](https://codepen.io/ivquinonesw/full/QWWVRae)



