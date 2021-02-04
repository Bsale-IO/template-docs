### Descripción

Esta función permite mostrar en la vista "detalle producto" el precio del producto. Se evalúa si la variante del producto posee descuento, si es así, se reemplaza el precio del producto, el precio final y la cantidad de unidades requeridas para aplicar dicho descuento, además muestra el porcentaje correspondiente al descuento. Si el producto no posee descuento, mantiene su precio por defecto. 

Dentro de la función existe una "forma antigua" para mostrar los precios del producto, utilizada especialmente en en templates antiguos.

```js
function definePrice(variant){
    if (completePrice.length) {
      //precio del prudcto sin descuento
      let priceDefault = {
        progresive: "<span>{price} c/u</span><div>{finalPrice} c/u <small>Por compras desde {discountCant} unidades</small></div>",
        single: "<del>{price}</del><div>{finalPrice} c/u</div>",
        default: "<span>{price}</span>"
      }
      //info contiene el data-info del primer elemento '[data-bs="product.completePrice"]', si no tiene data-info carga htmlDefault
      let completePriceJSON = completePrice[0].dataset.info ? JSON.parse(completePrice[0].dataset.info) : JSON.parse(priceDefault);

      function newReplace(txt) {
        if (variant.discountRate > 0) {
          // si tiene descuento
          return txt
            .replace("{price}", oldPrice)
            .replace("{finalPrice}", formatPrice(variant.finalPrice))
            .replace("{discountCant}", variant.discountCant);
        } else {
          //si no tiene descuento
          return txt
            .replace("{finalPrice}", formatPrice(variant.finalPrice))
        }
      }
      // por cada elemento '[data-bs="product.completePrice"]'
      for (let i = 0; i < completePrice.length; i++) {
        
	let item = completePrice[i];
        
        /*precio antes del descuento */
        if (variant.discountRate > 0) {
            console.log(variant.discountRate);

          //dibuja descuento
          for (let i = 0; i < discountTagHTML.length; i++) {
            let disc = discountTagHTML[i]
            let n = disc.innerText;
            disc.children[0].innerHTML = n.split(/[0-9]+/g).join(Math.trunc(variant.discountRate));
            disc.style.opacity = "1";
          }

          if (variant.discountCant > 1) {
            item.innerHTML = newReplace(completePriceJSON.progresive);
          } else if (variant.discountCant == 1) {
            item.innerHTML = newReplace(completePriceJSON.single);
          }
        } else { //si no tiene descuento
          
          //html inicial
          let d = finalPriceFormat || priceDefault.default;
          item.innerHTML = newReplace(d);
        }
      }//for 
    }

    //FORMA ANTIGUA
    if (variant.discountRate > 0) {
      //muestra
      for (let i = 0; i < discountTagHTML.length; i++) {
        let disc = discountTagHTML[i]
        let n = disc.innerText;
        disc.children[0].innerHTML = n.split(/[0-9]+/g).join(Math.trunc(variant.discountRate));
        disc.style.opacity = "1";
      }

      for (let i = 0; i < discountInfoHTML.length; i++) {
        let e = discountInfoHTML[i];
        let old = e.querySelector("strike");
        if (old) {
          old.innerHTML = oldPrice;
        }else{
          e.innerHTML = discountInfoHTMLtxt[i].replace("{price}", `${oldPrice}`)
        }
        e.style.opacity = "1";
        e.style.display = "block";
      }

      if (variant.discountCant > 1) {
        for (let i = 0; i < discountConditionHTML.length; i++) {
          let e = discountConditionHTML[i];
          let old = e.querySelector("span");
          if (old) {
            old.innerHTML = variant.discountCant;
          }else{
            e.innerHTML = discountConditionHTMLtxt[i].replace("{discountCant}", variant.discountCant);
          }
          e.style.opacity = "1";
          e.style.display = "block";
        }

      } else {
        for (let i = 0; i < discountConditionHTML.length; i++) {
          let e = discountConditionHTML[i];
          e.style.display = "none";
          e.style.opacity = "0";
        }
      }
    } else {
      //oculta descuento
      for (let i = 0; i < discountTagHTML.length; i++) {
        discountTagHTML[i].style.opacity = "0";
      }
      for (let i = 0; i < discountConditionHTML.length; i++) {
        let e = discountConditionHTML[i];
        e.style.display = "none";
        e.style.opacity = "0";
      }
      //oculta variant info, precio anterior
      for (let i = 0; i < discountInfoHTML.length; i++) {
        let e = discountInfoHTML[i];
        e.style.opacity = "0";
        e.style.display = "none";
      }
    }

    //precio 
    for(let i = 0; i < productPrice.length; i++){
      productPrice[i].innerHTML = formatPrice(variant.finalPrice);
    }
  }
```