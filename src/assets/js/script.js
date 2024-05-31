document.addEventListener('DOMContentLoaded', () => {

  // Función para mostrar menú en mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const closeButton = document.querySelector('.close-btn');
  const navUl = document.querySelector('header nav ul');

  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('is-visible');
    closeButton.style.display = navUl.classList.contains('is-visible') ? 'block' : 'none'; // Mostrar/ocultar botón de cierre
  });

  closeButton.addEventListener('click', () => {
    navUl.classList.remove('is-visible');
    closeButton.style.display = 'none'; // Oculta el botón de cierre
  });



  // Función para marcar el enlace activo tanto en el header como en el footer
  function markCurrentLink(menuId) {
    const menu = document.getElementById(menuId);
    if (!menu) {
      console.error(`El elemento con id "${menuId}" no se encontró en el DOM.`);
      return;
    }

    const links = menu.getElementsByTagName('a');
    const currentUrl = window.location.href;

    for (let link of links) {
      if (currentUrl === link.href) {
        link.classList.add('current');
      }
    }
  }

  // Marca el enlace activo en el menú del header
  markCurrentLink('main-menu');

  // Marca el enlace activo en el menú del footer
  markCurrentLink('footer-menu');



  //botón subir
  const btnScrollTop = document.getElementById("btn-scroll-top");

  btnScrollTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 500) {
      btnScrollTop.classList.remove("hidden");
    } else {
      btnScrollTop.classList.add("hidden");
    }
  });
});