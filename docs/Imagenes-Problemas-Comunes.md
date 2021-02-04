## ¿Cómo saber que una imagen tiene el tamaño adecuado? 
Para poder saber si una imagen es más pequeña que su contenedor necesitas [[ inspeccionar el sitio | Inspenccionar sitio web ]] y revisar el código: 
- posiciónate sobre la imagen 
- haz clic derecho y selecciona inspeccionar

  > ![](https://raw.githubusercontent.com/gmontero/bsale-market-design-doc/master/images/inspeccionar_elemento.png)

- Al poner el mouse sobre el **`src`** de la imagen te mostrará el tamaño del contendor y el tamaño de la imagen de esta forma:

 | tamaño del contenedor | tamaño imagen |
 |---|---|
 |  350 x 350 pixels | (intrinsic: 400 x 373 pixels)|

  > ![](https://raw.githubusercontent.com/gmontero/bsale-market-design-doc/master/images/inspeccionar_elemento_detalle.png)

### _**Imagen pixelada:**_ 

Se apreciando el [pixel de la imagen](https://es.wikipedia.org/wiki/P%C3%ADxel) a simple vista. 

| tamaño del contenedor | tamaño imagen | resultado |
|---|---|---|
|  350 x 350 pixels | (intrinsic: 100 x 93 pixels)|:x: pixelado | 

:x: Esto ocurre cuando la imagen es más pequeña que su contenedor

![imagen poco nitida](https://raw.githubusercontent.com/gmontero/bsale-market-design-doc/master/images/imagen-pixelada.png)![](https://raw.githubusercontent.com/gmontero/bsale-market-design-doc/master/images/intrinseco_T.png)

### **_Imagen poco nítida:_** 

La imagen se ve borrosa, esta imagen <ins>también está pixelada</ins> pero en menor proporción. Esto ocurre cuando la imagen es más pequeña que su contenedor

| tamaño del contenedor | tamaño imagen | resultado |
|---|---|---|
|  350 x 350 pixels | (intrinsic: 240 x 224 pixels)|:x: pixelado  | 

:x: Esto ocurre cuando la imagen es más pequeña que su contenedor

![imagen poco nitida](https://raw.githubusercontent.com/gmontero/bsale-market-design-doc/master/images/imagen-poco-nitida.png)![](https://raw.githubusercontent.com/gmontero/bsale-market-design-doc/master/images/intrinseco_S.png)

### _**Imagen Correcta**_
  
| tamaño del contenedor | tamaño imagen | resultado |
|---|---|---|
|  350 x 350 pixels | (intrinsic: 400 x 373 pixels)| ✔️  correcto | 

✔️ El tamaño de la imagen debe ser mayor o igual al contenedor
   
![imagen correcta](https://raw.githubusercontent.com/gmontero/bsale-market-design-doc/master/images/imagen%20correcta.png)![](https://raw.githubusercontent.com/gmontero/bsale-market-design-doc/master/images/intrinseco_M.png)

### _**Imagen Pesada**_

![](https://raw.githubusercontent.com/gmontero/bsale-market-design-doc/master/images/intrinseco_L.png)

Cuando la imagen es muy grande, se ve bien pero demora más tiempo en cargar 
> Esto baja la puntuación del sitio en google page speed

# ¿Cómo cambiar el tamaño de una imagen? 

Para cambiar el tamaño de una imagen utiliza el [[filtro de dimensión | Imagenes#filtros-de-dimensiones-de-imagen]]
