### Descripción

Esta función permite agregar un producto al carro desde la vista "Detalle producto", Se realiza una validación si el producto tiene atributos, cuando el producto tiene atributos se llama la función alertAttr(). Si el producto no tiene atributos, se crea un nuevo modal de tipo "add" con la información del producto que se agregará al carro.

```js
function addToCart(e) {
    const [product] = bsale.products

    //if (Array.from(attrSelect).filter(x => x.options.selectedIndex === 0).length <= 0) {
      if (Array.from(attrSelect).filter(x => x.selectedOptions[0].value === 'reset').length <= 0) {
      const thisBtn = this;
      const [variant] = product.variants.filter(variant => variant.id === productVariant.id)

      e.preventDefault()

      thisBtn.setAttribute("disabled", true);

      bsale.cart.add(variant, quantity)
        .then(cartItem => {
          newCreateModal("add", cartItem);
          thisBtn.removeAttribute("disabled");
          metrics.addToCart(cartItem)
          updateHeader()
        })
        .catch(function (error) {
          console.log(error)
          thisBtn.removeAttribute("disabled");
          newCreateModal("error", error.message);
        })
    }
    else {
      alertAttr()
    }
  }
```