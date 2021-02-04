<sub><sup>[[Archivos]] > config.js</sup></sub>

# Bsale.config

Config es una propiedad de instancia del objecto Bsale. Este devuelve información relevante al sitio y a las distintas vistas. Puede ser modificado en el archivo [[ config.js ]].

## Propiedades

* [site](#site)
* [product](#product)
* [cart](#cart)

### site
Objecto con la configuración general del sitio.
#### Propiedades
##### country
String con el país de la tienda.
##### lang
String con el idioma de la tienda.
##### currency
String con el símbolo de la moneda de la tienda.
##### nav
Objecto con la configuración de la barra de navegación.
##### css
Array con las librerías que se cargarán una vez todo el sitiohaya cargado.
```js
Bsale.config.site.country  // => 'Chile'
Bsale.config.site.lang     // => 'es-CL'
Bsale.config.site.currency // => '$ '
Bsale.config.site.nav      // => { fixed: true }
Bsale.config.site.css      // => [/* librerías */]
```

### product
Objecto con la configuración de la vista de producto.
#### Propiedades
##### stock
Objecto con los mensajes que se muestran de stock y límites bajo stock y máximo de productos que se pueden agregar.
##### slider
Objecto con la configuración de todos los slider.
```js
Bsale.config.product.stock.full        // => '&#10003; Disponible' (cuando el stock es mayor a "break")
Bsale.config.product.stock.min         // => 'Pocas unidades' (cuando el stock es menor a "break")
Bsale.config.product.stock.out         // => 'Agotado' (cuando no hay stock)
Bsale.config.product.stock.break       // => 5 (punto de quiere entre "full" y "min")
Bsale.config.product.stock.limit       // => 5 (límite asignado en la aplicación de Bsale)
Bsale.config.product.slider.main       // => { /* configuración del slider principal */ }
Bsale.config.product.slider.thumbnails // => { /* configuración del slider de miniaturas */ }
Bsale.config.product.slider.other      // => { /* configuración de los slider de relacionados y accesorios */ }
```

### cart
Objecto con la configuración del carro.
#### Propiedades
##### dropdown
Boolean que determina si el carro se muestra además como dropdown o no.
```js
Bsale.config.cart.dropdown // => false
```