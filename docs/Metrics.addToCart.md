<sup>[[JS Bsale]] > [[Metrics]] > addToCart</sup>

# addToCart
Este método se ejecuta cuando un usuario agrega un producto al carro de compras.

## Método por defecto
Se envía el SKU, nombre base del producto, nombre de la variante, cantidad y precio unitario del item que fue agregado al carro.
```js
function addToCart(cartItem) {
  return {
    gtm: {
      event: 'addToCart',
      data: {
        ecommerce: {
          add: {
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
      event: 'add_to_cart',
      data: {
        items: [{
          id: cartItem.variant.sku,
          name: cartItem.variant.productName,
          variant: cartItem.variant.description,
          quantity: cartItem.quantity,
          price: cartItem.variant.price
        }]
      }
    },
    pixel: {
      event: 'AddToCart',
      data: {
        content_ids: [cartItem.variant.sku],
        content_type: 'product',
        content_name: cartItem.variant.name,
        contents: [{
          id: cartItem.variant.sku,
          quantity: cartItem.quantity,
          item_price: cartItem.variant.price
        }]
      }
    }
  }
}
```

## Sobreescritura
Para sobreescribir el método y personalizar la información que se envía, se debe redefinir en el objecto [[Metrics]]. La función va a rebicir, como único argumento, el ítem que fue agregado al carro, el cual es una instancia de [[CartItem]].
```js
Metrics.addToCart = function (cartItem) {
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
