// Obtener la URL de la página actual
var currentUrl = window.location.href;
// Obtener el menú de navegación
var menu = document.getElementById("main-menu");
// Obtener todos los enlaces dentro del menú
var links = menu.getElementsByTagName("a");
// Recorrer los enlaces
for(var i = 0; i < links.length; i++){
    // Obtener la URL de cada enlace
    var linkUrl = links[i].href;
    // Comparar la URL de cada enlace con la URL de la página actual
    if (currentUrl === linkUrl) // Si son iguales, añadir la clase 'current' al enlace
    links[i].classList.add("current");
}

//# sourceMappingURL=index.41b17edc.js.map
