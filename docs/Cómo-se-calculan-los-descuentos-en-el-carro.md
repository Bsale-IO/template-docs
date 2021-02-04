### Índice 

* [Aplicación del Cupón](https://github.com/gmontero/bsale-market-design-doc/wiki/C%C3%B3mo-se-calculan-los-descuentos-en-el-carro#aplicaci%C3%B3n-del-cup%C3%B3n)
* [Cómo se calcula un cupón](https://github.com/gmontero/bsale-market-design-doc/wiki/C%C3%B3mo-se-calculan-los-descuentos-en-el-carro#c%C3%B3mo-se-calcula-un-cup%C3%B3n)
  * [1. El cupón siempre se calcula como porcentaje](https://github.com/gmontero/bsale-market-design-doc/wiki/C%C3%B3mo-se-calculan-los-descuentos-en-el-carro#1-el-cup%C3%B3n-siempre-se-calcula-como-porcentaje)
  * [2. Los Cupones No son combinables con "descuentos automáticos"](https://github.com/gmontero/bsale-market-design-doc/wiki/C%C3%B3mo-se-calculan-los-descuentos-en-el-carro#2-los-cupones-no-son-combinables-con-descuentos-autom%C3%A1ticos)
  * [3. Se aplican sobre precio de lista](https://github.com/gmontero/bsale-market-design-doc/wiki/C%C3%B3mo-se-calculan-los-descuentos-en-el-carro#3-se-aplican-sobre-precio-de-lista)
  * [4. Los cupones pueden ser acumulables con otros cupones](https://github.com/gmontero/bsale-market-design-doc/wiki/C%C3%B3mo-se-calculan-los-descuentos-en-el-carro#4-los-cupones-pueden-ser-acumulables-con-otros-cupones)
  * [5. El descuento máximo por cupones no puede ser mayor a 100% por ítem](https://github.com/gmontero/bsale-market-design-doc/wiki/C%C3%B3mo-se-calculan-los-descuentos-en-el-carro#5-el-descuento-m%C3%A1ximo-por-cupones-no-puede-ser-mayor-a-100-por-%C3%ADtem)
  * [6. Limites de Aplicación de Cupones](https://github.com/gmontero/bsale-market-design-doc/wiki/C%C3%B3mo-se-calculan-los-descuentos-en-el-carro#6-limites-de-aplicaci%C3%B3n-de-cupones)
* [Descuento de Medio de pago](https://github.com/gmontero/bsale-market-design-doc/wiki/C%C3%B3mo-se-calculan-los-descuentos-en-el-carro#descuento-de-medio-de-pago)








# Aplicación del Cupón

El cupón siempre aplica sobre un elemento del carro, sea este un producto, servicio, pack o costo de despacho. 

| Tipo de Cupón   | Significado                                                  |
| --------------- | ------------------------------------------------------------ |
| Monto de Dinero | Aplica un descuento de dinero prorrateado* sobre el total de productos participan en el cupón |
| Porcentaje      | Aplica un descuento de forma porcentual en cada uno de los productos participantes en el cupón |
| Despacho Gratis | Aplica un descuento sobre el costo de despacho.              |

> `*` prorratear: dividir un monto de forma proporcional entre la cantidad de elementos. 

| Configuración<br /> `Aplica para` | Significado |
| ------------------------- | ----------- |
| Todas las compras         | Valido para todos los productos agregados al carro y/o Costo de Despacho |
| Productos Seleccionados   | Valido sólo sobre productos seleccionados, <br />El descuento se calcula sobre el total de los productos seleccionados |
| Colecciones Seleccionadas | Valido Sólo sobre productos que estén dentro de las colecciones seleccionadas.<br />El descuento se calcula sobre el total de los productos seleccionados |

Los cupones de <ins>Despacho Gratis</ins> sólo pueden ser aplicados sobre el total de la compra, no esta habilitado un filtro que permita limitar el despacho gratis según los productos agregados al carro de compra. 


| Aplica para               | Monto de Dinero    | Porcentaje         | Despacho gratis    |
| ------------------------- | ------------------ | ------------------ | ------------------ |
| Todas las compras         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Productos Seleccionados   | :heavy_check_mark: | :heavy_check_mark: | :x:                |
| Colecciones Seleccionadas | :heavy_check_mark: | :heavy_check_mark: | :x:                |



# ¿Cómo se calcula un cupón?

## 1. El cupón Siempre se calcula como porcentaje

Aun cuando es un cupón sea de <ins>Monto de dinero</ins>, el monto es prorrateado entre los productos en promoción. 

### A. Si el cupón aplica para todas las compras 

| producto |   precio | cantidad |      cupón de $7.500 |        total |
| :------: | -------: | :------: | -------------------: | -----------: |
|    A     | $ 12.999 |    1     | 26,65% `[ $ 3.465 ]` |      $ 9.534 |
|    B     |  $ 3.990 |    3     | 26,65% `[ $ 3.190 ]` |      $ 8.780 |
|    C     |  $ 1.585 |    2     |   26,65% `[ $ 845 ]` |      $ 2.325 |
|          |          |          |                total | **$ 20.639** |

* la suma de los productos es `$ 28.139`
* se calcula que porcentaje es `$ 7.500` en `$ 28.139` = `26,65%`
* se aplica el porcentaje de descuento en todos los productos en promoción

### B. Si el cupón aplica para productos o colecciones seleccionadas

|     producto     |   precio | cantidad |      cupón de $7.500 |        total |
| :--------------: | -------: | :------: | -------------------: | -----------: |
| A (en promoción) | $ 12.999 |    1     | 30,04% `[ $ 3.905 ]` |      $ 9.094 |
| B (en promoción) |  $ 3.990 |    3     | 30,04% `[ $ 3.595 ]` |      $ 8.375 |
|        C         |  $ 1.585 |    2     |                      |      $ 3.170 |
|                  |          |          |                total | **$ 20.639** |

* Sólo A y B están en promoción
* La suma de A y B es `$ 24.696`
* se calcula que porcentaje es `$ 7.500` en `$ 24.696` = `30,04%`
* se aplica el porcentaje de descuento en todos los productos en promoción, en este caso A y B

-----



## 2. Los Cupones <ins>No son combinables</ins> con "descuentos automáticos"

Es decir que si un producto tiene un "descuento automático" y se aplica un cupón el descuento automático deja de tener validez y es el descuento del cupón el aplicado. 

**Ejemplo:**

| producto |   precio | cantidad |                    descuento |             cupón |        total |
| :------: | -------: | :------: | ---------------------------: | ----------------: | -----------: |
|    A     | $ 12.999 |    1     | <del>30% `[ $ 3.900 ]`</del> | 20% `[ $ 2.600 ]` |     $ 10.399 |
|    B     |  $ 3.990 |    3     |                              | 20% `[ $ 2.394 ]` |      $ 9.576 |
|    C     |  $ 1.585 |    2     |   <del>15% `[ $ 476 ]`</del> |   20% `[ $ 634 ]` |      $ 2.563 |
|          |          |          |                              |             total | **$ 22.511** |

* Se aplica cupón de 20% sobre una compra que ya tenia descuento automático.
* Se desactivan los descuentos automáticos que tenían los productos y sólo se aplica el descuento del cupón, no importando si este es mayor o menor al descuento que tenia cargado anteriormente el producto.
* Si el cliente decide borrar el cupón de su compra se consideran el descuento automático 

| producto |   precio | cantidad |         descuento | cupón |        total |
| :------: | -------: | :------: | ----------------: | ----: | -----------: |
|    A     | $ 12.999 |    1     | 30% `[ $ 3.900 ]` |       |     $ 10.399 |
|    B     |  $ 3.990 |    3     |                   |       |      $ 9.576 |
|    C     |  $ 1.585 |    2     |   15% `[ $ 476 ]` |       |      $ 2.563 |
|          |          |          |                   | total | **$ 23.763** |

-----

## 3. Se aplican sobre precio de lista

El calculo de el cupón es sobre <ins>precio de lista</ins>,es quiere decir, el precio anterior a la aplicación de un descuento automático 


| producto |   precio | cantidad |                    descuento |             cupón |        total |
| :------: | -------: | :------: | ---------------------------: | ----------------: | -----------: |
|    A     | $ 12.999 |    1     | <del>30% `[ $ 3.900 ]`</del> | 20% `[ $ 2.600 ]` |     $ 10.399 |
|          |          |          |                              |             total | **$ 10.399** |

* El 20% de 12.999 es 2599,8 redondeado es **2.600**
* 12.999 - 2.600 = 10.399

----

## 4. Los cupones <ins>pueden ser acumulables</ins> con otros cupones 
Los cupones pueden ser combinados con otros cupones que tengan marcada la opción de <ins>Acumulable con otros cupones</ins>, es necesario que todos los cupones que se intenten combinar permitan acumular el descuento. 

| producto |   precio | cant. |                          descuento |                 cupón 1 |                 cupón 2 |       total |
| :------: | -------: | :---: | ---------------------------------: | ----------------------: | ----------------------: | ----------: |
|    A     | $ 12.999 |   1   | <del>30%<br /> `[ $ 3.900 ]`</del> | 20%<br /> `[ $ 2.600 ]` | 10% <br />`[ $ 1.300 ]` |     $ 9.099 |
|    B     |  $ 3.990 |   3   |                                    | 20% <br />`[ $ 2.394 ]` |  10%<br />`[ $ 1.197 ]` |     $ 8.379 |
|    C     |  $ 1.585 |   2   |   <del>15%<br /> `[ $ 476 ]`</del> |   20% <br />`[ $ 634 ]` |    10%<br />`[ $ 952 ]` |     $ 2.218 |
|          |          |       |                                    |                         |                   total | **$19.696** |

---


## 5. El descuento máximo por cupones no puede ser mayor a 100% por ítem

### A. Monto de Dinero

Si el cupón es de tipo monto de dinero y la aplicación de este es mayor a 100%, el monto del descuento es igualado a 100% y la diferencia es perdida por el cliente 

Ejemplo cupón de $ 30.000 sobre los productos A y B

|   producto   |   precio | cant. |                              cupón de $30.000 |       total |
| :----------: | -------: | :---: | --------------------------------------------: | ----------: |
| A (en promo) | $ 12.999 |   1   | <del>_120,15%_</del> **100%**  `[ $ 12.999 ]` |         $ 0 |
| B (en promo) |  $ 3.990 |   3   |  <del>_120,15%_</del> **100%** `[ $ 11.970 ]` |         $ 0 |
|      C       |  $ 1.585 |   2   |                                               |     $ 3.170 |
|              |          |       |                                         total | **$ 3.170** |

* La suma de los productos en promoción es $24.969
* Hay una diferencia de $5.031 entre el monto del cupón ($30.000) y el monto que puede descontar el cupón $24.969
* Como el **producto C** no esta considerado en la promoción la diferencia no puede ser aplicada y es perdida por el cliente. 

### B. Combinación de Cupones

En caso de que se utilicen cupones acumulables la suma de los descuentos por ítem no podrá ser mayor a 100% y en caso de que lo sea sea se restará la diferencia al ultimo cupón aplicado 

| producto |   precio | cant. |                 cupón A 50% |                                cupón B 60% |   total |
| :------: | -------: | :---: | --------------------------: | -----------------------------------------: | ------: |
|    A     | $ 12.999 |   1   | **50%**<br /> `[ $ 6.500 ]` | <del>60%</del> **50%** <br />`[ $ 6.449 ]` |     $ 0 |
|    B     |  $ 3.990 |   3   | **50%** <br />`[ $ 5.985 ]` |  <del>60%</del> **50%**<br />`[ $ 5.985 ]` |     $ 0 |
|    C     |  $ 1.585 |   2   | **50%** <br />`[ $ 1.585 ]` |  <del>60%</del> **50%**<br />`[ $ 1.585 ]` |     $ 0 |
|          |          |       |                             |                                      total | **$ 0** |

* como el primer cupón era de 50% y el segundo era de 60% se resta un 10% al segundo cupón dejando ambos en 50%.

* Si primero se hubiera aplicado el cupón de 60% al cupón de 50% se le hubiera descontado 10% dejando aplicado un cupón de 60% + cupón de 40% 

|   cupón 1   |      |  cupón 2    |      |  total    |
| :--: | :--: | :--: | :--: | :--: |
| **50%** | + | <del>60%</del><br>**50%**  | = | **100%** |
| **60%**  | + |  <del>50%</del><br>**40%** | = | **100%** |

-----

## 6. Limites de Aplicación de Cupones 

| Tipo de Cupón   | Compra Mínima      | Descuento Máximo   | Caducidad          |
| --------------- | ------------------ | ------------------ | ------------------ |
| Monto de Dinero | :heavy_check_mark: | :x:                | :heavy_check_mark: |
| Porcentaje      | :x:                | :heavy_check_mark: | :heavy_check_mark: |
| Despacho Gratis | :x:                | :heavy_check_mark: | :heavy_check_mark: |

* **<ins>Compra Mínina:</ins>** Para que este cupón sea aplicable coste de todos los productos agregados (sean o no participantes de cupón) en carro antes de la aplicación del cupón,  deben ser mayor o igual al valor definido, si la compra no es mayor o igual  al monto definido no se puede aplicar el cupón. 

  * Cupón de $2.500 en producto A por compras mínima de $30.000

    * | producto     |   precio | cantidad |         subtotal |                                 cupón |        total |
      | :----------- | -------: | :------: | ---------------: | ------------------------------------: | -----------: |
      | A (en promo) | $ 12.999 |    1     |         $ 12.999 | <del>19,23%<br /> `[ $ 2.500 ]`</del> |     $ 12.999 |
      | B            |  $ 3.990 |    3     |         $ 11.970 |                                       |     $ 11.970 |
      | C            |  $ 1.585 |    2     |          $ 3.170 |                                       |      $ 3.170 |
      |              |          |          | :x: **$ 28.139** |                             **Total** | **$ 28.139** |

      > :x:  **No se aplica el cupón** ya que <ins>el monto subtotal de la compra es menor</ins> a la compra mínima requerida 

    

  * Cupón de $2.500 en producto A por compras mínima de $30.000

    * | producto     |   precio | cantidad |                        subtotal |                      cupón |        total |
      | :----------- | -------: | :------: | ------------------------------: | -------------------------: | -----------: |
      | A (en promo) | $ 12.999 |    1     |                        $ 12.999 | 19,23%<br /> `[ $ 2.500 ]` |     $ 10.399 |
      | B            |  $ 3.990 |    4     |                        $ 15.960 |                            |     $ 15.960 |
      | C            |  $ 1.585 |    2     |                         $ 3.170 |                            |      $ 3.170 |
      |              |          |          | :heavy_check_mark: **$ 32.129** |                  **Total** | **$ 29.529** |

    * > :heavy_check_mark: **se aplica el cupón** ya que <ins>el monto subtotal de la compra</ins> es mayor a la compra mínima requerida 

* **<ins>Descuento Máximo:</ins>**  El descuento total del cupón no podrá ser mayor al monto definido. 
  
  ### Cupón de despacho gratis, pero con un descuento máximo de $4.000**

  * Si el costo de despacho es mayor al tope: el precio final es la diferencia

  * | producto     |   precio | cantidad |  subtotal    | cupón despacho |        total |
    | :----------- | -------: | :------: | -----------: | -------------: | -----------: |
    | A            | $ 12.999 |    1     |     $ 12.999 |                |     $ 12.999 |
    | Despecho     | $ 5.000  |          |      $ 5.000 |       $ -4.000 |      $ 1.000 |
    |              |          |          | **$ 17.999** |      **Total** | **$ 13.990** |

  * Si el costo de despacho es menor al tope: de descuento todo el costo de despacho

  * | producto     |   precio | cantidad |  subtotal    | cupón despacho |        total |
    | :----------- | -------: | :------: | -----------: | -------------: | -----------: |
    | A            | $ 12.999 |    1     |     $ 12.999 |                |     $ 12.999 |
    | Despecho     | $ 5.000  |          |      $ 3.000 |       $ -4.000 |      $     0 |
    |              |          |          | **$ 17.999** |      **Total** | **$ 12.990** |

# Descuento de Medio de pago

En Bsale puedes definir descuentos de medios de pago, el calculo del descuento de medio de pago se hace después del calculo de descuentos automáticos o cupones, sin considerar el monto de despacho. 

| producto |   precio | cantidad |                    descuento |                      cupón |        total |
| :------: | -------: | :------: | ---------------------------: | -------------------------: | -----------: |
|    A     | $ 12.999 |    1     | <del>30% `[ $ 3.900 ]`</del> |          20% `[ $ 2.600 ]` |     $ 10.399 |
|    B     |  $ 3.990 |    3     |                              |          20% `[ $ 2.394 ]` |      $ 9.576 |
|    C     |  $ 1.585 |    2     |   <del>15% `[ $ 476 ]`</del> |            20% `[ $ 634 ]` |      $ 2.563 |
|          |          |          |                              |                  **Total** | **$ 22.511** |
|          |          |          |                              |          Medio de pago 2%* |       -$ 450 |
|          |          |          |                              |    total - dcto medio pago | **$ 22.061** |
|          |          |          |                              |                   Despacho |      $ 3.500 |
|          |          |          |                              |               **Final**    | **$ 25.561** |

> `*` 2% de 22.511 = 450



---






<!-- comentado
### Descuento de Despacho por compra mínima

En Bsale puedes definir un monto mínimo sobre el cual es despacho es gratuito. 

Por ejemplo

*  **_Despacho gratis por compras igual o superior a $20.000_**

Dicho monto es calculado tras a aplicación de descuentos automáticos o cupones, pero no se aplica descuento por medio de pago 

##### Carro Original 
| producto |   precio | cant. | Sin Cupón |                           total |
| :------: | -------: | :---: | --------: | ------------------------------: |
|    A     | $ 12.999 |   1   |           |                         $ 12999 |
|    B     |  $ 3.990 |   3   |           |                        $ 11.970 |
|    C     |  $ 1.585 |   2   |           |                         $ 3.170 |
|          |          |       |  Subtotal | :heavy_check_mark: **$ 28.139** |
|          |          |       |  Despacho |              <del>$ 3.000</del> |
|          |          |       |     Total |                    **$ 28.139** |

> :heavy_check_mark: El subtotal del carro es mayor a 20.000 por lo que no se cobra despacho

##### Carro + cupón 30%

| producto |   precio | cant. |               cupón 30% |           total |
| :------: | -------: | :---: | ----------------------: | --------------: |
|    A     | $ 12.999 |   1   | 30% <br />`[ $ 3.900 ]` |         $ 9.099 |
|    B     |  $ 3.990 |   3   |  30%<br />`[ $ 3.591 ]` |         $ 8.379 |
|    C     |  $ 1.585 |   2   |    30%<br />`[ $ 951 ]` |         $ 2.219 |
|          |          |       |                Subtotal | **:x: $19.696** |
|          |          |       |                Despacho |         $ 3.000 |
|          |          |       |                   Total |    **$ 22.696** |

> :x: El subtotal del carro, luego de aplicar el cupón, es `$ 19.696` . Por lo que no se puede dar despacho gratis. 

##### Carro + cupón 25%

| producto |   precio | cant. |               cupón 25% |                          total |
| :------: | -------: | :---: | ----------------------: | -----------------------------: |
|    A     | $ 12.999 |   1   | 25% <br />`[ $ 3.250 ]` |                        $ 9.749 |
|    B     |  $ 3.990 |   3   |  25%<br />`[ $ 2.993 ]` |                        $ 8.978 |
|    C     |  $ 1.585 |   2   |    25%<br />`[ $ 793 ]` |                        $ 2.378 |
|          |          |       |                Subtotal | :heavy_check_mark: **$21.104** |
|          |          |       |                Despacho |             <del>$ 3.000</del> |
|          |          |       |                   Total |                   **$ 21.104** |

>:heavy_check_mark: El subtotal del carro, luego de aplicar el cupón, es `$ 21.104` . Por lo que aplica <ins>despacho gratis</ins>
-->