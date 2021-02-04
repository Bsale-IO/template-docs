<sup>[[JS Bsale]] > [[Metrics]] > checkout</sup>

# checkout
Este método se ejecuta cuando un usuario entra a la vista de checkout.

## Método por defecto
...
```js
function checkout(checkoutInfo) {
  return {
    gtm: {
      event: 'checkout',
      data: {
        ecommerce: {
          checkout: {
            actionField: {
              step: 1
            },
            products: checkoutInfo.detail.map(function (variant) {
              return {
                id: variant.sku,
                name: variant.name,
                variant: variant.name,
                quantity: variant.quantity,
                price: variant.price || variant.value
              }
            })
          }
        }
      }
    },
    analytics: {
      event: 'begin_checkout',
      data: {
        currency: checkoutInfo.currency,
        value: checkoutInfo.total,
        items: checkoutInfo.detail.map(function (variant) {
          return {
            id: variant.sku,
            name: variant.name,
            variant: variant.name,
            quantity: variant.quantity,
            price: variant.price || variant.value
          }
        })
      }
    },
    pixel: {
      event: 'InitiateCheckout',
      data: {
        currency: checkoutInfo.currency,
        value: checkoutInfo.total,
        content_ids: checkoutInfo.detail.map(function (variant) {
          return variant.sku
        }),
        content_type: 'product_group',
        contents: checkoutInfo.detail.map(function (variant) {
          return {
            id: variant.sku,
            quantity: variant.quantity,
            item_price: variant.price || variant.value
          }
        })
      }
    }
  }
}
```

## Sobreescritura
Para sobreescribir el método y personalizar la información que se envía, se debe redefinir en el objecto [[Metrics]]. La función va a rebicir como único argumento, un objeto con la información del carro, el cual es una instancia de [[Cart]].
```js
Metrics.checkout = function (checkoutInfo) {
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
