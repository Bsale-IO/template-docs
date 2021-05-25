---
layout: default
title: componentes
published: true
---
<div class="list-group">
{% for pg in site.[page.title] %}
<a href="{{ pg.url | relative_url | replace: '.html',''}}" class="list-group-item list-group-item-action">{{pg.title}}</a>
{% endfor %}
</div>