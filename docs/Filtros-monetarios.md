El filtro funciona de acuerdo a la configuración de la moneda, en ella se deben indicar:
* Signo de la moneda
* ISO code de la moneda
* Cantidad de decimales
* Si emplea valores aproximados

Los separadores de miles y separador de decimales son configurados según el país de la tienda. 

| valor | Chile | Perú | 
| ----- | ----- | ---- | 
| separador de miles | `.`|`,`| 
| separador de decimales | `,`|`.`| 
| Resultado | _1.000.000,5_ | _1,000,000.5_ |


## Utilización del filtro

### Ejemplos

#### Peso Chileno
| configuración moneda | valor |
| ------------- | ----- |
| signo de la moneda | `$` |
| ISO code de la moneda | `CLP` |
| cantidad de decimales | `0` |
| emplea valores aproximados |  `si` |
| País de la tienda | `Chile` |
```
{{ 1000.5 | money_filter}}
```
```
 $ 1.000
```

#### Dólar Estadounidense , tienda en Chile
| configuración moneda | valor |
| ------------- | ----- |
| signo de la moneda | `USD$` |
| ISO code de la moneda | `USD` |
| cantidad de decimales | `2` |
| emplea valores aproximados |  `si` |
| País de la tienda | `Chile` |
```
{{ 1000.5 | money_filter}}
```
```
 USD$ 1.000,50
```

#### Sol Peruano 
| configuración moneda | valor |
| ------------- | ----- |
| signo de la moneda | `S/` |
| ISO code de la moneda | `PEN` |
| cantidad de decimales | `2` |
| emplea valores aproximados |  `si` |
| País de la tienda | `Perú` |
```
{{ 1000.5 | money_filter}}
```
```
 S/ 1,000.50
```
#### Dólar Estadounidense , tienda en Perú
| configuración moneda | valor |
| ------------- | ----- |
| signo de la moneda | `US$` |
| ISO code de la moneda | `USD` |
| cantidad de decimales | `2` |
| emplea valores aproximados |  `si` |
| País de la tienda | `Perú` |
```
{{ 1000.5 | money_filter}}
```
```
 US$ 1,000.50
```