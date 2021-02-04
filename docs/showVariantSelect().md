### Descripción

Esta función muestra en la vista el selector de variantes. 
Si el producto tiene al menos un atributo y mas de una variante se ejecuta esta función,
recorre las variantes del producto, y despues evalúa si el selector de variantes es un input y va dibujando en la vista un selector por cada una de las variantes del producto. 

variantSelectParent se evalua para dar soporte a estructura antigua de templates. Lo que hace es mostrar el selector de variantes.

```js
function showVariantSelect() {
    if(variantSelectParent != null){
      variantSelectParent.style.display = "block";
      variantSelectParent.style.opacity = "1";
      variantSelectParent.classList.remove("d-none");
    }
    for (let i = 0; i < variantSelect.length; i++) {
      let v = variantSelect[i];
      if (v.tagName == "INPUT") {
        //oculta input y label
        let child = v.parentNode.children
        for (let i = 0; i < child.length; i++) {
          if (child[i].tagName !== "INPUT") {
            child[i].style.display = "block";
            child[i].style.opacity = "1";
            child[i].classList.remove("d-none");
          }
        }
      } else {
        v.style.display = "block";
        v.style.opacity = "1";
        v.classList.remove("d-none");
      }//if / else
    }//for
}
```