<sup>[[JS Bsale]] > [[Metrics]] > viewProduct</sup>

# viewProduct
Este método se ejecuta cuando un usuario visualiza un producto.

## Método por defecto
Se envía el nombre base del producto, junto con el SKU, nombre y precio unitario de la variante por defecto del prodcto que ha sido vistitado.
```js
function viewProduct(product, defaultVariant) {
  return {
    gtm: {
      event: null,
      data: {
        ecommerce: {
          detail: {
            products: [{
              name: product.title,
              id: defaultVariant.sku,
              price: defaultVariant.price,
              variant: defaultVariant.descripion
            }]
          }
        }
      }
    },
    analytics: {
      event: 'view_item',
      data: {
        items: [{
          id: defaultVariant.sku,
          name: product.title,
          variant: defaultVariant.descripion
        }]
      }
    },
    pixel: {
      event: 'ViewContent',
      data: {
        content_ids: [defaultVariant.sku],
        content_type: 'product',
        content_name: defaultVariant.name,
        contents: [{
          id: defaultVariant.sku,
          quantity: 1,
          item_price: defaultVariant.price
        }]
      }
    }
  }
}
```

## Sobreescritura

Para sobreescribir el método y personalizar la información que se envía, se debe redefinir en el objecto [[Metrics]]. La función va a rebicir 2 argumentos, el producto, el cual es una instancia de [[Product]] y la variante por defecto de dicho producto, la cual es una instancia de [[Variant]].

```js
Metrics.viewProduct = function (product, defaultVariant) {
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
