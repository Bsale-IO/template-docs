Para mejorar el desempeño de tu e-commerce te recomendamos dividir tus librerías css entre las principales, aquellas que dan forma a tu sitio, y secundarias,librerías no que no afectan el desempeño, tipografías, iconos, css de terceros, etc.. 


```html
<head>
...
   <link rel="stylesheet" src="{{'libreriaPrincipal.css' | asset_url }}">
   <script>
       var loadCss = [
           '{{'iconos.css' | asset_url }}',
           '{{'fuentes.css' | asset_url}}',
           '{{'otros.css' | asset_url}}'
       ];
    
       /*recorre el arreglo y agrega el css despues de que carga la pagina*/
       window.onload = function(){
           loadCss.forEach(function(url){
               var link = document.createElement('link');
               link.href = url;
               link.rel = 'stylesheet';
               document.head.appendChild(link);
           });
       };
   </script>
...
</head>
```