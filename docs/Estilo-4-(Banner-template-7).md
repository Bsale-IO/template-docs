```django
{% assign breakpoint = "sm" %} <!-- puede ser sm, md, lg, xl --> 

<div class="col-12"> 
    <h2 class="my-3">COLECCIONES</h2>
</div>

<!-- Banner -->
<section class="row py-3">
    {% for slide in slider.slides %}
        <div class="
        {% case slider.slides.size %}
            {% when 8 %}
                col-6 col-{{breakpoint}}-3
            {% when 7 %}
                {% if forloop.index > 3 %}
                    col-6 col-{{breakpoint}}-3
                {% elsif forloop.index > 1 %}
                    col-6 col-{{breakpoint}}-4
                {%else%}
                    col-12 col-{{breakpoint}}-4
                {% endif %}
            {% when 6 %}
                col-6 col-{{breakpoint}}-4
            {% when 5 %}
                {% if forloop.index > 2 %} col-6 col-{{breakpoint}}-4
                {% elsif forloop.index > 1 %} 
                col-6 col-{{breakpoint}}-6 
                {%else%} 
                col-12 col-{{breakpoint}}-6 
                {% endif %}
            {% when 4 %}
                col-6
            {% when 3 %}
                {% if forloop.index <= 1%} col-12 col-{{breakpoint}}-4 {% else %} col-6 col-{{breakpoint}}-4 {% endif %}
            {% when 2 %}
                col-6
            {% else %}
                {% if slider.slides.size > 8 %} col-6 col-{{breakpoint}}-3 {% else %}col-12{% endif %}
        {% endcase %}
            py-3">
            
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
                <div class="bs-img-square cover">
                    <picture>
                        <img title="{{title}}" alt="{{title}}"
                             class="img-fluid lazy" 
                             src="{{ slide.imageUrl | image_url: 'T' }}" 
                             data-src="{{ slide.imageUrl | image_url: 'M' }}"
                             onerror="this.onerror=null;this.src='{{slide.imageUrl}}';">
                             
                              <div class="overlay d-flex justify-content-center align-items-center">
                                {%if slide.itemUrl.size > 0 %}
                                    {{ title | capitalize }}
                                {%endif%}
                            </div>
                    </picture>
                </div>
            </a>
       </div>
   {% endfor %}
</section>
```
```css
/*Estilos CSS*/
.overlay {
    position: absolute; 
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: #fff; 
    transition: .5s ease;
    opacity:0;
    font-size: 2rem;
    padding: 1.25rem;
    text-align: center;
    font-weight:bold;
}

.overlay:hover {
    opacity: 1;
}

@media screen and (max-width:1200px) {
    .overlay {
        bottom: 0; 
        width: 100%;
        height:20%;
        opacity:1;
        color: white;
        font-size: 1rem;
    }
}
```