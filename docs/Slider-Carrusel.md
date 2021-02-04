> **Para slider de otro tipo ver:**
> * [[ Página de Producto | Producto Slider Carrusel ]]
> * [[ Marcas | Marcas Slider Carousel ]]
> * [[ Productos | Colección Slider Carrusel ]]

# Slider nuevo, sólo templates nuevos

Junto con el lanzamiento de campañas se reestructuró el slider para permitir agregar imágenes mobile, descripciones y una gestión dinámica 
Para esto se cambió el selector por `tag`, para que un slider aparezca en el home es necesario asignarle un **tag**

## Nuevas funciones 
1. Permite carga de imagen mobile y desktop por slide(diapositiva).
2. Permite agregar descripción a la imagen para mejorar `SEO`.
3. Implementación de **tag** para dinamizar la administración de los slider(carruseles). Ahora sólo necesitas definir el tag que usará el slider sin necesidad de editar el componente dentro del cual se cargará 

### Limitantes
No se pueden ocultar diapositivas en su versión mobile o escritorio, si necesitas cargas slider(carruseles) diferentes para cada versión del sitio debes cargar dos componentes y ocultar mediante css según dimensión de la pantalla 

## Componente 
```django
<!-- version ENERO 2020 -->
<section data-bs='slider' data-info='{% if slider.options.size > 2 %}{{ slider.options | replace_first: '"' , '"lazyLoad":true,"'}}
                                     {%else%}{"items":1,"lazyLoad":true, "loop": true, "nav":true}
                                     {% endif %}' 
                                     class="owl-carousel bs-owl-compact owl-theme">
                                     
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
        
        
        {% capture imgSource %}
            <picture>
                {% if slide.imageMobileUrl.size > 0  and slide.imageUrl.size > 0 %}
                <!--tiene desktop y mobile -->
                    <source class="owl-lazy" srcset="{{ slide.imageUrl | image_url: 'T' }}" data-srcset="{{ slide.imageUrl | image_url: 'O' }}" media="(min-width: 1201px)">
                    <source class="owl-lazy" srcset="{{ slide.imageUrl | image_url: 'T' }}" data-srcset="{{ slide.imageUrl | image_url: 'X' }}" media="(min-width: 801px)">
                    <source class="owl-lazy" srcset="{{ slide.imageUrl | image_url: 'T' }}" data-srcset="{{ slide.imageUrl | image_url: 'L' }}" media="(min-width: 768px)">
                    <source class="owl-lazy" srcset="{{ slide.imageMobileUrl | image_url: 'T' }}" data-srcset="{{ slide.imageMobileUrl | image_url: 'L' }}" media="(min-width: 401px)">
                    <source class="owl-lazy" srcset="{{ slide.imageMobileUrl | image_url: 'T' }}" data-srcset="{{ slide.imageMobileUrl | image_url: 'M' }}" media="(min-width: 241px)">
                    <source class="owl-lazy" srcset="{{ slide.imageMobileUrl | image_url: 'T' }}" data-srcset="{{ slide.imageMobileUrl | image_url: 'S' }}" media="(min-width: 101px)">
                    <source class="owl-lazy" srcset="{{ slide.imageMobileUrl | image_url: 'T' }}" data-srcset="{{ slide.imageMobileUrl | image_url: 'T' }}" media="(min-width: 0px)">
                    <img    class="owl-lazy" src="{{ slide.imageUrl | image_url: 'T' }}" title="{{title}}" alt="title">
                {% elsif slide.imageMobileUrl.size > 0 %}
                <!--tiene sólo mobile -->
                    <source class="owl-lazy" data-srcset="{{ slide.imageMobileUrl | image_url: 'O' }}" media="(min-width: 1201px)">
                    <source class="owl-lazy" data-srcset="{{ slide.imageMobileUrl | image_url: 'X' }}" media="(min-width: 801px)">
                    <source class="owl-lazy" data-srcset="{{ slide.imageMobileUrl | image_url: 'L' }}" media="(min-width: 401px)">
                    <source class="owl-lazy" data-srcset="{{ slide.imageMobileUrl | image_url: 'M' }}" media="(min-width: 241px)">
                    <source class="owl-lazy" data-srcset="{{ slide.imageMobileUrl | image_url: 'S' }}" media="(min-width: 101px)">
                    <source class="owl-lazy" data-srcset="{{ slide.imageMobileUrl | image_url: 'T' }}" media="(min-width: 0px)">
                    <img    class="owl-lazy" src="{{ slide.imageMobileUrl | image_url: 'T' }}" title="{{title}}" alt="{{title}}">
                {% elsif slide.imageUrl.size > 0 %}
                <!--tiene sólo desktop -->
                    <source class="owl-lazy" data-srcset="{{ slide.imageUrl | image_url: 'O' }}" media="(min-width: 1201px)">
                    <source class="owl-lazy" data-srcset="{{ slide.imageUrl | image_url: 'X' }}" media="(min-width: 801px)">
                    <source class="owl-lazy" data-srcset="{{ slide.imageUrl | image_url: 'L' }}" media="(min-width: 401px)">
                    <source class="owl-lazy" data-srcset="{{ slide.imageUrl | image_url: 'M' }}" media="(min-width: 241px)">
                    <source class="owl-lazy" data-srcset="{{ slide.imageUrl | image_url: 'S' }}" media="(min-width: 101px)">
                    <source class="owl-lazy" data-srcset="{{ slide.imageUrl | image_url: 'T' }}" media="(min-width: 0px)">
                    <img    class="owl-lazy" src="{{ slide.imageUrl | image_url: 'L' }}" title="{{title}}" alt="{{title}}">
                {% endif %}
            </picture>
        {% endcapture %}
        
        
        <div class="item">
            {%if slide.itemUrl != "" %}
                <a href="{{slide.itemUrl}}" title="{{title}}">{{imgSource}}</a>
            {% else %}
                {{imgSource}}
            {% endif %}
        </div>
    {% endfor %}
</section>

<style>.owl-carousel{display:block;}.owl-carousel .item:first-child img{display:block;width:100%;height:auto;}.owl-carousel .item:not(:first-child) img{display:none}.owl-carousel:not(.owl-loaded) img.owl-lazy{filter: blur(10px)}.owl-carousel:not(.owl-loaded) .item:first-child{overflow:hidden;}</style>
<script>(function(){if(navigator.userAgent.indexOf("Trident") > -1){var pic = document.querySelectorAll(".owl-carousel picture");for(var i = 0; i < pic.length; i++){var p = pic[i];var source = p.querySelector("source");var img = p.querySelector("img");img.src = source.dataset.srcset;img.classList.remove("owl-lazy");}}})()</script>
```

### Variantes

| nueva variable               | descripción                    |
| ---------------------------- | ------------------------------ |
| `{{ slider.options }}`       | `json` opciones del slider para inicializarlo mediante `js`| 
| `{{ slider.slide }}`         | `array` contiene todos los slide del slider (carrusel) |
| `{{ slide.id }}`             |   id del slide                 |
| `{{ slide.imageUrl }}`       | url imagen desktop             |
| `{{ slide.imageMobileUrl }}` | url imagen mobile              |
| `{{ slide.description }}`    | descripción / título del slide |
| `{{ slide.itemUrl }}`        | url de destino del slide       |

## Implementación 

```js
{{ "tag" | new_get_slider: "componente del slider" }}
```
#### Ejemplo
```js
{{ "slider_inicio" | new_get_slider: "Inicio > Slider Principal" }}
```



para información de la versión anterior ver [[ Slider Carousel Antiguo ]]


