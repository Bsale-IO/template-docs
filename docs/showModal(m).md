### Descripción

Permite mostrar el componete modal > inicio en el Home del sitio y configurarlo. La constante delay configura el tiempo que demora el modal en cerrarse, La constante show permite configurar la cantidad de veces que se mostrará el modal, que puede ser "day" para que se muestre 1 vez por día, "once" para que se muestre una vez por sesión y "always" para que se muestre cada vez se visita el Home de la pagina. 

```js
function showModal(m) {
    const modal = $(m)
    const content = modal.find('.modal-body').text().trim();
    const contentHTML = clearHTML(content).toLowerCase().replace(/\s/gm, " ")
    const delay = modal.data("info").delay * 1000;
    const show = modal.data("info").show.toLowerCase()

    const modalBody = document.querySelector('.modal-body')
    const imgModalBody = modalBody.querySelectorAll('img')
    const iframeModalBody = modalBody.querySelectorAll('iframe')
    const contentModal = content.length > 0 || imgModalBody.length > 0 || iframeModalBody.length > 0

    if (localStorage["content-modal"] != contentHTML && contentHTML != "") {
      modal.delay(5000).modal('show')
    } else {
      switch (show) {
        case "day":
          
          let now = new Date
          let past = localStorage.getItem("openModal") && new Date(parseInt(localStorage.getItem("openModal")))
          now = new Date(now.getFullYear(), now.getMonth(), now.getDate());

          if (past) {
            past = new Date(past.getFullYear(), past.getMonth(), past.getDate());
          }
          if ((now > past) && (contentModal)) {
            modal.delay(5000).modal('show');
          }

          localStorage.setItem("openModal", Date.now())
          break;

        case "once":
       
          var isshow = localStorage.getItem('isshow')
          if (localStorage["content-modal"] != contentHTML) {
            localStorage.removeItem("isshow");
          }

          if ((isshow == null) && (contentModal) ) {
            localStorage.setItem('content-modal', contentHTML);
            modal.delay(500).modal('show');
          }
          break;

        default:
     
          if (contentModal) {

            modal.delay(5000).modal('show');
          }
          break;
      }
    }

    localStorage.setItem('content-modal', contentHTML);
    localStorage.setItem('isshow', '1');

    //CANTIDAD DE TIEMPO QUE DEMORA EL MODAL EN CERRAR
    if (delay >= 1000) {
      setTimeout(function () {
        (modal).modal('hide');
      }, delay);
    }

    //DESTRUYE MODAL AL CERRAR
    modal.on('hidden.bs.modal', function (e) {
      window.$(this).remove();
    })
  }
```