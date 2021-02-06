
---
title: value title
---

## test page 

lorem ipsum

- [ ] manzanas
- [ ] papas
- [x] platanos

### loop
{% for s in site.pages %}

    <!-- -->
    title       :{{s.title}}
    name        :{{s.name}}
    link        :{{s.link}}
    url         :{{s.url}}
    id          :{{s.id}}
    categories  :{{s.categories}}
    path        :{{s.path}}
    <!-- -->

{% endfor %}
