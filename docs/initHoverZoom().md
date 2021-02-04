### Descripción

Esta función permite realizar un efecto de zoom a la imagen del producto en la vista "Detalle producto".
El zoom se aplica solo en tamaños de pantallas de escritorio. Se recorre cada una de las imágenes del producto
para poder aplicar el efecto.

```js
function initHoverZoom() {
    if (navigator.userAgent.toLowerCase().indexOf('mobile') < 0) {
      const slickItems = document.querySelectorAll("#bs-product-slider .item.slick-slide [data-bs='zoom']")
      slickItems.forEach(item => {
        const img = item.querySelector("img")
        new Drift(img, {
          inlinePane: false,
          containInline: true,
          paneContainer: item,
          zoomFactor: 2,
          sourceAttribute: 'src',
        })
      });
    }
  }
```