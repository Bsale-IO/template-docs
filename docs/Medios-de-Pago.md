## Variables

| código  |    descripción  |
| ---- | ----- |
|`{{pay_types}}`| `arreglo` trae todos los medios de pagos activos del sitio |
|`{{pay.image}}`| `url` imagen del medio de pago|
|`{{pay.name}}`| Nombre del medio de pago |

## templates 2019

Desde 2019 es posible obtener los logos de los medios de pago en sus versiones blanco, negro o color. Para ello sólo debes cambiar el valor de la variable `color` en el siguiente código siendo:

| valor | colores ||
| ------ | ------- | ----- |
| `"b"` | black | negro | 
| `"w"` | white | blanco|
| `"c"` | color | |

#### Estructura `liquid`
```django
      {% assign color = "c" %} <!-- puede ser: "b", "w" o "c" (b = black, w = white, c = color) -->
      {% for pay in pay_types %}
         {% if pay.image != null %}

            {% case color %}
               {%when "w" %}
                  {{ pay.image | replace: ".png","_w.png" }}
               {%when "b" %}
                  {{ pay.image | replace: ".png","_b.png"}}
               {%else%}
                  {{pay.image}}
             {%endcase%}

               {{pay.name}}

          {%endif%}
       {% endfor %}

```
#### Un ejemplo utilizando `bootstrap 4.3` basado en [template base beta](https://templatebasebeta.bsalemarket.com)

```django
   <section class="row justify-content-center">
      {% assign color = "c" %} <!-- puede ser: "b", "w" o "c" (b = black, w = white, c = color) -->
      {% for pay in pay_types %}
         {% if pay.image != null %}
            <picture class="col-6 col-md">
               <img class="img-fluid" 
                    src="{% case color %}
                            {%when "w" %}
                               {{ pay.image | replace: ".png","_w.png" }}
                            {%when "b" %}
                               {{ pay.image | replace: ".png","_b.png"}}
                            {%else%}
                               {{pay.image}}
                            {%endcase%}" 
                     title="{{pay.name}}" alt="{{pay.name}}">
             </picture>
          {%endif%}
        {% endfor %}
   </section>
```

## Configuraciones test de medios de pago
* [[Webpay test]]