### Descripción

Crea una consulta de filtros dependiendo de los checkbox de los filtros que se encuentren seleccionados,finalmente cambia la url con los resultados obtenidos de la consulta. 

```js
function filterCollection(e) {
    try {
      let filterQuery = '';
      e.preventDefault()
      filters.forEach((filter, i) => {
        const [filterKey] = Object.keys(filter)
        filterQuery += `${filterQuery ? '&' : '?'}${filterKey}=${filters[i][filterKey]}`

      })
      location.search = filterQuery.replace(/&page=\d+/gm, "")
    } catch (ex) {
      console.warn(ex)
    }
  }
```