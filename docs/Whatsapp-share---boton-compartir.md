## Compartir

```django
{%capture wsp%}
   {% if current_url contains '/product/' %}
     {{product.title}} {{ product.descripction }} {{ product.finalPrice | money_filter }} | {{current_url}}
   {% else %}
     {{current_url}}
   {% endif %}
{%endcapture%}
   <a href="https://api.whatsapp.com/send?text={{wsp}}"
      rel="nofollow noopener noreferrer"
      target="_blank" 
      title="Compartir en Whatsapp">
      <i class="fab fa-2x fa-whatsapp"></i>
   </a>
   <script>
      (function () {
         try{
            if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && navigator.userAgent.toLowerCase().indexOf('mobile') < 0 ){
               var firefox = document.querySelector('a[href^="https://api.whatsapp.com/send"]')
               firefox.href = firefox.href.replace('api', 'web')
            }
         }catch(ex){
            console.log(ex.Message)
         }
       })()
   </script>
```

## Agregar Contacto 

```html
{%capture wsp%} +56 9 8765 4321{%endcapture%}
   <a href="https://api.whatsapp.com/send?phone={{wsp | replace: " ", "" | replace: "+",""}}"
      rel="nofollow noopener noreferrer"  
      target="_blank" 
      title="Contacto">
      <i class="fab fa-2x fa-whatsapp"></i>
   </a>
   <script>
      (function () {
          try{
            if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && navigator.userAgent.toLowerCase().indexOf('mobile') < 0 ){
               var firefox = document.querySelector('a[href^="https://api.whatsapp.com/send"]')
               firefox.href = firefox.href.replace('api', 'web')
            }
         }catch(ex){
            console.log(ex.Message)
         }
       })()
   </script>
```