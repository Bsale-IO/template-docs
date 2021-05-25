---
layout: default
title: bsale json
published: true
---

_**JSON Bsale**_ es una `variable global` que puede ser consultada desde cualquier página en los template 4.0.0 o superior o superiores. En ella se guardan las configuraciones y datos de lo que está en pantalla con una estructura **JSON** que lo hace más fácil de gestionar al utilizar interacciones **Javascript**

Es necesario que estén cargados los componentes [load Bsale Json](/componentes/load-bsale-json).

**Para acceder a la variable sólo debes entrar a la `consola` del navegador y digitar:**
```console
 Bsale
```

### Objeto
```js 
  Bsale:{
     cart: Cart {items: 0, total: undefined, detail: Array(0), created: undefined}
     collections: […]
     config: {currency: {…}, country: "Chile", lang: "es-CL", addToCartLimit: 10, product: {…}, …}
     products: […]
  }
```

### Ejemplo de Consulta

Para acceder a los diferentes niveles de **JSON Bsale** sólo debes agregar un `.` y el nivel al que quieres ingresar, por ejemplo


#### 1. Consultar Producto 
> Es necesario que esté parado en una página de producto para acceder a toda la información de un producto, de lo contrario la respuesta puede dar error. 

```js
 Bsale.products
```

#### 2. Consultar Variables de un producto 

```js
 Bsale.products[0].variants
```

#### 3. Consultar Stock de una Variable de un Producto

```js
 Bsale.products[0].variants[0].stock
```