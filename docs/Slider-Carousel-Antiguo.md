# Slider antiguo 

```django
{{ 'Nombre del Carrusel' | get_slider: 'nombre del componente' }}
```

| variable | descripción |
| -------- | ----------- |
| `{{slider.slides}}` | slides del el slider contiene imágenes, enlaces y descripciones de cada slide |
| `{{slider.options}}`| `json` opciones del slider para inicializarlo mediante `js`| 


```django
{% for slide in slides %}
   {{ slide.id }}
   {{ slide.item_url }}
   {{ slide.url }}
{% endfor %}
```

|variable | descripción |
| ------ | ----------- |
| `{{ slide.id }}`       |   id del slide                 |
| `{{ slide.item_url }}`        | url imagen desktop             |
| `{{ slide.url }}`             | url de destino del slide       |


### templates antiguos

```django
<div id="slider-{{ slider.id }}" 
     class="owl-carousel owl-theme c-standard-slider"
     data-name="{{ slider.name }}" 
     data-description="{{ slider.description }}">
     {% for slide in slider.slides %}
         {% if slide.is_video %}
         {% else %}
             <div class="c-standard-slider__item--image">
                 {% if slide.url != '' %}
                     <a href="{{slide.url}}">
                         <img src="{{ slide.item_url }}" class="img-responsive" /> 
                     </a>
                 {% else %}
                     <img src="{{ slide.item_url }}" class="img-responsive" />
                 {% endif %}
             </div>
       {% endif %}
   {% endfor %}
</div>
<script type="text/javascript">
   $(document).ready(function(){
      $("#slider-{{ slider.id }}").owlCarousel({{ slider.options }});
   });
</script>
```
***
Si el ocurren problemas en la implementación del slider/carrusel puedes crear un componente con el siguente código y llamarlo como:
```django
{{'nombre slider' | get_slider: "nombre del componente"}}
```
```django
<div id="slider-{{ slider.id }}" 
     class="owl-carousel owl-theme c-standard-slider owl-fix"
     data-name="{{ slider.name }}" 
     data-description="{{ slider.description }}">
    {% for slide in slider.slides %}
        {% if slide.is_video %}
            <div class="item-video">
                <a class="owl-video" href="{{slide.item_url}}">
                </a>
            </div>
        {% else %}
            <div class="item">
                {% if slide.url != '' %}
                    <a href="{{slide.url}}">
                        <img src="{{ slide.item_url }}" /> 
                    </a>
                {% else %}
                    <img src="{{ slide.item_url }}" />
                {% endif %}
            </div>
        {% endif %}
   {% endfor %}
</div>

<script>
    $(document).ready(function(){
        var config = {{ slider.options }};
        var y = 2;
        function x(e) {
            var container = $(e.target).find(".owl-stage").width();
            var items = $(e.target).find('.owl-item');
            var width = (container/items.length) + 'px';
            
            items.each(function(){
                $(this).removeAttr('style').css({'min-width': width, 'max-width': width });
            });
        }
        function stopVideo(e){
            $(e.target).find('iframe').remove();
        }
        config.onInitialized = x
        config.onResized = x
        config.onTranslate = stopVideo
        // aqui
        $("#slider-{{ slider.id }}").owlCarousel(
            config
        );
    });
</script>
<style>
    .owl-fix .owl-stage{
        display:flex;
    }
    .owl-fix .owl-stage .item{
        height:100%;
    }
    .owl-fix .owl-stage .owl-video,
    .owl-fix .owl-stage .item-video,
    .owl-fix .owl-stage .item-video iframe{
        height:100%;
        width:100%;
    }
</style>
```