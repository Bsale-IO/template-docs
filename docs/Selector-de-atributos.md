Los selectores de atributos te permite filtrar la variante de un producto mediante los diferentes atributos que tiene una variante


## Ejemplo Producto camisa 

| variable | atributo color | atributo talla |
|----------| -------------- |----------------|
| Rojo S | Rojo | S | 
| Rojo M | Rojo | M | 
| Azul M | Azul | M |
| Azul L | Azul | L |
| Verde S | Verde | S |

### Combinaciones 
| | S | M | L |
|---|---|---|---|
|Azul|❌ |✔ |✔ |
| Rojo |✔ |✔ | ❌| 
| Verde |✔ |❌ |❌|

| Estado | Significado | 
|--------|-------------|
| ✔ Disponible | Existen una variante con la combinaciones de atributos seleccionados |
| ❌ No Disponible | `opción 1` No existen variable con esta combinación de atributos | 
| ❌ No Disponible | `opción 2` Existen más de 1 variable con esa combinación de atributos <br> por lo que no se puede determinar cual se esta escogiendo | 
| Sin Stock | Para que una variante tenga stock tiene que existir y por tanto es una combinación ✔ Disponible | 


### Si el usuario selecciona un atributo,
1. El resto de los atributos son filtrados según esa selección.
2. De esta forma si selecciona `Azul`, como no existe la combinación Azul S, esta se mostrará como <ins>no disponible<ins>

| Atributo Color | Atributo Talla |
| -------------- | ---------------|
| ⚫ Azul <br> ⚪ Rojo <br> ⚪ Verde <br> | ⚪ _S (no disponible)_ <br>⚪ M <br>⚪ L <br> |

3. Si el cliente hace clic en un <ins>atributo que este marcado como no disponible</ins> se hará un reset del resto de los selectores.
4. Se agregará el texto _**no disponibles**_ a los atributos que no se puedan combinar con el atributo seleccionado. 

| Atributo Color | Atributo Talla |
| -------------- | ---------------|
| ⚪ _Azul (no disponible)_ <br> ⚪ Rojo  <br> ⚪ Verde  <br> | ⚫ S  <br> ⚪ M <br> ⚪ L |

5. Finalmente cuando cuando se seleccione una combinaciones disponible, se evaluará el stock de esta variante, en este caso _**`Rojo S`**_ y se permitirá agregar al carro o encargar el producto si el stock fuese negativo. 

| Atributo Color | Atributo Talla |
| -------------- | ---------------|
| ⚪ Azul <br> ⚫ Rojo  <br> ⚪ Verde  <br> | ⚫ S  <br> ⚪ M <br> ⚪ L |

La evaluación de disponibilidad de variantes es indiferente de la evaluación de stock

# Errores
## Mensajes de error

Si al seleccionar los atributos, la combinación de estos no existe como variante se desplegara el mensaje 

> ```
> Opción "Atributo_1 Atributo_2" No Disponible.
> Por favor seleccione otros atributos del producto
> ```

Cuando este mensaje este desplegado se podrá ver el detalle del error en la consola del navegador. 

* **Razón 1:** No existen variantes con dichos atributos, por tanto no se puede agregar al carro

```js
(0)[]
```
* **Razón 2:** Existe más de una variante con dichos atributos y por tanto no se puede definir cual agregar al carro.
```js
(2)[{...},{...}]
``` 

## Error no muestra uno de los atributos

Los selectores de atributos sólo muestran atributos definidos para generar nombre de la variante

Dentro del <ins>tipo de producto</ins> esto se define marcando la opción:

* _**¿Utilizar para generar el nombre de la variante?**_ 
* **Si**

En la página de producto se puede revisar si los atributos están llegando bien abriendo la consola y escribiendo 

## ¿Cómo consultar los atributos de un productos en la consola del navegador? 
```js

Bsale.products[0].attributes

```

Esto desplegará los atributos de producto en un objeto de javascript, todos los atributos que indiquen `required: 1` se dibujaran como selector 

```js

(3)[{...},{...}]
0:{name:"color",values:Array(3), required:1}
1:{name:"talla",values:Array(3), required:1}
2:{name:"marca",values:Array(2), required:0}

```
En este caso,  sólo se deberían dibujar selectores de <ins>talla</ins> y <ins>color</ins>, marca al no ser required no se dibujará. 

| Atributo | required | ¿se dibuja? |
|---|:---:|---|
| color | `1` | Si ✔️ |
| talla | `1` | Si ✔️ |
| marca | `0` | No :x: |

### Importante
Si tengo un atributo que dice:

* _**¿Utilizar para generar el nombre de la variante?**_ 
* **Si**

Pero que llega como `required: 0` significa que hay un error de configuración

Si al <ins>editar el tipo de producto</ins> esto no se corrige debe ser reportado para revisar el caso



# Componente

Si tienes problemas con los selectores y no funcionan como está descrito en este artículo lo mojer es actualizar el componente a su ultima versión.

Puedes revisar la ultima versión del componente acá:

[Componente Producto > Detalle > Atributos](https://github.com/gmontero/bsale-market-design-doc/wiki/Componente-Producto---detalle---atributos)

