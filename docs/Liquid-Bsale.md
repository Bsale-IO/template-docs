<sub><sup>[[Home]] > Liquid Bsale</sup></sub>
## Variables
```js
//title = hola mundo
{{ title }}

```
Resultado
```js
//Inserta el texto siempre que este exista
hola mundo
```

Para más información revisa [[Cómo usar Variables]]
## Filtros

Existen muchos filtros de liquid que te permite personalizar el resultado de la variable todos estos filtros se aplican con un slach o barra vertical `|` seguido del nombre del filtro.

```js
//nombre = Juan
{{ nombre | upcase }}
```
Resultado
```
JUAN
```
Para más información revisa [[Filtros | Filtros Bsale Liquid]]

## Lógica 

Las estructuras lógicas te permite agregar dinamismo a tu template condicionando cuando y cómo se dibujan las variables.

```js
//product.discount = 10
//dibuja el descuento sólo si es mayor a 0
{% if product.discount > 0 %}
   {{ product.discount }}
{% endif %}

```
Resultado
``` js
10
```
Para más información revisa [[Estructuras Lógicas | Estructuras-Lógicas ]] 