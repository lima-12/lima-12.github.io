const inputModoNoturno = document.querySelector("#modo-noturno");
const elemento = document.querySelector("body")

inputModoNoturno.addEventListener("click", () => {
    const modo = inputModoNoturno.checked ? "dark" : "light"
    elemento.setAttribute("data-bs-theme", modo)
})


// Função para fechar o menu quando um item é clicado
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.navbar-nav .nav-link');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const navbarToggle = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarToggle && navbarCollapse.classList.contains('show')) {
                navbarToggle.click();
            }
        });
    });
});

