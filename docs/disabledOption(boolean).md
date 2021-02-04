### Descripción

Esta función se ejecuta cuando el usuario hace click en el botón "ir a pagar" en la vista del carro, 
evalúa si el checkbox de términos y condiciones esta tickeado, sino desactiva el botón "ir a pagar" evitando que se puede finalizar la compra. 

```js
function disabledOption(boolean){
    if(boolean){//TRUE desactiva botones y check
      if(cbxCheckout !== null){cbxCheckout.setAttribute("disabled", true);}
      for(let i = 0; i < btnCheckout.length; i++ ){
          btnCheckout[i].setAttribute("disabled", true);
          btnCheckout[i].setAttribute("title", "Hay productos que no están en la sucursal seleccionada");
      } 
    }else{//FALSE activa botones y check
      if(cbxCheckout !== null){cbxCheckout.removeAttribute("disabled");}
      for(let i = 0; i < btnCheckout.length; i++ ){
          btnCheckout[i].removeAttribute("disabled");
          btnCheckout[i].setAttribute("title", "Continuar");
      } 
    }
  }
```