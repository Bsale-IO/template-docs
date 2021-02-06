
## test page 

lorem ipsum

- [ ] manzanas
- [ ] papas
- [x] platanos

{% for doc in site.test %}
    {{doc.content | xml_escape }}
{% endfor %}
