### Descripción

Esta función se ejecuta cuando el usuario hace click en el botón continuar en la vista del carro, Se evalúa si el checkbox de términos y condiciones esta tickeado para pasar al checkout y finalizar la compra. Si no esta checkeado que en estado invalido hasta que el checkbox sea chekeado.

```js
function continueToCheckout() {
    if (cbxCheckout.checked) {
      location.assign('/checkout')
    }
    else {
      cbxCheckout.classList.add('is-invalid')
      cbxCheckout.onchange = () => {
        cbxCheckout.classList.remove('is-invalid')
        cbxCheckout.onchange = null
      }
    }
}
```
