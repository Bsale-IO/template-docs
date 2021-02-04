```django

<nav class="bs-breadcrumb" aria-label="breadcrumb">
    <ol class="breadcrumb container">
        <!-- home -->
        <li class="breadcrumb-item">
            <a href="/" title="{{site.name}}">Inicio</a>
        </li>

        <!-- si es producto -->
        {%if current_url contains "/product/"%}

            <!-- si tiene marca -->
            {%if product.brand.name != '' %}
                <li class="breadcrumb-item">
                    <a href="{{product.brand.link}}" title="{{product.brand.name}}">{{product.brand.name}}</a>
                </li>
            {% else %}
                <li class="breadcrumb-item">Productos</li>
            {% endif %}

            <li class="breadcrumb-item active" aria-current="page">{{title}}</li>

        <!-- si es articulo -->
        {% elsif current_url contains "/article/" %}
            <li class="breadcrumb-item">
                <a href="/blog" title="Blog">Artículo</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{title}}</li>

        <!-- si es busqueda -->  
        {% elsif current_url contains "?search_text=" %}

            <li class="breadcrumb-item">
                <a href="{{current_url}}" title="Buscador">Buscador</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{title}}</li>

        <!-- si es carro -->
        {% elsif current_url contains "/cart/" %}
            <li class="breadcrumb-item active" aria-current="page">Carro</li>

        <!-- si es cualquier otro tipo de pagina --> 
        {% else %}
            <li class="breadcrumb-item active" aria-current="page">{{title}}</li>
        {% endif %}
    </ol>
</nav>
```