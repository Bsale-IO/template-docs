Para saber como se comportan los usuarios de tu sitio puede crear en analytics un Embudo de conversión o embudo de ventas, Funnel analysis en ingles. 
Este reporte te permite identificar que páginas de tu sitio ayudan más a tu venta y en cuales puedes mejorar. 

## Configuración

Para configurar el objetivo debes ir en Analytics a 

`Administrar` ⮞ `Objetivos`

Y llenar la configuración los pasos con los siguientes datos 


### 1. Configuración del Objetivo
- [x] Personalizado

### 2. Descripción del Objetivo 
| Configuración | Valor |
| --- |----|
| Nombre | `Venta` | 
| Tipo | `Destino` | 


### 3. Información del objetivo

| Destino | Valor |
| --- |----|
| Expresión Regular | `\/checkout\/success\/.` |  

- [x] Activar Embudo de conversión 

| Paso | Nombre | Pantalla/página | Obligatorio | 
|:---:|---|---|---|                                 
| 1 | Colección o búsqueda | `\/(collection\|brand)\/.*\|\/.*search_text.*`| NO|
| 2 | Producto | `\/product\/.*`| |
| 3 | Carro | `\/cart\/display.*`| |
| 4 | Checkout | `\/checkout`| | 
| 5 | Resumen de Carro | `\/checkout\/get_checkout_summary\/.*` | | 

Es configuración te entrega la información sobre 
1. Cuantos clientes entraron a una colección o búsqueda
2. Cuantos clientes entraron a un producto 
3. cuantos clientes entraron al carro 
4. cuantos clientes llegaron hasta el checkout 
5. cuantos clientes avanzaron del checkout el resumen de la compra antes de pagar (summary)
6. Cuantos clientes realizaron una compra exitosa (objetivo: success)
    
## Reporte
Para visualizar el reporte debes ir a: 

1. Conversiones
2. Objetivos
3. Gráfico del Embudo de conversión 