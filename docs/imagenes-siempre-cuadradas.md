
## Implementación

```html
    <div class="bs-img-square">
        <picture>
            <img src="{{ "imagen.jpg" | image_url }}" alt="">
        </picture>
    </div>
```

## Estilos CSS 

> Si usas un template desde versión 4 o superiores no es necesario copiar este código pues ya esta cargado en tu template. 

```css
/*********************************************** 
          img cuadrada 
************************************************/
 .bs-img-square {
	 width: 100%;
	 position: relative;
}
 .bs-img-square::after {
	 content: "";
	 display: block;
	 padding-bottom: 100%;
}
 .bs-img-square picture {
	 position: absolute;
	 width: 100%;
	 height: 100%;
	 overflow: hidden;
	 display: flex;
	 justify-content: center;
	 align-items: center;
}
 .bs-img-square picture img {
	 width: 100%;
	 height: 100%;
	 object-fit: contain;
	 -o-object-fit: contain;
}
 .bs-img-square.vertical::after {
	 padding-bottom: 125%;
}
 .bs-img-square.horizontal::after {
	 padding-bottom: 75%;
}
 .bs-img-square.cover picture img {
	 object-fit: cover;
	 -o-object-fit: cover;
}
 @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
	 .bs-img-square picture {
		 display: flex;
		 align-items: center;
		 justify-content: center;
		 display: -ms-flexbox;
		 -ms-flex-line-pack: center;
		 -ms-flex-pack: center;
	}
	 .bs-img-square picture img {
		 position: relative;
		 max-width: 100%;
		 height: auto;
	}
}
```