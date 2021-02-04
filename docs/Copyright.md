```html
<aside>
   {{'name' | site }} &copy; {{ 'today' | date: '%Y' }} 
   ¿Te gusta mi tienda? Yo vendo con
   <a href="https://www.bsale{% if site.currency.isoCode == 'PEN' %}.com.pe{%else%}.cl{%endif%}/sheet/precios"
      title="ir a Bsale" 
      target="_blank" 
      rel="nofollow">
         Bsale
   </a>
</aside>
```