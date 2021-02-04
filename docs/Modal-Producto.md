> **Para poder usar estas funciones debes tener Bsale.js 4.3.0**

En esta página se listan los modals (popup) que se despliegan en las interacciones con el producto. 

### Estos modales se deben cargar en el componente del producto

```css
   {{ "Modal > agregar carro"    | get component }}
   {{ "Modal > encargar producto"| get_component }}
``` 

## Modal Agregar al Carro, `Modal > agregar carro`

Cada vez que se agregue un producto al carro se desplegará un modal (popup) con la información del producto agregado, este modal es configurable simplemente generando un componente con el data selector `data-bs="modal.add"` y agregandolo a la plantilla del producto. 

_Si no creas el componente **Modal > agregar carro**, siempre se levantará el modal por defecto que tiene la siguiente estructura._

```django
<aside class="modal" id="modalAdd" data-bs="modal.add" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <div class="row">
                    <h5 class="col-12">Producto Agregado</h5>
                    <div class="col-4">
                        <img class="img-fluid" src="{product.image}">
                    </div>
                    <div class="col-8">
                        {product.name}
                        <h4>{product.price}</h4>
                        cantidad: {product.quantity}
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs="modal.hidden">Continuar Comprando</button>
                <a href="/cart/display/" class="btn btn-primary">Ver mi Carro</a>
            </div>
        </div>
    </div>
</aside>
```

Las variables dentro de este componente son dinámicas, por lo que sólo llevan una llave `{`,`}` de esta forma 
```
{variable}
```

| variable | valor | 
| -------- | ------ | 
|`{product.image}`| imagen del producto, imagen por defecto. no funciona dentro de la colección | 
| `{product.name}` | nombre del producto (producto + variante)| 
|`{product.sku}`| sku de la variante agregada | 
|`{product.quantity}`| cantidad agregada | 


## Modal Encargar `Modal > encargar producto`

En Bsale es posible encargar una variante sin stock, para ello:

1. Crear componente **Modal > encargar producto**
```django
<aside class="modal" id="modalOrder" data-bs="modal.order" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <h5>Encargar producto</h5>
                {{ "Encargar" | print_form: "Gracias por contactarnos", "Encargar", "", "false" }}
            </div>
        </div>
    </div>
</aside>
```
2. Se debe crear un [[formulario| Formularios]] de nombre `Encargar`.
3. Se deben agregar los siguientes campos

| campo           | tipo  |
| --------------- | ----- |
| nombre_producto | campo |
| sku_producto    | campo |
| enlace_producto | campo |
| nombre          | campo |
| e-mail          | campo |
| mensaje         | area  |

4. Insertar el componente **Modal > encargar producto** dentro del componente **Producto**

``` css 
{{ 'Modal > encargar producto' | get_component }}
``` 
