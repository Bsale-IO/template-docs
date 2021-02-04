| variante | descripcion |
| -------- | ----------- |
| `{{menu}}`| `objeto` conjunto de enlaces del menu |
| `{{item}}`| `objeto` elemento de iteracion |
|`{{ item.ml_id }}` | id del elemento en el menú |
| `{{ item.ml_name }}` | nombre del elemento en el menú |
| `{{ item.ml_link }}` | enlace del elemento en el menú |
| `{{item.ty_id}}` | tipo de enlace | 

| tipo de enlace | descripción  |
| ------- | ------- |
| 0 | |

```js
   {% for item in menu %}
      {{ item.ml_id }}
      {{ item.ml_name }}
      {{ item.ml_link }}
   {% endfor %}
```

### Sub menú
Para trabajar con submenú debes definir una variable local y usar el filtro `get_sub`, en bsale se puede dibujar un menú de diferentes niveles, sin embargo `no se recomienda trabajar con más de 3 niveles de profundidad`.

```js
{% assign submenu =  item.ml_id | get_sub %}
```
#### Construccion de submenú

```js
   {% for item in menu %}
      // primer nivel
      
      {{ item.ml_id }}
      {{ item.ml_name }}
      {{ item.ml_link }}

      {% assign submenu =  item.ml_id | get_sub %}
      {% for i in submenu %}
         // segundo nivel
         
         {{ i.ml_id }}
         {{ i.ml_name }}
         {{ i.ml_link }}

         {% assign subsubmenu =  i.ml_id | get_sub %}
         {% for j in subsubmenu %}
            // tercer nivel    
         
            {{ j.ml_id }}
            {{ j.ml_name }}
            {{ j.ml_link }}

            {% assign subsubsubmenu =  j.ml_id | get_sub %}
            {% for k in subsubsubmenu %}
               // cuarto nivel  
               {{ k.ml_id }}
               {{ k.ml_name }}
               {{ k.ml_link }}
               ...
            {% endfor %}

         {% endfor %}

      {% endfor %}

   {% endfor %}
```


## Ejemplo menu de 3 niveles 
```html
<ul class="bs-nav-menu navbar-nav position-relative">
    {% for item in menu %}
        {% assign sub_menu = item.ml_id | get_sub %}
        {% if sub_menu.size > 0  %}
            {% assign sub_sub_menu ="" %}
            {% for sub_item in sub_menu %}{% assign sub_sub_menu = sub_item.ml_id | get_sub %}{% if sub_sub_menu.size > 0 %}{%break%}{%endif%}{%endfor%}
             {%comment%}<!------ x > 8 && submenu 3 nivel  ----------------------------------------------------------------->{%endcomment%}
            {% if sub_menu.size > 8 or sub_sub_menu.size > 0 %}
                <li class="nav-item dropdown position-static">
                    <a class="nav-link dropdown-toggle" href="#" 
                                    id="navbarDropdown{{ forloop.index }}" 
                                    role="button" data-toggle="dropdown" 
                                    aria-haspopup="true" aria-expanded="false" 
                                    title="{{ item.ml_name }}">
                          {{ item.ml_name }}          
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown{{ forloop.index }}">
                        <div class="row">
                        {% for sub_item in sub_menu %} 
                            {% assign sub_sub_menu = sub_item.ml_id | get_sub %}
                            {% if sub_sub_menu.size > 0 %}
                                <div class="col-lg-3">
                                    <a  class="mx-3 d-block"   
                                        href="{{sub_item.ml_link}}" 
                                        title="{{ sub_item.ml_name }}">
                                        {{ sub_item.ml_name }}          
                                    </a>
                                    <ul>
                                        {% for sub_sub_item in sub_sub_menu %}
                                            <li>
                                                <a  class="mx-3 d-block"   
                                                    href="{{sub_sub_item.ml_link}}" 
                                                    title="{{ sub_sub_item.ml_name }}">
                                                    {{ sub_sub_item.ml_name }}          
                                                </a>
                                            </li>
                                        {%endfor%}
                                    </ul>
                                </div>
                            {% else %}
                                <div class="col-lg-3">
                                    <a  class="mx-3 d-block"   
                                        href="{{sub_item.ml_link}}"  
                                        title="{{ sub_item.ml_name }}">
                                        {{ sub_item.ml_name }}          
                                    </a>
                                </div>
                            {% endif %}
                        {% endfor %}
                        </div>
                    </div>
                </li>
            {% else %}
            {%comment%}<!---- x <= 8 items en segundo nivel sin 3 ------------------------->{%endcomment%}
                <li class="nav-item dropdown">
                <a  class="nav-link dropdown-toggle" href="{{ item.ml_link }}"  
                    id="navbarDropdown{{ forloop.index }}" 
                    role="button" data-toggle="dropdown" 
                    aria-haspopup="true" aria-expanded="false" 
                    title="{{ item.ml_name }}">
                      {{ item.ml_name }}          
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown{{ forloop.index }}">
                    {% for sub_item in sub_menu %}
                        <a class="dropdown-item" title="{{sub_item.ml_name}}" href="{{sub_item.ml_link}}">
                            {{sub_item.ml_name}}
                        </a>
                    {% endfor %}
                </div>
            </li>
            {% endif %}
        {% else %}
        {%comment%}<!------ sin sub menu ----------------------------------------------------------------->{%endcomment%}
            <li class="nav-item dropdown " style="position:static">
                <a  class="nav-link" 
                    href="{{ item.ml_link }}"
                    title="{{ item.ml_name }}">
                      {{ item.ml_name }}          
                </a>
            </li>
        {% endif %}
    {% endfor %}
    {% if login %}
        {% if user.loged == true %}
            <li class="nav-item dropdown d-md-none">
                <a class="nav-link dropdown-toggle py-lg-2 px-3" href="#" id="userlog" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-user"></i>
                    <span class="mr-2 ">{{ user.name }}</span>
                </a>
                <div class="dropdown-menu" aria-labelledby="userlog">
                    <a class="dropdown-item" href="{{ user.account_url }}">Mi Cuenta</a>
       
                    <a class="dropdown-item" href="{{ user.logout_url }}">Cerrar Sesión</a>
                </div>
            </li>
        {% else %}
            <li class="nav-item d-md-none">
                <a class="nav-link bs-login py-lg-2 px-3" href="/login">
                    <i class="fas fa-user"></i>
                    Iniciar sesión
                </a>
            </li>
        {% endif %}
    {% endif  %}
</ul>