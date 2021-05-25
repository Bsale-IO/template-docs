  <h1>Resultados de Búsqueda</h1>
  <div id="search-results" class="list-group list-group-flush"></div>
  <script>
    window.store = {
      {% for collection in site.collections %}
        {% assign name = collection.label %}
        {% assign name_url = name | replace: ' ','-' %}
        {% for entry in site.[name] %}
          "{{ entry.url | slugify }}": {
            "tags": {{ entry.tags}},
            "title": "{{ entry.title | xml_escape }}",
            "author": "{{ entry.author | xml_escape }}",
            "category": "{{ entry.category | xml_escape }}",
            "content": {{ entry.content | strip_html | truncatewords: 20| strip_newlines | jsonify }},
            "url": "{{site.baseurl}}{{ entry.url | xml_escape }}",
            "position": "{{forloop.index}} de {{forloop.length}}"
          },
        {% endfor %}
      {% endfor %}    
    };
console.log(window.store)
  </script>
   <!-- buscador -->
    <script defer src="{{ '/assets/js/lunr.min.js' | relative_url }}"></script>
    <script defer src="{{ '/assets/js/search.js' | relative_url }}"></script>
