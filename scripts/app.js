const mexico = document.getElementById("mexico")
const colombia = document.getElementById("colombia")
const argentina = document.getElementById("argentina")
const españa = document.getElementById("spain")
const brazil = document.getElementById("brazil")
const russia = document.getElementById("russia")
const australia = document.getElementById("australia")
const usa = document.getElementById("usa")
// document.getElementById("mexico").setAttribute("fill", "red")
const modalInfo9 = document.getElementById("ModalInfo9")
const modalInfo2 = document.getElementById("ModalInfo2")
const modalInfo3 = document.getElementById("ModalInfo3")
const modalInfo4 = document.getElementById("ModalInfo4")
const modalInfo5 = document.getElementById("ModalInfo5")
const modalInfo6 = document.getElementById("ModalInfo6")
const modalInfo7 = document.getElementById("ModalInfo7")
const modalInfo8 = document.getElementById("ModalInfo8")


mexico.addEventListener('click', seleccion8)
function seleccion8() {
    mexico.setAttribute("fill", "red")
    modalInfo8.classList.add("ModalInfoVisible8")
}

brazil.addEventListener('click' , seleccion2)
function seleccion2() {
    brazil.setAttribute("fill" , "yellow")
    modalInfo2.classList.add('ModalInfoVisible2')
}

españa.addEventListener('click',selecction4)
function selecction4() {
    españa.setAttribute("fill","blue")
    modalInfo4.classList.add("ModalInfoVisible4")
}

colombia.addEventListener('click',selecction3)
function selecction3() {
    colombia.setAttribute("fill","orange")
    modalInfo3.classList.add("ModalInfoVisible3") 
}

argentina.addEventListener('click', selecction5)
function selecction5() {
    argentina.setAttribute("fill","green")
    modalInfo5.classList.add("ModalInfoVisible5")
}

russia.addEventListener('click' , selection6)
function selection6() {
    russia.setAttribute("fill" , "purple")
    modalInfo6.classList.add("ModalInfoVisible6")
}

australia.addEventListener('click', selection7)
function selection7() {
    australia.setAttribute("fill", "brown")
    modalInfo7.classList.add("ModalInfoVisible7")
}

usa.addEventListener('click' , selection9)
function selection9() {
    usa.setAttribute("fill", "pink")
    modalInfo9.classList.add("ModalInfoVisible9")
}
