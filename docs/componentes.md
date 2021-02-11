# Componentes

<ul>
{% for li in site.componentes %}
    <li>
        <a href="{{site.baseurl}}{{li.url}}">
            {{li.title}}
        </a>
    </li>
{% endfor %}
</ul>