| variable | valor | 
| -------- | ----- |
| `{{brand_list}}`|`object` lista de marcas en el ecommerce <sup>1</sup> |
| `{{brand.br_count}}` | `number` cantidad de marcas | 
| `{{brand.br_url_logo}}`| `string`  url logo de la marca | 
| `{{brand.link}}`| `string` url colección de la marca | 
| `{{brand.br_name}}` | `string` nombre de la marca | 

> 1. para qué una marca aparezca en la lista necesita que exista al menos un producto de dicha marca en el ecommerce 

# Componente 
## template nuevos

**Usa [Slick Slider ](https://kenwheeler.github.io/slick/#settings)**

```django
{% if brand_list.size > 0 %}
     <!--
    icono flecha izquierda (left)  -> https://fontawesome.com/icons?d=gallery&q=left&m=free
    icono flecha derecha   (right) -> https://fontawesome.com/icons?d=gallery&q=right&m=free
    -->
    {% assign left = "chevron-left" %} 
    {% assign right = "chevron-right" %}
    
    <!-- configurar el slider -------------------------------------------------------------------->
    {% capture option_slider %}
        "lazyLoad": "ondemand",
        "nextArrow": "<div class=\"slick-next\"><i class=\"fas {{right}}\"></i></div>",
        "prevArrow": "<div class=\"slick-prev\"><i class=\"fas {{left}}\"></i></div>",
        "infinite": true,
        "slidesToShow": 10,
        "slidesToScroll": 1,
        "responsive": [
            {
                "breakpoint": 996,
                "settings": {
                    "slidesToShow": 8
                }
            }, {
                "breakpoint": 768,
                "settings": {
                    "slidesToShow": 6
                }
            },{
                "breakpoint": 576,
                "settings": {
                    "slidesToShow": 4
                }
            },{
                "breakpoint": 384,
                "settings": {
                    "slidesToShow": 2
                }
            }
        ]
    {% endcapture %}
    
    <!-- carga slider ---------------------------------------------------------------------------->
    <section class="row">
        <div class="col-12">
            <h2>Mis marcas</h2>
            <div data-bs='slider' data-info='{ {{option_slider | strip_newlines}} }' 
                 class="bs-horizontal-slider slider-left">
                {% for brand in brand_list%}
                    {% if brand.br_count > 0 %}
                        {% if brand.br_url_logo %}
                        <div class="px-2">
                            <a class="item" href="{{brand.link}}" title="{{brand.br_name}}">
                                <div class="bs-img-square">
                                    <picture>
                                        <img 
                                            src="{{ brand.br_url_logo | image_url: "T" }}"
                                            data-lazy="{{ brand.br_url_logo | image_url: "M" }}"
                                            alt="{{brand.br_name}}" title="{{brand.br_name}}">
                                    </picture>
                                </div>
                            </a>
                        </div>
                        {% endif %}
                    {% endif %}
                {%endfor%}
            </div>
        </div>
    </section>
{% endif %} 
```


## template antiguos
usa owl carousel 2.3.4
```django
<div class=" owl-carousel home-brand">
   {% for brand in brand_list%}
      {% if brand.br_count > 0 %}
         {% if brand.br_url_logo %}
            <a class="item" href="{{brand.link}}" title="{{brand.br_name}}">
               
                  <img class="owl-lazy" 
                       data-src="{{ brand.br_url_logo | image_url: "T" }}" 
                       alt="{{brand.br_name}}">
               
            </a>
         {% endif %}
      {% endif %}
   {%endfor%}
</div>

<script>
$(document).ready(function(){
   $('.owl-carousel.home-brand').owlCarousel({
      navText: ["<i class='fa fa-chevron-left' aria-hidden='true'></i>",
                "<i class='fa fa-chevron-right' aria-hidden='true'></i>"],
      dots : false,
      lazyLoad: true,
      loop : true,
      margin : 10,
      responsiveClass : true,
      pagination: true,
      nav : true,
      autoplay: true,
      responsive : {
                     0 : {
                           items : 4,
                           nav : false
                         },
                   768 : {
                           items : 6,
                         },
                   992 : {
                           items : 8,
                         }
                    }
    });
});
</script>
```

# Método de llamado

Llamar con `get_brands` de esta forma

```js
{{'nombre componente' | get_brands }}
```