Banners es un componente basado en el administrador de slider pero que no emplea un libreria de slider/carousel mostrando las imágenes como una grilla 

```django
<!-- version marzo 2020 -->
{% assign breakpoint = "sm" %} <!-- puede ser sm, md, lg, xl revisar https://getbootstrap.com/docs/4.3/layout/overview/ --> 
{% assign margenes = false %} <!--margen en imagenes -->
<section class="bs-banners row {%if margenes %}my-3{%else%}m-0{%endif%}">
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
        
        <a class="
            {% case slider.slides.size %}
            {% when 8 %}
                {% assign fullImage = slide.imageUrl | image_url: 'M'  %}
                col-6 col-{{breakpoint}}-3
            {% when 7 %}
                {% if forloop.index > 3 %}
                    {% assign fullImage = slide.imageUrl | image_url: 'M'  %}
                    col-6 col-{{breakpoint}}-3
                {% elsif forloop.index > 1 %}
                    {% assign fullImage = slide.imageUrl | image_url: 'L'  %}
                    col-6 col-{{breakpoint}}-4
                {%else%}
                    {% assign fullImage = slide.imageUrl | image_url: 'L'  %}
                    col-12 col-{{breakpoint}}-4
                {% endif %}
            {% when 6 %}
                {% assign fullImage = slide.imageUrl | image_url: 'L'  %}
                col-6 col-{{breakpoint}}-4
            {% when 5 %}
                {% if forloop.index > 2 %}
                    {% assign fullImage = slide.imageUrl | image_url: 'L'  %}
                    col-6 col-{{breakpoint}}-4
                {% elsif forloop.index > 1 %} 
                    {% assign fullImage = slide.imageUrl | image_url: 'X'  %}
                    col-6 col-{{breakpoint}}-6 
                {%else%}
                    {% assign fullImage = slide.imageUrl | image_url: 'X'  %}
                    col-12 col-{{breakpoint}}-6 
                {% endif %}
            {% when 4 %}
                {% assign fullImage = slide.imageUrl | image_url: 'X'  %}
                col-6
            {% when 3 %}
                {% assign fullImage = slide.imageUrl | image_url: 'L'  %}
                {% if forloop.index <= 1%}
                    col-12 col-{{breakpoint}}-4
                {% else %}
                    col-6 col-{{breakpoint}}-4
                {% endif %}
            {% when 2 %}
                {% assign fullImage = slide.imageUrl | image_url: 'X'  %}
                col-6
            {% when 1 %}
                {% assign fullImage = slide.imageUrl | image_url: 'X'  %}
                col-12
            {% else %}
                {% assign fullImage = slide.imageUrl | image_url: 'M'  %}
                col-6 col-{{breakpoint}}-3
        {% endcase %}
            {%if margenes %} p-3 {%else%} p-0 {%endif%}bs-banner-single" href="{{slide.itemUrl}}" title="{{title}}">
            
                
                <div class="bs-banner-content">
                
                    <!-- image:start -->
                    <div class="bs-banner-image">
                        <div class="bs-img-square cover">
                            <picture>
                                <source data-srcset="{{ fullImage }}" media="(max-width:800px)">
                                <source data-srcset="{{ slide.imageUrl | image_url: 'M' }} 1x,{{ slide.imageUrl | image_url: 'L' }} 2x " media="(max-width:400px)">
                                <source data-srcset="{{ slide.imageUrl | image_url: 'S' }} 1x,{{ slide.imageUrl | image_url: 'M' }} 2x" media="(max-width:240px)">
                                <img title="{{title}}" 
                                    alt="{{title}}" 
                                    class="lazy" 
                                    src="{{ slide.imageUrl | image_url: 'T' }}" 
                                    data-src="{{ fullImage }}">
                            </picture>
                        </div>
                    </div>
                    <!-- image:end -->
                  
                    <!-- banner text:start --> 
                    <div class="bs-banner-info">
                        <div class="bs-banner-title text-truncate">
    			   <strong>{{title}}</strong>
    			</div>
        	    </div>
                    <!-- banner text:end --> 
                </div><!-- bs-banner-content:end --> 
            </a>
   {% endfor %}
</section>
```
## utilización de componente

```django
{{'tag' | get_new_slider: 'nombre componente'}}
```