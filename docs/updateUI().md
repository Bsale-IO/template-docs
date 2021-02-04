### Descripción

Actualiza subtotal y cantidad de items que se encuentran en el carro de compras.

```js
function updateUI() {
    const newItems = `(${bsale.cart.items})`
    if (bsale.cart.items) {
      subTotal.textContent = formatPrice(bsale.cart.total)
    }
    totalItems.textContent = newItems
    document.title = document.title.replace(/\([0-9]+\)/, newItems)
    updateHeader()
}
```