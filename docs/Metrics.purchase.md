<sup>[[JS Bsale]] > [[Metrics]] > purchase</sup>

# purchase
Este método se ejecuta cuando un usuario realiza satisfactoriamente una compra.

## Método por defecto
...
```js
function purchase(purchaseInfo) {
  return {
    gtm: {
      event: null,
      data: {
        ecommerce: {
          purchase: {
            actionField: {
              id: purchaseInfo.id,
              revenue: purchaseInfo.total
            },
            products: purchaseInfo.detail.map(function (variant) {
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
      event: 'purchase',
      data: {
        transaction_id: purchaseInfo.id,
        currency: purchaseInfo.currency,
        value: purchaseInfo.total,
        items: purchaseInfo.detail.map(function (variant) {
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
      event: 'Purchase',
      data: {
        currency: purchaseInfo.currency,
        value: purchaseInfo.total,
        content_ids: purchaseInfo.detail.map(function (variant) {
          return variant.sku
        }),
        content_type: 'product_group',
        contents: purchaseInfo.detail.map(function (variant) {
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
Metrics.purchase = function (purchaseInfo) {
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
