<sub><sup>[[Home]] > [[Componente]] > Componente Cabecera </sup></sub>

La Cabecera o Header de la parte superior de tu e-commerce, por lo general en ella encuentras el logo de tu e-commerce, el [[menú | componente de menú]] de navegación principal del sitio, [[Buscador | componente buscador ]] y el [[carro de compras | Plantilla Carro]]. 

## Estructura Básica
```html
<header>
   <div>
       <a href="{{'url' | site}}">
          <img src="{{site.logo}}" alt="{{'name' | site}}">
       </a>
   </div>
   {{"Menú principal" | get_menu: "Cabecera - Menú" }}
   <a href="cart/display/">ir al carro</a>
</header>
```  