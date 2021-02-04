### Descripción

Esta función permite agregar productos al carro directamente desde la colección. En primera instancia evalúa las variantes del producto. Si el producto contiene solo una variante despliega un modal con la información del producto agregado. En caso que el Producto contenga mas de una variante, se crea un selector para elegir la variante del producto que se quiere agregar al carro de compras.

```js
export function addToCartCollection(){
  async function handleAddToCart() {
    const [collection] = bsale.collections
    const [product] = collection.items.filter(p => p.id === parseInt(this.closest('[data-bs="product"]').dataset.info))
    if (!product.fetchedVariants) {
      this.setAttribute('disabled', true)
      await product.getVariants()
      this.removeAttribute('disabled')
      if (product.variants.length === 1) {

        bsale.cart.add(product.variants[0], 1).then(cartItem => {
          newCreateModal("add", cartItem);
          metrics.addToCart(cartItem)
          updateHeader()
        })
        .catch(function (error) {
          console.log(error)
          newCreateModal("error", error.message);
        })
      }
      else {
        //crea selector
        const select = document.createElement('select');
        //asigna clases y data-bs
        select.setAttribute("data-bs", "collection.product.variant");
        select.classList.add('custom-select')
        //llena el selector
        function addOption(o) {
          const option = document.createElement('option')
          option.value = o.id
          option.textContent = o.description
          select.appendChild(option)
        }
        addOption({ id: 0, description: 'Seleccionar' })
        product.variants.forEach(addOption)
        
        //agrega el selector sobre el boton a agregar al carro
        this.parentNode.insertBefore(select, this) // se reemplaza closest por parentNode para evitar uso de clases 
      }
    }
    else {
      // const select = this.closest('.bs-product-cart').querySelector('select');
      const select = this.parentNode.querySelector('select') 
      const id = parseInt(select.value)
      if (id) {
        await bsale.cart.add(product.variants.filter(v => v.id === id)[0], 1).then(cartItem => {
          newCreateModal("add", cartItem);
          metrics.addToCart(cartItem)
          updateHeader()
        })
        .catch(function (error) {
          console.log(error)
          newCreateModal("error", error.message);
        })
      }
      else {
        if(select){
          select.classList.add('border-danger')
          select.addEventListener('focus', function handler() {
            select.classList.remove('border-danger')
            select.removeEventListener('focus', handler)
          })
        }
      }
    }
  }
  try{
    let btnAdd = document.querySelectorAll('[data-bs="cart.add.collection"]');
    for(let i = 0; i < btnAdd.length; i++){
      btnAdd[i].addEventListener("click", handleAddToCart )
    }
  }catch(ex){
    console.warn(ex)
  }
}
```