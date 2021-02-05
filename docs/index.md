{% raw %}

# h1 title
## h2 title
### h3 title
#### h4 title
##### h5 title
###### h6 title

parrafo 

> cita 
>> doble cita 
>>> tiple cita 
>>>> 4 cita

- list
- list
- list

1. numeral list
2. numeral list
3. numeral list
4. numeral list


Separador 
---






## html

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

| table | test  | 3 | 
| ---- |:-----:| --:|
| 3434 | 3434 | 1111|

## Simple table 

 1 | 2 | 3
 --: | :--: | :--
 A | B | C


inline `code` value

{% endraw %}