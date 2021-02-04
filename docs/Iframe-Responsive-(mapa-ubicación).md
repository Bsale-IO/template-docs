Para agregar un iframe responsive con el mapa de Google en el sitio, que por lo general se utiliza en el footer, o Articulo de Ubicación.

Se puede utilizar para cualquier otro servicio que utilice iframes para insertar contenido, como SoundCloud, Vimeo, Google Maps y, en general, cualquier iframe cuyo contenido necesite mantener un aspect ratio fijo.

```html

<div class="embed-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.9657653732347!2d-70.61707088480136!3d-33.4241368807815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf641ce887c3%3A0xfd6c67895ea6b509!2sMonse%C3%B1or+Nuncio+Sotero+Sanz+de+Villalba+100%2C+Providencia%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1ses!2scl!4v1541688817197" width="600" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>

```


```css

.embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
}
.embed-container iframe {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
}


```






