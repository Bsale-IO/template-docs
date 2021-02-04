<sup>[[JS Bsale]] > [[Metrics]] > formSent</sup>

# formSent
Este método se ejecuta cuando un usuario envía un formulario.

## Método por defecto
Se envía el nombre del formulario.
```js
function formSent(formName) {
  return {
    gtm: {
      event: 'formSent',
      data: {
        formName: formName
      }
    },
    analytics: {
      event: 'form_sent',
      data: {
        event_category: 'Formulario enviado',
        event_label: formName
      }
    },
    pixel: {
      event: 'Contact'
    }
  }
}
```

## Sobreescritura
Para sobreescribir el método y personalizar la información que se envía, se debe redefinir en el objecto [[Metrics]]. La función va a rebicir como único argumento, un string con el nombre del formulario.
```js
Metrics.formSent = function (formName) {
  return {
    gtm: {
      event: null,
      data: null
    },
    analytics: {
      event: null,
      data: null
    },
    pixel: {
      event: null,
      data: null
    }
  }
}
```
