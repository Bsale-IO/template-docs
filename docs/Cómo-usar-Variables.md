
* [Tipos de Variables](Variables#tipos-de-variables)
* [Definir una nueva Variable](Variables#definir-una-nueva-variable)
* [Capturar una nueva Variable](Variables#capturar-una-nueva-variable)
* [Arreglos y Objetos](Variables#arreglos-y-objetos)
* [Tipos de variables, arreglos y Objetos en Bsale](Variables#tipos-de-variables-arreglos-y-objetos-en-bsale)

## Tipos de Variables
| Tipo | Descripción |
| ---- | ----------- |
|`string` o `texto` | Corresponde a palabras o párrafos.|
|`número` | Corresponde a valor numéricos, positivos, negativos, con o sin decimales. El decimal se representa con un _punto_ `.`  | 
| `boolean` | Son variables lógicas que sólo pueden tener 2 valores `true` _(verdadero)_ o `false` _(falso)_, liquid también tiene soporte para `1` como verdadero y `0` como falso |

## Definir una nueva Variable

Para definir una nueva variable se utiliza `{% assign %}` que permite asignare una valor a la nueva variable, **en liquid no se pueden definir variables sin valor.**

```django
{% assign nueva_variable = $valor %}
```
`$valor` puede ser cualquier tipo de variable `string`,`número` o `boolean`. 

### 1. Definir variable String
```js
{% assign nuevo_string = "texto" %}
```
> El string siempre va entre comillas, pueden ser simples `'` o dobles `"`

#### Uso
```
{{nuevo_string}}
```
#### Resultado
```js
"texto"
```

### 2. Definir variable numérica
```js
{% assign nuevo_numero = 10 %}
```
#### Uso
```
{{nuevo_numero}}
```
#### Resultado
```js
10
```

### 3. Definir variable boolean
```js
{% assign nuevo_boolean = true %}
```
#### Uso
```
{{nuevo_boolean}}
```
#### Resultado
```js
true
```
## 

## Capturar una nueva variable

Otra forma de definir una variable es empleando `{% capture %}`, a diferencia de `{% assign %}`, **capture** se puede definir estructuras complejas empleado [[Estructuras Lógicas]]

```js
// definir una nueva_variable, si el descuento del producto es mayor a 50
{% capture nueva_variable %}
   {% if product.discount > 50 %}
      Es muy barato!!!
   {% endif %}
{% endcapture %}
```
Si el descuento es mayor a 50
```js
// nueva_variable = "Es muy barato !!!"
{{ nueva_variable }}
```
Resultado
```js
Es muy barato
```

Si el descuento es menor a 50
```js
// nueva_variable = ""
{{ nueva_variable }}
```
Resultado
```js

```
## Arreglos y Objetos

### Arreglos

Un arreglo en programación y en liquid es una lista de variables, como por ejemplo los números de teléfono de una tienda

```js
 // site.contact_numbers = [ "+56 2 1111 3333", "+56 2 5555 6666", "+56 2 9999 0000"]
```

Si quiere imprimir un numero de teléfono especifico debe indicar cual es la posición que deseas imprimir, esta posición la indicas entre corchetes 

```css
arreglo[posición]
```
De esta forma 
```js
{{site.contact_numbers[1]}}
```

Resultado
```js
+56 2 5555 6666
```

Los arreglos se enumeran desde el 0 por lo que la lista sería:

0. **+56 2 1111 3333**
1. **+56 2 5555 6666**
2. **+56 2 9999 0000**

Si quieres imprimir el primer teléfono debes usar 
```js
{{site.contact_numbers[0]}}
```

Resultado
```js
+56 2 1111 3333
```

Para facilitar el trabajo con arreglos se emplean [[Loops | Estructuras-Lógicas#loop-for]] que permiten recorrer toda la lista y obtener sus valor
```js
{% for number in site.contact_numbers %}
   {{number}}
{% endfor %}
```

Resultado
```js
+56 2 1111 3333
+56 2 5555 6666
+56 2 9999 0000
```

### Objetos
Los objetos son arreglos más complejos donde cada valor tiene un nombre que lo define, por ejemplo un **producto** es un objeto donde puede obtener diferentes valores como: precio, nombre o descripción
para obtener los datos de un objeto se utiliza el **nombre del valor** en lugar de la posición 

```css
{{product.description}}
```

También puedes emplear [[Loops | Estructuras-Lógicas#loop-for]] para obtener los valores 
``` js
{% for product in collection %}
   {{product.title}}
   {{product.finalPrice}}
   {{product.descripction}}
{% endfor %}
```