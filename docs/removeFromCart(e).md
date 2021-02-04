### Descripción

Esta función se ejecuta cuando se hace click en el botón eliminar en la vista del carro. En primer lugar obtiene el id del item y se deshabilita el botón de eliminar. Además se deshabilitan todos lo elementos de tipo botón e input de la vista, evitando así alguna interacción del usuario mientras se genera el proceso de la eliminación del producto del carro de compras. Una vez se elimina el items del carro, de recarga la vista y se vuelven a activar los botones.  

```js
async function removeFromCart(e) {
    const item = this.closest('[data-bs="cart.item"]')
    const itemId = parseInt(item.dataset.info)
    const [cartItem] = bsale.cart.detail.filter(item => item.id === itemId)
    const input = item.querySelector('input')
    this.setAttribute('disabled', true)
    function disable(value) {
      item.querySelectorAll('button').forEach(el => {
        if (value) {
          el.setAttribute('disable', true)
        }
        else {
          el.removeAttribute('disable')
        }
      })
      if (value) {
        input.setAttribute('disable', true)
      }
      else {
        input.removeAttribute('disable')
      }
    }
    e.preventDefault()
    // lock user interactivity
    disable(true)
    try {
      const deletedItem = await bsale.cart.remove(cartItem)
      item.classList.add('fadeOut')
      setTimeout(() => {
        item.parentNode.removeChild(item)

// new si existe office 
        if(office.length){
            let itemInOffice = Bsale.cart.detail.filter(
              v => v.variant.variantInfo.stockInfo.some(s => s.quantityAvailable > 0 && s.office.id == office[0].options[office[0].selectedIndex].value)
            || v.variant.variantInfo.allowNegativeStock == 1 || v.variant.variantInfo.unlimitedStock == 1 
            ).length
  
            if(office[0].options[office[0].selectedIndex].value != 0){
              disabledOption(bsale.cart.items != itemInOffice)
            }
          }

	/* Si el carro de compras esta vacio, dibuja se dibuja el elemento que permite agregar productos al carro y desactiva el bloque que se dubuja cuando exiten productos. */
        if (bsale.cart.items === 0) {
          document.querySelector('[data-bs="cart.empty"]').classList.remove('d-none')
          document.querySelector('[data-bs="cart.filled"]').classList.add('d-none')
        }
      }, 500)
      updateUI()
      metrics.removeFromCart(deletedItem)
    }
    catch (error) {
      alert("removeFromCart(e) error: " + error.message)
      // unlock user interactivity
      disable(false)
    }
  }
```