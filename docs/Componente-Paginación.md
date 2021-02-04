<sub><sup>[[Home]] > [[Componente]] > Componente paginación </sup></sub>

Se puede utilizar en:
* [[Colecciones | Colección, Marcas y Búsqueda]]
* [[ Búsquedas | Colección, Marcas y Búsqueda ]]
* [[ Colecciones por Marcas | Colección, Marcas y Búsqueda ]]
* [[Blog | Blog y Artículos ]]
​
# Paginación
​
Dentro de cualquiera de estas páginas, existe un objecto **pagination** con la información de la paginación, el cual contiene las siguientes propiedades:
​
| Variable | Descripción |
| -------- | ----------- |
| `{{pagination.total}}`| número con el total de páginas |
| `{{pagination.current}}`| número de la página actual |
| `{{pagination.prev}}`| link con la página anterior (no va a existir al estar en la primera página) |
| `{{pagination.next}}`| link con la página siguiente (no va a existir al estar en la última página) |
| `{{pagination.pages}}`|  `object` si hay más de una página, contiene una lista con todas las páginas disponibles. | 
| `{{page.url}}`| link a la página |
| `{{page.number}}`|  número de la página | 
| `{{page.current}}`| `boolean` **true** si es la página actual, **false** si no lo es |

```django
{% for page in pagination.pages %}
   {{page.url}}
   {{page.number}}
   {{page.current}}
{% endfor %}

```

### Ejemplo de `{{pagination.pages}}`

1. El objecto `{{pagination.pages}}` siempre devolverá 5 o menos páginas, de esta forma si tengo 5, 10 , 20 etc... siempre retornará una estructura de 5 páginas. Si existen menos de 5 se devolverán esas páginas.
2. La pagina actual `{{page.current}}` siempre irá hacia el centro de la paginación, a menos que ocupe los lugares primero, segundo, penúltimo, o último. Por ejemplo: 

> Si tengo 10 páginas y estoy en la página 1
<table>
<tr><td><u>1</u></td><td>2</td><td>3</td><td>4</td><td>10</td></tr>
</table>

> Si tengo 10 páginas y estoy en la página 4
<table>
<tr><td>1</td><td>3</td><td><u>4</u></td><td>5</td><td>10</td></tr>
</table>

> Si tengo 10 páginas y estoy en la página 9
<table>
<tr><td>1</td><td>7</td><td>8</td><td><u>9</u></td><td>10</td></tr>
</table>

> Si tengo 10 páginas y estoy en la página 10
<table>
<tr><td>1</td><td>7</td><td>8</td><td>9</td><td><u>10</u></td></tr>
</table>





​
## Componente
​
El siguiente ejemplo contiene el [componente pagination de Bootstrap](https://getbootstrap.com/docs/4.5/components/pagination). También se puede crear una estructura personalizada. Se recomienda crear un componente ```paginacion``` y llamarlo en ```Coleccion - Buscador - Marca``` y ```Blog```.
​
```html
{% if pagination.pages %}
<nav>
    <ul class="pagination justify-content-center">
        {% if pagination.prev %}
            <li class="page-item">
                <a class="page-link" href="{{ pagination.prev }}"><i class="fas fa-angle-left"></i></a>
            </li>
        {% endif %}
        {% for page in pagination.pages %}
            <li class="page-item{% if page.current %} active{% endif %}">
                {% if page %}
                    <a class="page-link" href="{{ page.url }}">{{ page.number }}</a>
                {% else %}
                    <span class="page-link cursor-default">..</span>
                {% endif %}
            </li>
        {% endfor %}
        {% if pagination.next %}
            <li class="page-item">
                <a class="page-link" href="{{ pagination.next }}"><i class="fas fa-angle-right"></i></a>
            </li>
        {% endif %}
    </ul>
</nav>
{% endif %}
```
​
## Personalizar estilos
​
Para sobreescribir los colores que Bootstrap agrega por defecto a la paginación, es necesario agregar el siguiente css en el archivo ```modificaciones.css``` con los colores de la tienda:
​
```css
/* color de números e íconos */
.page-link {
    color: grey;
}
​
/* color al clickear un botón */
.page-link:focus {
    box-shadow: none;
}
​
/* color de la página actual */
.page-item.active .page-link {
    background-color: red;
    border-color: red;
}
```
​
> Para revisar la versión anterior este componente ver [[Paginación Antigua]]