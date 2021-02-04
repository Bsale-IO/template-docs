Cada vez que se agregue un producto al carro se desplegará un modal (popup) con la información del producto agregado, este modal es configurable simplemente generando un componente con el data selector `data-bs="modal.add"` y agregandolo a la plantilla del producto. 

> ### _Si no creas el componente `Modal > agregar carro`, siempre se levantará el modal por defecto que tiene la siguiente estructura._


### Estructura del Componente

Se debe crear un componente de nombre `Modal > agregar carro` con el siguiente código:
```django
<aside class="modal" id="modalAdd" data-bs="modal.add" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <div class="row">
                    <h5 class="col-12">Producto Agregado</h5>
                    {% if product.defaultImage %}
                        <div class="col-4">
                            <img class="img-fluid" src="{product.image}">
                        </div>
                    {%endif%}
                    <div class="col">
                        {product.name}
                        <h4>{product.price}</h4>
                        Cantidad: {product.quantity}
                    </div>
                </div>
            </div>

            <!-- botones del modal -->
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs="modal.hidden">
                   Seguir Comprando <!-- editar acá -->
                </button>
                <a href="/cart/display/" class="btn btn-primary">
                   Ver mi Carro <!-- editar acá -->
                </a>
            </div>

        </div>
    </div>
</aside>
```
### Configuración

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

### Personalizar Botones 

Puedes personalizar los 2 botones del modal editando el texto de estos 

```django

<!-- botones del modal -->
<div class="modal-footer">
   <button type="button" class="btn btn-secondary" data-bs="modal.hidden">
      Seguir Comprando<!-- editar acá-->
   </button>
   <a href="/cart/display/" class="btn btn-primary">
      Ver mi Carro <!-- editar acá-->
   </a>
</div>

```

## Utilización del componente

El componente debe ser llamado en el [[Componente Pie de Página]] después de la etiqueta `</footer>` con la siguiente estructura

```django
</footer>
{{ 'modal > agregar al carro' | get_component }}
```


