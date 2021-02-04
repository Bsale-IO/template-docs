```django
{% assign left = 'fas fa-chevron-left'%}
{% assign right = 'fas fa-chevron-right'%}

{% capture option_slider %}
        "lazyLoad": "ondemand",
        "infinite": true,
        "nextArrow": "<div class=\"slick-next\"><i class=\" {{right}}\"></i></div>",
        "prevArrow": "<div class=\"slick-prev\"><i class=\" {{left}}\"></i></div>",
        "slidesToShow": 4,
        "slidesToScroll": 1,
        "responsive": [
            {
                "breakpoint": 768,
                "settings": {
                    "slidesToShow": 3
                }
            },{
                "breakpoint": 576,
                "settings": {
                    "slidesToShow": 2
                }
            },{
                "breakpoint": 384,
                "settings": {
                    "slidesToShow": 1
                }
            }
        ]
{% endcapture %}

<h3 class="text-center font-weight-bold mt-5 mb-2">NUESTROS PRODUCTOS</h3>
<hr class="bs-home-hr">

<!-- Banner -->
<section class="row">
    <div class="col-12">
        <div data-bs='slider' class="bs-horizontal-slider" data-info='{ {{ option_slider }} } '>
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
                
                <a href="{{slide.itemUrl}}" title="{{title}}">
                    <div class="mx-1">
                        <div class="bs-img-square">
                            <picture>
                                <img title="{{title}}" alt="{{title}}"
                                     class="img-fluid lazy" 
                                     src="{{ slide.imageUrl | image_url: 'M' }}" 
                                     data-src="{{ slide.imageUrl | image_url: 'M' }}"
                                     onerror="this.onerror=null;this.src='{{slide.imageUrl}}';">
                            </picture>
                        </div>
          
                        <div class="text-center">
                            {{title | upcase}}
                        </div>
                    </div>
                </a>
            {% endfor %}
        </div>
    </div>
</section>
```
```css
.bs-home-hr {
    background-color: #50B5E4;
    width: 10%;
    height: .4rem;
    margin-bottom:2rem;
}
```