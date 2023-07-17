const menuHamburguer = document.querySelector(".menu-hamburguer");
const menu = document.querySelector(".lista-menu");
const iconeMenu = document.querySelector(".menu-hamburguer")

menuHamburguer.addEventListener("click", () => {
    if (menu.className.endsWith("lista-menu-JS")) {
        menu.classList.remove("lista-menu-JS")
        iconeMenu.classList.remove("menu-hamburguer--fechar")
    } else {
        menu.classList.add("lista-menu-JS")
        iconeMenu.classList.add("menu-hamburguer--fechar")
    }
})