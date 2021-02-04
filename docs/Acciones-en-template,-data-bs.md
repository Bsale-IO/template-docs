Desde la versión `4.0.0` los elementos que gatillan eventos en los templates de bsale funcionan mediante el **atributo** `data-bs`

```html
<div data-bs=".."></div>
```
| data-bs | función | data-info | función |
| -----   | -----   | -----     | -----   |
| `header`| Inicializa cabecera  | Si | Fija la cabecera al scrollear (sticky) |
| `search`| Inicializa buscador  | Si | Oculta el buscador (hidden) |
| `cart.items`| Obtiene cantidad de productos en el carro | No |  |
| `cart.totalItems`| Obtiene cantidad de productos en el carro | Si | productos |
| `cart.empty`| Valida si el carro esta vacío | No |  |
| `offer.alert`| Inicializa la alerta | Si | Configuración de la alerta formato JSON |
| `cart.item`| Productos totales en el carro | Si | String id del producto |
| `cart.item.discount`| Porcentaje descuento producto | No |   |
| `cart.item.oldPrice`| Obtiene precio sin descuento del producto en el carro | No |   |
| `cart.item.unitPrice`| Obtiene precio con descuento del producto en el carro| No |   |
| `cart.quantity.minus`|  Resta unidad del producto en el carro  | No |   |
| `cart.quantity.plus`|  Suma unidad del producto en el carro | No |   |
| `cart.item.finalPrice`| Obtiene precio final del producto en el carro | No |   |
| `cart.remove`|  Elimina producto del carro | No |   |
| `cart.filled`|  Valida si el carro esta lleno | No |   |
| `cart.subtotal`|  Obtiene el Subtotal del carro | No |   |
| `cart.keepbuying`| Sale del carro para continuar comprando | No |   |
| `cart.checkout`|  Redirige al checkout | No |   |
| `cart.checkout.check`|  Valida aceptación de términos y condiciones | No |   |
| `product`|  Obtiene datos del producto | Si | String id producto |
| `filter.range`|  Filtra por rango de precio | No |  |
| `collection.sort`|  Ordena productos en la colección | No |  |
| `slider`|  Inicializa el slider | Si | Configuración del slider formato JSON |
| `modal`|  Inicializa el modal | Si | Configuración del modal formato JSON|
| `contact.phone`|  Obtiene números de teléfono de la tienda | Si | String número de teléfono |
| `video`|  Inicializa video descriptivo del producto | Si | String url del vídeo |
| `product.detail`| Obtiene detalle del producto | No |  |
| `product.sku`| Obtiene sku del producto | No |  |
| `product.quantity.minus`| Resta unidad del producto  | No |  |
| `product.quantity.plus`| Suma unidad del producto | No |  |
| `product.quantity`| cantidad del producto para agregar al carro  | No |  |
| `cart.add`| Agrega producto al carro  | No |  |
| `product.order`| Despliega formulario para encargar producto sin stock  | No |  |
| `product.attributes`|  Obtiene atributos del producto | Si | String con atributos del producto |
| `product.variant`|  Obtiene las variantes del producto | Si | String id de la variante |
| `product.completePrice`| Obtiene precio completo del producto | Si | descuento normal y progresivo en formato JSON |
| `product.stock`|  Obtiene stock del producto | Si | String con stock del producto |
| `product.discount`|  Obtiene la forma del descuento | No | |
| `product.discount.value`|  Obtiene el valor de descuento del producto | No | |
| `zoom`| Realiza zoom a la imagen del producto  | No |  |
| `chat.whatsapp`| Obtiene red social  | No |   |
| `chat.facebook`| Obtiene red social  | No |   |
| `product.stock.detail`|  Obtiene stock del producto por sucursal | Si | stock formato JSON |




































