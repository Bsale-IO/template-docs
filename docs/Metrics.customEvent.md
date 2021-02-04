<sup>[[JS Bsale]] > [[Metrics]] > customEvent</sup>

# Metrics.customEvent()
Enviar eventos personalizados a Google Tag Manager, Google Analytics y/o Facebook Pixel.

## Parámetros

### evento
Objeto con la información del evento.

### Retorna
undefined
```js
Metrics.customEvent({
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
})
```

## Documentación

### Google Tag Manager
https://developers.google.com/tag-manager/enhanced-ecommerce

### Google Analytics
https://developers.google.com/analytics/devguides/collection/gtagjs/events
https://developers.google.com/analytics/devguides/collection/gtagjs/enhanced-ecommerce
https://support.google.com/analytics/answer/6032539 (Activar Enhanced Ecommerce)

### Facebook Pixel
https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking/
