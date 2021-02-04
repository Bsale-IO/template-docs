
### Nomenclatura
| Menú | significado |
|--------------|-------------|
| lv1 | primer nivel del menú |
| lv2 | segundo nivel, submenu de lv1 | 
| lv3 | tercer nivel, submenu de lv2 |


## Componente

Copia y pega este componente dentro del componente `Cabecera > Menú`

> ### * Necesita tener cargado [[Header Cabecera v2.0 Css]]

### Configuración

| variable | descripción |
|----------|-------------|
|`closeIcon`| icono que cierra menu mobile |
|`dropdownIcon` | Icono que indica si un menu posee submenu | 

```django
{% assign closeIcon = "fas fa-arrow-alt-circle-left" %}
{% assign dropdownIcon = "fas fa-angle-down" %}

<ul class="bs-header-nav navbar-nav" role="navegation">
    <li class="bs-menu-close">
        <button type="button" class="bs-menu-lv1" data-toggle="collapse" data-target="#menuPrincipal" aria-controls="menuPrincipal" aria-expanded="true" aria-label="Toggle navigation">
             <i class="{{closeIcon}}"></i>
        </button>
        <div class="dropdown-divider"></div>
    </li>
    
    {% for item in menu %}
        
        {% assign sub_menu = item.ml_id | get_sub %}
        {% if sub_menu.size > 0  %}
            {% assign sub_sub_menu ="" %}
            {% for sub_item in sub_menu %}{% assign sub_sub_menu = sub_item.ml_id | get_sub %}{% if sub_sub_menu.size > 0 %}{%break%}{%endif%}{%endfor%}
    
    <!-- Si hay más de 8 submenu lv3 ----------------------------------------------------------------->
    
            {% if sub_menu.size > 8 and sub_sub_menu.size <= 0  %}
                <li class="nav-item dropdown bs-menu-big">
                    <a class="bs-menu-lv1  dropdown-toggle" href="#" 
                        id="navbarDropdown--lv1-{{ forloop.index }}" 
                        type="button" data-toggle="dropdown" 
                        aria-haspopup="true" aria-expanded="false" 
                        title="{{ item.ml_name }}">
                        {{ item.ml_name }}
                        {% if dropdownIcon %}
                            <i class="bs-dropdown-icon {{dropdownIcon}}"></i>
                        {%endif%}
                    </a>
                    <div class="dropdown-menu" data-bs="dropdown-menu" aria-labelledby="navbarDropdown--lv1-{{ forloop.index }}">
                        
                        {% for sub_item in sub_menu %} 
                            <a  class="bs-menu-lv2 bs-menu-column"   
                                href="{{sub_item.ml_link}}" 
                                title="{{ sub_item.ml_name }}"
                                role="menuitem">
                                <span class="text-truncate">{{ sub_item.ml_name }}</span>       
                            </a>
                        {% endfor %}
                        
                    </div>
                </li>
        <!-- Si hay submenu lv3 ----------------------------------------------------------------->        
            {% elsif sub_sub_menu.size > 0 %}
                <li class="nav-item dropdown bs-menu-big ">
                    <a class="bs-menu-lv1 dropdown-toggle" href="#" 
                        id="navbarDropdown--lv1-{{ forloop.index }}" 
                        role="menubar" data-toggle="dropdown" 
                        aria-haspopup="true" aria-expanded="false" 
                        title="{{ item.ml_name }}">
                        <span>{{ item.ml_name }}</span>
                        {% if dropdownIcon %}
                            <i class="bs-dropdown-icon {{dropdownIcon}}"></i>
                        {%endif%}
                    </a>
                    <div class="dropdown-menu bs-menu-title" data-bs="dropdown-menu" aria-labelledby="navbarDropdown--lv1-{{ forloop.index }}">
                        {% assign lv1 =  forloop.index %}
                        {% for sub_item in sub_menu %} 
                            {% assign sub_sub_menu = sub_item.ml_id | get_sub %}
                            {% if sub_sub_menu.size > 0 %}
                                <div class=" dropdown bs-submenu  bs-menu-column">
                                    <a  class="bs-menu-lv2 dropdown-toggle" 
                                        href="#"  
                                        id="dropdownMenu--Lv1-{{lv1}}--Lv2-{{forloop.index}}"
                                        data-toggle="dropdown" 
                                        aria-haspopup="true" 
                                        aria-expanded="false"
                                        role="button"
                                        title="{{ sub_item.ml_name }}">
                                        <span>{{ sub_item.ml_name }}</span>
                                        {% if dropdownIcon %}
                                            <i class="bs-dropdown-icon {{dropdownIcon}}"></i>
                                        {%endif%}
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu--Lv1-{{lv1}}--Lv2-{{forloop.index}}">
                                        {% for sub_sub_item in sub_sub_menu %}
                                            <a  class="bs-menu-lv3"   
                                                href="{{sub_sub_item.ml_link}}" 
                                                title="{{ sub_sub_item.ml_name }}"
                                                role="menuitem"
                                                >
                                                {{ sub_sub_item.ml_name }}      
                                            </a>
                                        {%endfor%}
                                    </div>
                                </div>   
                            {%else %}
                                <a  class="bs-menu-lv2 bs-menu-column"
                                    role="menuitem"
                                    href="{{sub_item.ml_link}}" 
                                    title="{{ sub_item.ml_name }}">
                                    {{ sub_item.ml_name }}     
                                </a>
                            {% endif %}
                        {% endfor %}
                        
                    </div>
                </li>
            
            {% else %}
            <!-- si hay menos de 8 items lv2 ------------------------->
                <li class="nav-item dropdown">
                    <a  class="bs-menu-lv1 dropdown-toggle " href="#" 
                        id="navbarDropdown--lv1-{{ forloop.index }}" 
                        role="menubar" data-toggle="dropdown" 
                        aria-haspopup="true" aria-expanded="false" 
                        title="{{ item.ml_name }}">
                        {{ item.ml_name }}
                        {% if dropdownIcon %}
                            <i class="bs-dropdown-icon {{dropdownIcon}}"></i>
                        {%endif%}
                    </a>
                    <div class="dropdown-menu" data-bs="dropdown-menu" aria-labelledby="navbarDropdown--lv1-{{ forloop.index }}">
                        {% for sub_item in sub_menu %}
                            <a  class="bs-menu-lv2" 
                                title="{{sub_item.ml_name}}" 
                                href="{{sub_item.ml_link}}"
                                role="menuitem">
                                {{sub_item.ml_name}}
                            </a>
                        {% endfor %}
                    </div>
                </li>
            {% endif %}
        {% else %}
        <!-- Si sólo hay item lv1 --> 
            <li class="nav-item">
                <a  class="bs-menu-lv1 " 
                    href="{{item.ml_link}}" 
                    title="{{ item.ml_name }}"
                    role="menuitem">
                    {{ item.ml_name }}
                </a>
            </li>
        {% endif %}
    {% endfor %}
</ul>

```