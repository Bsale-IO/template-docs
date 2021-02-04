<sub><sup>[[Home]] > [[Liquid Bsale]] > Estructuras Lógicas</sup></sub>

Dentro de liquid puedes emplear estructuras lógicas para dar dinamismo a tu template. 

### Menú
* [Operadores Lógicos](Estructuras-Lógicas#operadores-lógicos)
* [IF](Estructuras-Lógicas#secuencia-lógica-if)
* [UNLESS](Estructuras-Lógicas#secuencia-lógica-unless)
* [ELSE](Estructuras-Lógicas#else)
* [ELSIF](Estructuras-Lógicas#elsif-compuestos-if-compuestos)
* [FOR](Estructuras-Lógicas#loop-for)

## Operadores Lógicos

Los operadores lógicos sirven para comparar 2 valores dentro de secuencias `if` o `unless`

| Operador | Significado |
| -------- | ----------- |
| `==` | igual a |
| `!=` | diferente a |
| `>` | Mayor a |
| `<` | Menor a |
| `>=` | Mayor o igual a |
| `<=` | Menor o igual a |
| `or` | se cumple esta condición o esta otra |
| `and` | se cumple esta condición y esta otra |
| `contains` | contiene el siguiente texto | 


## Secuencia lógica IF

Imprime el dato sólo si se cumple la condición dentro del **IF**

```js
//dibujar del descuento sólo si es mayor a 0
{% if product.discountRate > 0 %}
   {{ product.discountRate }}
{% endif %}
```
Resultado
```js
60
```

## Secuencia lógica UNLESS

Al contrarío de **IF**, **UNLESS** dibuja el dato si la respuesta a falsa (si no se cumple la condición)
```js
//dibuja el descuento si no es menor a 0
{% unless product.discountRate < 0 %}
   {{ product.discountRate }}
{% endunless %}
```
Resultado
```js
60
```
## ELSE
Permite definir una alternativa si no se cumple la condición dentro del **IF** o **UNLESS**

```js
//dibujar del descuento sólo si es mayor a 60, sino escribe _"no hay descuento"_
{% if product.discountRate > 60 %}
   {{ product.discountRate }}
{% else %}
   No hay descuento
{% endif %}
```
Resultado
```js
No hay descuento
```
```js
//dibujar del descuento sólo si no es menor a 0, sino escribe _"no hay descuento"_
{% unless product.discountRate < 0 %}
   {{ product.discountRate }}
{% else %}
   No hay descuento
{% endunless %}
```

Resultado
```js
60
```
### ELSIF compuestos, IF compuestos
```js
// dibujar del descuento si es mayor a 0, 
// si es mayor a 50 escribe super descuento
// de lo contrario escribe _"no hay descuento"_
{% if product.discountRate > 0 %}
   {{ product.discountRate }}
{% elsif product.discountRate > 50 %}
   Super Descuento {{ product.discountRate }}
{% else %}
   No hay descuento
{% endif %}
```
Resultado
```js
Super Descuento 60
```

## Loop FOR
Un loop es un evento que se repite un número definido de veces. Los loop `for` son capaces de recorrer los arreglos y objetos devolviendo los valores de estos. 
Dentro de cada loop `for` es necesario definir una variable que ira aumentando y mercando la posición del valor en el arreglo u objeto. 
```js
{% for i in collection %}
```
* **i :** define la ___posición___ en el recorrido.

En una colección de 3 productos `i` representa cada producto, de esta forma

```js
{% for i in collection %}
   {{ i.title }}       //nombre
   {{i.description}}   //descripcion
   {{i.finalPrice}}    //precio
{% endfor%}
```
Resulta en 

0. Botas Botas de cuero con hebillas plateadas  $10.000
1. Camisa Azul Camisa de Seda Azul $20.000
2. Camisa Verde Camisa de tele verde $15.000

La variante de un loop `for` puede tener cualquier nombre y no es necesario que se llame `i`, se recomienda que el nombre de la variante tenga relación con el tipo de contenido del arreglo u objeto de esta forma:

```js
// para 'productos' en la colección
{% for product in collection %}
   {{ product.title }}       //nombre
   {{ product.description}}   //descripcion
   {{ product.finalPrice}}    //precio
{% endfor %}
```
### Variables especiales de FOR

| código | definición |
| ------ | ---------- |
|`{{forloop.first}}`| `boolean` _primera_ posición del arreglo u objeto |
|`{{forloop.last}}`| `boolean` _ultima_ posición del arreglo u objeto |
|`{{forloop.index}}`| `número` posición dentro del arreglo u objeto (comienza en 1) |


Ejemplos de utilización ***forloop.first***
```js
{% for product in collection %}
   {% if forloop.first %}
      Primero
   {% else %}
      otro
   {% endif %}
{% endfor %}
```

Resultado
```js
Primero
otro
otro
otro
...
```

Ejemplos de utilización ***forloop.last***
```js
{% for product in collection %}
   {% if forloop.last %}
      Ultimo
   {% else %}
      otro
   {% endif %}
{% endfor %}
```

Resultado
```js
...
otro
otro
otro
Ultimo
```

Ejemplos de utilización ***forloop.index***
```js
{% for product in collection %}
   {% if forloop.index == 2 %}
      Segundo
   {% else %}
      otro
   {% endif %}
{% endfor %}
```

Resultado
```js
otro
Segundo
otro
otro
otro
...
```

Ejemplos de utilización ***break***

si se cumple la condición se rompe el ciclo
```js
{% for product in collection %}
   {% if forloop.index == 3 %}
      {% break %}
   {% else %}
      otro
   {% endif %}
{% endfor %}
```

Resultado
```js
otro
otro

...
```