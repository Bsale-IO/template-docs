## Componente `redes sociales > chat`
En los templates de Bsale hay un componente que te permite colocar un chat para facebook y whatsapp el cual abre una nueva pestaña en la que el usuario puede enviar preguntas a la tienda 

> ### Si agregaste el componente [[facebook chat]] copia el código que dice **`Sólo Whatsapp`**


### facebook y whatsapp

```django
<aside class="bs-chat">
    {% for rrss in site.social_networks %}
        {% assign social_network = element[1] %}
        {% assign rs_title = rrss.title | downcase %}
        {% if rs_title contains 'whatsapp' %} 
            <a class="btn-whatsapp"
               data-bs="chat.whatsapp"
               href="https://api.whatsapp.com/send?phone={{ rrss.value | replace: " ", "" | replace: "+",""}}"
               rel="nofollow noopener noreferrer"  
               target="_blank" 
               title="Mandanos un Whatsapp"
               >
                <i class="fab fa-2x fa-whatsapp"></i>
            </a>
        {% endif %}
        {% if rs_title contains 'facebook' %} 
            <a class="btn-facebook"
               data-bs="chat.facebook"
               href="{{rrss.value}}"   
               rel="nofollow noopener noreferrer"
               target="_black"
               title="Mandanos un Mensaje"
               >
                <i class="fab fa-2x fa-facebook-messenger"></i>
            </a>
        {% endif %}
    {%endfor%}
</aside>
```

### Sólo whatsapp

```django
<aside class="bs-chat">
    {% for rrss in site.social_networks %}
        {% assign social_network = element[1] %}
        {% assign rs_title = rrss.title | downcase %}
        {% if rs_title contains 'whatsapp' %} 
            <a class="btn-whatsapp"
               data-bs="chat.whatsapp"
               href="https://api.whatsapp.com/send?phone={{ rrss.value | replace: " ", "" | replace: "+",""}}"
               rel="nofollow noopener noreferrer"  
               target="_blank" 
               title="Mandanos un Whatsapp"
               >
                <i class="fab fa-2x fa-whatsapp"></i>
            </a>
        {% endif %}
    {%endfor%}
</aside>
```