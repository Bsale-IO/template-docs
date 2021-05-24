  <h1>Resultados de busqueda</h1>
  <ul id="search-results"></ul>


  
  <script>
    window.store = {
      {% for collection in site.collections %}
        {% assign name = collection.label %}
        {% assign name_url = name | replace: ' ','-' %}
        {% for entry in site.[name] %}
          "{{ entry.url | slugify }}": {
            "title": "{{ entry.title | xml_escape }}",
            "author": "{{ entry.author | xml_escape }}",
            "category": "{{ entry.category | xml_escape }}",
            "content": {{ entry.content | strip_html | truncatewords: 20| strip_newlines | jsonify }},
            "url": "{{site.baseurl}}{{ entry.url | xml_escape }}"
          }{% if forloop.last %} {%else%}, {% endif %}
        {% endfor %}
      {% endfor %}    
    };
    


console.log(window.store)
  </script>


   <!-- buscador -->
    <script defer src="{{ '/assets/js/lunr.min.js' | relative_url }}"></script>
    <script defer src="{{ '/assets/js/search.js' | relative_url }}"></script>
