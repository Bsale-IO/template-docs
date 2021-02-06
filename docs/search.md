  
  <ul id="search-results"></ul>
  
  <script>
    window.store = {
      {% for entry in site.pages %}
        "{{ entry.url | slugify }}": {
          "title": "{{ entry.title | xml_escape }}",
          "author": "{{ entry.author | xml_escape }}",
          "category": "{{ entry.category | xml_escape }}",
          "content": {{ entry.content | strip_html | strip_newlines | jsonify }},
          "url": "{{ entry.url | xml_escape }}"
        },
      {% endfor %}
      {% for entry in site.posts %}
        "{{ entry.url | slugify }}": {
          "title": "{{ entry.title | xml_escape }}",
          "author": "{{ entry.author | xml_escape }}",
          "category": "{{ entry.category | xml_escape }}",
          "content": {{ entry.content | strip_html | strip_newlines | jsonify }},
          "url": "{{ entry.url | xml_escape }}"
        }
        {% unless forloop.last %},{% endunless %}
      {% endfor %}
    };
  </script>
  <script src="js/lunr.min.js"></script>
  <script src="js/search.js"></script>