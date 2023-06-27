//traer todos los elementos del html, cambiar formulario a .formulario porque es una clase
var formulario = document.querySelector(".formulario");
var btonEnviar = document.querySelector("#bton-enviar");

//se agre un addeventlistener para la escucha de la accion en el bton
btonEnviar.addEventListener("click", function(e){

  e.preventDefault();//se agrega el Default
  
  //renombrar para que se pueden identificar de una manera mas clara, agregar ;
  var nombreform = formulario.elements[0]; //Reasignar el nombre para que sean más claros
  var edadform = formulario.elements[1]; //Reasignar el nombre de e
  var nacionalidadform = formulario.elements[2]; //Reasignar el nombre 

  var nombre = nombreform.value; //obtener el valor de var nombre
  var edad = edadform.value; //obtener el valor de var edad

  var i = nacionalidadform.selectedIndex; //se tiene el indice seleccionado
  var nacionalidad = nacionalidadform.options[i].value;

  console.log(nombre, edad); //se imprime en consola (nombre y edad)
  console.log(nacionalidad); //

  if (nombre.length === 0) {
    nombreform.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    edadform.classList.add("error");
  }

  //organizar la condicion
if (nombre.length > 0 && (edad > 18 && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
}); 
//fin d la funcion y del addeventlistener

//Fragmento de codigo con funciones repetidad 
// var botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// var corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);



function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

//traer el html de la lista
var lista = document.getElementById("listaInvitados");

var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista");
lista.appendChild(elementoLista);

//Fragmento de codigo con funciones repetidad 
// var spanNombre = document.createElement("span")
// var inputNombre = document.createElement("input")
// var espacio = document.createElement("br")
// spanNombre.textContent = "Nombre: "
// inputNombre.value = nombre 
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
  var spanNombre = document.createElement("span");
  var inputNombre = document.createElement("input");
  var espacio = document.createElement("br");
  spanNombre.textContent = descripcion + ": "
  inputNombre.value = valor; 
  //appendChild
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);
  }
  
  //Invocar las funciones
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"

var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }
}