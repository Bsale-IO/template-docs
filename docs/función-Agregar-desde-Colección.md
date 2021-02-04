> **Necesitas tener cargado Bsale 4.3.0**

Para poder agregar productos desde una colección es necesario que el producto esté dentro de un componente de tipo colección.

Dentro de las estructura `{% for %}`, que dibuja los productos de la colección, debes agregar un botón con el data selector `data-bs="cart.add.collection"`

```django
<button class="btn btn-primary"
        data-bs="cart.add.collection">
        Agregar al carro
</button>
```
## Ejemplo de Componente Mejorado `Nuevo`

Es necesario crear 2 variantes para hacer esta evaluación 

| variables | significado |
| --------- | ----------- |
| `{% assign addToCart %}` | `true`  muestra boton de agregar el carro<br> `false` oculta botón de agregar al carro |
| `{% assign outStock %}` | `true` no tiene stock,<br> `false` tiene stock| 

**addToCart** se agrega fuera del {% for %} de productos y **outStock** dentro, el `{% case %}` evalúa la configuración del producto y define el stock 

```django
{% assign addToCart == true %}
{% for product in collection %}
   {% assign outStock == false %}
   {% case product.classification %}{% when 0 %}{% if product.totalStock < 1 and product.stockControl == 1 %}{% if product.allowNegativeStock == 0 %}{% assign outStock == true %}{%endif%}{% endif %}{% when 3 %}{% if product.totalStock < 1 %}{% assign outStock == true %}{%endif%}{% endcase %}
{% endfor %}
```

Luego se agrega una evaluación de **outStock**

```django
{% assign addToCart == true %}
{% for product in collection %}
   {% assign outStock == false %}
   {% case product.classification %}{% when 0 %}{% if product.totalStock < 1 and product.stockControl == 1 %}{% if product.allowNegativeStock == 0 %}{% assign outStock == true %}{%endif%}{% endif %}{% when 3 %}{% if product.totalStock < 1 %}{% assign outStock == true %}{%endif%}{% endcase %}
...

   {% if addToCart %}
      <div class="bs-product-cart mt-auto">
         {% if outStock %}
            <button class="btn btn-primary" disabled>Agotado</button>
         {%else%}
            <button class="btn btn-primary" data-bs="cart.add.collection">Agregar al carro</button>
         {%endif%}
       </div>
   {% endif %}

{% endfor %}
```

## Ejemplo Componente Antiguo

| variables | significado |
| --------- | ----------- |
| `{% assign addToCart %}` | `true`  muestra boton de agregar el carro<br> `false` oculta botón de agregar al carro |
| `{% assign outStock %}` | stock del producto utiliza filtro `get_stock_product`|


```django
{% assign addToCart = true %}
{% for product in collection %}
    {% if product.classification != 1 %}
        {% assign stock = product.id | get_product_stock %}
    {%endif%}
    <div class="bs-product" data-bs="product" data-info="{{product.id}}">

    ...
      {% if addToCart %}
          <div class="bs-product-cart mt-auto">
          {% if stock < 1 %}
                <button class="btn btn-primary" 
                        disabled>
                        Agotado
                </button>
          {%else%}
                <button class="btn btn-primary"
                        data-bs="cart.add.collection">
                        Agregar al carro
                </button>
          {%endif%}
          </div>
      {%endif%}
   ...
</div>
{% endfor %}
```

**El botón no debe ir dentro de una etiqueta de enlace `<a>`. **

### Funcionamiento

Al hacer click sobre el botón hay 2 posibles casos: 
1. Si el producto no tiene más de 1 variante agrega la variante por defecto al carro.
2. Si el producto tiene más variantes, se dibuja un selector con las variantes, el cliente debe seleccionar la variante y volver a dar click al boton agregar al carro. 

Estado inicial 

```django
<div class="bs-product-cart">
   <button class="btn btn-primary"
           data-bs="cart.add.collection">
           Agregar al carro
   </button>
</div>
```
Después de hacer click si el producto tiene variantes

```django
<div class="bs-product-cart">
   
   <select class="custom-select">
      <option value="0"> Selecciona </option>
      <option value="variant.id"> variant.name </option>
      ...
   </select>

   <button class="btn btn-primary"
           data-bs="cart.add.collection">
           Agregar al carro
   </button>
</div>
```


