

function validar(f) {
  const mensajeError = document.getElementById('mensajeError');
var todo_correcto = true;
// Validación de los campos
if(document.getElementById('nombre').value.length < 2 ){
  mensajeError.innerText ='El campo nombre no puede estar vacío.';
  todo_correcto = false;
}
if(document.getElementById('password').value.length < 10 ){
  mensajeError.innerText ='El campo nombre no puede estar vacío.';
  todo_correcto = false;
}
if(!todo_correcto){
  alert('Algunos campos no están correctos, vuelva a revisarlos');
}
else {
  alert("Usuario logueado");
return todo_correcto;

}
}
//el formulario se envia

function registrar(f) {
  const mensajeError = document.getElementById('mensajeError');
var todo_correcto = true;
// Validación de los campos
if(document.getElementById('nombre').value.length < 2 ){
  mensajeError.innerText ='El campo nombre no puede estar vacío.';
  todo_correcto = false;
}
if(document.getElementById('apellido').value.length < 2 ){
  mensajeError.innerText ='El campo nombre no puede estar vacío.';
  todo_correcto = false;
}
if(document.getElementById('email').value.length < 10 ){ 
  mensajeError.innerText ='El campo nombre no puede estar vacío.';
  todo_correcto = false;
  
}
if(document.getElementById('password').value.length < 10 ){
  mensajeError.innerText ='El campo nombre no puede estar vacío.';
  todo_correcto = false;
}
if(!todo_correcto){
  alert('Algunos campos no están correctos, vuelva a revisarlos');
}
else {
  alert("Usuario registrado");
  setTimeout(function() {w.close();}, 6000);
  let isBoss = confirm("¿Loguearse?");
  alert(location.href ="https://romanopablo8.github.io/Smart_Optics/login.html");
  
return todo_correcto;

}
}
//el formulario se envia


function mensajear(a) {
  const mensajeError = document.getElementById('mensajeError');
  var todo_correcto = true;
// Validación de los campos
if(document.getElementById('nombre').value.length < 2 ){
  mensajeError.innerText ='El campo nombre no puede estar vacío.';
  todo_correcto = false;
}

if(document.getElementById('email').value.length < 10 ){ 
  mensajeError.innerText ='El campo nombre no puede estar vacío.';
  todo_correcto = false;
  
}
if(!todo_correcto){
  alert('Algunos campos no están correctos, vuelva a revisarlos');
}
else {
  alert("Mensaje enviado. Le contestaremos en breve. Gracias");
  return todo_correcto;
}
}
//el formulario se envia






