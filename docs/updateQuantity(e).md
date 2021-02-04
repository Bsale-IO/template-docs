### Descripción

Esta función recibe por parametro un evento de tipo click. Se obtiene el stock de la variante del producto, y se define una variable limit que permite un limite de productos que se pueden agregar al carro. Posteriormente se realiza una validación, tanto del tipo de evento como de los botones e input respectivo que permite modificar la cantidad de productos que se agregaran al carro.

```js
function updateQuantity(e) {
    stock = fullStock(productVariant);
    // si existe un limite MAYOR a 0 corre ese, sino corre el stock
    let limit;
    if (Bsale.config.addToCartLimit > 0) {
      if (stock < 1) {
        limit = 1;
      } else if (stock < Bsale.config.addToCartLimit) {
        limit = stock;
      } else {
        limit = Bsale.config.addToCartLimit;
      }
    } else {
      if (stock < 1) {
        limit = 1
      } else {
        limit = stock;
      }
    }

    if (e) {
      // si el event es click y el elemeto clicado es quantity minus
      if (e.target.type = "click" && e.currentTarget.matches('[data-bs="product.quantity.minus"]')) {
        if (1 < quantity) {
          quantity--
        }
        // si el event es click y el elemeto clicado es quantity plus
      } else if (e.target.type = "click" && e.currentTarget.matches('[data-bs="product.quantity.plus"]')) {
        if (quantity < limit) {
          quantity++
        }

      } else if (e.target.type = "change" && e.currentTarget.matches('[data-bs="product.quantity"]')) {
        // si this.value no es un numero natural su valor es quantity (valor anterior)
        let inputValue = parseInt(this.value) || quantity;
        //si input value es mayor a stock, es igual a stock;
        if (inputValue > limit) {
          inputValue = limit
          // si el valor es menor a 1 queda igual a uno
        } else if (inputValue < 1) {
          inputValue = 1;
        }
        quantity = inputValue;
      }
    } else {
      if (limit < quantity) {
        quantity = limit;
      } else if (quantity <= 1) {
        quantity = 1;
      }
    }
    for (let i = 0; i < quantityInput.length; i++) {
      quantityInput[i].value = quantity;
    }
    return quantity;
  }
```