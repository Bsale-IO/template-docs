
## test page 

lorem ipsum

- [ ] manzanas
- [ ] papas
- [x] platanos

for here
{% for doc in site.test %}
    {{doc.content | xml_escape }}
{% endfor %}
{{site.pages.lenght}}
{{site.pages.size}}
{% for doc in site.pages%}
    {{doc.content | xml_escape }}
{% endfor %}