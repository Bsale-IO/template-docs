### Descripción

Esta función se ejecuta cuando existen cambios en los checkbox de los filtros, actualizando el estado de los mismos. En primer lugar valida si el chechkbox esta checkeado para agregarlo al arreglo de filtros, si no esta checkeado se hace un filter a los del state para obtener su index y para cerciorarse de que realmente está el filtro, luego se elimina.

```js
function updateFilter(e) {
    try {
      const { checked, dataset, value } = e.target
      if (checked) {
        filters.push({
          //si no encuentra data-filter utiliza data-info
          [dataset.filter || dataset.info]: value
        })

      } else {

        let filterIndex
        filters.filter((filter, i) => {
          //si no encuentra data-filter utiliza data-info

          const prevFilter = filter[dataset.filter || dataset.info] === value

          if (prevFilter) {
            filterIndex = i
            return prevFilter
          }
        }).length && filters.splice(filterIndex, 1)
      }

    } catch (ex) {
      console.warn(ex)
    }
    if (auto) {
      filterCollection(e);
    }
  }
```
