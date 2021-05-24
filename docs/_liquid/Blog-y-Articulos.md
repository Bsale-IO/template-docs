---
layout: default
title: Blog y Artículos
published: true
---

{% raw %}
url: /blog

Corresponde al conjunto de artículos habilitados para desplegarse como blog


## Variables Liquid 

| variable | valor | 
| -------- | ----- |
| `{{articles}}` | `object` conjunto de todos los artículos | 

## Articles:
Corresponde al grupo/arreglo de artículos.

Se utiliza `for` Ejemplo:

```liquid
{% for article in articles %}
     {{article.title}}
     {{article.content}}
     {{article.created}}
     {{article.modify_date}}
     {{article.link}}
     {{article.imagen}}
{% endfor %}

```

| Nuevas                  | Tipo |Descripción                          |
| ----------------------- | ------|------------------------------ |
|`{{article.title}}`      | `string`|Título del artículo                  |
|`{{article.content}}`    | `html` |Contenido del artículo                  |
|`{{article.created}}`    | `string`|Fecha creación del artículo |
|`{{article.modify_date}}`|  `string`| Fecha modificación del artículo   |
|`{{article.link}}`       | `enlace`| url del artículo                     |
|`{{article.imagen}}`     |  `enlace`| imagen predefinida del artículo      |

## Utilizar un componente blog

```liquid
{{"nombre componente" | get_blog: "nombre componente"}}
```
#### Ejemplo
```liquid
{{"blog_home" | get_blog: "blog_home"}}
```

## Obtener Artículo específico 
Para obtener un artículo especifico se emplea el filtro `get_article`de la siguiente forma
```liquid
{{ "título del articulo" | get_article }}
```

{% endraw %}