Cada sitio tiene ___variables globales___ que pueden ser utilizadas en cualquier [Plantilla](Plantillas) o [página del sitio](URL-ecommerce-Bsale) 


| codigó | descripción |
| ------ | ----------- |
| `{{site.name}}` | Nombre de la página |
| `{{site.url}}` | Dirección `url` del sitio `nombrepagina.com`|
| `{{canonical_url}}` | Dirección `url` del sitio `https://nombrepagina.com/` |
| `{{ site.logo }}` | enlace de la imagen del [logo](#Logo) |
| `{{ site.favicon }}` | enlace de la imagen del [favicon](#favicon) |
| `{{ site.description }}` | descripción del sitio |
| `{{site.offices}}` | `array` [sucursales](#Sucursales) del cliente | 
| `{{site.country}}` | nombre del pais*: `Chile`, `Perú` |
| `{{site.countryIso}}` | sigla ISO del país*: `cl`, `pe` |
| `{{ site.currency }}` | `array` configuración de [moneda](#Moneda)* |
| `{{ site.shop_address }}` | dirección de la tienda |
| `{{ site.shop_email }}` | email de la tienda |
| `{{ site.social_networks }}` | `array` [redes sociales](#redes-sociales)|
| `{{ site.contact_numbers }}`| `array`[Números de Teléfono](#numeros-de-telefono)|
|`{{site.track_manager_id}}`| ID de [Google Tag Manager](Google-Tag-Manager) |
|`{{site.google_analytics_id }}`| ID de [Google Analytics](Google-Tag-Manager) |
|`{{site.facebook_pixel_id}}`| ID de [Facebook Pixel](Facebook-Pixel)|

> (*) según país de la empresa
## Logo

Ej.:
```html
<a href="/">
   <img src="{{ site.logo | image_url }}" alt="{{ site.name }}"  title="{{ site.name }}"/>
</a>
```

## Favicon

Ej.:
```html
<link rel="icon" type="image/png" href="{{ site.favicon }}" />
```

## Moneda
`{{site.currency}}`

| código | descripción | Configurable | 
| ------ | ----------- | --------- |
| `{{site.currency.name}}` | nombre de la moneda. ej: `peso chileno` | configuración de moneda | 
| `{{site.currency.symbol}}` | símbolo. ej: `$` `S/` |  configuración de moneda |
| `{{site.currency.decimals}}` | número de decimales |  configuración de moneda |
| `{{site.currency.isoCode}}` | nombre de la moneda. ej: `CLP`, `PEN` , `USD`|  configuración de moneda |
| `{{site.currency.round}}` | `boolean` **true** o **false** | configuración de moneda | 
| `{{site.currency.decimalSeparator}}`| carácter de separador decimal: `,`,`.` | no editable*|
| `{{site.currency.thousandSeparator}}`| carácter de separador de miles: `.`,`,`| no editable* |

> (*) según país de la empresa

## Redes Sociales
`{{ site.social_networks }}`

* [[Agregar tus redes sociales]]
* [[compartir en redes sociales]]

## Números de Teléfono

`{{ site.contact_numbers }}`

```django
{% for tel in site.contact_numbers %}
   {{tel}}
{% endfor %}
```
## Sucursales 
```
   {% for of in offices %}
      {{of.id}}
      {{of.name}}
      {{of.alias}}
   {% endfor %}
```
| variable | significado | 
| ----- | -----|
| `of.id` | id de la sucursal dentro de Bsale | 
| `of.name`| nombre de la sucursal en el sistema |
| `of.alias` |  nombre visible para el cliente |

## También te puede interesar
 
* [[ Metadata ]]
* [[ Google Tag Manager ]]
* [[ Facebook pixel (beta) | facebook pixel ]]

