<sub><sup>[[Home]] > [[Liquid Bsale]] > [[Filtros | Filtros Bsale Liquid]] > Filtros Matemáticos</sup></sub>

Son aplicables siempre que la variable retorne un número, por ejemplo:
```js
{{ product.final_price}} 
```
##### Resultado
```js
10000
```

Menú
* [Suma](#suma)
* [Resta](#resta)
* [Multiplicación](#multiplicación)
* [División](#división)
* [Redondear](#redondear)
* [Combinación de operaciones](#combinación-de-operaciones)
* [Combinación de variables](#combinación-de-variables)
* [Combinación de variables y operaciones](#combinación-de-variables-y-operaciones)
* [Redondear hacia arriba](#Redondear-hacia-arriba)
* [Redondear hacia abajo](#Redondear-hacia-abajo)
* [Modulo](#Modulo)

### Suma
```js
// product.final_price = 10000
{{ product.final_price | plus: 500}} 

```
##### Resultado
```js
//(10000 + 500)=
10500
```

### Resta
```js
// product.final_price = 10000
{{ product.final_price | minus: 500}}

```
##### Resultado
```js
//(10000 - 500)= 
9500
```

### Multiplicación
```js
//product.final_price = 10000
{{ product.final_price | times: 2}} 

```
##### Resultado
```js
//(10000 * 2)=
20000
```

### División
```js
//product.final_price = 10000
{{ product.final_price | divided_by: 2}}

```
##### Resultado
```js
//(10000 / 2)=
5000
```
### Redondear
```js
//product.final_price = 100,5
{{ product.final_price | round }}

```
##### Resultado
```js
101
```

### Combinación de operaciones
```js
//product.final_price = 10000
{{ product.final_price | divided_by: 2 | plus: 500}}

```
##### Resultado
```js
//(10000 / 2) + 500 =
5500
```
### Combinación de variables
En las operaciones puedes llamar a otras variables 
```js
//product.final_price = 10000
{{ product.final_price | plus: product.final_price}}

```
##### Resultado
```js
//(10000 + 10000) =
20000
```

### Combinación de variables y operaciones
En las operaciones puedes llamar a otras variables 
```js
//product.final_price = 10000
{{ product.final_price | plus: product.final_price | minus: 500}}

```
##### Resultado
```js
//(10000 + 10000) - 500 =
19500
```

### Redondear hacia arriba
Redondea una salida al entero más cercano.
```js
//product.final_price = 10.6
{{ product.final_price | ceil }}
```
##### Resultado
```js
11
```

### Redondear hacia abajo
Redondea una salida hacia abajo al entero más cercano.
```js
//product.final_price = 10.6
{{ product.final_price | floor }}
```
##### Resultado
```js
10
```

### Modulo
Divide una salida por un número y devuelve el resto.
```js
//product.final_price = 12000
{{ product.final_price | modulo:5000 }}
```
##### Resultado
```js
2000
```