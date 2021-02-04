```django
<!-- Banner -->
<section class="bs-banners row py-3">
    {% for slide in slider.slides %}
       <div class="
        {% case slider.slides.size %} 
            {% when 6 %}
                col-12 col-sm-6 col-lg-4
            {% when 5 %}
                {% if forloop.first %}
                    col-12 col-md
                {% else if forloop.index == 2  %}
                    col-6 col-md
                {%else%}
                    col-6 col-md-4
                {% endif %}
            {% when 3 %}
                {% if forloop.first %}
                    col-12 col-md-4
                {% else %}
                    col col-md-4
                {% endif %}
            {% when 4 %}
                col-6
            {% when 2 %}
                col-6
            {% else %}
                {% if slider.slides.size > 6 %}
                    col-6 col-md-3
                {% else %}
                    col-12
                {% endif %}
            {% endcase %}
            py-3"   
            >
            
            <!-- title:start -->
            {% if slide.description != "" %}
                {% assign title = slide.description %}
            {% elsif slide.itemUrl != "" %}
                {% assign title = slide.itemUrl | replace:canonical_url, "" | replace:"/collection/" ,"" | replace:"/product/" ,""  | replace:"/brand/" ,""  | replace:"-" ," " | replace:"/" ," " %}
            {% elsif slide.imageUrl.size > 0 %}
                {% assign title = slide.imageUrl | slice: 45 , slide.imageUrl.size | replace: ".jpg","" | replace: ".png","" | replace: ".gif","" | replace: "_"," " | replace: "-", " " %}
            {% elsif slide.imageMobileUrl.size > 0 %}
                {% assign title = slide.imageMobileUrl | slice: 45 , slide.imageMobileUrl.size | replace: ".jpg","" | replace: ".png","" | replace: ".gif","" | replace: "_"," " | replace: "-", " " %}
            {% endif %}
            <!-- title:end-->
            
            <a href="{{slide.itemUrl}}" title="{{title}}">
                <div class="bs-img-square cover">
                    <picture>
                        <img title="{{title}}" 
                            alt="{{title}}" 
                            class="img-fluid lazy" 
                            src="{{ slide.imageUrl | image_url: 'T' }}" 
                            data-src="{{ slide.imageUrl | image_url: 'S' }}"
                            onerror="this.onerror=null;this.src='{{slide.imageUrl}}';"
                        >
                        <div class="bs-banner-title">
    			     {{title | replace:" ","</br>"}}
    			</div>
                    </picture>
                </div>
            </a>
       </div>
   {% endfor %}
</section>
```
```css
.bs-banners .bs-img-square {
    position:relative;
    display:block;
    border: 1px solid #ccc;
}

.bs-banners .bs-banner-title {
    color:white;
    font-weight:bold;
    font-size:2rem;
    text-transform:uppercase;
    padding:1rem;
    line-height:2.5rem;
    text-shadow: 0px 0px 10px #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/*Efecto hover banner*/
.bs-banners img {
    transition: all .5s ease-in-out;
    -webkit-transition: all .5s ease-in-out;
}

.bs-banners img:hover {
    transform:scale(1.2);
}
```