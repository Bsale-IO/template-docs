---
layout: collection
title: load bsale json
published: true
---
{% raw %}
Los componente Load fueron agregados para cargar información en una variable global `Bsale` que puede ser consultada desde cualquier página en los template 4.0.0.

Para saber que versión de Bsale esta cargada en tu sitio 
1. Abre la consola del navegador (`Ctrl` + `Mayuscula` + `i`)




## load head para Bsale 5.4

El componente **load head** debe ir dentro del componente `head` mediante 
```liquid
{{"load head" | get_component}}
```
### Componente
```liquid
<!--- load head ---------------------------------------------->
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
<!----------------------------------------------------------->
```
## load head para Bsale 5.5

⚠ Es necesario tener [Bsale 5.5 ](Bsale-Versión#55-beta)


El componente **load head** debe ir dentro del [[componente head]] mediante 
```liquid
{{"load head" | get_component}}
```
### Componente
```liquid
<!--- load head ---------------------------------------------->
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
            gtm: "{{site.track_manager_id}}",
            analytics: "{{site.google_analytics_id }}",
            pixel: "{{site.facebook_pixel_id}}"
        }
    }
</script>
<!----------------------------------------------------------->
```

## load product

El componente **load product** debe ir dentro del componente `product` mediante 
```liquid
{{"load product" | get_component}}
```
### Componente
```liquid
<!--- load product ----------------------------------------->
<script>
    window.INIT.products.push({
        "product" : {{ product | json_encode }},
        "attributes": {{product.attributes | replace: '=>', ':' | replace: 'nil', 'null' }},
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
<!----------------------------------------------------------->
```

## load collection

El componente **load collection** debe ir dentro del componente que cargue una colección (_calección busqueda, marcas, relacionados, accesorios_) mediante 
```liquid
{{"load collection" | get_component}}
```
#### Componente
```liquid
<!--- load collection ----------------------------------------->
<script>
    window.INIT.collections.push({
        "name": "{{title}}",
        "items":{{collection | json_encode }}
    });
</script>
<!----------------------------------------------------------->
```

## load cart

El componente **load cart** debe ir dentro del componente `carro` mediante 
```liquid
{{"load cart" | get_component}}
```
#### Componente
```django
<!--- load cart ----------------------------------------->
<script>
    window.INIT.cart = {
        "detail" : {{ cart_d | json_encode }},
        "items" : {{ 1 | plus: items | minus: 1 }} ,
        "total" : "{{ subtotal }}"
    }
</script>
<!----------------------------------------------------------->
```
## load checkout 

El componente **load checkout** debe ir dentro del componente `checkout exito` mediante 
```liquid
{{"load checkout" | get_component}}
```
#### Componente
```liquid
<!--- load checkout ----------------------------------------->
<script>
    window.INIT.checkout = {{ checkout | json_encode }};
    window.INIT.checkout.detail = {{cart | json_encode }};
</script>
<!----------------------------------------------------------->
```

{% endraw %}