### Descripción

Esta función se queda a la espera de la creación del modal, si se crea correctamente llama a la función showModal() y le pasa por parametro el modal creado para mostrarlo en la vista. Si no existe el modal, evulua si existe la plantilla modal-inicio para mostrar el modal a través de la plantilla y no de el componente, el uso del modal con plantillas se utiliza para template con versiones antiguas, Los templates actuales muestran el modal a través del componente.

```js
(async function homeModalNew() {
    try {
      const homeModal = document.querySelector('[data-bs="modal"]')

      if (homeModal) {
        showModal(homeModal)
      }
      else {
        const res = await fetch('/sheet/modal-inicio/')
        if(res.status == 200) {
          const html = await res.text()
          let homeModalContent = html.trim()
          if (homeModalContent) {
            let homeModal = document.createElement('div')
            homeModal.innerHTML = homeModalContent
            homeModal = homeModal.firstElementChild
            document.body.appendChild(homeModal)
            showModal(homeModal)
          }
        }
      }

    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error(error)
      }
      console.warn('%cNo hay plantilla "Modal > Inicio"')
    }
  })()
```