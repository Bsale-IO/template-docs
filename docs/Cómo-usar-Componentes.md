## Definición del Componente

Para crear un nuevo [[componente]], debes hacer clic en el símbolo (+), darle un **nombre** y definirlo como `get_component`

```html
<div class="row">
   <div class="col">
      este es un componente de prueba
   </div>
</div>
```

#### Utilización del Componente

Un componente puede ser usado dentro de otro componente o directamente dentro de la [[plantilla | Plantillas]]

```html
<div class="container">
   {{ 'componente' | get_component }}
</div>
```

#### Resultado

```html
<div class="container">
   <div class="row">
      <div class="col">
         este es un componente de prueba
      </div>
   </div>
</div>
```

## Nombre de un componente

Un componente puede tener cualquier nombre, pero te recomendamos que los definas de acuerdo a la utilización que le darás, por ejemplo: si un componente lo utilizaras en la [[Plantilla]] Producto y contendrá exclusivamente la información principal del producto, entonces llama **Producto - Detalle**. Donde la primera parte indica el nombre de la plantilla y la segunda el tipo de información que contiene. 

Los Componentes que utilices en varias páginas y que son únicos llámalos sólo por la información que contienen, por ejemplo: **Cabecera** o **Pie de Página** 
