Desde los [[template version 4.0.0 | Template-versión-4 ]] se puede configurar el mensaje que mostrará el producto según el stock que presente su variante, para esto es necesario crear un componente: `Product > detalle > stock`

## Componente `Product > detalle > stock`

1. [Estructura Básica](#1-estructura-básica)
2. [Componente Básico](#2-componente-básico)
3. [Break point](#3-break-point)
4. [Mostrar cantidad de productos en stock](#4-mostrar-cantidad-de-productos-en-stock)
5. [Agregar elementos html](#5-agregar-elementos-html)
6. [Condicionar la configuración según atributos del producto](#6-condicionar-la-configuración)
7. [Detalle por sucursal](#7-detalle-por-sucursal)
8. [Modal detalle por sucursal](#8-modal-detalle-por-sucursal)

### 1. Estructura Básica

Dentro de la etiqueta `capture` deben ir las configuraciones del mensaje donde:

| atributo | significado |
| ----- | ----------- |
| `0` | mensaje cuando el producto no tiene stock | 
| `full`<sup>1</sup> | mensaje cuando hay stock y/o el producto no controla stock | 
| `unlimitedStock`<sup>2</sup> | mensaje que se mostrará cuando el producto no controle stock, si no esta configurado mostrará mensaje de `full` | 
> * (1) Si no configuras el mensaje `full` se mostrará el mensaje por defecto **En Stock**
> * (2) Si no configuras el mensaje `unlimitedStock` el mensaje de `full`, si no está configurado (1) Se mostrará mensaje por defecto **En Stock**


Cada atributo de la configuración debe comó estructura `JSON`:
* Los `atributos` y sus `valores` deben ir entre comillas dobles `"`
* Cada atributo debe ir separado de su valor por dos puntos `:`
> ```js
> "atributo":"valor"
>```
* Los atributos deben ir separados por comas `,`. El último atributo no puede tener una coma `,`
> ```js
> "atributo":"valor",
> "atributo2":"valor"
>```

### 2. Componente Básico

Es necesario crear un componente: `Product > detalle > stock` y llamarlo dentro del componente `Producto > detalle`.
```django
{% if product.classification != 1 %}
    {% capture stock %}

        "0": "Agotado", 
    	"full": "Con Stock",
        "unlimitedStock": "Con Stock"
	
    {% endcapture %}
    <div data-bs="product.stock" data-info='{ {{stock | replace: "'",'\"'}} }'>
    </div>
{% endif %}
```

#### Llamado de Componente
```js
   {{"Product > detalle > stock" | get_component }}
```


### 3. Break point 
Puedes definir mensajes según la cantidad de productos que existan como en el siguiente ejemplo:

```django
{% if product.classification != 1 %}
   {% capture stock %}

       "0": "Agotado",
       "5": "Últimas unidades",
       "10": "Quedan pocas unidades",
       "full": "Con Stock"

   {% endcapture %}
   <div data-bs="product.stock" data-info='{ {{stock | replace: "'",'\"'}} }'></div>
{% endif %}
```
De esta forma:
* Si no quedan productos (`0`) mostrará **Agotado**
* Si quedan ***5 o menos productos*** mostrará **Últimas unidades**
* Si quedan ***10 o menos productos*** mostrará **Quedan pocas unidades**
* Si hay ***más de 10 unidades*** mostrará **Con Stock**

### 4. Mostrar cantidad de productos en stock

Para poder mostrar la cantidad de productos que queda en stock se utiliza la variable `{cantidad}` que es reemplazada por el stock del producto
```django

{% if product.classification != 1 %}
    {% capture stock %}

             "0": "agotado",
             "1": "queda {cantidad} producto",
             "5": "quedan {cantidad} productos",
          "full": "en stock",
"unlimitedStock": "producto en Stock"
	
    {% endcapture %}
    <div data-bs="product.stock" data-info='{ {{stock | replace: "'",'\"'}} }'></div>
{% endif %}
             
``` 
de esta forma:
* si no quedan productos se mostrará el mensaje **agotado**
* si queda un sólo producto **queda 1 producto**
* si quedan 5 o menos productos, por ejemplo 4 se mostrará **quedan 4 productos**
* si quedan más de 5 producto, por ejemplo 6 se mostrará el mensaje `"full"` **en stock**
* si el producto _no controla stock_ se mostrará el mensaje **producto en Stock**




### 5. Agregar elementos html

Puedes agregar elementos html a los mensaje, pero dejes emplear comillas escapadas si empleas etiquetas `style`, `id` o `class`

#### Texto en negrita

```django
{% if product.classification != 1 %}
    {% capture stock %}

        "0": "<b>Agotado</b>", 
    	"full": "En Stock"
	
    {% endcapture %}
    <div data-bs="product.stock" data-info='{ {{stock | replace: "'",'\"'}} }'>
    </div>
{% endif %}
```

#### Texto con etiqueta html

Puedes agregar etiquetas html en la estructura siempre y cuando utilices comillas simple `'`. Esta forma sirve para definir etiquetas `style`, `class` u otras que necesites 


```django
{% if product.classification != 1 %}
    {% capture stock %}

        "0": "<span style='color: red;'>Agotado</span>", 
    	"full": "En Stock"
	
    {% endcapture %}
    <div data-bs="product.stock" data-info='{ {{stock | replace: "'",'\"'}} }'>
    </div>
{% endif %}
```

### 6. Condicionar la configuración

También puedes condicionar el tipo de mensaje utilizando una validación `if`
 
```js
{% if product.classification != 1 %}
    {% capture stock %}

        "0": "Agotado", 
        {% if product.brand contains "huawei" %}
    	   "5": "Últimas unidades", 
    	   "full": "Producto en Stock",
        {% elsif product.brand contains "lg" %}
    	   "full": "quedan {cantidad} celulares",
    	{% else %}
    	   "10": "<strong>¡Sólo quedan {cantidad} productos!</strong>",
    	{% endif %}
	"unlimitedStock": "En stock"
    {% endcapture %}
    <div data-bs="product.stock" data-bs data-info='{ {{stock | replace: "'",'\"'}} }'></div>
{% endif %}
```

##### En el ejemplo:
1. Si el producto es Huawei dará este `json`
> ```js
> "0": "Agotado", 
> "5": "Últimas unidades", 
> "full": "Producto en Stock",
> "unlimitedStock": "En stock"
>```
* Si el producto tiene stock `0` mostrará **Agotado**
* Si quedan `5` o menos productos en stock  mostrará **Últimas unidades**
* Si quedan más de `5` productos en stock  mostrará **Producto en Stock**
* Si el producto no controla Stock mostrará **En Stock**

2. Si el producto es LG dará este `json`
> ```js
> "0": "Agotado", 
> "full": "quedan {cantidad} celulares",
> "unlimitedStock": "En stock"
> ```
* Si el producto tiene stock `0` mostrará **Agotado**
* Si hay `1` o más stock  mostrará **quedan {cantidad} celulares** donde `{cantidad}` es el número de productos que hay, por ejemplo si quedan `4` productos mostrará **quedan 4 celulares**, si quedan `20` mostrará **quedan 20 celulares**
* Si el producto no controla Stock mostrará **En Stock**

3. Si el producto no cumple no pertenece a ninguna de esas marcas dará este `json`
> ```js
> "0": "Agotado", 
> "unlimitedStock": "En stock"
> ```
* Si el producto tiene stock `0` mostrará **Agotado**
* Si el producto no controla Stock mostrará **En Stock**
* Si el producto tiene `1` o más en stock mostrará el mensaje por defecto **En Stock**

### 7. Detalle por sucursal

Es posible entregar un mensaje personalizado por sucursal para ello se utiliza el selector <br>`data-bs="product.stock.detail"`

| atributo | significado |
| ----- | ----------- |
| `0` | mensaje cuando el producto no tiene stock | 
| `full`<sup>1</sup> | mensaje cuando hay stock y/o el producto no controla stock | 
| `unlimitedStock`<sup>2</sup> | mensaje que se mostrará cuando el producto no controle stock, si no esta configurado mostrará mensaje de `full` | 
| `table`| `boolean: true` devuelve la estructura con forma de tabla<br>`boolean: false` devuelve la estructura con forma de div`| 
|`tableTitle`| `array` define títulos que tendrá la tabla, el formato es el siguiente: <br>["titulo1","titulo2"] | 
> * (1) Si no configuras el mensaje `full` se mostrará el mensaje por defecto **En Stock**
> * (2) Si no configuras el mensaje `unlimitedStock` el mensaje de `full`, si no está configurado (1) Se mostrará mensaje por defecto **En Stock**

#### Ejemplos

1. Con tabla

```django
{% if product.classification != 1 %}
    {% capture stock %}

        "0": "<span style='color: red;'>Agotado</span>", 
    	"full": "{cantidad}",
        "table": true,
        "tableTitle":["sucursal", "stock"]
	
    {% endcapture %}
    <div class="bs-table" data-bs="product.stock.detail" data-info='{ {{stock | replace: "'",'\"'}} }'>
    </div>
{% endif %}
```

> Resultado

> ```html
> <div class="bs-table" data-bs="product.stock.detail" data-info='...'>
>   <table>
>      <tr>
>         <th> sucursal</th>
>         <th> stock</th>
>     </tr>
>     <tr>
>        <td> Casa matriz </td>
>        <td> 5 </td>
>     </tr>
>     <tr>
>        <td> Capital </td>
>        <td> 15 </td>
>     </tr>
>   </table>
> </div>
>
> ```
> | sucursal | stock |
> | -------- | ----- |
> | Casa matriz | 5 |
> | Capital | 15 |

2. Con div, sin tabla

```django
{% if product.classification != 1 %}
    {% capture stock %}

        "0": "<span style='color: red;'>Agotado</span>", 
    	"full": "{cantidad}",
        "table": false
	
    {% endcapture %}
    <div class="bs-table" data-bs="product.stock.detail" data-info='{ {{stock | replace: "'",'\"'}} }'>
    </div>
{% endif %}
```

> Resultado
> 
> ```html
> <div class="bs-table" data-bs="product.stock.detail" data-info='...'>
>        <div> Casa matriz </div>
>        <div> 5 </div>
>        <div> Capital </div>
>        <div> 15 </div>
> </div>
>
> ```

### 8. Modal Detalle por Sucursal

```django

{% capture sucursal %}
   
  "0": "Agotado", 
  "5": "ultimas unidades",
  "50": "{cantidad}",
  "full": "50+",
  "unlimitedStock": "producto en Stock",
  "table": true,
  "tableTitle": ["Sucursal", "Stock" ]
   
{% endcapture %}

<!-- Button trigger modal -->
<div class="mt-2">
    <button type="button" class="btn btn-primary" 
            data-toggle="modal" 
            data-target="#modalStock">
        Stock por sucursal
    </button>
</div>

<!-- Modal -->
<div class="modal fade" id="modalStock" tabindex="-1"
     role="dialog" aria-labelledby="modalStockLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                   Stock por sucursal
                </h5>
                <button type="button" class="close"
                        data-dismiss="modal" aria-label="Close">
                </button>
            </div>
            <div class="modal-body">
                <div class="bs-table" 
                     data-bs="product.stock.detail"
                     data-info='{ {{sucursal}} }'>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" 
                        class="btn btn-primary" 
                        data-dismiss="modal">
                        Cerrar
                </button>
            </div>
        </div>
    </div>
</div>
```

### Css Básico tabla por sucursales

```css
/******************
        Sucursales 
*******************/
.bs-table{
    display:flex;
    flex-wrap:wrap;
}
.bs-table table{
    width: 100%;
    margin-bottom: 1rem;
}
.bs-table table td{
    vertical-align: top;
    border-top:1px solid;
}
.bs-table div {
    width:50%;
} 

```