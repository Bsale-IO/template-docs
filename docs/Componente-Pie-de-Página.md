El pie de página o footer es un componente de apoyo que se ubica en la parte inferior de una página web para desplegar _**información secundaria**_ como: _información de contacto, términos y condiciones, información de la empresa, etc..._ 

En la definición de `HTML 5` se agregó una etiqueta footer que le indica a los buscares que la información contenida dentro de footer es secundaria, es por ello que se recomienda usar dicha etiqueta para definir el **pie de página**  

En los template de Bsale desde la versión 4 es posible agregar una [[función Agregar desde Colección]], para que dicha función levante un modal indicando que el producto fue agrega puede agregar el componente  [[modal > agregar al carro | Modal-Agregar-al-carro]] después de la etiqueta `<footer>` en tu pie de página. 

```html
<footer>
   ... 
</footer>
{{ 'modal > agregar al carro' | get_component }}
```

Después de definir el componente puedes llamarlo así: 

```django
{{ "pie de página" | get_component}}
```