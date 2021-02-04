<sup>[[JS Bsale]] > [[Metrics]] > removeFromCart</sup>

# removeFromCart
Este método se ejecuta cuando un usuario elimina un producto del carro de compras.

## Método por defecto
Se envía el SKU, nombre base del producto, nombre de la variante, cantidad y precio unitario del item que fue eliminado del carro.
```js
function removeFromCart(cartItem) {
  return {
    gtm: {
      event: 'removeFromCart',
      data: {
        ecommerce: {
          remove: {
            products: [{
              id: cartItem.variant.sku,
              name: cartItem.variant.productName,
              price: cartItem.variant.price,
              variant: cartItem.variant.description,
              quantity: cartItem.quantity
            }]
          }
        }
      }
    },
    analytics: {
      event: 'remove_from_cart',
      data: {
        items: [{
          id: cartItem.variant.sku,
          name: cartItem.variant.name,
          variant: cartItem.variant.name,
          quantity: cartItem.quantity,
          price: cartItem.variant.price
        }]
      }
    },
    pixel: {
      event: 'RemoveFromCart',
      data: null
    }
  }
}
```

## Sobreescritura
Para sobreescribir el método y personalizar la información que se envía, se debe redefinir en el objecto [[Metrics]]. La función va a rebicir como único argumento, el ítem que fue eliminado del carro, el cual es una instancia de [[CartItem]].
```js
Metrics.removeFromCart = function (cartItem) {
  return {
    gtm: {
      event: null,
      data: null
    },
    analytics: {
      event: null,
      data: null
    },
    pixel: {
      event: null,
      data: null
    }
  }
}
```
