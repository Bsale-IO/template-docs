### Decripción

Esta función evalúa si la clasificación del producto es distinta a un servicio, posteriormente si el producto tiene stock.
En caso de que el producto tenga stock oculta el botón encargar y muestra el botón agregar al carro. Si no tiene, se realiza la validación si existe el modal encargar. Si existe el modal muestra el botón encargar y oculta el botón agregar al carro. Si la clasificación del producto es de tipo servicio siempre se puede agregar el botón agregar al carro.

```js
function defineButton(stock){
    // botones encargar o agregar al carro
    if (bsale.products[0].classification !== 1) {//si no es servicio
      if (stock > 0) {
        for (let i = 0; i < btnOrder.length; i++) {
          hideBtn(btnOrder[i])
        }
        for (let i = 0; i < btnAdd.length; i++) {
          showBtn(btnAdd[i])
        }
      } else {
        if (modalOrder !== null) { // no eixste el modal order, no se despliega el boton 
          for (let i = 0; i < btnOrder.length; i++) {
            showBtn(btnOrder[i])
          }
        }
        for (let i = 0; i < btnAdd.length; i++) {
          hideBtn(btnAdd[i])
        }
      }
    } else {
      // si es servicio siempre se puede agregar
      for (let i = 0; i < btnAdd.length; i++) {
        showBtn(btnAdd[i])
        btnAdd[i].removeAttribute("disabled")
      }
    }
  }
```