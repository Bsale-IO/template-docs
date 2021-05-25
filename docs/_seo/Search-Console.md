---
layout: default
title: Search Console
tag: ["Google"]
published: true
---

{%raw %}
| Sitio web |
| --- | 
| [https://search.google.com/search-console](https://search.google.com/search-console/about?hl=es) | 

_**Search Console**_ es una plataforma que te permite potenciar el SEO de tu sitio, pudiendo entrar a google tu sitemap e indicar que páginas indexar o no en el buscador


## Crear una Cuenta

1. Para crear una cuenta en search console necesitas una cuenta de gmail
2. Al crear una cuenta te recomendamos hacerlo por **_`Prefijo de la URL`_**

  > ![](https://raw.githubusercontent.com/Bsale-IO/template-docs/master/docs/assets/img/search_console/search_console_01.png)

3. Luego se te pedirá verificar la propiedad del sitio, para ellos te recomendamos 2 de métodos

## Validación 
### _Etiqueta HTML_

 ![](https://raw.githubusercontent.com/Bsale-IO/template-docs/master/docs/assets/img/search_console/search_console_02_etiquetaHTML.png)

- Copia el Código que te entrega google 
```html
     <!-- código de ejemplo, no copiar -->
     <meta name="google-site-verification" content="I6kaJR4cxTwux5ZYSGYFUnl8FFyvKI5Y..." />
```
- Pégalo en el componente [metadata > certification](https://github.com/Bsale-IO/template-docs/wiki/Metadata#componente-metadata--certification)

### _Google Analytics_

> ![](https://raw.githubusercontent.com/Bsale-IO/template-docs/master/docs/assets/img/search_console/search_console_02_analytics.png)

- Si tienes configurada una cuenta de google analytics en Bsale puedes hacer la validación sólo haciendo clic en el botón Verificar

### Cargar Sitemap

1. En el menú del costado izquierdo selecciona **_Sitemaps_**
2. Donde dice Añadir un sitemap, escribe `sitemap.xml` y haz clic en enviar. Esto enviará el mapa de tu sitio a Google para que se pueda indexar y aparezca en los resultados de búsqueda 

> ![](https://raw.githubusercontent.com/Bsale-IO/template-docs/master/docs/assets/img/search_console/search_console_03.png) 
{% endraw %}