(function(){
    var menu = document.querySelector("#page-menu")
    if(menu){
        var title = document.querySelectorAll("h2,h3,h4,h5,h6"); //no considera h1 por ser el titulo de la pagina
        var items = "<strong>Menú Página</strong>";
        for(let i=0;i<title.length; i++){
            items +=`<a class="menu-level-${title[i].localName}" href="#${title[i].id}">${title[i].innerText}</a>`;
            title[0].innerHTML = `${title[0].innerHTML} <a href="#${title[0].id}"><small class="text-muted">#</small></a>`
        }
        menu.innerHTML = title.length > 0 ? items : "";   
    }
})()