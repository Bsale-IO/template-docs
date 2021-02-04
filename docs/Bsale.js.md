<sub><sup>[[Archivos]] > Bsale.js</sup></sub>

# Bsale

Bsale es un objecto global presente en todos los nuevos templates. Tiene como propósito ser un intermediario en la comunicación con la API de Bsale y herramientas de tracking y brinda información acerca del sitio.

## Propiedades

Bsale tiene como única propiedad de instancia un objecto de configuración, el cual puede ser modificado en el archivo [[ config.js ]].

```js
Bsale.config
```

## Métodos

Para comunicarse con la API de Bsale:
* [getCart()](#getcart)
* [addToCart()](#addtocart)
* [updateCart()](#updatecart)
* [removeFromCart()](#removefromcart)
* [productClick()](#productclick)
* [checkout()](#checkout)

Para enviar eventos personalizados a Google Tag Manager y Facebook Pixel:
* [tagmanager()](#tagmanager)
* [pixel()](#pixel)

Helpers:
* [createElement()](#createElement)

### getCart()
Obtener items y valor total del carro.
#### Parámetros
##### callback
Función que se va a ejecutar cuando se obtenga el carro. Como único argumento recibe un objeto con el carro.
#### Valor que retorna
undefined.
```js
Bsale.getCart(function (data) {
    // data es un json con el carro
    // el cual tiene la siguiente estructura: {total: 0, items: 0, mgs: "*/*  "}
})
```

### addToCart()
Agregar un item al carro. Aumáticamente envía el evento a las herramientas de tracking.
#### Parámetros
##### producto
Id de la variante del producto.
##### cantidad
Cantidad que se desee agregar al carro.
##### callback
Función que se va a ejecutar cuando responda la API de Bsale. Como único argumento recibe un objeto con la respuesta del servidor.
#### Valor que retorna
undefined.
```js
Bsale.addToCart(222, 1, function (data) {
    // data es un json con el status de la petición
    // la cual puede ser "ok", si se agregó correctamente
    // o "non_stock", si no hay stock suficiente, o si la cantidad exede 
    // el máximo de productos que se pueden comprar
})
```

### updateCart()
Actualizar un item en el carro. Aumáticamente envía el evento a las herramientas de tracking.
#### Parámetros
##### item
Id del producto en el carro.
##### cantidad
Cantidad para actualizar.
##### callback
Función que se va a ejecutar cuando responda la API de Bsale. Como único argumento recibe un objeto con la respuesta del servidor.
#### Valor que retorna
undefined.
```js
Bsale.updateCart(111, 2, function (data) {
    // data es un json con el status de la petición
    // la cual puede ser "ok", si se agregó correctamente
    // o "non_stock", si no hay stock suficiente, o si la cantidad exede 
    // el máximo de productos que se pueden comprar
})
```

### removeFromCart()
Remover un item del carro. Aumáticamente envía el evento a las herramientas de tracking.
#### Parámetros
##### item
Id del producto en el carro.
##### callback
Función que se va a ejecutar cuando responda la API de Bsale. Como único argumento recibe un objeto con la respuesta del servidor.
#### Valor que retorna
undefined.
```js
Bsale.removeFromCart(111, function (data) {
    // data es un json con el status de la petición
    // la cual será "ok", si se eliminó correctamente
})
```

### productClick()
Enviar evento de click en un producto dentro de una colección a las herramientas de tracking.
#### Parámetros
##### producto
Id de la variante del producto.
#### Valor que retorna
undefined.
```js
Bsale.productClick(222)
```

### checkout()
Enviar evento de entrada a la vista de chackout a las herramientas de tracking.
#### Valor que retorna
undefined.
```js
Bsale.checkout()
```

### tagmanager()
Enviar evento personalizado a Google Tag Manager.
#### Parámetros
##### evento
Objeto con la información del evento.
#### Valor que retorna
undefined.
```js
Bsale.tagmanager({ event: 'purchase', data: { /* datos relevantes al evento */ } })
```

### pixel()
Enviar evento personalizado a Facebook Pixel.
#### Parámetros
##### evento
Nombre del evento.
##### data
Objeto con la información relevante al evento.
##### [custom]
Opcional. Si se desea enviar un evento personalizado, este parámetro debe ser true, de lo contrario, puede ser omitido.
#### Valor que retorna
undefined.
```js
Bsale.pixel('Purchase', { /* datos relevantes al evento */ })
```

### createElement()
Interfaz para crear elementos HTML.
#### Parámetros
##### type
Tag HTML que se desee crear.
##### [attributes]
Opcional. Objecto con los atributos del nuevo elemento HTML.
##### [children]
Opcional. Texto o elemento HTML (puede ser un elemento retornado por este mismo método; al agregar clases como atributo, es necesario pasar la propiedad como "className").
#### Valor que retorna
Nuevo elemento HTML.
```js
Bsale.createElement('div')                         // => <div></div>
Bsale.createElement('button', { id: 'button' })    // => <button id="button"></button>
Bsale.createElement('h1', null, 'Título')          // => <h1>Título</h1>
Bsale.createElement('div', { className: 'row' }, ( // => <div class="row"><div class="col"></div></div>
  Bsale.createElement('div', { className: 'col' })
))
```