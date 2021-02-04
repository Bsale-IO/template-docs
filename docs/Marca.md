url: /brand/[nombre marca]

Corresponde al listado de productos que contienen esa marca.


## Variables Liquid 

***

## Title:
Corresponde al nombre de la marca.

Se utiliza:

```

{{title}}

```

***

## Collection:
Corresponde al grupo/arreglo de producto.

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
Corresponde a url de la brand(/brand/[nombre marca]).

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
Corresponde a la cantidad de productos existentes en la marca.

Se utiliza:

```

{{total_item}}

```

***

## Item_per_page:
Corresponde a la cantidad de productos que se muestran por página.

Se utiliza:

```

{{item_per_page}}

```

***