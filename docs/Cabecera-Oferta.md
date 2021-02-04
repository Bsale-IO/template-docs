|configuración	|significado|
| ------------- | ---------- |
|`delay`|`number` permite definir cuánto segundos esperar antes de que se cierre el modal por si sólo.|
|`show`|	`"once"` (**una vez**) carga el modal sólo la primera vez que se pueda.<br>`"day"` (**día**) se carga una vez al día.<br>`"always"` (**siempre**) carga el modal siempre que se cargue la página.<br><br> Las condiciones se cumplen hasta que <br>**1. El cliente borre las cookies del navegador**<br>**2. El contenido del alert cambie**


```django
{% capture config %}
   
    "delay":10,
    "show":"day"
   
{% endcapture %}


<div class="text-center d-none" class="show"  data-bs="offer.alert" data-info='{ {{config}} }' role="alert">
<!-- tu mensaje aqui -->

<!-- hasta aqui --> 
</div>
```