<sub><sup>[[Home]] > [[Componentes]] > Menú </sup></sub>

Este componente depende de los Menús de navegación que son configurados en

 `Tienda en Linea > Navegación` para más información [clic aquí](https://bsalehelp.zendesk.com/hc/es/articles/360004530854-CONFIGURACI%C3%93N-NAVEGACI%C3%93N)

* [Definir Componente Menú](#definir-componente-menú)
* [Menú de más de un nivel](#menú-de-más-de-un-nivel)
* [Implementación Componente Menú](#implementación-componente-menú)

## Definir Componente Menú
Debe crear un componente nuevo con `filtro a usar: get_component` dentro de este componente debe utilizar la siguiente estructura

**Menú**
* Camisetas
* Pantalones
#### Estructura Básica
```js
{% for item in menu %}
   {{item.ml_name}}
   {{item.ml_link}}
{% endfor %}
```
#### Estructura en html
```html
<ul>
   {% for item in menu %}
      <li><a href="{{item.ml_link}}">{{item.ml_name}}</a></li> 
   {% endfor %}
</ul>
```

#### Resultado
```html
<ul>
    <li>
        <a href="/collection/camisetas">Camisetas</a>
    </li>
    <li>
        <a href="/collection/Pantalones">Pantalones</a>
    </li> 
</ul>
```

## Menú de más de un nivel

**Menú**
* Camisetas
* Pantalones
  * pantalones de hombre
  * pantalones de mujer

```html
<ul>
   {% for item in menu %}
      {% assign submenu = item.ml_id | get_sub %} 
      <li>
          {% if submenu.size > 0 %}
          <a>{{item.ml_name}}</a>
             <ul>
                {% for subitem in submenu %}
                   <li>
                       <a href="{{subitem.ml_link}}">{{subitem.ml_name}}</a>
                   </li>
                {% endfor%}
             </ul>
          {% else %}
             <a href="{{item.ml_link}}">{{item.ml_name}}</a>
          {% endif%}
      </li> 
   {% endfor %}
</ul>
```
#### Resultado
```html
<ul>
      <li><a href="/collection/camisetas">Camisetas</a></li>
      <li>
          <a href="/collection/Pantalones">Pantalones</a>
          <ul>
              <li><a href="/product/camisetas-de-hombre">Camisetas de Hombre</a></li>
              <li><a href="/product/camisetas-de-mujer">Camisetas de Mujer</a></li>
          </ul>
     </li> 
</ul>
```

## Implementación Componente Menú
Para implementar el menú en cualquier componente o plantilla debes llamar de la siguiente forma

```
{{ 'Nombre del Menú' | get_menu: 'Nombre del Componente del menú' }}
```
Ejemplo: 

```
{{ 'Menú Cabecera' | get_menu: 'Cabecera - Menu' }}
```

## Ver tambien
* [[Cabecera | Componente Cabecera]]
* [[Pie de Página | Componente Pie de Página]]