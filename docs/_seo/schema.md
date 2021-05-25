---
layout: default
title: Schema
published: true
---
{% raw %}
Este componente permite que google pueda gestionar la información de tu sitio web, debe ir dentro del [[Componente Body]] 

## Versión Febrero 2021
```liquid
<script>
    {{variant | json_encode}}
</script>
{% capture collection_description %} {{title}}: {%for product in collection%}{{product.title}}{% if forloop.last%}.{%else%}, {%endif%}{%endfor%}{%endcapture%}
<script type="application/ld+json">
    {
    "@context": "http://schema.org/",
    "@graph": [
        {
            "@type": "Store",
            "name": "{{site.name | replace: '"','&#34;'}}",
            "description": "{{site.description | replace: '"','&#34;'}}.",
                "telephone": [{% for tel in site.contact_numbers %}"{{tel}}"{% unless forloop.last%},{%endunless%}{%endfor%}],
            "priceRange": "$$",
            "image": "{{ site.logo| image_url: 'O' }}",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "{% if site.currency.isoCode == "CLP" %}CL{%else%}PE{%endif%}",
                "streetAddress": "{{site.shop_address | replace: '"','&#34;'}}"
            }
        },{
            "@type": "Organization",
            "url": "{{canonical_url}}",
            "logo": "{{site.logo}}",
            "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "{% for tel in site.contact_numbers %}{%if forloop.first%}{{tel}}{%endif%}{%endfor%}",
                "contactType": "customer service"
            }]
        },
        {%if current_url contains '/product/' %}
            {% for var in variant %}
                {
                    {% assign _name = product.title | append:" "| append: var.title | replace: '"','&#34;' %}
                    {% assign _brand = brand.br_name | replace: '"','&#34;' %}
                    "@type": "Product",
                    {% if brand.br_name %}"brand": {"@type": "Thing", "name": "{{_brand}}"},{% endif %}
                    "name": "{{_name}}",
                    "description": "{% if product.description.size > 0 %}{{product.description | strip_html | replace: '"','&#34;'}}{%else%}{{_name}} {{_brand}} {%endif%}",
                    "url": "{{current_url}}",
                    "sku": "{{var.sku}}",
                    "image":[{% for i in images %}"{{i.href}}"{% unless forloop.last %},{% endunless %}{%endfor%}],
                    "offers":{
                        "@type": "Offer",
                        "itemCondition": "https://schema.org/NewCondition",
                        "availability" : {% if var.allowNegativeStock > 0 or var.unlimitedStock > 0 %}"https://schema.org/InStock"{% else %} {% assign st =  var.id | get_stock_variant %}{% if st > 0 %}"https://schema.org/InStock"{%else%}"https://schema.org/OutOfStock"{%endif%}{%endif%},
                        "price": {{ var.finalPrice }},
                        "priceCurrency": "{{site.currency.isoCode}}",
                        "priceValidUntil": "{{'today' | date: '%Y%m%d' | plus: 1}}",
                        "priceSpecification": [{
                            "@type":  "PriceSpecification",
                            "priceCurrency": "{{site.currency.isoCode}}",
                            "price": {{var.finalPrice}},
                            "valueAddedTaxIncluded": "http://schema.org/True"
                        }],
                        "seller": {"@type": "Organization","name": "{{ site.name | replace: '"','&#34;' }}","url": "{{canonical_url}}"},
                        "url": "{{current_url}}"
                    }
                },
            {% endfor %}
        
        
            
            {% if product.brand or product.collections.size > 0 %}
                {% if product.brand %}
                {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "{{ product.brand.name | replace: '"','&#34;'}}",
                            "item": "{{canonical_url}}{{brand.link}}"
                        },{
                            "@type": "ListItem",
                            "position": 2,
                            "name": "{{title | replace: '"','&#34;'}}"
                            
                        }
                    ]
                },
                {%endif%}
                {% for collection in product.collections %}
                    {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "{{ collection.name | replace: '"','&#34;'}}",
                                "item": "{{canonical_url}}{{collection.link}}"
                            },{
                                "@type": "ListItem",
                                "position": 2,
                                "name": "{{title | replace: '"','&#34;'}}"
                        
                            }
                        ]
                    },
                {% endfor%}
            {% else %}
                {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "{{product.title | replace: '"','&#34;'}}"
                                
                            }
                        ]
                },
            {% endif %}
        {% elsif current_url contains '/collection/' or current_url contains '/brand/' %}
        {
            "@type": "ItemList",
            "name": "{{ title | replace: '"','&#34;'}}",
            "description": "{%if collection.description.size > 0%}{{collection.description | strip_html | replace: '"','&#34;'}}{%else%}{{collection_description | strip_html | replace: '"','&#34;' }}{%endif%}",
            "itemListElement": [
            {% for product in collection %}
                {
                    "@type": "listItem",
                    "position": "{{forloop.index}}",
                    "item": {
                        "@type": "product",
                        "name": "{{product.title | replace: '"','&#34;'}}",
                        "url": "{{canonical_url}}{{link}}#product-{{product.id}}",
                        "image": "{{product.defaultImage| image_url}}",
                        "description": "{% if product.description.size > 0 %}{{product.description | strip_html | replace: '"','&#34;'}}{%else%}{{product.title | replace: '"','&#34;'}} {{product.finalPrice | money_filter}} {%endif%}",
                        {% if product.brand.name %}
                            "brand": {
                            "@type": "Thing",
                            "name": "{{product.brand.name | replace: '"','&#34;'}}"
                            },
                        {% endif %}
                        "offers": {
                            "@type": "Offer",
                            "priceCurrency": "{{site.currency.isoCode}}",
                            "price": "{{ product.finalPrice}}",
                            "priceValidUntil": "{{'today' | date: '%Y%m%d'}}",
                            "itemCondition": "https://schema.org/NewCondition",
                            "availability": "https://schema.org/InStock",
                            "url": "{{product.link}}",
                            "seller": {
                                "@type": "Organization",
                                "name": "{{ site.name | replace: '"','&#34;'}}",
                                "url": "{{canonical_url}}"
                            }
                        }
                    }
                }{%unless forloop.last%},{%endunless%}
            {% endfor %}
            ]
        },{
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": "{{canonical_url}}{{collection.link}}",
                    "name": "{{title | replace: '"','&#34;'}}"
                    
                }
            ]
        },
        {% elsif current_url contains '/article/' %}
        {
            "@type": "NewsArticle",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "{{article.link}}"
            },
            "headline": "{{article.title | replace: '"','&#34;'}}",
            "image": ["{%if article.image %} {{article.image}} {%else%} {{site.logo}} {%endif%}"],
            "datePublished": "{{article.created | date: "%Y-%m-%d %H:%M" }}",
            "dateModified": "{{article.modify_date | date: "%Y-%m-%d %H:%M"}}",
            "author": {
                "@type": "Person",
                "name": "{{site.name | replace: '"','&#34;'}}"
            },
            "publisher": {
                "@type": "Organization",
                "name": "{{site.name | replace: '"','&#34;'}}",
                "logo": {
                    "@type": "ImageObject",
                    "url": "{{site.logo}}"
                }
            },
            "description": "{{article.content | strip_html | replace: '"','&#34;' | truncate: 100, "..."}}"
        },{
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": "{{canonical_url}}/blog",
                    "name": "Blog"
                    
                },{
                    "@type": "ListItem",
                    "position": 2,
                    "name": "{{title | replace: '"','&#34;'}}"
                    
                }
            ]
        },
        {% elsif current_url.size > canonical_url.size %}
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "{{ title | replace: '"','&#34;'}}"
                    
                }
            ]
        },
        {%endif%}
        {
            "@type": "WebSite",
            "url": "{{canonical_url}}",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "{{canonical_url}}/search?search_text={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        }
    ]
    }
</script>
```
{% endraw %}
