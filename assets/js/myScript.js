

function validar(f) {
const mensajeError = document.getElementById('mensajeError');
var terminos = document.getElementById('terminos');
var todo_correcto = true;
// Validación de los campos

if(document.getElementById('nombre').value.length < 2 ){
  mensajeError.innerText ='El nombre de usurio es inválido.';
  todo_correcto = false;
}
if(document.getElementById('password').value.length < 8 ){
  mensajeError.innerText ='El password  es inválido.';
  todo_correcto = false;
}
if(!todo_correcto){
  alert('Algunos campos no están correctos, vuelva a revisarlos');
}
else {
  alert ("Usuario logueado");
  setTimeout(function() {w.close();}, 2000);
  let isBoss = confirm('Bienvenido');
  console.log(isBoss);
 URL(location.href="https://romanopablo8.github.io/Smart_Optics/productos.html");
return todo_correcto;

}
}
//el formulario se envia

///Validacion del Formulario de Registrar
function registrar(f) {
  const mensajeError = document.getElementById('mensajeError');
var todo_correcto = true;
var password = document.getElementById("password").value;
var password1 = document.getElementById("password1").value;
// Validación de los campos
if(document.getElementById('nombre').value.length < 2 ){
  mensajeError.innerText ='El campo nombre no puede estar vacío.';
  todo_correcto = false;
}
if(document.getElementById('apellido').value.length < 2 ){
  mensajeError.innerText ='El campo apellido no puede estar vacío.';
  todo_correcto = false;
}
if(document.getElementById('email').value.length < 10 ){ 
  mensajeError.innerText ='El campo nombre no puede estar vacío.';
  todo_correcto = false;
  
}

if(document.getElementById('password').value.length < 8 ){
  mensajeError.innerText ='El campo nombre no puede estar vacío.';
  todo_correcto = false;
}
if (password !== password1) {
  document.getElementById("mensajeError").textContent = "Las contraseñas no coinciden.";
  todo_correcto= false;
}

if (!terminos) {
  mensajeError.innerText = 'Debes aceptar los términos y condiciones.';
  todo_correcto = false;
}

if(!todo_correcto){
  alert('Algunos campos no están correctos, vuelva a revisarlos');
}
else {
  alert("Usuario registrado");
  setTimeout(function() {w.close();}, 6000);
  let isBoss = confirm("¿Desea Loguearse?");
  if (isBoss == true){
  window.location.href ="https://romanopablo8.github.io/Smart_Optics/login.html";
  }
return todo_correcto;
}

}
//el formulario se envia

// Validacion de Formulario de contacto
function mensajear(a) {
  const mensajeError = document.getElementById('mensajeError');
  var todo_correcto = true;
// Validación de los campos
if(document.getElementById('nombre').value.length < 2 ){
  mensajeError.innerText ='El campo nombre no puede estar vacío.';
  todo_correcto = false;
}

if(document.getElementById('email').value.length < 10 ){ 
  mensajeError.innerText ='El campo email no puede estar vacío.';
  todo_correcto = false;

}
if(document.getElementById('mensaje').value.length < 1 ){
  mensajeError.innerText ='El campo mensaje no puede estar vacío.';
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






