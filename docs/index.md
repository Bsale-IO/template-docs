{% raw %}

## h2 title
### h3 title
#### h4 title
##### h5 title
###### h6 title

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam augue, porta eu purus nec, venenatis dictum risus. Duis hendrerit et felis vel luctus. Pellentesque scelerisque lacus quis mi hendrerit, non eleifend justo commodo. Ut sed dolor euismod enim pulvinar tincidunt. Sed sem libero, viverra vel rutrum sit amet, consequat vel justo. Donec eget arcu turpis. Sed suscipit gravida tincidunt.

Aenean mauris magna, dignissim in dui et, viverra consequat nunc. Suspendisse facilisis gravida augue, non ultricies libero egestas non. Aenean a ultricies libero. Cras ante quam, volutpat ac magna id, accumsan blandit enim. Vestibulum ornare lacus sit amet purus interdum fringilla. Proin ac aliquet lorem, sed maximus justo. Nunc eu ex et augue consectetur placerat eu vitae dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio venenatis, luctus lacus at, scelerisque justo. Etiam et quam venenatis, viverra nulla et, auctor leo. Nunc cursus lectus lorem, nec congue nibh lobortis a. Duis tincidunt purus in orci rhoncus congue.

## Fuentes

```
**Negrita**
_Italica_
`Código`
[nombre enlace](link)
```

**Negrita**

_Italica_

`Código`

[nombre enlace](link)

### Citas

```
> cita 
>> doble cita 
>>> tiple cita 
>>>> 4 cita
```
> cita 
>> doble cita 
>>> tiple cita 
>>>> 4 cita

### Listas

```
- list
- list
- list

1. numeral list
2. numeral list
    - sub list
    - sub list
        - subsub list
        - subsub list
3. numeral list
    1. sub numeral
    2. sub numeral
        1. subsub numeral
        2. subsub numeral
4. numeral list
```

- list
- list
- list

1. numeral list
2. numeral list
    - sub list
    - sub list
        - subsub list
        - subsub list
3. numeral list
    1. sub numeral
    2. sub numeral
        1. subsub numeral
        2. subsub numeral
4. numeral list



### todo
```
- [ ] single
- [X] mark
```
- [ ] single
- [X] mark

### tabla 

```
| Aplica para               | Monto de Dinero    | Centrada           | Derecha            |
| ------------------------- | ------------------ | :----------------: | -----------------: |
| Todas las compras         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Productos Seleccionados   | :heavy_check_mark: | :heavy_check_mark: | :x:                |
| Colecciones Seleccionadas | :heavy_check_mark: | :heavy_check_mark: | :x:                |
```

| Aplica para               | Monto de Dinero    | Centrada           | Derecha            |
| ------------------------- | ------------------ | :----------------: | -----------------: |
| Todas las compras         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Productos Seleccionados   | :heavy_check_mark: | :heavy_check_mark: | :x:                |
| Colecciones Seleccionadas | :heavy_check_mark: | :heavy_check_mark: | :x:                |






## Liquid

```liquid
{% assign variable = "valor"%}
{% for i in list %}
{{i}}
{% endfor %}

{%if a}

{% elsif b %}

{% else %}

{% endif %}
```

```html
<div class="class" id="id" title="some">  {{texto}} </div>

```
## js
```js
var test = {{texto}} 
var str = "string"
let array = ["hola",2]
const objet = {
    json: true,
    test: "hola",
    num: 20.300
}
function a(t){
    return t.value
}

test.addEventListener('click', function(e){
    //do something
    let t = e
})
```

## css
```css
#id{
    color:red;
}
.class{
    width:10px;
}
a{
    display:none;
}
```

{% endraw %}