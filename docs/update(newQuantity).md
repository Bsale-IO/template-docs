### Descripción

Actualiza la vista del carro de compras. Se evalúa si el producto tiene descuento. En caso de que tenga descuento se muestra en la vista y de muestra el precio original y el precio con descuento, a su vez se actualiza el precio total de los items del carro. En caso que exista algún tipo de error.

```js
async function update(newQuantity) {
      try {
        // lock user interactivity
        disable(true)
        const updatedItem = await bsale.cart.update(cartItem, newQuantity)
        const discount = item.querySelector('[data-bs="cart.item.discount"]') //? item.querySelector('[data-bs="cart.item.discount"]'): undefined; 
        const oldPrice = item.querySelector('[data-bs="cart.item.oldPrice"]') //? item.querySelector('[data-bs="cart.item.oldPrice"]') : undefined;
        // set unit final price
        item.querySelector('[data-bs="cart.item.unitPrice"]').textContent = formatPrice(updatedItem.variant.finalPrice)
        if (updatedItem.variant.discount > 0 ) {
          if(discount !== null){
            discount.querySelector('[data-bs="cart.item.discount.value"]').textContent = `-${Math.trunc(updatedItem.variant.discount)}%`
            discount.classList.remove('d-none')
          }
          if(oldPrice !== null){
            oldPrice.classList.remove('d-none')
          }
        }
        else {
          if(discount !== null){
            discount.classList.add('d-none')
          }
          if(oldPrice !== null){
            oldPrice.classList.add('d-none')
          }
        }
        input.value = updatedItem.quantity
        // update item's total price
        item.querySelector('[data-bs="cart.item.finalPrice"]').textContent = formatPrice(updatedItem.variant.subTotal)
        updateUI()
      }
      catch (error) {
        input.value = prevQuantity;
        alert(error.lineNumber +" "+ error.message);
      }
      finally {
        // unlock user interactivity
        disable(false)
      }
    }
```