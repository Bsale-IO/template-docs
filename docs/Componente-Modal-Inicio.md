## Menú
- [ Componente ](#componente-modal--inicio)
- [ Configuración ](#componente-configuracion)
- [ Implementación ](#componente-implementación)

## Componente `Modal > Inicio`
```django
{% assign modal_size = 'md' %}
{% assign modal_title = "" %} <!--texto de titulo del modal --> 
{% capture modal_config %}

   "delay":4,
   "show":"always"
  
{% endcapture %}

<div id="modal-inicio" class="modal fade show" data-bs="modal" data-info='{ {{modal_config}} }' tabindex="-1" role="dialog">
    <div class="modal-dialog modal-{{modal_size}}" role="document">
        <div class="modal-content">
            {% if modal_title.size > 0 %}
             <div class="modal-header">
               <h5 class="modal-title">{{modal_title}}</h5>
                 <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
            {% else %}
            <div><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
           {% endif %}
            <div class="modal-body">
                <!-- contenido acá -->



                <!-- contenido acá -->   
            </div>
        </div>
    </div>
</div>
```
## Configuración 
### A. modal_size
```django
{% assign modal_size = 'md' %}
```
|modal_size|	tamaño|
|---|---|
|"lg"	|Grande|
|"md"	|Normal, por defecto|
|"sm"	|Pequeño|

### B. modal_title
Cuando la configuración `modal_title` esté vacía no imprimirá nada, de lo contrario imprimirá su contenido 

1. Modal sin titulo
```django
{% assign modal_title = "" %}
```
2. Modal con titulo
```django
{% assign modal_title = "Bienvenido" %}
```

### C. modal_config

|configuración	|significado|
|---|---|
|delay	| cuánto segundos esperar antes de que se cierre el modal por si sólo | 
|show	| cuantas veces se muestra el modal (once, day, always) | 

### Ejemplo 1
```
delay:10,
show: "once"
```
- `delay: 10` modal dura 10 segundos en pantalla 
- `show: "once"` modal se carga sólo la primera vez que el usuario visita la página.

### Ejemplo 2
```
show: "day"
```
- `delay` no existe configuración delay, el modal permanece en pantalla hasta que el cliente lo cierre
- `show: "day"` modal se carga sólo una vez al día. 

### Ejemplo 3
```
delay:5,
show: "always"
```
- `delay: 5` modal dura 5 segundos en pantalla 
- `show: "always"` modal se carga cada vez que el cliente recarga o visite la página 


## Implementación
1. Ir a menú Diseño ⮞ plantilla y revisar que no exista un componente `Modal > Inicio`, si existe lo debes borrar, es una configuración antigua. 
1. Crear un componente de nombre `Modal > Inicio`
2. Insertar el componente dentro del componente inicio 
> ```django
> {{ "Modal > Inicio" | get_component }}
>```