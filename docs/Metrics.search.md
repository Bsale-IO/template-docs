<sup>[[JS Bsale]] > [[Metrics]] > search</sup>

# search
Este método se ejecuta cuando un usuario hace una busqueda.

## Método por defecto
Se envía el término con el que se hizo la busqueda.
```js
function search(searchString) {
  return {
    gtm: {
      event: 'search',
      data: {
        searchString: searchString
      }
    },
    analytics: {
      event: 'search',
      data: {
        search_term: searchString
      }
    },
    pixel: {
      event: 'Search',
      data: {
        search_string: searchString
      }
    }
  }
}
```

## Sobreescritura
Para sobreescribir el método y personalizar la información que se envía, se debe redefinir en el objecto [[Metrics]]. La función va a rebicir como único argumento, un string con el término de búsqueda.
```js
Metrics.search = function (searchString) {
  return {
    gtm: {
      event: null,
      data: null
    },
    analytics: {
      event: null,
      data: null
    },
    pixel: {
      event: null,
      data: null
    }
  }
}
```
