Tenemos 2 productos, una camisa y un pantalon. 
La camisa tiene 3 variantes y el pantalón sólo 2

|Producto |Variante 1 |Variante 2| Variante 3|
|---------|-----------|----------|-----------|
| Camisa | Blanca<br>`sku: 001` | Roja<br>`sku: 002` | Azul<br>`sku: 003` |
| Pantalon | Negro<br>`sku: P001` | Marrón<br>`sku: P002` |            | 

## Crear archivo de carga masiva
Para realizar carga masiva puedes crear un archivo excel
| | 1 | 2 | 3 | 4 | 5 | 6 |
|:---:|---------------------|------------|--------------------|-----------------------------|---------------------------------------|-----------------|
|A| Nombre del Producto | Nombre web | Marca del Producto<br>`opcional` | SKU de variante por defecto | ¿Es variante destacada?<br>(1:Si y 0:No)<br>`opcional` | Descripción web<br>`opcional` | 
|B| Camisa | Camisa | | 002 | | |
|C| Pantalón | Pantalón | | P001 | 0 | |
|D| Pantalón | Pantalón Marrón | | P002 | 1 | Pantalón de tela|