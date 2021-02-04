# Actualización componente Banner

El componente banner se reestructuró para permitir que su funcionalidad sea similiar al componente slider carrousel, esto quiere decir que se puede agregar una descripcion breve a cada una de las diapostivas.
Es importante mencionar que para visualizar el banner es necesario asignarle un **tag** dentro de la configuración, esto permite identificarlo cuando quiera ser utilizado.

## Nuevas funciones
1. Permite agregar una descripción breve a cada una de las diapositivas en el banner para mejorar el SEO.
2. Implementación de **tag** para dinamizar la administración de banners.

## Observación
Solo basta con asignar imagenes en version de escritorio para que se vean tambien visualizadas en dispositivos mobiles, ya que la configuración y diseño de los distintos banners se realizan de manera interna en el componente.

## Componente
* [[Estilo 1 (Banner template 1)]]
* [[Estilo 2 (Banner template 3)]]
* [[Estilo 3 (Banner template 5)]]
* [[Estilo 4 (Banner template 7)]]
* [[Estilo 5 (Banner template 4)]]
* [[Estilo 6 (Banner template 10)]]

## Implementación 
1. Crear y configurar el banner previamente.
2. Realizar la llamada del componente de la siguiente manera:

```js
{{ "tag asignado" | new_get_slider: "nombre del componente" }}
```
## Ejemplo
```js
{{ "slider_inicio_1" | new_get_slider: "Inicio > Banner" }}
```

