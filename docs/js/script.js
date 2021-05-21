(function(){
    var menu = querySelector("#page-menu")
    if(menu){
        var title = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
        var items = "";
        for(let i=0;i<title.length; i++){
            items +=`<a class="menu-level-${title[i].localName}" href="#${title[i].id}">${title[i].innerText}</a>`;
        }
        menu.innerHTML = items
    }


})()