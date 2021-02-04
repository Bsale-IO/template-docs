| variable | valor |
| -------- | ----- |
| `assign discount_format` | tipo de descuento |
| `assign pixel_white` | imagen 1px base64 | 
| `capture option_slider` | según [slick slider](https://kenwheeler.github.io/slick/#settings) formato json | 
| `assign slidesToShow` | cantidad de imagenes para mostrar en thumbnails |
| `capture option_slider_thumbnail` | según [slick slider](https://kenwheeler.github.io/slick/#settings), es importante definir:<br> `"slidesToShow" : {{slidesToShow}}` para que funcione, formato json

## Slider Básico

```django
{% capture option_slider %}
    "lazyLoad": "ondemand",
    "arrows": true,
    "nav":true,
    "fade": true,
    "pauseOnFocus": true
{% endcapture %}

<div id="bs-product-slider" data-bs="slider" data-info='{ {{option_slider | strip_newlines }} }'>
...
</div>
```

## Slider con thumbnails

```django
{% capture option_slider %}
    "lazyLoad": "ondemand",
    "asNavFor": "#bs-product-thumbnail",
    "arrows": false,
    "nav":true,
    "fade": true,
    "draggable": false,
    "pauseOnFocus": true
{% endcapture %}

{% assign slidesToShow = 3 %}
{% capture option_slider_thumbnail %}
    "lazyLoad"      : "ondemand",
    "asNavFor"      : "#bs-product-slider",
    "centerMode"    : true,
    "focusOnSelect" : true, 
    "slidesToScroll": 1,
    "nextArrow"     : "<div class=\"slick-next\"><i class=\"fas fa-arrow-circle-right\"></i></div>",
    "prevArrow"     : "<div class=\"slick-prev\"><i class=\"fas fa-arrow-circle-left\"></i></div>",
    "slidesToShow"  : {{slidesToShow}}
{% endcapture %}

<div id="bs-product-slider" data-bs="slider" data-info='{ {{option_slider | strip_newlines }} }'>
...
</div>

<div id="#bs-product-thumbnail" data-bs="slider" data-info='{ {{option_slider_thumbnail | strip_newlines }} }'>
...
</div>
```


## Componente vertical thumbnails
```django
{% assign discount_format = "star left"%}
{% assign pixel_white = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' %}
{% capture option_slider %}
    "lazyLoad": "ondemand",
    "asNavFor": "#bs-product-thumbnail",
    "arrows": false,
    "nav":true,
    "fade": true,
    "draggable": false,
    "pauseOnFocus": true,
    "responsive": [
        {
            "breakpoint": 768,
            "settings": {
                "nextArrow": "<div class=\"slick-next\"><i class=\"fas fa-arrow-circle-right\"></i></div>",
                "prevArrow": "<div class=\"slick-prev\"><i class=\"fas fa-arrow-circle-left\"></i></div>",
                "dots": false,
                "vertical": false,
                "draggable": false
            }
        }
    ]
    
{% endcapture %}
{% assign slidesToShow = 3 %} <!-- thumbnails a mostrar -->
{% capture option_slider_thumbnail %}
    "lazyLoad"      : "ondemand", "asNavFor": "#bs-product-slider", "centerMode": true,"focusOnSelect": true, "vertical": true, "slidesToScroll": 1,
    "nextArrow"     : "<div class=\"slick-next\"><i class=\"fas fa-arrow-circle-right\"></i></div>",
    "prevArrow"     : "<div class=\"slick-prev\"><i class=\"fas fa-arrow-circle-left\"></i></div>",
    "slidesToShow"  : {{slidesToShow}},
    "responsive"    : [{
            "breakpoint": 768,
            "settings": {
                "nextArrow" : "<div class=\"slick-next\"><i class=\"fas fa-arrow-circle-right\"></i></div>",
                "prevArrow" : "<div class=\"slick-prev\"><i class=\"fas fa-arrow-circle-left\"></i></div>",
                "dots"      : false,
                "vertical"  : false,
                "draggable" : false
            }
        }]
{% endcapture %}
{% if slidesToShow >= product.images.size %}
<style>
    #bs-product-thumbnail .slick-track{
        /*no permite desplazamiento de las imagenes en thumbnails si las imagenes son menores o iguales a las imagenes del slide*/
        transform: none !important;
    }
</style>
{%endif%}

<!----------------------------------------------------------------------------------------------------->
<div class="row  justify-content-center">
    {% if product.images.size > 0 %}
        <section class="col-md-10 relative order-md-2">
            <!-- discount -->
        <div data-bs="product.discount" class="bs-discount {{discount_format}}">
            <strong data-bs="product.discount.value">
                -{{ product.discountRate | floor }}%
            </strong>
        </div>
            <!-- slider --> 
            <div id="bs-product-slider" data-bs="slider" data-info='{ {{option_slider | strip_newlines }} }'>
                {% for image in product.images %}
                    {%if product.defaultImage == image.href %}
                        <div class="item" data-info="{{image.legendImage}}">
                            <div class="bs-img-square zoom" data-bs="zoom">
                                <picture>
                                    <img
                                        src="{{ image.href | image_url: 'M' }}"
                                        data-lazy="{{ image.href | image_url: 'X' }}"
                                        alt="{{ product.title }}{{forloop.index}}"
                                        title="{{ product.title }}{{forloop.index}}">
                                </picture>
                            </div>
                        </div>
                        {% break %}
                    {% endif%}
                {%endfor%}
                {% for image in product.images %}
                    {%if product.defaultImage != image.href %}
                        <div class="item" data-info="{{image.legendImage}}">
                            <div class="bs-img-square" data-bs="zoom">
                                <picture>
                                    <img class="lazy"
                                        src="{{pixel_white}}"
                                        data-lazy="{{ image.href | image_url: 'X' }}"
                                        alt="{{ product.title }}{{forloop.index}}"
                                        title="{{ product.title }}{{forloop.index}}">
                                </picture>
                            </div>
                        </div>
                    {% endif%}
                {%endfor%}
            </div><!-- #bs-product-slider -->
        </section>
        <nav class="nav-product col-md-2 d-md-block order-md-1 my-1">
            <div id="bs-product-thumbnail" data-bs="slider" data-info='{ {{option_slider_thumbnail | strip_newlines }} }'>   
                {% for image in product.images %}
                    {%if product.defaultImage == image.href %}
                        <div class="item">
                            <div class="bs-img-square">
                                <picture>
                                    <img
                                        src="{{pixel_white}}"
                                        data-lazy="{{ image.href | image_url: 'X' }}"
                                        alt="{{ product.title }} {{forloop.index0}}"
                                        title="{{ product.title }} {{forloop.index0}}"
                                        >
                                </picture>
                            </div>
                        </div>
                    {% endif %}
                {%endfor%}
                {% for image in product.images %}
                    {%if product.defaultImage != image.href %}
                        <div class="item">
                            <div class="bs-img-square">
                                <picture>
                                    <img
                                        src="{{pixel_white}}"
                                        data-lazy="{{ image.href | image_url: 'X' }}"
                                        alt="{{ product.title }} {{forloop.index}}"
                                        title="{{ product.title }} {{forloop.index}}"
                                        >
                                </picture>
                            </div>
                        </div>
                    {% endif %}
                {%endfor%}
            </div>
        </nav>
    {% else %}
        <section class="col-12 relative">
            <!-- discount -->
            <div data-bs="product.discount" class="bs-discount {{discount_format}}">
                <strong data-bs="product.discount.value">
                    -{{ product.discountRate | floor }}%
                </strong>
            </div>
            <div class="bs-img-square">
                <picture>
                    <img class="lazy"
                        src="{{pixel_white}}"
                        data-src="{{ site.logo | image_url:'X' }}"
                        alt="{{ product.title }}"
                        title="{{ product.title }}"
                        >
                </picture>
            </div>
        </section>
    {%endif%}
</div><!-- row -->
```

## Componente horizontal thumbnails
```django
{% assign discount_format = "star left"%}
{% assign pixel_white = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' %}
{% capture option_slider %}
    "lazyLoad": "ondemand",
    "asNavFor": "#bs-product-thumbnail",
    "arrows": false,
    "nav":true,
    "fade": true,
    "draggable": false,
    "pauseOnFocus": true,
    "responsive": [
        {
            "breakpoint": 768,
            "settings": {
                "nextArrow": "<div class=\"slick-next\"><i class=\"fas fa-arrow-circle-right\"></i></div>",
                "prevArrow": "<div class=\"slick-prev\"><i class=\"fas fa-arrow-circle-left\"></i></div>",
                "dots": false,
                "vertical": false,
                "draggable": false
            }
        }
    ]  
{% endcapture %}
{% assign slidesToShow = 3 %} <!-- thumbnails a mostrar -->
{% capture option_slider_thumbnail %}
    "lazyLoad"      : "ondemand", "asNavFor": "#bs-product-slider", "centerMode": true,"focusOnSelect": true, "slidesToScroll": 1,
    "nextArrow"     : "<div class=\"slick-next\"><i class=\"fas fa-arrow-circle-right\"></i></div>",
    "prevArrow"     : "<div class=\"slick-prev\"><i class=\"fas fa-arrow-circle-left\"></i></div>",
    "slidesToShow"  : {{slidesToShow}},
    "responsive"    : [{
            "breakpoint": 768,
            "settings": {
                "nextArrow" : "<div class=\"slick-next\"><i class=\"fas fa-arrow-circle-right\"></i></div>",
                "prevArrow" : "<div class=\"slick-prev\"><i class=\"fas fa-arrow-circle-left\"></i></div>",
                "dots"      : false,
                "vertical"  : false,
                "draggable" : false
            }
        }]
{% endcapture %}
{% if slidesToShow >= product.images.size %}
<style>
    #bs-product-thumbnail .slick-track{
        /*no permite desplazamiento de las imagenes en thumbnails si las imagenes son menores o iguales a las imagenes del slide*/
        transform: none !important;
    }
</style>
{%endif%}

<!----------------------------------------------------------------------------------------------------->
<div class="row  justify-content-center">
    {% if product.images.size > 0 %}
        <section class="col-md-12 relative order-md-2">
            <!-- discount -->
        <div data-bs="product.discount" class="bs-discount {{discount_format}}">
            <strong data-bs="product.discount.value">
                -{{ product.discountRate | floor }}%
            </strong>
        </div>
            <!-- slider --> 
            <div id="bs-product-slider" data-bs="slider" data-info='{ {{option_slider | strip_newlines }} }'>
                {% for image in product.images %}
                    {%if product.defaultImage == image.href %}
                        <div class="item" data-info="{{image.legendImage}}">
                            <div class="bs-img-square zoom" data-bs="zoom">
                                <picture>
                                    <img
                                        src="{{ image.href | image_url: 'M' }}"
                                        data-lazy="{{ image.href | image_url: 'X' }}"
                                        alt="{{ product.title }}{{forloop.index}}"
                                        title="{{ product.title }}{{forloop.index}}">
                                </picture>
                            </div>
                        </div>
                        {% break %}
                    {% endif%}
                {%endfor%}
                {% for image in product.images %}
                    {%if product.defaultImage != image.href %}
                        <div class="item" data-info="{{image.legendImage}}">
                            <div class="bs-img-square" data-bs="zoom">
                                <picture>
                                    <img class="lazy"
                                        src="{{pixel_white}}"
                                        data-lazy="{{ image.href | image_url: 'X' }}"
                                        alt="{{ product.title }}{{forloop.index}}"
                                        title="{{ product.title }}{{forloop.index}}">
                                </picture>
                            </div>
                        </div>
                    {% endif%}
                {%endfor%}
            </div><!-- #bs-product-slider -->
        </section>
        <nav class="nav-product col-md-12 d-md-block order-md-1 my-1">
            <div id="bs-product-thumbnail" data-bs="slider" data-info='{ {{option_slider_thumbnail | strip_newlines }} }'>   
                {% for image in product.images %}
                    {%if product.defaultImage == image.href %}
                        <div class="item">
                            <div class="bs-img-square">
                                <picture>
                                    <img
                                        src="{{pixel_white}}"
                                        data-lazy="{{ image.href | image_url: 'X' }}"
                                        alt="{{ product.title }} {{forloop.index0}}"
                                        title="{{ product.title }} {{forloop.index0}}"
                                        >
                                </picture>
                            </div>
                        </div>
                    {% endif %}
                {%endfor%}
                {% for image in product.images %}
                    {%if product.defaultImage != image.href %}
                        <div class="item">
                            <div class="bs-img-square">
                                <picture>
                                    <img
                                        src="{{pixel_white}}"
                                        data-lazy="{{ image.href | image_url: 'X' }}"
                                        alt="{{ product.title }} {{forloop.index}}"
                                        title="{{ product.title }} {{forloop.index}}"
                                        >
                                </picture>
                            </div>
                        </div>
                    {% endif %}
                {%endfor%}
            </div>
        </nav>
    {% else %}
        <section class="col-12 relative">
            <!-- discount -->
            <div data-bs="product.discount" class="bs-discount {{discount_format}}">
                <strong data-bs="product.discount.value">
                    -{{ product.discountRate | floor }}%
                </strong>
            </div>
            <div class="bs-img-square">
                <picture>
                    <img class="lazy"
                        src="{{pixel_white}}"
                        data-src="{{ site.logo | image_url:'X' }}"
                        alt="{{ product.title }}"
                        title="{{ product.title }}"
                        >
                </picture>
            </div>
        </section>
    {%endif%}
</div><!-- row -->
```