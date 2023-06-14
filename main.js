var inputTarea = document.querySelector("#tarea");
let btn = document.querySelector("#agregar");
var listado = document.querySelector("#listado");
var cantidad = document.getElementById("cantidad");

var total = 0;


btn.addEventListener("click",function(e) {
    e.preventDefault();
let valInpi= inputTarea.value

let elementolista = document.createElement("li")
let botonEliminar=document.createElement("Button")
botonEliminar.setAttribute("Type","text")
botonEliminar.id="BotonEli"
botonEliminar.textContent="Eliminar"



let parrafo=document.createTextNode(valInpi)
elementolista.appendChild(parrafo)


listado.appendChild(elementolista)
listado.appendChild(botonEliminar)


})
function BtnBorrar(){
    const delBtn = document.createElement("button");
    delBtn.textContent = "borrar";
    delBtn.className = "btn-del";
  delBtn.addEventListener("click", (e) =>{
    const item = e.target.parentElement;
    ul.removechild(item);
 
  });
   return delBtn;
   }


