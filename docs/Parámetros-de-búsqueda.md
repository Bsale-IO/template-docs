**Ver también** 
* [[Componente Buscador]]
* [[Variables de Búsqueda | Colección, Marcas y Búsqueda]]

# Índice

* [Ruta general](Parámetros-de-búsqueda#ruta-general)
* [Atributos](Parámetros-de-búsqueda#filtros-por-atributos)
* [Límites](Parámetros-de-búsqueda#limitar-resultados)

> **Estructura**<br>
> tusitio.com/search?**search_text=**[{termino de búsqueda}](Parámetros-de-búsqueda#ruta-general)**&**[atributos](Parámetros-de-búsqueda#filtros-por-atributos)**&**[límites](Parámetros-de-búsqueda#limitar-resultados)

# Contenido

## Ruta General 

```js
tusitio.com/search?search_text={termino de busqueda}
```

* **Ejemplo**: Buscar productos de nombre _**"camisa"**_
```js
tusitio.com/search?search_text=camisa
```

## Filtros por Atributos 

Para filtrar por atributo es necesario indicar cuál es el atributo como _array_

```js
&atributo[]=valor
```
* Filtrar por más de un atributo
```js
&atributo1[]=valor&atributo2[]=valor
```

* Filtrar por más valor del mismo atributo
```js
&atributo[]=valorA&atributo[]=valorB
```
### Ejemplo

Filtrar producto que contengan _**A**_ en su nombre, de color _**Azul**_ y _**Blanco**_ y memoria ram de _**20**_

```js
/search?search_text=a&attr_color[]=Azul&attr_color[]=Blanco&attr_memoriaram[]=20
```

## Limitar Resultados

Es el último filtro que debes poner en la _url_

```js
&limit={number}
```
* **Ejemplo**: Buscar productos de nombre _**"camisa"**_ y mostrar sólo los 5 primeros
```js
tusitio.com/search?search_text=camisa&limit=5
```