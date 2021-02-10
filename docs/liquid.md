# Variables Liquid

<ul>
{% for li in site.liquid %}
    <li>
        <a href="{{site.baseurl}}{{li.url}}">
            {{li.title}}
        </a>
    </li>
{% endfor %}
</ul>