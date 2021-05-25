---
layout: default
title: Metadata
published: true
---
{% raw %}

- En el están todas las descripciones necesarias para que tu sitio sea encontrado por **google** y compartido en **redes sociales**.

## Revisar Metadatos
Para revisar como se verá tu sitio compartido en redes sociales puedes testearlo acá:
- [facebook y whatsapp](https://developers.facebook.com/tools/debug/)
- [twitter card](https://cards-dev.twitter.com/validator)
- [Linkedin](https://www.linkedin.com/post-inspector/)
- [Pinterest](https://developers.pinterest.com/tools/url-debugger/)




## Componente Metadata

- Este componente debe ponerlo dentro del [[Componente Head]], 

```django
<script>console.log('%cBsale:','padding:3px;color:#fff;background-color:#ff6815', '{{site.cpnId}} | {{site.name}}');</script>

<meta name="theme-color" content="#c4c4c4"><!-- color de barra de chrome, por defecto gris-->
<!-- meta generico -->
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="twitter:card" content="summary">
    <meta name="autor" content="Bsale" />
    <meta name="generator" content="Bsale" />
    {% for rrss in site.social_networks %}
        {% if rrss.value contains 'https://twitter.com/' %}
            <meta name="twitter:site" content="{{rrss.value | replace: 'https://twitter.com/', '@' }}">
            {% break %}
        {%elsif rrss.value contains 'http://twitter.com/' %}
            <meta name="twitter:site" content="{{rrss.value | replace: 'http://twitter.com/', '@' }}">
            {% break %}
        {% endif %}
    {% endfor %}
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
<!-- canonical -->
    <link rel="canonical" href="{{current_url}}"/>
    <meta property="og:url" content="{{current_url}}">
    <meta property="og:site_name" content="{{ site.name }}" />
<!-- robots -->
    {% if current_url contains 'bsalemarket.com' or current_url contains '/products' or product.collections.size <= 0 %}
        <meta name="robots" content="noindex, nofollow" />
    {%elsif current_url contains '/cart' or current_url contains '?search'  %}
        <meta name="robots" content="noindex, follow" />
    {%else%}
        <meta name="robots" content="index, follow" />
    {%endif%}   
<!-- end meta generico -->
<!-- favicon-->
{% if site.favicon.size > 0 %}
    <!-- desktop favicon -->
    <link rel="icon" type="image/png" sizes="16x16"     href="{{site.favicon | image_url: "T"}}">
    <link rel="icon" type="image/png" sizes="32x32"     href="{{site.favicon | image_url: "T"}}">
    <link rel="icon" type="image/png" sizes="48x48"     href="{{site.favicon | image_url: "T"}}">
    <!-- android favicon -->
    <link rel="icon" type="image/png" sizes="192x192"   href="{{site.favicon | image_url: "S"}}">
    <link rel="icon" type="image/png" sizes="512x512"   href="{{site.favicon | image_url: "L"}}">
    <!-- apple ios -->
    <link rel="apple-touch-icon"      sizes="180x180"   href="{{site.favicon | image_url: "S"}}">
{% else %}
<script>console.warn('%cBsale:','padding:3px;color:#fff;background-color:#ff6815','no tiene Favicon')</script>
{% endif %}
<!-- end favicon -->
{%if current_url contains 'product/' %}
    <!-- meta producto-->
        {%if product.description.size > 0 %}
            {% assign product_description = product.description | strip_html %}
        {%else%}
            {% capture product_description %} {{product.title}} {{product.brand.name}} {{product.finalPrice | money_filter}} {% endcapture %}
        {%endif%}
    
        <meta property="og:type" content="product">
        <title>{{product.title}} | {{ site.name }}</title>
        <meta name="twitter:title" content="{{product.title}}"/>
        <meta property="og:title" content="{{product.title}}"/>
        <!--description-->
        <meta name="description" content="{{product_description | truncate: 250, "..." }}">
        <meta name="twitter:description" content="{{product_description | truncate: 250, "..." }}">
        <meta property="og:description" content="{{product_description | truncate: 250, "..." }}">
        <!--img-->
        <meta name="twitter:image" content="{{product.defaultImage | image_url}}">
        <meta property="og:image" content="{{product.defaultImage  | image_url}}">
    <!-- end meta producto -->
{%elsif current_url contains '/article/' %}
    <!-- meta articulo -->
        <meta property="og:type" content="article">
        <title>{{title}} | {{ site.name }}</title>
        <meta name="twitter:title" content="{{title}}"/>
        <meta property="og:title" content="{{title}}"/>
        <!--description-->
        <meta name="description" content="{{article.content | strip_html | truncate: 250, "..."}}">
        <meta name="twitter:description" content="{{article.content | strip_html | truncate: 250, "..."}}">
        <meta property="og:description" content="{{article.content | strip_html | truncate: 250, "..."}}">
        <!-- img -->
        {% if article.imagen.size > 0%}
            <meta name="twitter:image" content="{{article.imagen | image_url}}">
            <meta property="og:image" content="{{article.imagen | image_url}}">
        {% else %}
            <meta name="twitter:image" content="{{site.logo | image_url}}">
            <meta property="og:image" content="{{site.logo | image_url}}">
        {% endif %}
        
    <!-- end meta articulo -->
{%elsif current_url contains '/brand/' or current_url contains '/collection/' or current_url contains 'search_text=' %}
    {%if collection.description.size > 0%}
        {% assign collection_description = collection.description | strip_html %}
    {%else%}
        {% capture collection_description %}
            {{title}}: {%for product in collection%}{{product.title}}{% if forloop.last%}.{%else%}, {%endif%}{%endfor%}
        {%endcapture%}
    {%endif%}
    <!-- meta brand, collection, search -->
        <meta property="og:type" content="website">
        {% if current_url contains 'search_text=' %}
            <title>Busqueda: {{title}} | {{ site.name }}</title>
            <meta name="twitter:title" content="Busqueda: {{title}}"/>
            <meta property="og:title" content="Busqueda: {{title}}"/>
        {% else %}
            <title>{{title}} | {{ site.name }}</title>
            <meta name="twitter:title" content="{{title}}"/>
            <meta property="og:title" content="{{title}}"/>
        {% endif %}
        <!--description-->
        <meta name="description" content="{{collection_description | truncate: 250, "..."}}">
        <meta property="og:description" content="{{collection_description | truncate: 250, "..."}}">
        <meta name="twitter:description" content="{{collection_description | truncate: 250, "..."}}" >
        <!-- image -->
        {% if collection.image %}
            <meta property="og:image" content="{{collection.image | image_url : 'X'}}"/>
            <meta name="twitter:image" content="{{collection.image | image_url : 'X'}}"/>
        {%else%}
            {% for col in collection %}
                <meta property="og:image" content="{{col.defaultImage | image_url : 'L'}}"/>
                <meta name="twitter:image" content="{{col.defaultImage | image_url : 'L'}}"/>
            {%endfor%}
        {%endif%}
    <!-- end meta brand, collection, search  -->
{%elsif current_url contains '/form/' %}
    <!-- meta formulario -->
        <meta property="og:type" content="website">
        <title>{{title}} | {{ site.name }}</title>
        <meta name="twitter:title" content="{{title}}"/>
        <meta property="og:title" content="{{title}}"/>
        <!--description-->
        <meta name="description" content="{{title}}">
        <meta name="twitter:description" content="{{title}}">
        <meta property="og:description" content="{{title}}">
        <!-- img -->
        <meta name="twitter:image" content="{{site.logo}}">
        <meta property="og:image" content="{{site.logo}}">
    <!-- end meta formulario -->
{%elsif current_url contains '/cart/' %}
    <!-- carro -->
        <meta property="og:type" content="website">
        <title>Carro ({% if items %}{{items | round }}{%else%}0{%endif%}) | {{ site.name }}</title>
        <meta name="twitter:title" content="Tengo {{items}} mi carro en {{ site.name }}"/>
        <meta property="og:title" content="Tengo {{items}} mi carro en {{ site.name }}"/>
        <!-- description -->
        <meta name="description" content="{{site.description}}">
        <meta name="twitter:description" content="{{site.description}}">
        <meta property="og:description" content="{{site.description}}">
        <!-- img -->
        <meta name="twitter:image" content="{{site.logo}}">
        <meta property="og:image" content="{{site.logo}}">
    <!-- carro -->
{%elsif current_url contains '/sheet/' %}
    <!-- sheet -->
        <meta property="og:type" content="website">
        <title>{{title}} | {{ site.name }}</title>
        <meta name="twitter:title" content="{{title}}"/>
        <meta property="og:title" content="{{title}}"/>
        <!--description-->
        <meta name="description" content="{{title}} {{site.description}}">
        <meta name="twitter:description" content="{{title}} {{site.description}}">
        <meta property="og:description" content=" {{title}} {{site.description}}">
        <!-- img -->
        <meta name="twitter:image" content="{{site.logo}}">
        <meta property="og:image" content="{{site.logo}}">
    <!-- sheet -->
{%else%}
<!-- meta home -->
        <meta property="og:type" content="website">
        <title>{{ site.name }}</title>
        <meta name="twitter:title" content="{{ site.name }}"/>
        <meta property="og:title" content="{{ site.name }}"/>
        <!--description-->
        <meta name="description" content="{{site.description}}">
        <meta name="twitter:description" content="{{site.description}}">
        <meta property="og:description" content="{{site.description}}">
        <!-- img -->
        <meta name="twitter:image" content="{{site.logo | image_url}}">
        <meta property="og:image" content="{{site.logo | image_url}}">
<!-- end meta home -->
{%endif%}
{{'metadata > certification'| get_component }}
```

## Componente metadata > certification

Es un componente que te permite pegar meta-etiquetas de certicación cómo por ejemplo certificación de dominio de facebook 

### Ejemplo
 
No copies este código, el código de certificación es exclusiva de cada cuenta de facebook 
```html
<meta name="facebook-domain-verification" content="qfksux0hk38iknbpm8purryfk4uw2d" />
```
{% endraw %}