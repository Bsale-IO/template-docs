> **IMPORTANTE** Se recomienda utilizar la [[nueva estructura | Componente Paginación]]

```html
{{''| paginate:'String boton anterior ','String boton siguiente',''}}
```

### Componente

Para usar iconos se recomienda usar [Font Awesome](https://fontawesome.com/)

```html
<div class="bs-pagination">
{{ '' | paginate: '<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>', '' }}
</div>
<script>
    (function paginate(){
        var active = document.querySelector(".bs-pagination .actual");
        var next = active ? active.parentElement.nextElementSibling : undefined;
        var prev = active ? active.parentElement.previousElementSibling : undefined;
        if(next){next.classList.add("page-next");}
        if(prev){prev.classList.add("page-prev");}
    })();
</script>
```
### CSS
En el archivo `modificaciones.css` agregar

```css
/********************
pagination
********************/
.bs-pagination ul{
    display:flex;
    flex-wrap:wrap;
}
.bs-pagination li a{ /*borra todos*/
    display:none;
}
/* solo muestra los que cumplen las condiciones */
.bs-pagination li:first-child a,
.bs-pagination li:last-child a,
.bs-pagination li:nth-child(2) a,
.bs-pagination li:nth-last-child(2) a,
.bs-pagination li.page-prev a,
.bs-pagination li.page-next a,
.bs-pagination span{
    display:flex;
    justify-content:center;
    align-items:center;
    width:2.5rem;
    height:2rem;
}
```

## Estructura:

### Si estás en la primera página (1)

```html
<ul>
   <li>
      <span class="actual">1</span>
   </li>
   <li>
      <a href="...">2</a>
   </li>
   <li>
      <a href="...">3</a>
   </li>
   <li>
      <a class="pagination next" href="...">Siguiente</a>
   </li>
</ul>
```

### Si estás en la siguiente página (2)

```html
<ul>
   <li>
      <a class="pagination previous" href="...">Anterior</a>
   </li>
   <li>
      <a href="...">1</a>
   </li>
   <li>
      <span class="actual">2</span>
   </li>
   <li>
      <a href="...">3</a>
   </li>
   <li>
      <a class="pagination next" href="...">Siguiente</a>
   </li>
</ul>
```

### Si estás en la ultima página (3)

```html
<ul>
   <li>
      <a class="pagination previous" href="...">Anterior</a>
   </li>
   <li>
      <a href="...">1</a>
   </li>
   <li>
      <a href="...">2</a>
   </li>
   <li>
      <span class="actual">3</span>
   </li>
</ul>
```

