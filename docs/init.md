init es una estructura json a la que puede acceder entrando a la consola y digitando 
```
> Bsale
```

* [Head](#Componente-Head)

## Load Head

```django
<script>
    window.INIT = {
        cart: {},
        collections: [], 
        products: [], 
        config: {
            "currency":{{ site.currency | replace: '=>', ':' | replace: 'nil', 'null' }},
            "country":"{{ site.country }}",
            "lang": "{%if site.currency.isoCode == 'CLP' %}es-CL{%else%}es-PE{%endif%}"  ,
            "addToCartLimit":{{ site.addToCartLimit }},
            product: {
                // mensajes mostrados en el stock de producto
                stock: {
                   {{ 'Producto > mensajes stock' | get_component }}
                   "addToCartLimit":{{ site.addToCartLimit }}
                }
            },
            gtm: false,
            analytics: false,
            pixel: false
        }
    }
</script>
```

## Componente Load Product
```django
<script>
    window.INIT.products.push({
        "product" : {{ product | json_encode }},
        "attributes": {{product.attributes | replace: '=>', ':' | replace: 'nil', 'null'}},
        "variants": {{ variant | json_encode }},
        "related": {
            "name": "Relacionados - {{ title }}",
            "items": {{ related | json_encode}}
        },
        "accessories": {
            "name": "Accesorios - {{ title }}",
            "items": {{ accessories | json_encode }}
        }
    });
</script>
```

## Componente Load Collection
```django
<script>
    window.INIT.collections.push({
        "name": "{{title}}",
        "items":{{collection | json_encode }}
    });
</script>
```

## Componente Load Checkout
```django
<script>
    window.INIT.checkout = {{ checkout | json_encode }};
    window.INIT.checkout.detail = {{cart | json_encode }};
</script>
```

## Componente Load Cart
```django
<script>
    window.INIT.cart = {
        "detail" : {% if cart_d.size > 0%}{{ cart_d | json_encode }} {% else %}[]{% endif %},
        "items" : {{ 1 | plus: items | minus: 1 }} ,
        "total" : "{{ subtotal }}"
    }
</script>
```