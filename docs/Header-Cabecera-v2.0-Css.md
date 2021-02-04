
### Nomenclatura
| Menú | significado | clase|
|--------------|-------------|--------------|
| lv1 | primer nivel del menú |`bs-menu-lv1`|
| lv2 | segundo nivel, submenu de lv1 | `bs-menu-lv2`|
| lv3 | tercer nivel, submenu de lv2 |`bs-menu-lv3`|


## Archivo Css

1. Necesita Bootstrap 4 para funcionar
2. Crea nuevo archivo llamado `menu.css`
3. Copia y pega el código
4. Inserta la librería en el componente `Style CSS` antes de el archivo `modificaciones.css`
```django
<!-- style --------------><link rel="stylesheet" media="all" href="{{'style.css'| asset_url }}">
<!-- menu.css -----------><link rel="stylesheet" media="all" href="{{'menu.css' | asset_url}}">
<!-- modificaciones -----><link rel="stylesheet" media="all" href="{{'modificaciones.css' | asset_url }}">
```

> ### * Necesita tener cargado [[Header Cabecera v2.0 Componente]]

### Código
```css
/***************************** 
menu colors 
******************************/
.bs-header{
    background:#eaeaea;
}
.navbar-collapse{
    background:#EAEAEA; /*color de fondo*/
    box-shadow: 0 10px 20px rgba(0,0,0,0.19),
                0 6px  6px rgba(0,0,0,0.23);
    /*scroll bar firefox*/
    scrollbar-color: white #EAEAEA; /*1° barra, 2° fondo */
    /*scroll bar internet explorer*/
    scrollbar-track-color: #EAEAEA; /*color fondo scroll*/
    scrollbar-face-color: white; /*barra scroll*/
    scrollbar-shadow-color: white; /*borde*/
    scrollbar-arrow-color: white; /*color flechas scroll*/
}
/* scroll chrome, edge, safari*/
.navbar-collapse::-webkit-scrollbar{
  background:#EAEAEA; /*color fondo scroll*/
}
.navbar-collapse.collapse.show::-webkit-scrollbar-thumb{
  background: rgba(255,255,255,0.7)
}
.navbar-collapse.collapse.show::-webkit-scrollbar-thumb:hover{
  background: rgba(255,255,255,1)
}

.bs-menu-close button{
    background:transparent;
    border-color:transparent;
}

.bs-menu-lv1:hover,
.show>.bs-menu-lv1{
    background:rgba(0,0,0,0.5);
    color:white;
}

/***************************** 
menu mobile 
******************************/
.navbar-collapse.collapse,
.navbar-collapse.collapse.show,
.navbar-collapse.collapsing {
    position:fixed !important;
        top:0;
        left:0;
    height:100vh !important;
    z-index:1000;
    /*aqui aplica color de fonde del menú*/
    background: #fff;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19),0 6px  6px rgba(0,0,0,0.23);
    transition: all .25s ease;

}
.navbar-collapse.collapse,
.navbar-collapse.collapsing{
    width:0;
    max-width:0;
    padding:0;
}
.bs-dropdown-icon{
    margin-left:.5rem;
    display:inline-block;
}
.show > .dropdown-toggle .bs-dropdown-icon{
    transform:rotate(180deg);
}
.bs-menu-lv2, .bs-menu-lv3{
    display:block;
}
.bs-submenu .dropdown-menu{
    border:0 none;
    padding-bottom: 1rem;
}
.navbar-collapse.collapse.show {
    width:calc(100% - 1rem); /*tamaño del menu en mobile*/
    max-width:300px;
    padding:0 1rem;
    overflow-y:scroll;
}


.dropdown-menu{
    padding:0;
}
.dropdown-menu{
    margin-top:0;
}
.bs-menu-lv1, .bs-menu-lv2, .bs-menu-lv3{
    display: flex;
    align-items: center;
}
.bs-menu-lv1,
.bs-menu-lv2{
    display:flex;
    justify-content:space-between;
}
.bs-menu-lv1{
     padding: .5rem 1rem;
}
.bs-menu-lv2, .bs-menu-lv3{
    border-bottom: solid #eaeaea 1px;
    padding: .5rem 1rem;
}
.bs-menu-lv2{
    padding-left:1.5rem;
}
.bs-menu-lv3{
    padding-left:2rem;
}
.bs-menu-lv3::before{
    display:inline-block;
    padding-right:.5rem;
    content:"•";
}
.bs-menu-title .dropdown-menu{
    border-radius:0;
}
@media screen and (min-width:576px){
    .navbar-expand-sm.bs-menu-lv1{
        height: 100%;
	    display: flex;
	    align-items: center;
    }
    .navbar-expand-sm .bs-submenu .dropdown-menu{
        display:block;
        position: static !important;
    }
    .navbar-expand-sm .nav-item{
        flex:0 1 auto;
    }
    .navbar-expand-sm .bs-menu-close{
        display:none;
    }
    .navbar-expand-sm .navbar-collapse.collapse,
    .navbar-expand-sm .navbar-collapse.collapsing,
    .navbar-expand-sm .navbar-collapse.collapse.show{
        position:static !important;
        background:transparent;
        overflow-y:initial;
        max-width:100%;
        padding:0;
        box-shadow:none;
        height:auto !important;
        width:auto;
    }
    
    .navbar-expand-sm .bs-menu-big .bs-menu-lv1 + .dropdown-menu.show{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        align-items: start;
    }
    .navbar-expand-sm .bs-menu-big{
        position:static;
    }
    .navbar-expand-sm .bs-menu-column{
        width:25%;
    }
    
    /*ancho maximo de buscador*/
    .navbar-expand-sm .bs-header-search{
        max-width:10rem;
    }
   
    .navbar-expand-sm .bs-menu-big .dropdown-menu{
        padding-bottom:1rem
    }
    .navbar-expand-sm .bs-menu-title .bs-menu-lv2{
        font-weight:bold;
        padding-bottom:0;
    }
     .navbar-expand-sm .bs-menu-big .bs-menu-lv2 .bs-dropdown-icon{
        display:none;
    }
    .navbar-expand-sm .bs-menu-big .bs-menu-lv3{
        font-size:0.875rem;
        padding-left:1.5rem;
        padding-top:.25rem;
        padding-bottom:.25rem;
    }
    .navbar-expand-sm .bs-submenu,
    .navbar-expand-sm .bs-menu-lv2,
    .navbar-expand-sm .bs-menu-lv3{
        border:0 none;
    }
}

@media screen and (min-width:768px){
    .navbar-expand-md .bs-menu-lv1{
        height: 100%;
	    display: flex;
	    align-items: center;
    }
    .navbar-expand-md .bs-submenu .dropdown-menu{
        display:block;
        position: static !important;
    }
    .navbar-expand-md .nav-item{
        flex:0 1 auto;
    }
    .navbar-expand-md .bs-menu-close{
        display:none;
    }
    .navbar-expand-md .navbar-collapse.collapse,
    .navbar-expand-md .navbar-collapse.collapsing,
    .navbar-expand-md .navbar-collapse.collapse.show{
        position:static !important;
        background:transparent;
        overflow-y:initial;
        max-width:100%;
        padding:0;
        box-shadow:none;
        height:auto !important;
        width:auto;
    }
    
    .navbar-expand-md .bs-menu-big .bs-menu-lv1 + .dropdown-menu.show{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        align-items: start;
    }
    .navbar-expand-md .bs-menu-big{
        position:static;
    }
    .navbar-expand-md .bs-menu-column{
        width:25%;
    }
    
    /*ancho maximo de buscador*/
    .navbar-expand-md .bs-header-search{
        max-width:10rem;
    }
   
    .navbar-expand-md .bs-menu-big .dropdown-menu{
        padding-bottom:1rem
    }
    .navbar-expand-md .bs-menu-title .bs-menu-lv2{
        font-weight:bold;
        padding-bottom:0;
    }
     .navbar-expand-md .bs-menu-big .bs-menu-lv2 .bs-dropdown-icon{
        display:none;
    }
    .navbar-expand-md .bs-menu-big .bs-menu-lv3{
        font-size:0.875rem;
        padding-left:1.5rem;
        padding-top:.25rem;
        padding-bottom:.25rem;
    }
    .navbar-expand-md .bs-submenu,
    .navbar-expand-md .bs-menu-lv2,
    .navbar-expand-md .bs-menu-lv3{
        border:0 none;
    }
}

@media screen and (min-width:992px){
    .navbar-expand-lg .bs-menu-lv1{
        height: 100%;
	    display: flex;
	    align-items: center;
    }
    .navbar-expand-lg .bs-submenu .dropdown-menu{
        display:block;
        position: static !important;
    }
    .navbar-expand-lg .nav-item{
        flex:0 1 auto;
    }
    .navbar-expand-lg .bs-menu-close{
        display:none;
    }
    .navbar-expand-lg .navbar-collapse.collapse,
    .navbar-expand-lg .navbar-collapse.collapsing,
    .navbar-expand-lg .navbar-collapse.collapse.show{
        position:static !important;
        background:transparent;
        overflow-y:initial;
        max-width:100%;
        padding:0;
        box-shadow:none;
        height:auto !important;
        width:auto;
    }
    
    .navbar-expand-lg .bs-menu-big .bs-menu-lv1 + .dropdown-menu.show{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        align-items: start;
    }
    .navbar-expand-lg .bs-menu-big{
        position:static;
    }
    .navbar-expand-lg .bs-menu-column{
        width:25%;
    }
    
    /*ancho maximo de buscador*/
    .navbar-expand-lg .bs-header-search{
        max-width:10rem;
    }
   
    .navbar-expand-lg .bs-menu-big .dropdown-menu{
        padding-bottom:1rem
    }
    .navbar-expand-lg .bs-menu-title .bs-menu-lv2{
        font-weight:bold;
        padding-bottom:0;
    }
     .navbar-expand-lg .bs-menu-big .bs-menu-lv2 .bs-dropdown-icon{
        display:none;
    }
    .navbar-expand-lg .bs-menu-big .bs-menu-lv3{
        font-size:0.875rem;
        padding-left:1.5rem;
        padding-top:.25rem;
        padding-bottom:.25rem;
    }
    .navbar-expand-lg .bs-submenu,
    .navbar-expand-lg .bs-menu-lv2,
    .navbar-expand-lg .bs-menu-lv3{
        border:0 none;
    }
}

@media screen and (min-width:1200px){
    .navbar-expand-xl .bs-menu-lv1{
        height: 100%;
	    display: flex;
	    align-items: center;
    }
    .navbar-expand-xl .bs-submenu .dropdown-menu{
        display:block;
        position: static !important;
    }
    .navbar-expand-xl .nav-item{
        flex:0 1 auto;
    }
    .navbar-expand-xl .bs-menu-close{
        display:none;
    }
    .navbar-expand-xl .navbar-collapse.collapse,
    .navbar-expand-xl .navbar-collapse.collapsing,
    .navbar-expand-xl .navbar-collapse.collapse.show{
        position:static !important;
        background:transparent;
        overflow-y:initial;
        max-width:100%;
        padding:0;
        box-shadow:none;
        height:auto !important;
        width:auto;
    }
    
    .navbar-expand-xl .bs-menu-big .bs-menu-lv1 + .dropdown-menu.show{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        align-items: start;
        
    }
    .navbar-expand-xl .bs-menu-big{
        position:static;
    }
    .navbar-expand-xl .bs-menu-column{
        width:25%;
    }
    
    /*ancho maximo de buscador*/
    .navbar-expand-xl .bs-header-search{
        max-width:10rem;
    }
   
    .navbar-expand-xl .bs-menu-big .dropdown-menu{
        padding-bottom:1rem
    }
    .navbar-expand-xl .bs-menu-title .bs-menu-lv2{
        font-weight:bold;
        padding-bottom:0;
    }
     .navbar-expand-xl .bs-menu-big .bs-menu-lv2 .bs-dropdown-icon{
        display:none;
    }
    .navbar-expand-xl .bs-menu-big .bs-menu-lv3{
        font-size:0.875rem;
        padding-left:1.5rem;
        padding-top:.25rem;
        padding-bottom:.25rem;
    }
    .navbar-expand-xl .bs-submenu,
    .navbar-expand-xl .bs-menu-lv2,
    .navbar-expand-xl .bs-menu-lv3{
        border:0 none;
    }
}
```