const inputModoNoturno = document.querySelector("#modo-noturno");
const elemento = document.querySelector("body")

inputModoNoturno.addEventListener("click", () => {
    const modo = inputModoNoturno.checked ? "dark" : "light"
    elemento.setAttribute("data-bs-theme", modo)
})