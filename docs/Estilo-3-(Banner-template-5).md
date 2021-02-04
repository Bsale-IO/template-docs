```django
<!-- version marzo 2020 -->
{% assign breakpoint = "lg" %} <!-- puede ser sm, md, lg, xl revisar https://getbootstrap.com/docs/4.3/layout/overview/ --> 
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
                    col-12 col-lg-6
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
        
            {%if margenes %} p-3 {%else%} p-0 {%endif%} bs-banner-single" href="{{slide.itemUrl}}" title="{{title}}">
            
            <div class="d-flex bs-banner-order">
                <!-- image:start -->
                <div class="col-6 p-0">
                    <div class="bs-img-square cover">
                        <picture>
                            <img title="{{title}}" alt="{{title}}"
                                 class="img-fluid lazy" 
                                 src="{{ slide.imageUrl | image_url: 'T' }}" 
                                 data-src="{{ slide.imageUrl | image_url: 'S' }}"
                                 onerror="this.onerror=null;this.src='{{slide.imageUrl}}';">
                        </picture>
                    </div>
                </div>

                <div class="bs-banner-info col-6 p-0">
                    <div class="bs-banner-title text-truncate">
            	        <p>{{title}}</p>
            	    </div>
        	</div>
            </div>
        </a>
   {% endfor %}
</section>
```
```css
/* Estilos CSS */
a, a:hover {
        color:inherit
    }
    
    .bs-banners .bs-banner-info {
        background:#e8e8e8;
        height:auto;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    
    .bs-banners * {
        text-transform:uppercase;
    }
    
    .bs-banners .bs-banner-title {
        position:relative;
        text-align:center;
        width:90%;
        height:90%;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:2rem;
    }
    
    .bs-banners .bs-banner-title:after,
    .bs-banners .bs-banner-title:before {
        transition: all 1s ease;
        position: absolute;
    	content: " ";
    	top: 0;
    	bottom: 0;
    	left: 0;
    	right: 0;
    	opacity:0;
    }
    
    /* > hover titulo */
    .bs-banners a:hover .bs-banner-title:after,
    .bs-banners a:hover .bs-banner-title:before {
        transition:all 1s ease;
        opacity:1;
    }
    
    .bs-banners a:hover .bs-banner-title:before {
        border-left: #d8d8d8 1px solid;
	    border-right: #d8d8d8 1px solid;
	    left: 1rem;
	    right: 1rem;
    }
    
    .bs-banners a:hover .bs-banner-title:after {
        border-top: #d8d8d8 1px solid;
	    border-bottom: #d8d8d8 1px solid;
	    top: 1rem;
	    bottom: 1rem;
    }
    
    /* > hover img */
    .bs-banners a img,
    .bs-banners a:hover img,
    .bs-banners a .bs-banner-title:after,
    .bs-banners a .bs-banner-title:before,
    .bs-banners a:hover .bs-banner-title:after,
    .bs-banners a:hover .bs-banner-title:before {
        transition:all 1s ease;
    }
    
    .bs-banners a:hover img {
        transform: scale(1.2);
    }
    
    /*order*/
    @media screen and (max-width:992px){
        .bs-banner-single:nth-child(odd) .bs-banner-order div:nth-child(even){
            order:1;
        }
        .bs-banner-single:nth-child(odd) .bs-banner-order div:nth-child(odd){
            order:2;
        }
    }
```