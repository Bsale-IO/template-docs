Para mostrar los iconos de las redes sociales se utiliza la fuente [font awesome](https://fontawesome.com/icons?d=gallery&s=brands&m=free)

### Iconos soportados

| red social | icono |
|------------|-------|
| facebook | `<i class="fab fa-facebook"></i>`|
| twitter | `<i class="fab fa-twitter"></i>`|
| whatsapp | `<i class="fab fa-whatsapp"></i>`|
| pinterest | `<i class="fab fa-pinterest"></i>`|
| tiktok | `<i class="fab fa-tiktok"></i>`|
| tumblr | `<i class="fab fa-tumblr"></i>`|
| linkedin | `<i class="fab fa-linkedin"></i>`|


## Componente `redes sociales > empresa`

```django
{% for rrss in site.social_networks %}
   {% assign social_network = element[1] %}
   {% assign rs_title = rrss.title | downcase %}
   {% if rs_title == 'whatsapp' %}
      <!-- si es whatsapp carga este botón -->
      <a class="btn" data-bs="chat.whatsapp" title="Mandanos un Whatsapp"
         href="https://api.whatsapp.com/send?phone={{ rrss.value | replace: " ", "" | replace: "+",""}}"
         rel="nofollow noopener noreferrer"  target="_blank" >
                <i class="fab fa-whatsapp"></i>
      </a>
   {%else%}
      <!-- si no es whatsapp dibuja la red social --> 
      <a class="btn" title="visitanos en {{rrss.title}}"
         href="{{ rrss.value }}"
         rel="nofollow noopener noreferrer"  target="_blank" >
         <i class="fab fa-{{ rs_title }}" aria-hidden="true"></i>
      </a>
   {%endif%}
{% endfor %}
```

## Para omitir whatsapp

Sólo borrar el contenido dentro de `{% if rs_title == 'whatsapp' %}`


```django
{% for rrss in site.social_networks %}
   {% assign social_network = element[1] %}
   {% assign rs_title = rrss.title | downcase %}
   {% if rs_title == 'whatsapp' %}
      <!-- si es whatsapp carga este botón -->
      
   {%else%}
      <!-- si no es whatsapp dibuja la red social --> 
      <a class="btn" title="visitanos en {{rrss.title}}"
         href="{{ rrss.value }}"
         rel="nofollow noopener noreferrer"  target="_blank" >
         <i class="fab fa-{{ rs_title }}" aria-hidden="true"></i>
      </a>
   {%endif%}
{% endfor %}
```