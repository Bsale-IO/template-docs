| configuración | valores | 
| ----- | ----- | 
| mostrar_selector_atributos | `true` dibuja atributos <br>`false` oculta atributos | 
| mostrar_selector_atributos_desde | `2` si el producto tiene al menos 2 atributos que definen nombre se dibuja el selector de atributos, sino se dibujara el selector de variantes <br>`1` dibujará siempre el selector de atributos | 
| radioButton_como_selector_variante | `true` dibuja un radio button por cada variante <br>`false` dibuja un selector de variantes |

### Componente completo 

```django
{% assign mostrar_selector_atributos = true %} <!-- true = dibuja atributos, false = oculta atributos -->
{% assign mostrar_selector_atributos_desde = 2 %}<!-- para que se muestren siempre atributos dejar en 1, sino dejar en 2 -->
{% assign radioButton_como_selector_variante = false %} <!-- true = radio button, false = selector -->

{% assign atributosRequeridos = 0 %}<!--no modificar esta variable -->
{% for sizeAttr in product.attributes %}
    {% if sizeAttr[1].required == 1 %}
        <!-- si el atributo es requerido se suma -->
        {% assign atributosRequeridos = atributosRequeridos | plus : 1 %}
    {% endif %}
{% endfor %}

<section class="row">
    <!-- si tiene al menos un atributo requerido y tiene definido mostrar atributos -->
    {%if atributosRequeridos >= mostrar_selector_atributos_desde and mostrar_selector_atributos == true %}

        {% for pAttr in product.attributes%}
            {% if pAttr[1].required > 0 %}
                <div class="col-md-6">
                    <div class="form-group">
                        
                            <select data-bs="product.attributes" data-info="{{pAttr[0]}}" class="form-control">
                                <option value="reset" selected disabled>Escoge {{pAttr[0]}}</option>
                                {% for val in  pAttr[1].values %}
                                    <option value='{{val}}'>{{val}}</option>
                                {% endfor -%}
                            </select>
                        
                    </div>
                </div>
            {% endif %}
        {% endfor %}
        
    {%elsif variant.size > 1 %}
    
        {% if radioButton_como_selector_variante %}
            <!-- si es radio button -->
            {% for var in variant %}
                <div class="col-lg-4">
                    <div class="custom-control custom-radio">
                        <input class="custom-control-input"
                            data-bs="product.variant"
                            data-info="{{var.id}}"
                            type="radio" 
                            value="{{ forloop.index }}" 
                            id="var{{forloop.index}}"
                            name="variantes"
                            {% if var.id == product.variantId %} checked {% endif %}
                            >
                        <label class="custom-control-label d-none" for="var{{forloop.index}}">
                            {{var.title}}
                        </label>
                    </div>
                </div>
            {% endfor %}
        {% else %}
            <!-- si es select -->
            <div class="col-12">
                <div class="form-group">
                    <select data-bs="product.variant" class="form-control">
                        {% for var in variant %}
                            <option
                                data-info='{{var.id}}'
                                value="{{ forloop.index }}"
                                {% if var.id == product.variantId %} selected {% endif %}
                                >
                                {{ var.title }}
                            </option>
                        {% endfor %}
                    </select>
                </div>
            </div>
        {% endif %}
        
    {% endif %}
</section><!--row-->
```