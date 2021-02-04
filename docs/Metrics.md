<sup>[[JS Bsale]] > Metrics</sup>

# Metrics
Metrics es un objecto global presente en todos los nuevos templates. Tiene como propósito almacenar la interacción de los usuarios, enviando los distintos eventos a Google Tag Manager, Google Analytics y/o Facebook Pixel, si están integrandos. Actualmente, existen un total de 7 eventos que siempre se trackan por defecto, los cuales pueden ser modificados, y, además, ofrece una interfaz para enviar eventos personalizados.

## Métodos
Eventos por defecto:
* [[addToCart() | Metrics.addToCart]]
* [[removeFromCart() | Metrics.removeFromCart]]
* [[viewProduct() | Metrics.viewProduct]]
* [[search() | Metrics.search]]
* [[formSent() | Metrics.formSent]]
* [[checkout() | Metrics.checkout]]
* [[purchase() | Metrics.purchase]]

Eventos personalizados (más documentación de cada proveedor):
* [[customEvent() | Metrics.customEvent]]

## Sobreescribir eventos por defecto
Es posible sobreescribir los métodos que están por defecto en el objecto Metrics. Para ello, es necesario redefinirlo de la siguiente manera:
```js
/*
 * Por ejemplo, sobreescibirémos el método addToCart.
 * Todos los métodos personalizados deben retornar un objeto con la data que se enviará a
 * Google Tag Manager o Analytics y/o Facebook Pixel (no son requeridos y pueden, o no, retornarse).
 * Algúnos métodos, entregan argumentos relativos a la data que corresponde.
 * En la página de cada método hay información detallada con respecto a esto,
 * además de la estructura de las funciones.
 */

Metrics.addToCart = function (cartItem) {
  return {
    gtm: {
      event: null,
      data: null
    },
    analytics: {
      event: null,
      data: null
    },
    pixel: {
      event: null,
      data: null
    }
  }
}
```
