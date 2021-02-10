# Variables Liquid

<ul>
{% for li in site.liquid %}
    <li>
        <a href="{{li.url}}">
            {{li.title}}
        </a>
    </li>
{% endfor %}
</ul>