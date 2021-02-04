<sub><sup>[[Home]] > [[Componente]] > Componente Buscador </sup></sub>


## Componente por defecto en los templates 

``` html
<form class="d-none d-md-flex bs-search" action="/search" method="get">
  <input type="search" name="search_text" placeholder="Buscar...">
  <button type="submit">
     Buscar
  </button>
</form>
```

## Ruta de Búsqueda

```js
tupagina.com/search?search_text={termino_de_busqueda}
```
* Para más información revisar [[Parámetros de búsqueda]]