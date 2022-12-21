const mexico = document.getElementById("mexico")
// document.getElementById("mexico").setAttribute("fill", "red")
const modalInfo = document.getElementById("ModalInfo")

mexico.addEventListener('click', seleccion)
function seleccion() {
    mexico.setAttribute("fill", "red")
    modalInfo.classList.add("ModalInfoVisible")
}