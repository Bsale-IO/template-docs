---
layout: collection
title: Blog y Artículos
published: true
---


url: /blog

Corresponde al conjunto de artículos habilitados para desplegarse como blog


## Variables Liquid 

| variable | valor | 
| -------- | ----- |
| `{{articles}}` | `object` conjunto de todos los artículos | 

## Articles:
Corresponde al grupo/arreglo de artículos.

Se utiliza `for` Ejemplo:

```django
{% for article in articles %}
     {{article.title}}
     {{article.content}}
     {{article.created}}
     {{article.modify_date}}
     {{article.link}}
     {{article.imagen}}
{% endfor %}

```

| Antiguas   | Nuevas                  | Tipo |Descripción                          |
| ---------- | ----------------------- | ------|------------------------------ |
|`td_name`   |`{{article.title}}`      | `string`|Título del artículo                  |
|`td_content`|`{{article.content}}`    | `html` |Contenido del artículo                  |
|            |`{{article.created}}`| `string`|Fecha creación del artículo |
|            |`{{article.modify_date}}`|  `string`| Fecha modificación del artículo   |
|            |`{{article.link}}`       | `enlace`| url del artículo                     |
|            |`{{article.imagen}}`     |  `enlace`| imagen predefinida del artículo      |

## Utilizar un componente blog

```css
{{"nombre componente" | get_blog: "nombre componente"}}
```
#### Ejemplo
```css
{{"blog_home" | get_blog: "blog_home"}}
```

## Obtener Artículo específico 
Para obtener un artículo especifico se emplea el filtro `get_article`de la siguiente forma
```css
{{ "título del articulo" | get_article }}
```