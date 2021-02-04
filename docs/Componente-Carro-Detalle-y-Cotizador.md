> Para variables ver [[Carro]]

## Funcionalidades 
El componente tiene configuraciones que le permite agregar o quitar funcionalidades

``` js
{% assign discount_format               = "star left"%}
{% assign terminos_y_condiciones        = true %}
{% assign modal_terminos_y_condiciones  = false %}
{% assign cotizador                     = true %}
```

| configuración | valores |
| ------------- | ------- |
| discount_format | formato del descuento | 
| terminos_y_condiciones | `true` muestra el checkbox para aceptar terminos y condiciones<br>`false` oculta checkbox | 
| assign modal_terminos_y_condiciones | `true` terminos y condiciones se mostrará como modal, popup<br>`false` terminos y condiciones se mostrará como acordeón |
| cotizador | `true` oculta botón para comprar y despliega como modal (popup) formulario <br>`false` muestra botón de comprar |

### Términos y Condiciones

Busca el componente `Carro > terminos y condiciones > texto` y edita el texto para definir tus Términos y Condiciones 

### Formulario Cotizador 

Al activar el carro como cotizador se ocultan todos los precios. 

1. Es necesario crear un formulario con el nombre `cotizar`
2. Agregar un **Campo Obligatorio** con el nombre `cotizar productos` de tipo `Area De Texto` y validación `Texto`

> **IMPORTANTE:** Si el formulario o campo tienen otro nombre el formulario no va a funcionar 


## Componente Completo 

Copia y pega este código para tener la ultima versión del carro en tu template (se necesita Bsale 4.0 o superior)

```django
{% assign discount_format               = "star left"%}
{% assign terminos_y_condiciones        = true %}
{% assign modal_terminos_y_condiciones  = false %}
{% assign cotizador                     = false %}

{% if items > 0 %}
    {% for item in cart_d %}
        <section data-bs="cart.item" data-info="{{ item.id }}" class="col-12 position-relative">
            <div class="row align-items-center">
                <div class="col-11 col-md-6">
                    <div class="row my-3">
                        <div class="col">
                            <div class="bs-img-square">
                                <!--descuento -->
                                <div class="bs-discount {{discount_format}}{% if item.discount == 0 %} d-none{% endif %}" data-bs="cart.item.discount">
                                    <strong data-bs="cart.item.discount.value">
                                        -{{ item.discount | floor }}%
                                    </strong>
                                </div>
                                <!-- end:descuento -->
                                <picture>
                                {% if item.image.size > 1 %}
                                    <img src="{{ item.image | image_url: 'S' }}" 
                                        alt="{{item.name}}"
                                        title="{{item.name}}">
                                {%else%}
                                    <img
                                    src="{{ site.logo | image_url: 'S' }}"
                                    data-lazy="{{ site.logo | image_url: 'S' }}"
                                    alt="{{ item.name }}"
                                    title="{{ item.name }}"
                                    >
                                {%endif%}
                                </picture>
                            </div>
                        </div>
                        <div class="col-8 col-md-9">
                            <a href="{{ item.link }}" title="{{ item.name }}">
                                <h3 class="h5 bs-trunc">{{ item.name }}</h3>
                            </a>
                            {% if cotizador == false %}
                            <strike class="{% if item.discount == 0 %}d-none{% endif %}" data-bs="cart.item.oldPrice">
                                {{ item.price | money_filter }}
                            </strike>
                            
                            <div  data-bs="cart.item.unitPrice">
                                {{ item.finalPrice | money_filter }}
                            </div>
                            {% endif %}
                            
                            <div data-bs="cart.stock.msg" class="d-none"></div>
                        </div>
                    </div><!--row-->
                </div>
                <!--------precio --------->
                <div class="col-12 col-md-6">
                    <div class="row align-items-center">
                        <!-- quantity -->
                        <div class="col-6">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <button class="btn btn-secondary" data-bs="cart.quantity.minus">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                </div>
                                <input class="form-control text-center" type="number" value="{{ item.quantity | round }}" data-bs="cart.quantity" min="1">
                                <div class="input-group-append ">
                                    <button class="btn btn-secondary" data-bs="cart.quantity.plus">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!---- quantity:end ------>
                        <div class="col-6 d-flex align-items-center justify-content-end">
                            {% if cotizador == false %}
                            <strong data-bs="cart.item.finalPrice" class="mr-3">
                                {{ item.subTotal | money_filter }}
                            </strong>
                            {% endif %}
                            <button data-bs="cart.remove" data-info="" class="btn btn-secondary">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </div><!-- precio -->
                <div class="col-1 order-2">
                    
                </div>
            </div>
        </section>
    {% endfor %}
    
    <div class="col-12" data-bs="cart.filled">
        <div class="row justify-content-between align-items-center text-center text-sm-right">
            {% unless cotizador %}
            <div class="col-12 text-right h3">
                    Subtotal: <span data-bs='cart.subtotal'> {{ subtotal | money_filter }}</span>
            </div>
            {% endunless %}
            
            {% if modal_terminos_y_condiciones %}
                <div class="modal fade" id="modalTerminosYCondiciones" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Terminos y Condiciones</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body text-left">
                                {{'Carro > terminos y condiciones > texto' | get_component }}
                            </div>
                        </div>
                    </div>
                </div>
            {% else %}
                <div class="collapse condition col-12 text-left {% unless terminos_y_condiciones %}d-none{%endunless%}">
                    {{'Carro > terminos y condiciones > texto' | get_component }}
                </div>
            {% endif %}
            <!-- check terminos y condiciones: start -->
            <div class="col-12 mb-2 text-right {% unless terminos_y_condiciones %}d-none{%endunless%}">
                <div class="custom-control custom-checkbox">
                    <input
                        id="bs-cart-checkout-check"
                        class="custom-control-input"
                        type="checkbox"
                        data-bs="cart.checkout.check"
                        {% unless terminos_y_condiciones %}checked{%endunless%}
                    >
                    <label class="custom-control-label" for="bs-cart-checkout-check">
                        Acepto 
                    </label>
                    <button class="btn btn-link p-0" 
                            title="ver terminos y condiciones"
                            {% if modal_terminos_y_condiciones %}
                                data-toggle="modal" data-target="#modalTerminosYCondiciones"
                            {% else %}
                                onclick="document.querySelector('.collapse.condition').classList.toggle('show')"
                            {%endif%}>
                            términos y condiciones
                    </button>
                </div>
            </div>
            <!-- check terminos y condiciones: end -->
            
            <div class="col-12 col-sm text-left">
                <button
                  class="btn btn-secondary"
                  title="Seguir Comprando"
                  data-bs="cart.keepbuying" 
                >
                  Seguir comprando
                </button>
            </div>
            <!-- botones --> 
            <div class="col-12 col-sm">
                {% if cotizador %}
                
                <!-- Button trigger modal -->
                <button type="button" data-bs="quote" class="btn btn-primary" data-toggle="modal" data-target="#modalCotizar">
                    Cotizar 
                </button>
                
                <!-- Modal -->
                <div class="modal fade text-left" id="modalCotizar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Cotización</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <!-- formulario -->
                                {{ "cotizar" | print_form: "Gracias por contáctarnos", "Cotizar", "", false }}
                            </div>
                        </div>
                    </div>
                </div>
                
                {% else %}
                <button
                    class="btn btn-primary"
                    title="Continuar"
                    data-bs="cart.checkout"
                >
                    Continuar <i class="fas fa-arrow-right"></i>
                </button>
                {% endif %}
                   
            </div>
        </div>
    </div>
{% endif %}
```

## Imprimir carro 

Para agregar un botón que te permita imprimir esta pantalla debes pegar el siguiente código

```html
<button onclick="window.print()" class="btn btn-light">
	Imprimir
</button>
```

### Botón con icono
Puedes utilizar la libreria [font awesome](https://fontawesome.com/icons?d=gallery&q=print) para agregar un icono.
```html
<button onclick="window.print()" class="btn btn-light">
	<i class="fas fa-print"></i> Imprimir
</button>
```
