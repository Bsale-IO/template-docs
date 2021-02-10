---
layout: liquid
title: Liquid Test
published: true
---
{% raw %}

### liquid 

```liquid
{% if variable.var == 0 %}
    <script> 
        var liquid = {{ liquid }}
        var i = "string";
        var n = 0
        var a = [ 0, value, "value"]
        var obj = {
            value: 0,
            var: "string",
            final: final 
        }

        function this(var){
            return var + 1 
        }
    <script>
{% elsif var[0] %}
    <div class="valor" id="id"> {{ variable.var}}</div>
{% else %}
    {% for i in iteration %}
        {{ i.value }}
    {% endfor %}
{% endif %}
```

### html
```html
{% if variable.var == 0 %}
    <script> 
        var liquid = {{ liquid }}
        var i = "string";
        var n = 0
        var a = [ 0, value, "value"]
        var obj = {
            value: 0,
            var: "string",
            final: final 
        }

        function this(var){
            return var + 1 
        }
    <script>
{% elsif var[0] %}
    <div class="valor" id="id"> {{ variable.var}}</div>
{% else %}
    {% for i in iteration %}
        {{ i.value }}
    {% endfor %}
{% endif %}
```



{% endraw %}