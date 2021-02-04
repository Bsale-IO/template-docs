### Descripción

Esta función tiene como objetivo mostrar el stock del producto en cada una de las sucursales
donde este disponible a través de una tabla que se ingresa como contenido en un modal. Además de mostrar en la vista un mensaje personalizado dependiendo de la cantidad de stock que tiene el producto.

-Recibe por parametro el stock de la variante.

```js
function defineStock(newSelectVariant) {

    let stockBreak = bsale.config.product.stock.break;
    let d = '{"0": "Agotado", "full": "Disponible", "unlimitedStock" : "Disponible"}'
    let dataConfig = stockHTML.length ? stockHTML[0].dataset.info ? stockHTML[0].dataset.info  : d : d;
    dataConfig = JSON.parse(dataConfig);
    stock = fullStock(newSelectVariant);
    
    /*Muestra mensaje correspondiente al stock de la variante*/
    function StockMsg(obj, stock) {
      let position = Object.keys(obj).filter(x => x >= stock)[0];
      if (obj.showUnits) {
        if (position <= 0) {
          return obj[position]
        } else {
          if (stock == Infinity) {
            return obj.full;
          } else {
            return `${obj.showUnits.before} ${stock} ${obj.showUnits.after}`;
          }

        }
      } else {
        // si stock es infinito (no controla stock)
        let m = "";
        if (stock === Infinity) {
          m = obj.unlimitedStock || "Disponible";
        }else if(stock === 0 ){
          m = obj[0] || "Agotado";
        } else {
          //si stock no esta definido retorna full 
          if (obj[position] == undefined) {
            m = obj["full"] || "Disponible";
          } else {
            //si no, devuelve la position
            m =  obj[position] || "Disponible";
          }
        }
        return m.replace("{cantidad}", stock)
      }//else
    }// end StockMsg

    /* Le inyecta una tabla html en el modal stock con la información del stock por sucursal de la variante. */
    function sucursalStock(stock) {
      const selector = document.querySelector('[data-bs="product.stock.detail"]');
      if (selector !== null) {
        const info = selector.dataset.info ? JSON.parse(selector.dataset.info) : undefined;
        let html = "";
        let header = "";

        if (info) {
          if (info.table) {
            header = info.tableTitle[0] ? `<thead><tr><th>${info.tableTitle[0]}</th><th>${info.tableTitle[1]}</th></tr></thead>` : "";
            for (let i = 0; i < stock.length; i++) {
              let e = stock[i];
              let st = newSelectVariant.allowNegativeStock || newSelectVariant.unlimitedStock ? Infinity : e.quantityAvailable;
              html += `<tr><td>${e.office}</td><td>${StockMsg(info, st)}</td></tr>`;
            }
            selector.innerHTML = `<table>${header}<tbody>${html}</tbody></table>`
          } else {
            for (let i = 0; i < stock.length; i++) {
              let e = stock[i];
              let st = newSelectVariant.allowNegativeStock || newSelectVariant.unlimitedStock ? Infinity : e.quantityAvailable;
              html += `<div>${e.office}</div><div>${StockMsg(info, st)}</div>`;
            }
            selector.innerHTML = html
          }
        }
      }
    }

    if (dataConfig && Object.keys(dataConfig).length !== 0) {
      for (let i = 0; i < stockHTML.length; i++) {
        stockHTML[i].innerHTML = StockMsg(dataConfig, stock);
      }

    } else {
      // old structure
      if (newSelectVariant.unlimitedStock || newSelectVariant.allowNegativeStock) {
        stockHTML.innerHTML = "";
      } else {
        if (stock > stockBreak) {
          stockHTML.innerHTML = bsale.config.product.stock.full;
        } else if (stock > 0 && stock <= stockBreak) {
          stockHTML.innerHTML = bsale.config.product.stock.min;
        }
        else {
          stockHTML.innerHTML = bsale.config.product.stock.out;
        }
      }
    }

    sucursalStock(newSelectVariant.stock);
  }
```