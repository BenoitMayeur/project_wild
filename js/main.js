
var domLogoHamburger, menuPrincipal;

domLogoHamburger = document.getElementById("button_hamburger"); 
menuPrincipal = document.getElementById("menu_hamburger");

if (domLogoHamburger != null && menuPrincipal != null) {



    domLogoHamburger.addEventListener("click", function (e) {

        document.getElementById("menu_hamburger").classList.toggle("visible");

        document.getElementById("header_id").classList.toggle("in_black");

        
        e.preventDefault();
    });
}



