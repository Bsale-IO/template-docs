<sup>[[JS Bsale]] > [[Bsale]] > config</sup>

# config
Objeto que contiene información de la tienda.

## Propiedades
* [currency](#currency)
* [country](#country)
* [lang](#lang)
* [addToCartLimit](#addToCartLimit)
* [product](#product)
* [gtm](#gtm)
* [analytics](#analytics)
* [pixel](#pixel)

## currency
Objecto con información de la moneda de la tienda.
### Propiedades
#### name
String con el nombre de la moneda.
```js
Bsale.config.currency.name     // => 'Peso', 'Sol', etc.
```
#### symbol
String con el símbolo de la moneda.
```js
Bsale.config.currency.symbol   // => '$', 'S/', etc.
```
#### decimals
Número con la cantidad de decimales configurados para la moneda.
```js
Bsale.config.currency.decimals // => 0, 1, 2, n
```
#### isoCode
String con el código de la moneda.
```js
Bsale.config.currency.isoCode  // => 'CLP', 'PEN', etc.
```
#### round
Boolean que determina el redondeo de los precios.
```js
Bsale.config.currency.round    // => true, false
```

## country
String con el país de la tienda.
```js
Bsale.config.country // => 'Chile', 'Perú', etc.
```

## lang
String con el idioma de la tienda.
```js
Bsale.config.lang // => 'es-CL', 'es-PE', etc.
```

## addToCartLimit
Número que determina la cantidad máxima de items de un mismo producto que pueden ser agregados al carro.
```js
Bsale.config.addToCartLimit // => 5, 10, 20, n
```

## product
Objecto con la configuración de los productos.
### Propiedades
#### stock
Objecto con los mensajes que se muestran en la vista de producto. Pueden ser modificados en el componente [[Producto > mensajes stock]].
```js
Bsale.config.product.stock.full        // => '&#10003; Disponible' (cuando el stock es mayor a "break")
Bsale.config.product.stock.min         // => 'Pocas unidades' (cuando el stock es menor a "break")
Bsale.config.product.stock.out         // => 'Agotado' (cuando no hay stock)
Bsale.config.product.stock.break       // => 5 (punto de quiere entre "full" y "min")
```

## gtm
Booleano que determina si la tienda tiene Google Tag Manager o no.
```js
Bsale.config.gtm // => true, false
```

## analytics
Booleano que determina si la tienda tiene Google Analytics o no.
```js
Bsale.config.analytics // => true, false
```

## pixel
Booleano que determina si la tienda tiene Facebook Pixel o no.
```js
Bsale.config.pixel // => true, false
```
