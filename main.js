var inputTarea = document.querySelector("#tarea");
let btn = document.querySelector("#agregar");
var listado = document.querySelector("#listado");
var cantidad = document.getElementById("cantidad");

var total = 0;


btn.addEventListener("click",function(e) {
    e.preventDefault();
let valInpi= inputTarea.value

let elementolista = document.createElement("li")


let parrafo=document.createTextNode(valInpi)
elementolista.appendChild(parrafo)
console.log(elementolista)

listado.appendChild(elementolista)

})
function BotonBorrar() {
    let borrar = document.createElement("Botton")

    borrar.textContent = "X";
    borrar.classname = "btn-borrar";

    borrar.addEventListener("click", function(e) {
        const item = e.target.parentElement
        elementolistab.removeChild(item);
    });
    return borrar;
}
