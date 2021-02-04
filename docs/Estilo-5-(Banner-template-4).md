```django
{% assign breakpoint = "sm" %} <!-- puede ser sm, md, lg, xl --> 
 
 <!-- Banner -->
<section class="bs-banners row py-3">
    {% for slide in slider.slides %}
        <div class="
        {% case slider.slides.size %}
            {% when 8 %}
                {% assign fullImage = slide.imageUrl | image_url: 'S'  %}
                col-6 col-{{breakpoint}}-3
            {% when 7 %}
                {% if forloop.index > 3 %}
                    {% assign fullImage = slide.imageUrl | image_url: 'S'  %}
                    col-6 col-{{breakpoint}}-3
                {% elsif forloop.index > 1 %}
                    {% assign fullImage = slide.imageUrl | image_url: 'M'  %}
                    col-6 col-{{breakpoint}}-4
                {%else%}
                    {% assign fullImage = slide.imageUrl | image_url: 'M'  %}
                    col-12 col-{{breakpoint}}-4
                {% endif %}
            {% when 6 %}
                {% assign fullImage = slide.imageUrl | image_url: 'M'  %}
                col-6 col-{{breakpoint}}-4
            {% when 5 %}
                {% if forloop.index > 2 %}
                    {% assign fullImage = slide.imageUrl | image_url: 'M'  %}
                    col-6 col-{{breakpoint}}-4
                {% elsif forloop.index > 1 %} 
                    {% assign fullImage = slide.imageUrl | image_url: 'L'  %}
                    col-6 col-{{breakpoint}}-6 
                {%else%}
                    {% assign fullImage = slide.imageUrl | image_url: 'L'  %}
                    col-12 col-{{breakpoint}}-6 
                {% endif %}
            {% when 4 %}
                {% assign fullImage = slide.imageUrl | image_url: 'L'  %}
                col-6
            {% when 3 %}
                {% assign fullImage = slide.imageUrl | image_url: 'M'  %}
                {% if forloop.index <= 1%}
                    col-12 col-{{breakpoint}}-4
                {% else %}
                    col-6 col-{{breakpoint}}-4
                {% endif %}
            {% when 2 %}
                {% assign fullImage = slide.imageUrl | image_url: 'L'  %}
                col-6
            {% when 1 %}
                {% assign fullImage = slide.imageUrl | image_url: 'L'  %}
                col-12
            {% else %}
                {% assign fullImage = slide.imageUrl | image_url: 'S'  %}
                col-6 col-{{breakpoint}}-3
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
                <div class="bs-img-square">
                    <picture>
                        <img title="{{title}}" alt="{{title}}"
                             class="img-fluid lazy" 
                             src="{{ slide.imageUrl | image_url: 'T' }}" 
                             data-src="{{ slide.imageUrl | image_url: 'M' }}"
                             onerror="this.onerror=null;this.src='{{slide.imageUrl}}';">
                    </picture>
                </div>
            </a>
       </div>
   {% endfor %}
</section>
```
```css
/*Estilos CSS*/
.bs-banners a:hover img {
    opacity: 0.5;
    filter: alpha(opacity=80);
    filter: grayscale(80%);
}
```