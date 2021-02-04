<sub><sup>[[Home]] > [[Componente]] > Formulario </sup></sub>


1. [Plantillas de Formularios](#Plantillas-de-Formularios)
2. [Variables de Formulario](#Variables)
3. [Imprimir Formulario](#Imprimir-Formulario)
4. [Correo de respuesta](#Correo-de-Respuestas)
5. [[Formulario Fecha y Hora]]

## Formularios Especiales
1. [Encargar](https://github.com/gmontero/bsale-market-design-doc/wiki/Modal-Producto#modal-encargar-modal--encargar-producto)
2. [Cotización](https://github.com/gmontero/bsale-market-design-doc/wiki/Componente-Carro-Detalle-y-Cotizador#formulario-cotizador)

## Plantillas de Formularios

| Tipo de  plantilla | url |
| ------------------ | ---- |
| `Formulario` | **/form/**`{{nombre formulario}}` |
| `Formulario-exito`, `Formulario-error` | **/form/save/**`{{nombre formulario}}` | 

### Estructura básica Plantilla

```django
<!DOCTYPE html>
<html lang="es">
   <head>
      {{ 'head' | get_component }}
   </head>
   <body>
      {{ 'body' | get_component }}
      {{ 'Cabecera' | get_component }}
      {{ 'Formulario' | get_component }}
      {{ 'Pie de Página' | get_component }}
   </body>
</html>
```

## Variables 

| Código | Descripción |
| ------ | ----------- |
| `{{title}}` | nombre del formulario , sólo funciona en plantilla formulario |
| `{{msg}}` | Mensaje del formulario, puede ser de éxito o error |
| `{{error}}` | `true` error, `false` exito |

## Imprimir Formulario

```django
{{ "nombre formulario" | print_form: "$Mensaje", "$Botón", "$Requerido", $Placeholder }}
```
| Variables | Descripción |
| --------- | ----------- |
| `$Mensaje` | `String` Mensaje de éxito del formulario, debe ir entre comillas | 
| `$Botón` | `String` Texto del botón , debe ir entre comillas |
| `$Requerido` | `String` Texto que aparecerá si el campo es requerido, debe ir entre comillas |
| `$Placeholder` | `Boolean:true` Muestra sólo placeholder |
| `$Placeholder` | `Boolean:false` Muestra  label y  placeholder | 


### Ejemplos
#### 1. Formulario **con label**
```js

{{ "contactanos" | print_form: "Gracias por contáctarnos", "Enviar", "", false }}

```
#### 2. Formulario **sin label**
```js

{{ "contactanos" | print_form: "Gracias por contáctarnos", "Enviar", "", true }}

```
#### 3. Formulario **Botón con icono**

Icono en base a [[fontawesome.com | https://fontawesome.com/v4.7.0/icon/envelope/]]
```js

{{ "contactanos" | print_form: "Gracias por contáctarnos", "<i class='fa fa-envelope'></i>", "*", true }}

```

## Correo de Respuestas

Todos los formularios pueden ser configurados para notificar al cliente la recepción de su correo. Para ello se debe habilitar la opción `Habilitar envío de email al cliente` en la configuración del formulario. 

### Respuestas personalizadas 

Es posible emplear respuestas personalizadas capturando los datos que el cliente llenó en el formulario, esto es posible utilizando la variable `{{data}}`

`{{data}}` captura los datos aportados por el cliente en los formulario según el campo. De tal forma que si el formulario tiene un campo `email` el correo electrónico de cliente será `{{data.email}}`

**La única limitante es que los nombre de los campos NO PUEDEN TENER ESPACIOS** variables como ~data.correo-electrónico~ no funcionan 





