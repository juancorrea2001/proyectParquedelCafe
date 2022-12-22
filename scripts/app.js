const mexico = document.getElementById("mexico")
const colombia = document.getElementById("colombia")
const argentina = document.getElementById("argentina")
const españa = document.getElementById("spain")
const brazil = document.getElementById("brazil")
const russia = document.getElementById("russia")
const australia = document.getElementById("australia")
const usa = document.getElementById("usa")
const americasur = document.getElementById("americasur")
const europa = document.getElementById("europa")
const oceania = document.getElementById("oceania")
const americaNort = document.getElementById("americaNort") 
const americaNort2 = document.getElementById("americaNort2")
const americaNort3 = document.getElementById("americaNort3")
const americaNort8 = document.getElementById("americaNort8")
const modalInfo9 = document.getElementById("ModalInfo9")
const modalInfo2 = document.getElementById("ModalInfo2")
const modalInfo3 = document.getElementById("ModalInfo3")
const modalInfo4 = document.getElementById("ModalInfo4")
const modalInfo5 = document.getElementById("ModalInfo5")
const modalInfo6 = document.getElementById("ModalInfo6")
const modalInfo7 = document.getElementById("ModalInfo7")
const modalInfo8 = document.getElementById("ModalInfo8")
const americaNort9 = document.getElementById("americaNort9")
const americaNort10 = document.getElementById("americaNort10")
const oceania2 = document.getElementById("oceania2")
const oceania3 = document.getElementById("oceania3")
const europa2 = document.getElementById("europa2")
const europa3 = document.getElementById("europa3")
const closemodal = document.getElementById("closemodal")
const closemodal2 = document.getElementById("closemodal2")
const closemodal3 = document.getElementById("closemodal3")
const closemodal4 = document.getElementById("closemodal4")
//btn close
// const closeModal = documnt.getElementById("closeModal")
// closeModal.addEventListener("click", closeModalPais)
// const closeModalPais = () => {
//     modalInfo2.classList.add("ModalInfo2")
// }
//api paises
const apisPaises = [
    // [{ id: 0, pais: "Argentina", titulo: "¿Qué pasa con el café en la Argentina?", descripcion: "El café no se produce en Argentina, ni pasará por ahora, porque el clima no lo permite, por eso es que la materia prima es 100% importada, no hay manera de reemplazarla, y los límites para importar ponen en riesgo a todas las cafeterías del país." }],
    [{ id: 1, pais: "Colombia", titulo: "¿Qué importancia tuvo el café en Colombia?", descripcion: "Para el año 91 el café representó el 5.3% del PIB total y 23.4% del PIB agropecuario, con una actividad productiva que ocupa 1.15 millones de hectáreas. (Cuadro del café en la economía colombiana). El café ha sido la principal fuente de divisas para el país." }],
    [{ id: 2, pais: "Usa", titulo: "¿¿Qué importancia tiene el café en Estados unidos?", descripcion: "- EEUU es el principal consumidor de café a nivel mundial, el primer importador de café oro y el 2do de café tostado, asimismo es el 1er destino para las exportaciones de café de Costa Rica" }],
    [{ id: 3, pais: "España", titulo: "¿Cómo es el consumo de café en España?", descripcion: "Los fines de semana la media baja, situándose en 2,7 tazas al día. En cuanto al número de cafés por persona y día fuera de casa, el 55% de los que consumen café toma 1 o 2 tazas, mientras que el 24% toma entre 3 y 4 tazas" }],
    [{ id: 4, pais: "Mexico", titulo: "¿Qué pasa con el café en Mexico?", descripcion: "La Organización Internacional del Café publica anualmente un listado con los productores de café del mundo. Brasil, Colombia y Vietnam encabezan la lista y México es el 11º productor mundial. Actualmente, el café representa el 0.66% del PIB agrícola nacional y el 1.34% de la producción de bienes agroindustriales." }],
    [{ id: 5, pais: "Australia", titulo: "¿Qué importancia tuvo el café en Australia?", descripcion: "Australia es uno de los destinos más importantes del mundo en cuanto a cafés de especialidad; tiene una fama de innovadora, de tener baristas y tostadores galardonados y de tener una próspera cultura de tiendas de café" }],
    [{ id: 6, pais: "Rusia", titulo: "¿Qué importancia tuvo el café en Rusia?", descripcion: "La razón del importante predominio del café soluble en el mercado ruso se debe básicamente, a que este ha sido un país tradicionalmente consumidor de té y a que el soluble tiene un precio en el mercado algo más bajo que el café en grano o molido." }],
    [{ id: 7, pais: "Argentina", titulo: "¿Qué pasa con el café en la Argentina?", descripcion: "El café no se produce en Argentina, ni pasará por ahora, porque el clima no lo permite, por eso es que la materia prima es 100% importada, no hay manera de reemplazarla, y los límites para importar ponen en riesgo a todas las cafeterías del país." }],
    [{ id: 8, pais: "Brasil", titulo: "¿Qué importancia tuvo el café en Brasil?", descripcion: "Brasil es el principal exportador de café del mundo, con casi el doble de exportaciones que el segundo productor, Vietnam. Con un impacto tan devastador en la producción de café de Brasil este año, las repercusiones se sentirán en todo el mundo, extendiéndose probablemente hasta 2023 y más allá." }]
]
// mexico.addEventListener('click', seleccion8)
// function seleccion8() {
//     mexico.setAttribute("fill", "red")
//     modalInfo2.classList.add("ModalInfoVisible2")
//     const pais = document.createElement("h2")
//         pais.textContent = apisPaises[3][0].pais
//     modalInfo2.appendChild(pais)
//     const question = document.createElement("h3")
//         question.textContent = apisPaises[3][0].titulo
//     modalInfo2.appendChild(question)
//     const descripcion = document.createElement("p")
//         descripcion.textContent = apisPaises[3][0].descripcion
//     modalInfo2.appendChild(descripcion)
// }

americasur.addEventListener('click', select)
function select() {
    americasur.setAttribute("fill", "red")
    modalInfo2.classList.add("ModalInfoVisible2")
   
}

europa.addEventListener('click', select2)
function select2() {
    europa3.setAttribute("fill","green")
    europa2.setAttribute("fill","green")
    europa.setAttribute("fill", "green")
    modalInfo4.classList.add("ModalInfoVisible4")
}

oceania.addEventListener('click', select3)
function select3() {
    oceania3.setAttribute("fill","yellow")
    oceania2.setAttribute("fill","yellow")
    oceania.setAttribute("fill", "yellow")
    modalInfo5.classList.add("ModalInfoVisible5")
}

// africa.addEventListener('click' , select4)
// function select4() {
//     africa.setAttribute("fill" , "yellow")
// }

americaNort.addEventListener('click', select5)
function select5() {
    americaNort10.setAttribute("fill","blue")
    americaNort9.setAttribute("fill","blue")
    americaNort8.setAttribute("fill","blue")
    americaNort3.setAttribute("fill" , "blue")
    americaNort2.setAttribute("fill", "blue")
    americaNort.setAttribute("fill", "blue")
    modalInfo3.classList.add("ModalInfoVisible3")

}

closemodal.addEventListener('click', selected)
function selected() {
    americaNort10.setAttribute("fill","black")
    americaNort9.setAttribute("fill","black")
    americaNort8.setAttribute("fill","black")
    americaNort3.setAttribute("fill" , "black")
    americaNort2.setAttribute("fill", "black")
    americaNort.setAttribute("fill", "black")
    modalInfo3.classList.add("modalinvisible")
}
closemodal2.addEventListener('click', selected2)
function selected2() {
    europa3.setAttribute("fill","black")
    europa2.setAttribute("fill","black")
    europa.setAttribute("fill", "black")
    modalInfo4.classList.add("modalinvisible2")
}
closemodal3.addEventListener('click', selected3)
function selected3() {
    oceania3.setAttribute("fill","black")
    oceania2.setAttribute("fill","black")
    oceania.setAttribute("fill", "black")
    modalInfo5.classList.add("modalinvisible3")
}
closemodal4.addEventListener('click', selected4)
function selected4() {
    americasur.setAttribute("fill", "black")
    modalInfo2.classList.add("modalinvisible4")
}

// brazil.addEventListener('click', seleccion5)
// function seleccion5() {
//     brazil.setAttribute("fill", "green")
//     modalInfo2.classList.add("ModalInfoVisible2")
//     const pais = document.createElement("h2")
//         pais.textContent = apisPaises[7][0].pais
//     modalInfo2.appendChild(pais)
//     const question = document.createElement("h3")
//         question.textContent = apisPaises[7][0].titulo
//     modalInfo2.appendChild(question)
//     const descripcion = document.createElement("p")
//         descripcion.textContent = apisPaises[7][0].descripcion
//     modalInfo2.appendChild(descripcion)
// }

// españa.addEventListener('click', selecction4)
// function selecction4() {
//     españa.setAttribute("fill", "yellow")
//     modalInfo2.classList.add("ModalInfoVisible2")
//     const pais = document.createElement("h2")
//         pais.textContent = apisPaises[2][0].pais
//     modalInfo2.appendChild(pais)
//     const question = document.createElement("h3")
//         question.textContent = apisPaises[2][0].titulo
//     modalInfo2.appendChild(question)
//     const descripcion = document.createElement("p")
//         descripcion.textContent = apisPaises[2][0].descripcion
//     modalInfo2.appendChild(descripcion)
// }


// // C O L O M B I A

// colombia.addEventListener('click', selecction3)
// function selecction3() {
//     colombia.setAttribute("fill", "orange")
//     modalInfo2.classList.add("ModalInfoVisible2")

//     const pais = document.createElement("h2")
//         pais.textContent = apisPaises[0][0].pais
//     modalInfo2.appendChild(pais)
//     const question = document.createElement("h3")
//         question.textContent = apisPaises[0][0].titulo
//     modalInfo2.appendChild(question)
//     const descripcion = document.createElement("p")
//         descripcion.textContent = apisPaises[0][0].descripcion
//     modalInfo2.appendChild(descripcion)



// }


// function createCards(apisPaises) {
//     const { pais, titulo, id, descripcion } = apisPaises; // DESTRUCTURY

//     let contentCard = document.createElement('h3');
//     contentCard.textContent = titulo;
//     //   contentCard.classList.add('titulo');

//     let nameProduct = document.createElement('h2');
//     nameProduct.textContent = pais;
//     //   nameProduct.classList.add('pais');

//     let priceProduct = document.createElement('p');
//     //   priceProduct.classList.add('descripcion');
//     priceProduct.textContent = descripcion;
// }

// A R G E N T I N A
// argentina.addEventListener('click', selecction2)
// function selecction2() {

//     argentina.setAttribute("fill", "blue")
//     modalInfo2.classList.add("ModalInfoVisible2")
//     const pais = document.createElement("h2")
//         pais.textContent = apisPaises[6][0].pais
//     modalInfo2.appendChild(pais)
//     const question = document.createElement("h3")
//         question.textContent = apisPaises[6][0].titulo
//     modalInfo2.appendChild(question)
//     const descripcion = document.createElement("p")
//         descripcion.textContent = apisPaises[6][0].descripcion
//     modalInfo2.appendChild(descripcion)
// }



// //  R U S I A
// russia.addEventListener('click', selection6)
// function selection6() {
//     russia.setAttribute("fill", "purple")
//     modalInfo2.classList.add("ModalInfoVisible2")


//     const pais = document.createElement("h2")
//         pais.textContent = apisPaises[5][0].pais
//     modalInfo2.appendChild(pais)
//     const question = document.createElement("h3")
//         question.textContent = apisPaises[5][0].titulo
//     modalInfo2.appendChild(question)
//     const descripcion = document.createElement("p")
//         descripcion.textContent = apisPaises[5][0].descripcion
//     modalInfo2.appendChild(descripcion)

// }

// // a u s t r a l i a
// australia.addEventListener('click', selection7)
// function selection7() {
//     australia.setAttribute("fill", "brown")
//     modalInfo2.classList.add("ModalInfoVisible2")


//     const pais = document.createElement("h2")
//         pais.textContent = apisPaises[4][0].pais
//     modalInfo2.appendChild(pais)
//     const question = document.createElement("h3")
//         question.textContent = apisPaises[4][0].titulo
//     modalInfo2.appendChild(question)
//     const descripcion = document.createElement("p")
//         descripcion.textContent = apisPaises[4][0].descripcion
//     modalInfo2.appendChild(descripcion)
// }

// // U S A
// usa.addEventListener('click', selection9)
// function selection9() {
//     usa.setAttribute("fill", "pink")
//     modalInfo2.classList.add("ModalInfoVisible2")

//     const pais = document.createElement("h2")
//         pais.textContent = apisPaises[1][0].pais
//     modalInfo2.appendChild(pais)
//     const question = document.createElement("h3")
//         question.textContent = apisPaises[1][0].titulo
//     modalInfo2.appendChild(question)
//     const descripcion = document.createElement("p")
//         descripcion.textContent = apisPaises[1][0].descripcion
//     modalInfo2.appendChild(descripcion)
// }
