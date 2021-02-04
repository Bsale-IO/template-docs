```django
{% assign left = "fas fa-chevron-left" %} 
{% assign right = "fas fa-chevron-right" %}

<!-- configurar el slider -->
{% capture option_slider %}
    "lazyLoad": "ondemand",
    "infinite": true,
    "nextArrow": "<div class=\"slick-next\"><i class=\" {{right}}\"></i></div>",
    "prevArrow": "<div class=\"slick-next\"><i class=\" {{left}}\"></i></div>",
    "autoplay":  true,
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "responsive": [
        {
            "breakpoint": 996,
            "settings": {
                "slidesToShow": 3
            }
        },{
            "breakpoint": 768,
            "settings": {
                "slidesToShow": 2
            }
        },{
            "breakpoint": 576,
            "settings": {
                "nextArrow": false,
                "prevArrow": false,
                "slidesToShow": 1
            }
        },{
            "breakpoint": 384,
            "settings": {
                "slidesToShow": 1
            }
        }
    ]
{% endcapture %}

<div class="col-12"><h2 class="text-center text-uppercase my-5">Nuestro Catálogo</h2></div>

<!-- Banner -->
<section class="row">
    <div class="col-12">
        <div data-bs='slider' class="bs-horizontal-slider" data-info='{ {{option_slider }} }'>
            {% for slide in slider.slides %}
               {% if slide.description != "" %}
                    {% assign title = slide.description %}
                {% elsif slide.itemUrl != "" %}
                    {% assign title = slide.itemUrl | replace:canonical_url, "" | replace:"/collection/" ,"" | replace:"/product/" ,""  | replace:"/brand/" ,""  | replace:"-" ," " | replace:"/" ," " %}
                {% elsif slide.imageUrl.size > 0 %}
                    {% assign title = slide.imageUrl | slice: 45 , slide.imageUrl.size | replace: ".jpg","" | replace: ".png","" | replace: ".gif","" | replace: "_"," " | replace: "-", " " %}
                {% elsif slide.imageMobileUrl.size > 0 %}
                    {% assign title = slide.imageMobileUrl | slice: 45 , slide.imageMobileUrl.size | replace: ".jpg","" | replace: ".png","" | replace: ".gif","" | replace: "_"," " | replace: "-", " " %}
                {% endif %}
        
                <a title="{{title}}" href="{{slide.itemUrl}}">
                    <div class="mx-1">
                        <div class="bs-img-square vertical cover">
                            <picture>
                                <img title="{{title}}" 
                                    alt="{{title}}" 
                                    class="img-fluid lazy" 
                                    src="{{ slide.imageUrl | image_url: 'M' }}"
                                    data-src="{{ slide.imageUrl | image_url: 'M' }}"
                                    onerror="this.onerror=null;this.src='{{slide.imageUrl}}';">
                            </picture>
                           
        		    <!-- Botón Banner -->
        		    <button class="bs-slider-button">{{title}}</button>
                        </div>
                    </div>
                </a>
            {% endfor %}
        </div>
    </div>
</section>
```
```css
/*boton slider*/ 
.bs-slider-button {
    display: flex;
    background-color: rgba(255,255,255,0.95);
    color: #333333;
    justify-content: center;
    align-items: center;
    width: 60%;
    font-size: 16px;
    transition: all 0.4s;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
    border:0px;
    text-transform:uppercase;
}
```