<sub><sup>[[Home]] > [[Liquid Bsale]] > [[Filtros | Filtros Bsale Liquid]] > Filtros de Stock</sup></sub>

Dentro de las plantillas de `Colección`, `Marca`,`Búsqueda` y `Producto` es posible obtener el stock de un producto. Para esto es necesario emplear un filtro get_stock

## Stock del Producto

```
{{ product.id  | get_product_stock }}
```

## Stock de la Variante
Sólo puede ser obtenida desde el plantilla el [[producto | Plantilla Producto]], para obtener esta variable es necesario consultar por cada variable utilizando en [[arreglo for]] y [[definir una nueva variable | Variables#definir-una-nueva-variable]] llamada `variant_stock`.

```js
// variante 1 = 20, variante 2 = 7 
{% for v on variant %}
   {% assign variant_stock = v.id | get_stock_variant %}
   {{stock_variant}}
{% endfor %}
```
Resultado
```js
20
7
```
