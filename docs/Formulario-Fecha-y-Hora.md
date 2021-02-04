Bsale no tiene aun soporte para formato de fecha y hora en sus formularios es por ello que debe ser forzado con un `script`

> ### `IMPORTANTE` estos campos no validan si otro cliente haya agendado horas con el mismo horario, no es un sistema de reservas 

1. Crear un formulario con los campos: 

| nombre de campo | validación |
| ---------- | --------- |
|**Fecha**| validado como texto|
|**Hora**| validado como texto|

2. Agregar el siguiente script al archivo _**modificaciones.js**_


```js
(function(){
    var inputFecha = document.getElementById("Fecha");
    var inputHora = document.getElementById("Hora");
    var date = new Date().toISOString().slice(0,10); // formato fecha aaaa-mm-dd
    
    if(inputFecha !== null ){
        inputFecha.type = "date";
        inputFecha.min  = date; // fecha minima hoy
    }
    if(inputHora !== null){
        inputHora.type  = "time"
        inputHora.value = "09:00" // valor por defecto
        inputHora.min   = "09:00" // hora mínima
        inputHora.max   = "19:00" // hora máxima
        inputHora.pattern="[0-9]{2}:[0-9]{2}"
    }
})()
```