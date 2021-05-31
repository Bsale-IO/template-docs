---
layout: default
title: Colecciones
published: true
category: liquid
---

La platilla de colección carga la información de colecciones, estas se pueden separar en 3 tipos de colecciones 

## Tipos de colecciones 

### Creada 
Una colección creada es aquella que se genera en el administrador de colecciones dentro de Bsale

**URL**
```
/collection/nombre-coleccion
```
**Ejemplo**

sitio web |	nombre colección|	url | 
--|--|--
mitienda.com	| Camisas de Verano |	`mitienda.com/collection/camisas-de-verano`


### Marcas
Una colección de marca se crea agrupandos diferentes productos que posean la misma marca 

**URL**
```
/brand/nombre-marca
```
**Ejemplo**

sitio web |	nombre colección|	url | 
--|--|--
mitienda.com	| L’Oréal |	`mitienda.com/collection/loreal`


### Búsqueda 
Esta colección es momentanea y se crea cuando un usuario realiza una busqueda dentro del sitio web, al momento de hacer la busqueda se filtran todos los productos que cuenten con al menos un concepto buscado

**URL**
```
/search?search_text=busqueda
```
**Ejemplo**

sitio web |	búsqueda |	url | 
--|--|--
mitienda.com	| Pantalones rojos |	`mitienda.com/search?search_text=pantalones+rojos`
