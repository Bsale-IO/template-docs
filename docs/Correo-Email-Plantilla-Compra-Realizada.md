# Compra Realizada

| variable | descripción | 
| -------- | ----------- |
|`{{ site.logo }}`| logo de la empresa | 
|`{{ site.name }}`| nombre de la empresa | 
|`{{ orderDetail.numberDocumentTax }}`| Número de documento |
|`{{ orderDetail.createAtZone }}`|Fecha Pedido _**aplicar [[Filtros de Fecha]]**_|
|`{{ orderDetail.storePick }}`| `0` Despacho <br/> `1` Retiro en Tienda  |


## Información del Cliente (Comprador)
| variable | descripción | 
| -------- | ----------- |
|`{{ orderDetail.name }}`|Nombre|
|`{{ orderDetail.lastName }}`| Apellido|
|`{{ orderDetail.email }}`|Email|
|`{{ orderDetail.phone }}`| Teléfono |



## Forma de Entrega 

Si la variable `{{ orderDetail.storePick }}` es de valor: 
* `0` la forma de entrega es despacho
* `1` la compra es un retiro en tienda

### Despacho 
| variable | descripción |
|---------|------------|
|`{{ orderDetail.postcode }}`|Código Postal |
|`{{ orderDetail.country }}`| País |
|`{{ orderDetail.state }}`| Estado o Región |
|`{{ orderDetail.city }}`| Ciudad |
|`{{ orderDetail.street }}`| Calle |
|`{{ orderDetail.cityZone }}`|     |
|`{{ orderDetail.number }}`| Número de Calle |
|`{{ orderDetail.buildingNum }}`| Número de Departamente / Oficina |
|`{{ orderDetail.shippingComment }}`| Comentario de Despacho |

### Retiro en Tienda
| variable | descripción |
|----------|-------------|
|`{{ orderDetail.shippingReceivable }}`|`boolean`|
|`{{ orderDetail.shippingName }}`| Nombre sistema de Despacho |
|`{{ orderDetail.pickName }}`|Persona que recibe o retira |
|`{{ orderDetail.pickCode }}`|RUT o DNI de quien recibe o retira|

## Forma de Pago
| variable | descripción |
|----------|-------------|
|`{{ orderDetail.pay.name }}`|Nombre Forma de Pago|
|`{{ orderDetail.pay.id }}`|Tipo de entrega si es `2` es Transferencia Bancaria |
|`{{ orderDetail.pay.img }}`| `url` Medio de Pago |
|`{{ orderDetail.pay.commonData }}`| Información de cuenta de transferencia |

### Transferencia Bancaria
| variable | descripción |
|----------|-------------|
|`{{ orderDetail.pay.commonData.ACCOUNT_NAME }}`|Nombre Titular|
|`{{orderDetail.pay.commonData.PAY_BANK_RUT }}`|RUT|
|`{{orderDetail.pay.commonData.PAY_BANK_TYPE }}`|Tipo de Cuenta|
|`{{orderDetail.pay.commonData.PAY_BANK_NAME }}`|Nombre de Banco|
|`{{orderDetail.pay.commonData.PAY_BANK_ACCOUNT }}`|N° de Cuenta|
|`{{orderDetail.pay.commonData.PAY_BANK_EMAIL }}`|Email cuenta|

### Tarjeta de Crédito o Debito 
| variable | descripción |
|----------|-------------|
|`{{ payDetail.payType }}`| Tipo de pago `Crédito` o `Debito`  |
|`{{ payDetail.quotaType }}`|  `Venta en Cuotas` o `Venta sin Cuotas`  |
|`{{ payDetail.quotaNumber }}`|  Número de Cuotas  |
|`{{ payDetail.finalNumberCard }}`| Últimos 4 dígitos de la tarjeta |
|`{{ payDetail.transactionDate }}`|  Fecha UTC 0  |
|`{{ payDetail.purchaseOrder }}`|  Código de Compra  |
|`{{ payDetail.authorizationCode }}`|  Código de autorización  |


## Detalle de la compra

| variable | descripción |
|----------|-------------|
|`{{ cartDetail }}`|`object `Detalle de productos comprados|
|`{{ orderDetail.totalCart }}`| Precio Total de los Productos |
|`{{ orderDetail.shippingCost }}`| Costo de Despacho |
|`{{ orderDetail.discountCost }}`| Total de Descuentos |
|`{{ orderDetail.total }}`| Total de la Compra ( Total de Productos + Despacho - Descuentos)|

### Detalle de productos comprados
```js
{% for item in cartDetail %}
   {{item.name}}
   {{item.sku}}
   {{item.image}}
   {{item.quantity}}
   {{item.value}}
   {{item.discount}}
   {{item.subTotal}}
{% endfor %}
```

| variable | significado |
|----------|-------------|
|`{{ item.name }}`| Nombre del producto |
|`{{ item.sku }}`| SKU del producto |
|`{{ item.image }}`| Imagen del producto |
|`{{ item.quantity }}`| Cantidad Comprada |
|`{{ item.value }}`| Precio unitario sin Descuento |
|`{{ item.discount }}`| Descuento del producto |
|`{{ item.subTotal }}`| Precio Final (precio unitario x cantidad - descuento)|


