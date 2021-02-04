### Requisitos
* Es necesario que el template tenga cargado **bsale 4.3.0**, para saber la versión de bsale debes revisar la consola de tu navegador. 

### Configuraciones

| data-bs | data-info | significado |
| ------- | --------- | ----------- | 
| ****collection.filter**** | ****auto**** | si data-info es `auto` cada vez que un usuario seleccione un atributo para filtrar se refrescará la página, si data no tiene valor, se necesario presionar el botón filtrar |

## Ocultar Atributos 
Escribe el nombre del atributo a borrar en la lista deleteAttributes
```django
{% assign deleteAttibutes = "Atributo_borrado1,Atributo_borrado2" | split: ',' %}
```
### Ocultar atributo color
```django
{% assign deleteAttibutes = "Color" | split: ',' %}
```
### Ocultar atributo Color y Talla
```django
{% assign deleteAttibutes = "Color,Talla" | split: ',' %}
```
### Ocultar marca de producto y atributo Talla
```django
{% assign deleteAttibutes = "Brands,Talla" | split: ',' %}
```


## Componente "Coleccion - Buscador - Marca > filtros"
```django
{% assign deleteAttibutes = "Atributo_borrado1,Atributo_borrado2" | split: ',' %}

<div class="col-lg-3">
    <aside class="bs-collection-filter">
        <form data-bs="collection.filter" data-info="auto" >
            <div class="row  mb-3">
                <h3 class="col-12 d-none d-lg-block">
                        Filtros
                </h3>
                <div class="col-12 d-flex d-lg-block align-items-center justify-content-between">
                    <a  class="btn btn-secondary order-lg-2"
                        href="{{ paginate.link }}">
                        <i class="fas fa-undo-alt"></i><span class="d-none d-sm-inline">Limpiar</span>
                    </a>
                    <button class="d-lg-none btn btn-link" 
                            aria-controls="filter-toggle" 
                            data-target="#filter-toggle" 
                            data-toggle="collapse" 
                            type="button" title="Filtros">
                        <span class="bs-filter-title h3">
                            Filtros
                            <i class="fas fa-caret-down"></i>
                        </span>
                    </button>
                    
                    <button class="btn btn-primary" type="submit">
                        <i class="d-none d-lg-inline fas fa-filter"></i>
                        Filtrar
                    </button>
                </div>
            </div>
            <div class="collapse d-lg-block" id="filter-toggle" >
                {% if collection.limitPrice.minPrice != collection.limitPrice.maxPrice %}
                    <button
                        class="btn btn-light d-flex justify-content-between align-items-center bs-filter-btn w-100 mb-1" 
                        type="button"
                        data-toggle="collapse" 
                        data-target="#bs-collection-filter-price"
                        aria-expanded="false" 
                        aria-controls="bs-collection-filter-price">
                        Precio
                        <i class="fas fa-angle-down"></i>
                    </button>
                    <div id="bs-collection-filter-price" class="panel-collapse collapse my-1">
                        <ul class="list-group">
                            <li class="list-group-item border-0">
                                <div
                                    data-bs="filter.range"
                                    data-min="{{ collection.limitPrice.minPrice }}"
                                    data-max="{{ collection.limitPrice.maxPrice }}"
                            >
                                </div>
                            </li>
                        </ul>
                    </div>
                {% endif%}
           
                {% for attr in collection.attributes %}
                    {%assign flagAttr = false %}
                    {% for del in deleteAttibutes %}
                        {% if attr[0] == del %}
                            {%assign flagAttr = true %}
                            {{break}}
                        {% endif %}
                    {% endfor %}
                    <!-- elimina marca si esta en la url /brand/ -->
                    {% if attr[0] == "Brands" and current_url contains "/brand/" %}
                        {% assign flagAttr == true %}
                    {% endif %}
                    <!---------------------------->
                    {% if flagAttr == false %}
                        {% if attr[1].values.size > 0 %}
                            <button
                                class="btn btn-light d-flex justify-content-between align-items-center bs-filter-btn w-100 mb-1" 
                                type="button"
                                data-toggle="collapse" 
                                data-target="#{{ attr[1].code }}"
                                aria-expanded="false" 
                                aria-controls="{{ attr[1].code }}">
                               {{ attr[1].name }}<i class="fas fa-angle-down"></i>
                            </button>
                            <ul id="{{ attr[1].code }}" class="panel-collapse collapse list-group my-1">
                                {% for item in attr[1].values %}
                                    {% if item.size > 0 %}
                                        <li class="list-group-item border-0">
                                            <div class="custom-control custom-checkbox">
                                                <input
                                                    id="{{ attr[1].code | url_encode}}-{{ forloop.index }}"
                                                    class="custom-control-input"
                                                    type="checkbox"
                                                    value="{{ item | url_encode }}"
                                                    data-bs="collection.filter.attr"
                                                    data-filter="{{ attr[1].code | url_encode }}[]" 
                                                    disabled
                                                    >
                                                <label class="custom-control-label" for="{{ attr[1].code | url_encode }}-{{ forloop.index }}">
                                                    {{ item }}
                                                </label>
                                            </div>
                                        </li>
                                    {% endif %}
                                {% endfor %}
                            </ul>
                        {% endif %}
                    {% endif %}
                    {%assign flagAttr = false %}
                {%endfor%}
            </div>
        </form>
    </aside>
</div>
```

## Ocultar atributos en los filtros

Si existe algún atributo que no quieras mostrar 