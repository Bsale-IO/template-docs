## Cargar tipografía 
***

**NO SE RECOMIENDA usar más de 3 Letras (fuentes, tipografías) por Sitio Web, ya que ello aumenta el tiempo de carga de tu sitio.**

***


Para trabajar con tipografías diferentes puedes emplear:
* [google fonts](https://fonts.google.com/)
* [adobe edge fonts](https://edgewebfonts.adobe.com)
* [cargar de tipografías mediante @font-face](Fuentes%2C-Letras-y-Tipografías#cargar-de-tipografías-mediante-font-face)

Cargando en el componente `style css > fuentes y letras` la tipografía y pegando el link de la fuente en este componente:

### Google fonts
```html
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
```

### Adobe edge fonts
```html
<script src="//use.edgefonts.net/aclonica.js"></script>
```


## Utilizar la tipografía

Dentro de el archivo `modificaciones.css` asigna la fuente al body

```css
body{
   font-family: 'Roboto', sans-serif;
}
```

Si quieres que sólo los títulos (`h1`,`h2`,`h3`, etc...) usen una fuente en particular 
```css
 h1,  h2,  h3,  h4,  h5,  h6,
.h1, .h2, .h3, .h4, .h5, .h6{
   font-family: 'Roboto', sans-serif;
}
```

## Cargar de tipografías mediante @font-face

Si necesitas cargar una tipografía que no esté presente en ninguna librería de las antes presentadas puedes cargar una fuente directamente en el menú archivos mediante `@font-face`
Para esto debes hacer lo siguiente: 

En este tutorial cargaremos la fuente **Roboto**

1. Obtener la fuente en formato `ttf`, en este caso `Roboto-Regular.ttf`, y transformarla a formato `woff` ([transforma tu tipografia aquí](https://convertio.co/es/ttf-woff/)) que es el formato para fuentes de web, para un mejor desempeño también puedes usar `woff2` pero este no es soportado por algunos navegadores como safari.

2. Carga la fuente (`Roboto-Regular.woff`) en el menú `diseño` > `archivos`

3. Dentro del archivo `modificaciones.css` utiliza un código @font-face
> ```css
> @font-face{
>     font-family: "Roboto";
>     src: url("{{'Roboto-Regular.woff' | asset_url }}");
>     font-weight: normal;
> }
> ```
> #### Alternativa `WOFF2`
> Para emplear woff2 es necesario cargar tanto woff como woff2 e indicar su formato, esto para que los navegadores que no soportan woff2 puedan cargar la tipografía en woff 
> ```css
> @font-face{
>     font-family: "Roboto";
>     src: url("{{'Roboto-Regular.woff2'  | asset_url }}") format("woff2"),
>          url("{{'Roboto-Regular.woff'  | asset_url }}") format("woff");
>     font-weight: normal;
> }
> ```

> | configuración | significado |
> | ------------- | ----------- |
> | font-family | nombre que tendrá la familia |
> | src | url donde se encuentra el recurso | 
> | font-weight | Peso que tiene la fuente.<br> Esto puede ser **Normal**, **Bold**, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`|

4. Cargar la fuente por regla css dentro del texto que quieres que la cargue
> ```css
> body{
>    font-family: "Roboto" sans-serif;
> }
> ```
> `sans-serif` es según el [tipo de familia](https://developer.mozilla.org/es/docs/Web/CSS/font-family)

### Agregar variables de una Tipografía 

Para trabajar con dos variables de una tipografía como sería `normal` y `bold` se deben cargar ambos archivo en su versión **woff** y luego llamarla en el archivo `modificaciones.css`

```css
    @font-face{
       font-family: "Roboto";
       src: url("{{'Roboto-Regular.woff'  | asset_url }}");
       font-weight: normal;
    }
    @font-face{
       font-family: "Roboto";
       src: url("{{'Roboto-Bold.woff'  | asset_url }}");
       font-weight: bold;
    }
```

Utilización de la fuente

```css
    body{
       font-family: "Roboto" sans-serif;
       font-weight: normal;
    }
    h1{
       font-weight: bold;
    }
```


