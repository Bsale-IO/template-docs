```html
<!DOCTYPE HTML>
<html lang="es">
    <head>
        {{ 'head' | get_componet }}
    </head>
    <body>
        {{'body' | get_component }}
        <script type="text/javascript">
            window.location.href = "https://www.sitio-web.com"
        </script>
    </body>
</html>
```