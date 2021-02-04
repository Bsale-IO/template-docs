### Descripción

Al presionar el botón agregar al carro, se agrega la clase "is-invalid" al selector de variantes si no se han seleccionado.  De esta manera se hace necesario escoger la variante para continuar con el proceso. Cuando esten las variantes correspondientes selecionadas, se elimina la clase "is-invalid" del selector.

```js
function alertAttr() {
    //agrega invalid a selector de attr vacios
    for (let i = 0; i < attrSelect.length; i++) {
      let select = attrSelect[i];
      if (select.value === 'reset') {
        select.classList.add("is-invalid")
        function clean() {
          select.classList.remove('is-invalid')
          select.removeEventListener('focus', clean)
        }
        select.addEventListener('focus', clean)
      }
    }
    //levanta modal de error
    newCreateModal("error", "Debes seleccionar todos los atributos del producto");
}
```