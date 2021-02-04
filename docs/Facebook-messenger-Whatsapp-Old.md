## Enlace a facebook messenger


### Componente
```html
<aside class="bs-facebook-whatsapp">
    {% for rrss in site.social_networks %}
        {% assign social_network = element[1] %}
        {% assign rs_title = rrss.title | downcase %}
        {% if rs_title contains 'whatsapp' %} 
            <a href="https://api.whatsapp.com/send?phone={{ rrss.value | replace: " ", "" | replace: "+",""}}"
               rel="nofollow noopener noreferrer"  
               target="_blank" 
               title="Contacto">
                <i class="fab fa-2x fa-whatsapp"></i>
            </a>
        {% endif %}
        {% if rs_title contains 'facebook' %} 
            <a data-fb-user="{{rrss.value}}"
               rel="nofollow noopener noreferrer"
               target="_black"
               title="Mandanos un Mensaje"
               >
                <i class="fab fa-2x fa-facebook-messenger"></i>
            </a>
        {% endif %}
    {%endfor%}
</aside>
<script>
    (function(){
      try{
        var fbUser = document.querySelector('a[data-fb-user]');
        var fbUserLink = fbUser.attributes["data-fb-user"].nodeValue
        var link = fbUserLink.substring(fbUserLink.indexOf(".com/")+5,fbUserLink.length)
    
        /* evalua dispositivo*/
        if(navigator.userAgent.toLowerCase().indexOf('mobile') > -1 ){
          fbUser.href = "https://m.me/"+ link;
        }else{
          fbUser.href = 'https://www.facebook.com/messages/t/'+ link;
        }
        
        if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && navigator.userAgent.toLowerCase().indexOf('mobile') < 0 ){
            var firefox = document.querySelector('a[href^="https://api.whatsapp.com/send"]')
            firefox.href = firefox.href.replace('api', 'web')
        }
        
      }catch(ex){
        console.log(ex.Message);
      }
    })();
    </script>
```
### css
```css
/*******************************
    facebook whatsapp
********************************/
.bs-facebook-whatsapp{
    display:flex;
    justify-content:center;
}
.bs-facebook-whatsapp a{
    display:inline-flex;
    justify-content:center;
    align-items:center;
    width:2.5rem;
    height:2.5rem;
    background:white;
    border-radius:50rem;
    border: 1px solid #eaeaea;
    margin:.25rem;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.3);
}
.bs-facebook-whatsapp a[data-fb-user]{
    color:#0099FF;
}
.bs-facebook-whatsapp a[href*="whatsapp"]{
    color:#25D366;
}
.bs-facebook-whatsapp a[data-fb-user]:hover{
    background:#0099FF;
    border-color:#0099FF;
    color:white;
}
.bs-facebook-whatsapp a[href*="whatsapp"]:hover{
    background:#25D366;
    border-color:#25D366;
    color:white;
}
@media screen and (min-width:768px){
    .bs-facebook-whatsapp{
        position:fixed;
        bottom:50%;
        right: 1rem;
        flex-direction:column;
    }
}
```
## Facebook Messenger en la página

```
 P R O X I M A M E N T E...
```