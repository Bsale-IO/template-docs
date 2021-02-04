Para cargar el robots en tu ecommerce debes: 
1. Ir al menú `Tienda en Línea` ➡ `Diseño` ➡ `Archivos` 
2. Buscar el archivo **_robots.txt_**
   > Si no existe lo puedes crear haciendo clic en el botón ➕ _(nuevo archivo)_. 
   >
   > Es importante que el archivo tenga el nombre **_robots.txt_**, no puede tener otro nombre
3. En dicho archivo debes pegar el siguiente código. 

```django


{% if canonical_url contains 'bsalemarket' %}
User-agent: *  
Disallow: /
{% else %}
# @Bsale {{'today'| date: '%Y'}}
# Agentes 1 
{% capture allow %}
Allow: /$
Allow: /product/*
Allow: /collection/*
Allow: /brand/*
Allow: /sheet/*
Allow: /article/*
Allow: /blog
Allow: /robots.txt
Allow: /sitemap.xml
Disallow: /
{% endcapture %}

User-agent: Googlebot
{{allow}}   

User-agent: Bingbot
{{allow}}     

User-agent: Applebot
{{allow}}     

User-agent: facebookexternalhit
{{allow}} 

User-agent: Twitterbot
{{allow}} 

User-agent: Pinterestbot
{{allow}}     

# Resto de agentes sólo el home
User-agent: *
Crawl-delay:120
Allow: /$
Disallow: /

# Sitemap
Sitemap: {{canonical_url}}/sitemap.xml
{% endif %}


```
> * Si la URL contiene bsalemarket bloquea todos los robots
> * De los robots de **Google, Bing y Apple** permite las páginas de Productos, Colecciones, Marcas, Páginas (sheet), Artículos, robots y sitemap
> * De el resto de robots sólo permite la página de inicio. 


## Test

Puedes revisar si se cargo bien entra a la url de tu web:
```
tusitio.com/robots.txt
```

Además puedes revisarlo en estos sitios:
* [Testear robots en google](https://www.google.com/webmasters/tools/robots-testing-tool?utm_source=support.google.com/webmasters/&utm_medium=referral&utm_campaign=%206062598)
* [Test de otros robots](https://technicalseo.com/tools/robots-txt/)