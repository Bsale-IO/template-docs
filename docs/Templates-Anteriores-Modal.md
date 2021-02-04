# Template Anteriores

Los template hasta 2018 usaban [Bootstrap 3](https://getbootstrap.com/docs/3.4/javascript/#modals-options), su modal se construye así:

```django
<!-- Modal -->
<div id="idModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- contenido -->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">
           Título del modal
        </h4>
      </div>
      <div class="modal-body">
        <!-- aquí va el contenido -->


        <!-- aquí va el contenido -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">
          Cerrar
        </button>
      </div>
    </div>
  </div>
</div>

<script>
   // modal se abre al cargar la página 
   (function(){
      $('#idModal').modal('show');
   })()
</script>
```

El componente debe ser llamado en la pantalla donde se va a desplegar 
