### Descripción

Esta función se ejecuta para actualizar la variante, en primer lugar se obtiene la variante del producto, y almacena el precio y el stock. Además evalua si el producto tiene atributos y si tiene mas de una variante para mostrar el selector. Luego se recorren las variantes para obtener el sku y mostrarlo en la vista.  Finalmente se llama una serie de funciones que van mostrando diferentes elementos en la vista de producto. Redefine la variante y la retorna.


```js
function updateVariant(e) {
    let variant = productVariant;

    if (this.tagName === "INPUT") {
      // si es un input 
      variantId = parseInt(this.dataset.info) || bsale.products[0].variantId;
      variant = bsale.products[0].variants.filter(function (v) { return v.id === variantId })[0];
      
      for (let i = 0; i < variantSelectOption.length; i++) {
        option = Array.from(variantSelectOption[i]);
        for (let j = 0; j < option.length; j++) {
          if (option[j].dataset.info == this.dataset.info) {
            option[j].selected = true;
          } else {
            option[j].selected = false;
          }
        }
      }
    } else if (this.tagName === "SELECT") {
      // si es un select
      option = this.options[this.selectedIndex];
      variantId = parseInt(option.dataset.info) || bsale.products[0].variantId;

      variant = bsale.products[0].variants.filter(function (v) { return v.id === variantId })[0];
      for (let i = 0; i < variantSelectCheck.length; i++) {
        if (variantSelectCheck[i].dataset.info == option.dataset.info) {
          variantSelectCheck[i].checked = true;
        }
      }
      for (let i = 0; i < variantSelectOption.length; i++) {
        variantSelectOption[i].selectedIndex = this.selectedIndex;
      }
    }

    //precio antiguo 
    oldPrice = formatPrice(variant.price + variant.price * variant.taxes);
    // si permite stock negativo o permite unlimited su stock es infino, si no retorno stock
    stock = fullStock(variant);

    if (attrSelect.length <= 1 && bsale.products[0].variants.length > 1) {
      showVariantSelect();
    }

    //insert sku
    for (let i = 0; i < skuHTML.length; i++) {
      skuHTML[i].innerHTML = `SKU: ${variant.sku}`;
    }
    //funciones extra
    defineButton(stock);
    sliderGoTo(variant);
    defineStock(variant);
    definePrice(variant);
    updateQuantity();
    //redefine variantes
    return productVariant = variant;
  }
```
