### Descripción
Esta función actualiza la cantidad de items que se van agregando o quitando del carro de compras.
recibe por parámetro un evento de tipo click. 
Valida si el botón fue clickeado para quitar o sumar productos al carro y llamar a la función que actualiza la vista.

```js
function updateFromCart(e) {
    const item = this.closest('[data-bs="cart.item"]')
    const id = parseInt(item.dataset.info)
    const [cartItem] = bsale.cart.detail.filter(item => item.id === id)
    const input = item.querySelector('input')
    const newQuantity = parseInt(input.value) || 1
    const prevQuantity = cartItem.quantity

    //desactiva botones 
    function disable(value) {
      item.querySelectorAll('button').forEach(el => {
        if (value) {
          el.setAttribute('disabled', true)
        }
        else {
          el.removeAttribute('disabled')
        }
      })
      if (value) {
        input.setAttribute('disabled', true)
        continueToCheckoutButton.setAttribute('disabled', true)
      }
      else {
        input.removeAttribute('disabled')
        continueToCheckoutButton.removeAttribute('disabled')
      }
    }

    
    /*Actualiza la vista del carro de compras. Se evalua si el producto tiene descuento. 
En caso de que tenga descuento se muestra en la vista y         de       muestra el precio original 
y el precio con descuento, a su vez se actualiza el precio total de los items del carro. 
En caso que exista algun tipo de error.*/

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
    
    // Valida si el input fue cambiado o si se hace click en el botón más | menos para sumar o restar productos del carro.
    switch (this.dataset.bs) {
      case 'cart.quantity':
        if (newQuantity < 1) {
          input.value = 1
          update(1)
          alert(`No es posible agregar ${newQuantity} items`)
        }
        else if (newQuantity > bsale.config.addToCartLimit) {
          input.value = bsale.config.addToCartLimit
          update(bsale.config.addToCartLimit)
          alert(`Sólo es posible agregar ${bsale.config.addToCartLimit} items`)
        }
        else {
          update(newQuantity)
        }
        break
      case 'cart.quantity.plus':
        if (newQuantity < bsale.config.addToCartLimit) {
          update(newQuantity + 1)
        }
        else {
          alert(`No es posible agregar ${bsale.config.addToCartLimit} items`)
        }
        break
      case 'cart.quantity.minus':
        if (newQuantity > 1) {
          update(newQuantity - 1)
        }
    }
  }


```