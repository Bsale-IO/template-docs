
## test page 

lorem ipsum

- [ ] manzanas
- [ ] papas
- [x] platanos

tihs cosa
{% for s in site.pages %}
    {{s.title}}
    {{s.name}}
    {{s.link}}
    {{s.url | replace: ".md",""}}

{% endfor %}
