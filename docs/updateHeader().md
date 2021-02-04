### Descripción

Esta función actualiza la cantidad de items y el monto total de los productos agregados al carro, itera sobre cada items y muestra la información en los elementos correspondientes al carro en el header del sitio.
```js
export function updateHeader(){
    let cartItems = document.querySelectorAll("[data-bs='cart.items']");
    let cartTotal = document.querySelectorAll("[data-bs='cart.total']");
    let total = bsale.cart.total ? bsale.cart.total : 0;
    for(let i = 0; i < cartItems.length; i++){
      let item = cartItems[i];
      item.textContent = bsale.cart.items
    }
    for(let i=0; i< cartTotal.length;i++){
      let item = cartTotal[i];
      if(typeof total == 'number'){
        item.textContent = formatPrice(total)
      }else{
        item.textContent = total;
      }
    }
}
```