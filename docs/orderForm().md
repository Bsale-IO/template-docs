### Descripción

Esta función evalúa si el producto tiene atributos y si están seleccionados para levantar el modal encargar. Sino, levanta el modal con mensaje de error.

```js
function orderForm() {
    // si todos los atributos estan seleccionados levanta
    if(attrSelect.length > 0){
      if (Array.from(attrSelect).filter(x => x.options.selectedIndex === 0).length <= 0) {
        newCreateModal("order", productVariant)
      } else {
        newCreateModal("error", "Selecciona todos los atributos del producto")
      }
    }else{
      newCreateModal("order", productVariant)
    }
}
```