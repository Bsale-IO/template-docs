<sub><sup>[[Home]] > [[Liquid Bsale]] > [[Filtros | Filtros Bsale Liquid]] > Filtros de Texto</sup></sub>

* [Letra Capital](#Letra-Capital)
* [Minúsculas](#Minúsculas)
* [Mayúsculas](#Mayúsculas)
* [Tamaño del String](#Tamaño-del-String)
* [Adjuntar](#adjuntar)
* [Salto de linea](#Salto-de-linea)
* [Anteponer](#Anteponer)
* [Remover](#Remover)
* [Remover primera aparición](#Remover-primera-aparición)
* [Reemplazar](#Reemplazar)
* [Reemplazar primera aparición](#Reemplazar-primera-aparición)
* [División de String Slice](#División-de-String-slice)
* [División de String Split](#División-de-String-split)
* [Eliminación de espacios](#Eliminación-de-espacios)
* [Eliminar etiqueta HTML](#Eliminar-etiqueta-html)
* [Truncar](#Truncar)
* [Palabras truncadas](#Palabras-truncadas)
* [url_encode](#url_encode)
* [String invertidos](#String-invertidos)


## Letra Capital 
```js
//title = productos
{{ title | capitalize }}
```
Resultado
```js
"Productos"
```

## Minúsculas 
```js
//title = PRODUCTOS
{{ title | downcase }}
```
Resultado
```js
"productos"
```
## Mayúsculas  
```js
//title = productos
{{ title | upcase }}
```
Resultado
```js
"PRODUCTOS"
```
## Tamaño del String
Devuelve el numero de letras de una palabra
```js
//title = productos
{{ title | size }}
```
Resultado
```js
9
```
## Adjuntar 
Agrega caracteres a una cadena.
```js
//title = productos
{{ title | append: '.jpg' }}
```
Resultado
```js
"productos.jpg"
```

## Salto de linea
Inserta una etiqueta HTML <br> delante de cada cadena para generar un salto de linea.
```js
{% capture var %}
One Two Three
{% endcapture %}
{{ var | newline_to_br }}
```
Resultado
```js
One<br>
Two<br>
Three<br>
```

## Anteponer
Antepone caracteres a una cadena.
```js
//title = Destacado
{{ title | prepend: 'Producto ' }}
```
Resultado
```js
Producto Destacado
```

## Remover
Elimina todas las apariciones de una subcadena de una cadena.
```js
//title = Producto Destacado
{{ title | remove: 'Destacado' }}
```
Resultado
```js
Producto
```

## Remover primera aparición
Elimina solo la primera aparición de una subcadena de una cadena.
```js
//title = Producto Destacado, Producto con stock. 
{{ title | remove_first: 'Producto' }}
```
Resultado
```js
Destacado, Producto con stock. 
```

## Reemplazar
Elimina solo la primera aparición de una subcadena de una cadena.
```js
//title = Producto en oferta 
{{ title | replace: 'oferta', 'liquidación' }}
```
Resultado
```js
Producto en liquidación 
```

## Reemplazar primera aparición
Reemplaza la primera aparición de una cadena con una subcadena.
```js
//title = Productos y Productos en oferta 
{{ title | replace_first: 'Productos', 'Servicios' }}
```
Resultado
```js
Servicios y Productos en oferta
```

## División de String Slice
El filtro de división devuelve una subcadena, comenzando en el índice especificado. Se puede pasar un segundo parámetro opcional para especificar la longitud de la subcadena. Si no se proporciona ningún segundo parámetro, se devolverá una subcadena de un carácter.
```js
//title = Productos 
{{ title | slice: 0 }}
{{ title | slice: 1 }}
{{ title | slice: 1, 3 }}
```
Resultado
```js
P r rod
```
Si el índice pasado es negativo, se cuenta desde el final de la cadena.
```js
//title = Productos 
{{ title | slice: -3, 2 }}
```
Resultado
```js
to
```

## División de String Split 
El filtro dividido toma una subcadena como parámetro. La subcadena se utiliza como delimitador para dividir una cadena en una matriz. Puede generar diferentes partes de una matriz utilizando filtros de matriz.
```js
//title = Productos y Servicios en oferta 
{{ title | split: ' ' }}
{% for word in title %}
  {{ word }}
{% endfor %}
```
Resultado
```js
Productos
y
Servicios
en
oferta
```

## Eliminación de espacios
Elimina pestañas, espacios y líneas nuevas (todos los espacios en blanco) del lado izquierdo y derecho de una cadena.
```js
//title = '      Productos       ' 
{{ title | strip }}
```
Resultado
```js
Productos
```

## Eliminación de espacios lado izquierdo
Elimina pestañas, espacios y líneas nuevas (todos los espacios en blanco) del lado izquierdo de una cadena.
```js
//title = '      Productos       ' 
{{ title | lstrip }}
```

Resultado

```js
/*Resalta para ver los espacios vacíos a la derecha de la cadena*/
Productos        
```

## Eliminación de espacios lado derecho
Elimina pestañas, espacios y líneas nuevas (todos los espacios en blanco) del lado derecho de una cadena.
```js
//title = '      Productos       ' 
{{ title | rstrip }}
```

Resultado

```js
/*Resalta para ver los espacios vacíos a la derecha de la cadena*/
        Productos
```

## Eliminar etiqueta HTML
Elimina todas las etiquetas HTML de una cadena.
```js
{{ "<h1>Producto</h1> destacado" | strip_html }}
```

Resultado
```js
Producto destacado
```

## Truncar
Trunca una cadena hasta el número de caracteres pasados ​​como primer parámetro. Se adjuntan puntos suspensivos (...) a la cadena truncada y se incluyen en el recuento de caracteres.
```js
{{ "Productos destacados y con descuento por tiempo limitado" | truncate: 13 }}
```

Resultado
```js
Productos ...
```

## Puntos suspensivos personalizados
truncate toma un segundo parámetro opcional que especifica la secuencia de caracteres que se agregarán a la cadena truncada. De forma predeterminada, se trata de puntos suspensivos (...), pero puede especificar una secuencia diferente.

La longitud del segundo parámetro cuenta contra el número de caracteres especificados por el primer parámetro. Por ejemplo, si desea truncar una cadena a exactamente 10 caracteres y usar puntos suspensivos de 3 caracteres, use 13 para el primer parámetro de truncamiento, ya que los puntos suspensivos cuentan como 3 caracteres.(...) a la cadena truncada y se incluyen en el recuento de caracteres.

```js
{{ "Productos destacados y con descuento por tiempo limitado" | truncate:20, " en oferta!" }}
```

Resultado
```js
Productos en oferta!
```

## Sin puntos suspensivos
Puede truncar al número exacto de caracteres especificado por el primer parámetro y no mostrar caracteres finales pasando una cadena en blanco como el segundo parámetro:

```js
{{ "Productos destacados y con descuento por tiempo limitado" | truncate:20, "" }}
```

Resultado
```js
Productos destacados
```

## Palabras truncadas
Trunca una cadena hasta el número de palabras pasadas como primer parámetro. Se adjuntan puntos suspensivos (...) a la cadena truncada.

```js
{{ "Productos destacados y con descuento por tiempo limitado" | truncatewords:5 }}
```
Resultado
```js
Productos destacados y con descuento...
```


## Puntos suspensivos personalizados
truncatewords toma un segundo parámetro opcional que especifica la secuencia de caracteres que se agregarán a la cadena truncada. De forma predeterminada, se trata de puntos suspensivos (...), pero puede especificar una secuencia diferente.

```js
{{ "Productos destacados y con descuento por tiempo limitado" | truncatewords:5, "--" }}
```
Resultado
```js
Productos destacados y con descuento--
```

## Sin puntos suspensivos
Puede evitar mostrar caracteres finales pasando una cadena en blanco como segundo parámetro:

```js
{{ "Productos destacados y con descuento por tiempo limitado" | truncatewords:5, "" }}
```
Resultado
```js
Productos destacados y con descuento
```

## Url_encode
Convierte todos los caracteres inseguros de URL de una cadena en caracteres codificados en porcentaje.

| filtro | resultado |
| ------ | -------- |
|`{{ "john@gmail.com" / url_encode }}` | john%40gmail.com |
| `{{ "m&m" / url_encode }}` | m%26m|

| carácter | valor | | carácter | valor |
| --- | --- | --- | --- | --- |
| espacio | %20 || `(` | %28 |
| `!` |	%21 |    | `)` | %29 |
| `"` | %22 |    | `*` | %2A |	
| `#` | %23 |    | `+` | %2B |		
| `$` | %24 |    | `,` | %2C |	
| `%` | %25 |    | `-` | %2D |	
| `&` | %26 |    | `.` | %2E |
| `'` | %27 |    | `/` | %2F |

para más información ver [url encode símbolos](https://www.w3schools.com/tags/ref_urlencode.asp)
	
	




	
	


## String invertidos
reverse no se puede usar directamente en una cadena, pero puede dividir una cadena en una matriz, invertir la matriz y volver a unirla al encadenar otros filtros:
```js
{{ "Producto Destacado" | split: "" | reverse | join: "" }}
```
Resultado
```js
odacatseD otcudorP
```