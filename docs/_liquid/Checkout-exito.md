---
layout: collection
title: Checkout Éxito
published: true
---


Corresponde a la compra completada.

## Checkout:
Corresponde al detalle de la venta.

| variable | dato |
| -------- | ---- |
|`{{checkout.numberDocumentTax}}` | numero de documento tributario |
|`{{checkout.storePick}}`| tipo de retiro (en tienda o despacho)|
|`{{checkout.id}}`| ID checkout |
| **Comprador**| |
|`{{checkout.name}}`| Nombre Comprador |
|`{{checkout.lastName}}`| Apellido Comprador|
|`{{checkout.email}}`| Email Comprador  |
|`{{checkout.phone}}`| Teléfono Comprador|
|`{{checkout.clientCode}}`| número de documento de identidad |
|**Despacho** ||
|`{{checkout.shippingName}}`|Nombre tipo de Despacho|
|`{{checkout.country}}`| Pais |
|`{{checkout.state}}`| Estado / Region |
|`{{checkout.city}}`| Ciudad |
|`{{checkout.street}}`| Calle |
|`{{checkout.number}}`| Numero de la dirección |
|`{{checkout.cityZone}}`| Comuna / Distrito|
|`{{checkout.postcode}}` | Código postal | 
|`{{checkout.buildingNum}}`|Numero del edificio |
|`{{checkout.shippingComment}}`| Comentario o indicación del Cliente |
| **Retiro**| |
|`{{checkout.pickName}}`| nombre de la persona que retira|
|`{{checkout.pickCode}}`| rut de la persona que retira |
| **Medio de pago** ||
|`{{checkout.payId}}`|ID |
|`{{checkout.payType}}` | nombre |
|`{{checkout.createAt}}`| Fecha de Compra |
| `{{checkout.createAtZone}}`| `new` Fecha de Compra con zona horario del país | 
|`{{checkout.totalCart}}`| Total de Compra|
|`{{checkout.shippingCost}}`|Costo del Despacho|
|`{{checkout.total}}`| Valor total de compra carro + despacho |
|`{{total_discount}}`| Suma de todos los descuentos | 
| **Compra**| |
|`{{cart}}`| `object` [detalle de carro](#detalle-de-tarro) |

## Detalle de carro:
mantiene estructura de `cart_d`.

```js

{% for item in cart %}
     {{item.quantity}}
     {{item.value}}
     {{item.discount}}
     {{item.name}}
     {{item.subTotal}}
     {{item.id}}
     {{item.discountId}}
     {{item.image}}
     {{item.variantId}}
     {{item.sku}}
     {{item.link}}
     {{item.description}}
{% endfor %}

```

| variable | valor | 
| -------- | ----- |
|`{{item.quantity}}`|cantidad de unidades|
|`{{item.value}}`|precio unitario del producto|
|`{{item.discount}}`|descuento del producto|
|`{{item.name}}`|nombre del producto|
|`{{item.subTotal}}`|precio final (cantidad * precio unitario)|
|`{{item.id}}`|id del producto|
|`{{item.discountId}}`|id del descuento|
|`{{item.image}}`|imagen del producto|
|`{{item.variantId}}`|id de la variante del producto|
|`{{item.sku}}`|sku del producto|
|`{{item.link}}`|link del producto en el sitio|
|`{{item.description}}`|descripción del producto|




## Componentes

### Mejoras de la versión 2 

1. No evalúa los medios de pagos por ID por lo que permite tener más de un banco para pagar, evalúa que el banco tenga nombre para cargar su información 
2. Incorpora medio de pago Yape
> Para agregar **Yape** es necesario subir una imagen formato `PNG` con el nombre `QR_YAPE.png` en el menú Diseño > Archivos




### Checkout éxito
```django
{{ 'load checkout' | get_component }}
<!-- v2 --->
<div class="container">
    <div class="row">
        {% if checkout.numberDocumentTax > 0 %}
            <div class="col-12 my-2 text-right">
                Número de Documento: {{checkout.numberDocumentTax}}
            </div>
        {% endif %}
        <section class="col-md-6 col-lg-4">
            <div class="card mb-3">
                <h5 class="card-header">Tus Datos</h5>
                <ul class="list-group list-group-flush text-left">
                    <li class="list-group-item">
                        <strong>{{checkout.name}} {{checkout.lastName}}</strong>
                    </li>
                    {% if checkout.clientCode %}
                    <li class="list-group-item">
                        <span class="badge badge-pill badge-light">
                        {% case site.countryIso %}
                            {% when 'cl' %}Rut
                            {% else %}DNI
                        {% endcase %}
                        </span>
                            {{checkout.clientCode}}
                    </li>
                    {% endif %}
                    {% if checkout.phone %}
                    <li class="list-group-item">
                        <span class="badge badge-pill badge-light"><i class="fas fa-phone"></i></span>
                        {{checkout.phone}}
                    </li>
                    {% endif %}
                    <li class="list-group-item">
                        <span class="badge badge-pill badge-light"><i class="far fa-envelope"></i></span>
                        {{checkout.email}}
                    </li>
                </ul>
            </div>
        </section>
        <section class="col-md-6 col-lg-4">
            {%if checkout.storePick == 0%}
                <div class="card mb-3">
                    <h5 class="card-header">Despacho a Domicilio</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <span class="badge badge-pill badge-light">
                                <i class="fas fa-truck"></i>
                            </span> {{checkout.shippingName}}
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-auto pr-2">
                                    <span class="badge badge-pill badge-light">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </span>
                                </div>
                                <div class="col pl-0">
                                    {{checkout.street | capitalize }}
                                    {% if checkout.buildingNum %} Depto. {{checkout.buildingNum}} {%endif%}</br>
                                    {{checkout.cityZone | capitalize }}</br>
                                    {{checkout.state | capitalize }}{% if checkout.postcode.size > 0 %}, {{checkout.postcode}}{%endif%}
                                </div>
                            </div>
                        </li>
                    </ul>
                    {% if checkout.shippingComment.size > 0 %}
                        <div class="card-footer">
                            <i>"{{checkout.shippingComment | capitalize | strip }}"</i>
                        </div>
                    {% endif %}
                </div>
            {% else %}
                <div class="card mb-3">
                    <h5 class="card-header">Tienda de Retiro</h5>
                    <div class="card-body">
                        <h5 class="card-title">{{storeDeliveredInfo.name}}</h5>
                        <div class="row">
                            {% if storeDeliveredInfo.address != '' %}
                                <div class="col-auto pr-2">
                                    <span class="badge badge-pill badge-light">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </span>
                                </div>
                                <div class="col pl-0">
                                    {{storeDeliveredInfo.address}}</br>
                                    {% if storeDeliveredInfo.municipality %}
                                        {{storeDeliveredInfo.municipality}},
                                    {% endif %}
                                    {% if storeDeliveredInfo.city %}
                                        {{storeDeliveredInfo.city }},
                                    {% endif %}
                                    {% if storeDeliveredInfo.country %}
                                        {{storeDeliveredInfo.country}}
                                    {%endif%}
                                    <div class="mt-2">
                                        {% capture map %}{{storeDeliveredInfo.address}} {{storeDeliveredInfo.municipality}} {{storeDeliveredInfo.city }} {{storeDeliveredInfo.country}}{%endcapture%} 
                                        <a  class="d-print-none btn-sm btn-primary" 
                                            href="https://www.google.com/maps/place/{{map | url_encode}}"
                                            target="_blank">Ver Mapa</a>
                                    </div>
                                </div>
                            {% endif %}
                        </div>
                    </div>
                </div>
                {% if checkout.pickName != "" %}
                <div class="card mb-3">
                    <h5 class="card-header">Persona Autorizada para Retirar</h5>
                    <div class="card-body">
                        <strong class="text-capitalize">{{checkout.pickName}}</strong><br>
                        {% if checkout.pickCode != "" %}
                            <span class="badge badge-pill badge-light">
                            {% case site.countryIso %}
                                {% when "cl" %}Rut
                                {%else %}DNI
                            {% endcase %}
                            </span>
                            {{checkout.pickCode}}
                        {% endif %}
                    </div>
                </div>
                {% endif %}
            {% endif %}
        </section>
        <section class="col-md-12 col-lg-4">
            <div class="card mb-3">
                <h5 class="card-header">
                    Forma de Pago
                </h5>
                <!-- el metodo de pago tiene un atributo pay_bank_name imprime información del banco -->
                {% if checkout.pay.commonData.PAY_BANK_NAME %}
        
                <div class="card-body">
                    <h5 class="card-title">Tranferencia Bancaria </h5>
                    <p><small>
                        Para confimar la compra debes realizar una <ins>transferencia</ins> a la siguiente cuenta:</br>
                    </small></p>
                    <div class="row">
                        <div class="col-md-6 col-lg-12">
                            <div class="row">
                                <div class="col-3">
                                    <span class="badge badge-pill badge-light">Monto</span>
                                </div>
                                <div class="col-9">
                                   <strong> {{checkout.total | money_filter}}</strong>
                                </div>
                                <div class="col-3">
                                    <span class="badge badge-pill badge-light">Banco</span>
                                </div>
                                <div class="col-9">
                                    {{checkout.pay.commonData.PAY_BANK_NAME | capitalize}}
                                </div>
                                <div class="col-3">
                                    <span class="badge badge-pill badge-light">Tipo Cta.</span>
                                </div>
                                <div class="col-9">
                                    {{checkout.pay.commonData.PAY_BANK_TYPE | capitalize}}
                                </div>
                                <div class="col-3">
                                    <span class="badge badge-pill badge-light">N° Cta.</span>
                                </div>
                                <div class="col-9">
                                    {{checkout.pay.commonData.PAY_BANK_ACCOUNT}}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-12">
                            <div class="row">
                                <div class="col-3">
                                    <span class="badge badge-pill badge-light">Títular</span>
                                </div>
                                <div class="col-9">
                                    {{checkout.pay.commonData.ACCOUNT_NAME}}
                                </div>
                                <div class="col-3">
                                    <span class="badge badge-pill badge-light">
                                        {% case site.countryIso %}
                                            {% when 'cl'%}Rut
                                            {%else%}DNI
                                        {% endcase %}
                                    </span>
                                </div>
                                <div class="col-9">
                                    {{checkout.pay.commonData.PAY_BANK_RUT}}
                                </div>
                                <div class="col-3">
                                    <span class="badge badge-pill badge-light"><i class="far fa-envelope"></i></span>
                                </div>
                                <div class="col-9">
                                    {{checkout.pay.commonData.PAY_BANK_EMAIL}}
                                </div>
                            </div><!--row-->
                        </div><!-- col-md-6-->
                    </div><!-- row -->
                </div><!-- card-body -->
                {% if checkout.pay.commonData.PAY_DISCOUNT != '0' %}
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                           {{checkout.pay.commonData.PAY_DISCOUNT}}% de descuento con este medio de pago
                        </li>
                    </ul>
                {% endif %}
                <div class="card-footer d-print-none">
                    <small class="text-muted">
                        Una vez confirmado el pago habilitaremos tu compra para <strong>{%if checkout.storePick == 0%} Despacho{% else %} Retiro en tienda {%endif%}</strong> 
                    </small>
                    <div class="input-group mt-2 d-print-none">
                        <select id="irbanco" class="custom-select item">
                            <option value="#">Selecciona tu banco</option>
                            {% case site.countryIso %}
                                {% when 'cl' %}
                                    <!-- bancos de chile -->
                                    
                                    <option value="https://www.bice.cl">Banco BICE</option>
                                    <option value="https://www.bancochile.cl">Banco Chile</option>
                                    <option value="https://www.bancoconsorcio.cl">Banco Consorcio</option>
                                    <option value="https://www.bancocredichile.cl">Banco CrediChile</option>
                                    <option value="https://www.bancoedwards.cl">Banco Edwards Citi</option>
                                    <option value="https://www.bancoestado.cl">Banco Estado</option>
                                    <option value="https://www.bancofalabella.cl">Banco Falabella</option>
                                    <option value="https://www.bancointernacional.cl/">Banco Internacional</option>
                                    <option value="https://www.itau.cl">Banco Itaú</option>
                                    <option value="https://www.bancoripley.cl">Banco Ripley</option>
                                    <option value="https://www.santander.cl">Banco Santander</option>
                                    <option value="https://www.bancoedwards.cl">Banco Edwards Citi</option>
                                    <option value="https://www.bancosecurity.cl">Banco Security</option>
                                    <option value="https://www.bci.cl">Banco Bci</option>
                                    <option value="https://www.corpbanca.cl">CorpBanca</option>
                                    <option value="https://www.scotiabankchile.cl">Scotiabank</option>
                                    <option value="https://www.scotiabankchile.cl/Scotiabank-Azul/home">Scotiabank Azul (ex BBVA)</option>
                                {% when 'pe' %}
                                    <!-- bancos de perú -->
                                    <optgroup label="Bancos">
                                        <option value="https://www.agrobanco.com.pe/">Agrobanco</option>
                                        <option value="https://www.banbif.com.pe/Personas"> BanBif | Banco Interamericano de Finanzas</option>
                                        <option value="https://www.bancoazteca.com.pe/">Banco Azteca</option>
                                        <option value="https://www.bancomercio.com/elbanco">Banco de Comercio</option>
                                        <option value="https://www.bn.com.pe/">Banco de la Nación</option>
                                        <option value="https://www.bancofalabella.pe/home">Banco Falabella</option>
                                        <option value="https://www.bancognb.com.pe/">Banco GNB</option>
                                        <option value="https://www.bancoripley.com.pe/">Banco Ripley</option>
                                        <option value="https://www.bbvacontinental.pe/">BBVA Continental</option>
                                        <option value="https://www.viabcp.com/"> BCP | Banco credito de Perú</option>
                                        <option value="https://interbank.pe/">Interbank</option>
                                        <option value="https://www.mibanco.com.pe/">Mi Banco</option>
                                        <option value="https://www.crediscotia.com.pe/">Financiera Crediscotia</option>
                                        <option value="https://www.scotiabank.com.pe/Personas/Default">Scotiabank</option>
                                    </optgroup>
                                    <optgroup label="Cajas">
                                        <option value="https://www.cajaarequipa.pe/">Caja Arequipa</option>
                                        <option value="https://www.cajahuancayo.com.pe/">Caja Huancayo</option>
                                        <option value="https://www.cmacica.com.pe/">Caja Ica</option>
                                        <option value="https://www.cajapiura.pe/">Caja Piura</option>
                                        <option value="https://www.cajasullana.pe/">Caja Sullana</option>
                                        <option value="https://www.cajatrujillo.com.pe/">Caja Trujillo</option>
                                    </optgroup>
                            {% endcase %}
                        </select>
                        <div class="input-group-append">
                            <input  type="button" value="Ir a mi banco" class="btn btn-secondary"
                                    onclick="window.open( document.getElementById('irbanco').value ,'_blank');">
                        </div>
                        
                    </div><!-- input-group -->
                </div>
       <!-- si el tipo de pago es yape imprime imagen QR --> 
        {% elsif  checkout.pay.name == "Yape"%}
            <div class="row ">
                <div class="col-md-6 col-lg-12">  
                    <div class="card-body">
                        <img src="{{ 'QR_YAPE.png' | asset_url }}" 
                            class="img-fluid text-center" 
                            title="QR Yape" alt="QR Yape">
                    
                    </div>
                </div>
                <div class="col-md-6 col-lg-12">  
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <img src="{{checkout.pay.image }}" 
                                    class="img-fluid" 
                                    alt="{{checkout.pay.name}}" title="{{checkout.pay.name}}">
                        </li>
                        <li class="list-group-item">
                           <strong>{{checkout.total | money_filter}}</strong>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-footer">
                <ul class="text-muted pl-3">
                    <li>Abre tu <strong>Aplicación Yape</strong></li>
                    <li>Escanea este Código QR</li>
                    <li>Una vez confirmado el pago podemos habilitar tu compra para 
                    <strong>{%if checkout.storePick == 0%} Despacho
                        {% else %} Retiro en tienda {%endif%}</strong></li>
                </ul>
            </div>
        {% else %}
             <!-- no es ninguno de los sistemas de pagos anteriores imprime la imagen del medio de pago --> 
                
                {% if checkout.pay.image.size > 0 %}
                    <img src="{{checkout.pay.image }}" 
                    class="card-img-top" 
                    alt="{{checkout.pay.name}}" title="{{checkout.pay.name}}">
                {% else %}
                    <div class="card-body">
                        <h5>{{checkout.pay.name}}</h5>
                    </div>
                {% endif %}
                <ul class="list-group list-group-flush text-left">
                    <li class="list-group-item">
                        Monto pagado: <strong>{{checkout.total | money_filter}}</strong>
                    </li>
                    <li class="list-group-item">
                        <span class="badge badge-pill badge-light px-1">
                            <i class="far fa-calendar-check"></i>
                        </span> {{checkout.createAtZone |  date: "%d/%m/%y %H:%M"}}
                    </li>
                </ul>
                {% if checkout.pay.commonData.PAY_DISCOUNT != '0' %}
                    <div class="card-footer">
                        {{checkout.pay.commonData.PAY_DISCOUNT}}% de descuento con este medio de pago
                    </div>
                {% endif %}
            
        {% endif %}
        </div>
        </section>
    </div>
    <!--row-->
    <!----- detalle de compra --------------------------------------------->
    <div class="card">
        <h5 class="card-header">Detalle de tu Compra</h5>
        <div class="card-body position-relative">
            <!-- marca de agua-->
            <div style="position:absolute;top:0;bottom:0; right:0;left:0;margin:auto; opacity: .2;text-align:center;overflow:hidden">
                <img src="{{site.logo}}" style="transform: rotate(-45deg);">
            </div>
            <!-- marca de agua:fin -->
            {%for item in cart%}
                    <div class="row text-lg-right {% unless forloop.last %}mb-2{% endunless %}">
                        <!-- imagen --> 
                        <div class="col-2 col-md-1 pr-0">
                            <div class="bs-img-square">
                                <picture>
                                {% if item.image.size > 0 %}
                                    <img src="{{item.image }}">
                                {% endif %}
                                </picture>
                            </div>
                        </div>
                        <section class="col-10 col-md-11">
                            <div class="row">
                                <div class="col-12 col-lg-5 text-left">
                                    <strong>{{item.name}}</strong><br>
                                    <span class="badge badge-pill badge-light">sku: {{item.sku}}</span>
                                </div>
                            
                                <div class="col col-lg-2 text-lg-right">
                                    {{item.value | money_filter}} unidad
                                </div>
                                <div class="col col-lg-2 text-right">
                                    {{item.quantity | round}} cant.
                                </div>
                                <div class="col col-lg-3 text-right">
                                    {{item.subTotal| money_filter}}
                                </div>
                            </div>
                        </section>
                    </div>
                </li>
            {%endfor%}
        </div>
        <div class="card-footer">
            <div class="row text-right">
                <div class="col-6 col-md-9">
                    </strong>Sub Total</strong>
                </div>
                <div class="col-6 col-md-3">
                    {{checkout.totalCart | money_filter}}
                </div>
                {% if total_discount > 0 %}
               
                    <div class="col-6 col-md-9">
                          Descuentos totales
                    </div>
                    <div class="col-6 col-md-3">
                        {{total_discount | money_filter}}
                    </div>
              
                {% endif %}
                {%if checkout.shippingReceivable == 0%}
                    <div class="col-6 col-md-9">
                        Despacho
                    </div>
                    <div class="col-6 col-md-3">
                        {{checkout.shippingCost | money_filter}}
                    </div>
                {% endif %}
                <div class="col-6 col-md-9 h4">
                        Total
                </div>
                <div class="col-6 col-md-3 h4">
                        {{checkout.total | money_filter}}
                    </div>
            </div>
        </div>
    </div>
    <div class="text-right d-print-none my-3">
        <a href="{{url_home}}" class="btn btn-secondary">
            <i class="fas fa-store"></i> Volver a la tienda
        </a>
        <button class="btn btn-success" onclick="window.print(); return false;">
            <i class="fas fa-print"></i> Imprimir
        </button>
    </div>
</div>
```





