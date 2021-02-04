<sub><sup>[[Home]] > [[Componentes]] > Funcionamiento Básico</sup></sub>

#### Definición del Componente

Para crear un nuevo componente, debes hacer clic en el símbolo (+), darle un **nombre** y definirlo como **get_component**

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

## Ver también 

* [[Tipo de Componentes | Componentes#tipos-de-componentes]]
* [[Componentes Básicos | Componentes#componentes-básicos]]