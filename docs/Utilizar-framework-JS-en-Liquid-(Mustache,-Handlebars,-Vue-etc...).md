
Para no tener conflictos con otros framework como **Mustache**, **Handlebars**, **vue** u otros   es necesario utilizar la etiqueta `{% raw %}`. Este le indica a liquid que no procese el contenido dentro de la etiqueta. 

```js
{% raw %}
   //código aquí
{% endraw %}
```

## Ejemplo

```js
{% raw %}
   {{variable_vue}}
{% endraw %}
```

retorna un html
```js
   {{variable_vue}}
```

que puede ser procesado por el framework