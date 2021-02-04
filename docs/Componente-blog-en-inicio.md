## Componente

```html
<div class="bs-home-blog">
    <h3>Blog</h3>
    {% if articles.size > 0 %}
        <div class="row">
            {% for art in articles | limit: 3 %}
                <article class="col-sm-6 col-md-4">
                    <a class="card h-100" href="{{ art.link }}">
                        <div class="img-square fitcover">
                             <picture>
                                <img class="card-img-top lazy" src="{{ art.imagen | image_url: 'T' }}" data-src="{{ art.imagen | image_url: 'M' }}" alt="{{ art.title }}">
                             </picture>  
                        </div>
                        <div class="card-body">
                            <h5 class="card-title text-info">{{ art.title }}</h5>
                            <div class="card-text">{{ art.content | truncate: 40, '...' }}</div>
                            <p class="card-text"><small class="text-muted">{{ art.modify_date | date: '%d/%m/%Y' }}</small></p>
                        </div>
                    </a>
                </article>
            {% endfor %}
        </div>
    {% else %}
        <p>No hay artículos</p>
    {% endif %}
</div>
```

## Metodo de llamado

Llamar con `get_blog` de esta forma

```js
{{ 'nombre componente' | get_blog: 'nombre componente' }}
```