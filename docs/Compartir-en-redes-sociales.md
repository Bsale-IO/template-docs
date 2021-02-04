Agrega botones para compartir tu contenido en redes sociales creando un componente llamado `redes sociales > compartir` y pegando el siguiente código. 
Este componente esta implementado en los templetes en las pantallas de producto y articulo
```django

<!-- Variables -->
{% capture msg %}
    {% if current_url contains '/product/' %}
        Mira lo que encontré en {{ site.url}} | {{product.title}} a {{product.finalPrice | money_filter}} {{current_url}}
    {% elsif current_url contains '/article/' %}
        Mira lo que encontré en {{ site.url}} | {{article.title}}  {{current_url}}
    {% else %}
        {{current_url}}
    {% endif %}
{%endcapture%}

<!-- Botones -->
<aside>
    <small class="d-none d-md-inline-block">Compartir en:</small> 
    <!-- facebook -->
    <a  class="btn btn-light" 
        title="Compartir en Facebook"
        href="https://www.facebook.com/sharer/sharer.php?u={{current_url}}" 
        target="_blank" 
        rel="nofollow noopener noreferrer">
       <i class="fab fa-facebook" aria-hidden="true"></i>
    </a>
    <!-- twitter -->
    <a  class="btn btn-light" 
        title="Compartir en Twitter"
        href="https://twitter.com/intent/tweet?text={{ msg | strip | strip_newlines |  url_encode}}" 
        target="_blank" 
        rel="nofollow noopener noreferrer">
       <i class="fab fa-twitter" aria-hidden="true"></i>
    </a>
    <!-- pinterest -->
    <a  class="btn btn-light btn-pinterest"
        title="Compartir en Pinterest"
        {% if current_url contains '/product/' %}
            data-media="{{product.defaultImage | image_url: 'O'}}"
            data-description="{{aproduct.title | url_encode}}"
        {% elsif current_url contains '/article/' %}
            data-media="{{ article.imagen | image_url: 'O' }}"
            data-description="{{ article.title | url_encode }}"
        {% endif %}
        target="_blank" 
        rel="nofollow noopener noreferrer">
             <i class="fab fa-pinterest"></i>
    </a>
    <!-- tumblr -->
    <a  class="btn btn-light"  
        title="Compartir en Tumblr" 
        href="http://tumblr.com/widgets/share/tool?canonicalUrl={{current_url}}" 
        target="_blank" 
        rel="nofollow noopener noreferrer">
       <i class="fab fa-tumblr"></i>
    </a>
    <!-- linkedin -->
    <a  class="btn btn-light"  
        title="Compatir en Linkedin" 
        href="https://www.linkedin.com/cws/share?url={{current_url}}" 
        target="_blank" 
        rel="nofollow noopener noreferrer">
        <i class="fab fa-linkedin"></i>
    </a>
    <!-- whatsapp --> 
    <a  class="btn btn-light"  
        href="https://api.whatsapp.com/send?text={{ msg | strip | strip_newlines | url_encode}}"
        rel="nofollow noopener noreferrer"
        target="_blank" 
        title="Compartir en Whatsapp">
            <i class="fab fa-whatsapp"></i>
   </a>
</aside>
<!-- Librerias -->
<script async defer src="//assets.pinterest.com/js/pinit.js"></script>
<script>
      (function () {
        // pinterest
        var pinOneButton = document.querySelector('.btn-pinterest');
        pinOneButton.addEventListener('click', function(e) {
            PinUtils.pinOne({
                media: e.target.getAttribute('data-media'),
                description: e.target.getAttribute('data-description')
            });
        });
         // whatsapp
         try{
            if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && navigator.userAgent.toLowerCase().indexOf('mobile') < 0 ){
               var firefox = document.querySelector('a[href^="https://api.whatsapp.com/send"]')
               firefox.href = firefox.href.replace('api', 'web')
            }
         }catch(ex){console.log(ex.Message)}
       })()
</script>
```

## Te podría interesar
[[Agregar tus redes sociales]]