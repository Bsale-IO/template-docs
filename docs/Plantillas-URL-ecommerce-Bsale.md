Según el contenido las url del ecommerce están estructuradas de la siguiente forma:

| URL*|Plantilla|
| ------ | ------- |
| `https://tusitio.com` | [**Inicio**](Inicio) |
| `/article/[nombre-articulo]` | [**Artículo**](Blog-y-Artículos) |
| `/blog` | [**Blog**](Blog-y-Artículos), muestra artículos de tipo blog |
| `/collection/[nombre-coleccion]` | [**Colección**](Colección,-Marcas-y-Búsqueda) |
| `/brand/[nombre-coleccion]` | [**Marca**](Colección,-Marcas-y-Búsqueda) |
| `/search?search_text=` `valor-de-busqueda` | [**Búsqueda**](Colección,-Marcas-y-Búsqueda) |
| `/cart/display/` | [**Carro**](Carro) |
| `/checkout` | **checkout paso 1** `externo` , selección de forma de pago, shipping y llenado de datos del cliente |
| `checkout/get_checkout_summary/[código validación {token}]` | **checkout paso 2** `externo`  página resumen antes de saltar al medio de pago |
| `/checkout/success/[código validación {token}]`| **checkout paso 3** [**Checkout Éxito**](Checkout-Éxito) |
| `/form/[nombre-formulario]/` | [**Formularios**](Formularios)  |
| `/form/save/[nombre-formulario]/` | [**Formulario** enviado](Formularios) |
| `/form/error/[nombre-formulario]/` | [**Formulario** error de envio](Formularios) |
| `/login/`  | Login `externo` |
| `/product/[nombre-producto]` | [**Productos**](Productos) |
| `/sheet/[nombre-pagina]` | [Páginas tipo sheet](Variables-de-Paginas-Sheet) |
| `/sitemap.xml` | sitemap del sitio, lista todos los enlaces del sitio |
| `/robots.txt`  | listas los robots de buscadores y sus condiciones, puede ser editado en archivos > [[robots.txt]]



> * Todos los sitios en `Bsale` son `https`
> * Las plantillas **Externas** no son editables

### Variables de url

|Variable|contenido| formato | 
| ------ | ------- | ------- |
| `{{canonical_url}}` | url del home/inicio | `https://misitio.com/` |
| `{{current_url}}` | url de la pagina visitada | `https://misitio.com/pagina-visitada` |
| `{{url_checkout}}` | página del checkout |`/checkout` o `/checkout/login` |

## Evaluar cual es la url actual 

```django
{% if current_url contains "/product/" %}
   es un producto
{% elsif current_url contains "/collection/" %}
   es una colección
{% elsif current_url contains "/brand/" %}
   es una colección de marcas
{% elsif current_url contains "/blog/" %}
   blog
{% else %}
   es otra página
{% endif %}
  etc...
```



