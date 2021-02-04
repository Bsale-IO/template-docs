### Descripción

Si se selecciona una variante que se encuentre desactivada en el selector, se reinician los otros selectores y 
quita la clase bs-option-disabled a la variante seleccionada y reinicia las opciones de los selectores
para dejar activadas las combinaciones disponibles.

```js
function updateAttr(e) {
    let reset = [];
    let attrName = this.dataset.info || "";
    let attrValue = this.value || "";
    let optionDisabled = this.options[this.options.selectedIndex].className.indexOf('bs-option-disabled') !== -1;
    let attrList = bsale.products[0].attributes.filter(function (attr) { return attr.name == attrName })[0];

    if (optionDisabled) {
      reset = bsale.products[0].attributes
        .filter(function (attribute) {
          return attribute.name !== attrName
        })
        .map(function (attribute) {
          return attribute.name
        });
      //compara attr con option 
      for (let i = 0; i < attrSelect.length; i++) {
        let select = attrSelect[i];
        if (select.dataset.info !== attrName) {
          select.value = "reset"; //reinicia selector 
        }
        for (let j = 0; j < select.options.length; j++) {
          let option = select.options[j]
          option.classList.remove('bs-option-disabled');
          if (option.value !== 'reset') {
            option.text = option.value;
          }
        }
      }
    }
    //trae variant por attr
    bsale.products[0].getVariantsByAttribute(attrList, attrValue, { stock: false, reset: reset }).then(function (newVariants) {

      let newAttrList = bsale.products[0].attributes.map(function (attribute) {
        return {
          name: attribute.name,
          values: []
        };
      });

      for (let i = 0; i < newVariants.length; i++) {
        for (let k = 0; k < newVariants[i].attributes.length; k++) {
          let attribute = newVariants[i].attributes[k];
          if (attribute !== attrName) {
            var attr = newAttrList.filter(function (attr) {
              return attr.name === attribute.name
            })[0]
            attr.values.push(attribute.value)
          }
        }
      }

      // lista de attributos no seleccionados 
      let otherAttr = newAttrList.filter(at => at.name !== attrName)
      // por cada atributo no seleccionado 
      for (let k = 0; k < otherAttr.length; k++) {
        let oAttr = otherAttr[k];
        //busca el selector de ese atributo 
        let selector = Array.from(attrSelect).filter(at => at.dataset.info === oAttr.name)[0];
        // y evalue sus opciones 
        for (let j = 0; j < selector.options.length; j++) {
          let option = selector.options[j];
          // si el valor del atributo esta y no es reset 
          if (option.value !== 'reset' && oAttr.values.indexOf(option.value) !== -1) {
            option.classList.remove('bs-option-disabled');
            option.text = option.value.replace("(no disponible)", "");
            //si no es reset y no esta agrega texto no disponible
          } else if (option.value !== 'reset') {
            option.classList.add('bs-option-disabled');
            option.text = `${option.value} (no disponible)`;
          }
        }//for j
      }//for k
      if (newVariants.length === 1 && !Array.from(attrSelect).filter(x => x.selectedIndex === 0).length) {
        // define nueva variable y ejecuta update variant
        productVariant = newVariants[0];
        updateVariant();
      }
    })
  }
```