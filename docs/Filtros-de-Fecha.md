<sub><sup>[[Home]] > [[Liquid Bsale]] > [[Filtro | Filtros Bsale Liquid ]] > Filtros de Fecha</sup></sub>

El filtro de fecha en liquid emplea como base a los formatos de fecha de ruby
```css
{{ fecha | date: "formato" }}
```

### Formatos Principales 

| Formato | Descripción | Ejemplo |
| ------- | ----------- | ------- |
| `%m`    | Mes  | `1` ... `12`  |
| `%d`    | Día | `1` ... `31` |
| `%y`    | Año abreviado | `18` |
| `%Y`    | Año completo | `2018` |
| `%W`    | Semana del año | `1` ... `53` |
| `%D`    | Fecha completa en formato `%m/%d/%y` | `31/01/2018` |
| `%H`    | Hora en formato ***24h*** | `00` ... `23` |
| `%I`    | Hora en formato ***12h*** | `1` ... `12`  |
| `%M`    | Minutos | `00`...`59`

## Ejemplos

#### Fecha Completa
```css
{{ fecha | date: "%d/%m/%y" }}
```
#### Resultado
```js
 20/05/2018
```

#### Fecha Completa + Hora
```css
{{ fecha | date: "%d/%m/%y %H:%M" }}
```
#### Resultado
```js
 20/05/2018 13:06
```


