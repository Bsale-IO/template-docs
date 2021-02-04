# `BETA`
# Cómo agregar comentarios de facebook

> Documentación original [aquí](https://developers.facebook.com/docs/plugins/comments/?locale=es_LA) 

Debes crear un `componente` de nombre _**"Comentarios Facebook"**_ y pegar este código dentro.

```django
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v3.2"></script>

<div class="fb-comments" 
     data-href="{{current_url}}" 
     data-width="100%" 
     data-numposts="5">
</div>
```

| data | valor |
| ---- | ----- |
| `data-href` | url donde se cargan los comentarios, usar la variable `{{ current_url }}` | 
| `data-width`| ancho de los que ocuparan los comentarios, **dejar en 100%** | 
| `data-numposts` | cantidad de comentarios a mostrar por defecto, idealmente dejar 5 | 

# Moderar comentarios

Puedes moderar los comentarios asignando administradores a los comentarios de tu sitio, para esto es necesario agregar los siguiente `metatag` en el componente `head`. 

```django
<meta property="fb:admins" content="{TU_USER_ID_1}"/>
<meta property="fb:admins" content="{TU_USER_ID_2}"/>
```

Puedes agregar tantos tag como administradores tenga el sitio.
Para saber cual es el `USER_ID` de tu cuenta en facebook:

1. Haz clic en  en la parte superior derecha de Facebook y selecciona _**Configuración**_.
2. Haz clic en _**Apps y sitios web**_ en el menú izquierdo.
3. Pasa el mouse por una app o un juego, y haz clic en _****Ver y editar****_.
4. Desplázate hacia abajo hasta Más información. Tu identificador de usuario aparecerá en el párrafo siguiente.
   > Tu identificador de usuario es: ` TU_USER_ID ` 

               `