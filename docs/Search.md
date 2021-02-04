url: /search?search_text=[busqueda]

Corresponde al resultado de la busqueda.


## Variables Liquid 

***

## Title:
Corresponde al texto buscado.

Se utiliza:

```

{{title}}

```

***

## Collection:
Corresponde al grupo/arreglo de elementos buscados.

Se utiliza "for". Ejemplo:
```

{% for product in collection%}
     {{product.title}}
     {{product.id}}
     {{product.notice}}
     {{product.variant_price}}
     {{product.variant_id}}
     {{product.default_image}}
     {{product.price_list}}
     {{product.video_url}}
     {{product.link}}
     {{product.description}}
     {{product.has_decimal}}
     {{product.discount_rate}}
     {{product.discount_name}}
     {{product.discount_cant}}
     {{product.final_price}}
{% endfor%}


```


***

## Link:
Corresponde a url de búsqueda (/search?search_text=[busqueda]).

Se utiliza:

```

{{link}}

```

***

## Total_Page:
Corresponde a la cantidad de páginas que se imprimirán.

Se utiliza:

```

{{total_page}}

```

***

## Total_item:
Corresponde a la cantidad de elementos que arroja la búsqueda.

Se utiliza:

```

{{total_item}}

```

***

## Item_per_page:
Corresponde a la cantidad de elementos que se muestran por página.

Se utiliza:

```

{{item_per_page}}

```

***

