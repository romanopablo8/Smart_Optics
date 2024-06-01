

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

  const formulario = document.getElementById('formulario');
 const mensajeError = document.getElementById('mensajeError');
 console.log('For');
  const botoncontacto = document.getElementById("botonContacto");
  botoncontacto.addEventListener('click',validarContacto);
 
  function validarContacto() {
    let nombre = document.getElementById('nombre')
    let email = document.getElementById('email')
    let mensaje = document.getElementById('mensaje')
    const $selectionArchivos = document.querySelector("#selectionArchivos");
    $imgPreview = document.querySelector("imgPreview"); 

    const archivos = $selectionArchivos.files; 
      function validarEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return re.test(String(email).toLowerCase());
     }
 formulario.addEventListener('submit', function (event) {
    event.preventDefault();   
    var todo_correcto = true;
    // Validación de los campos
   if (nombre.value.trim().length < 1 ){
      alert('El campo nombre no puede estar vacío.\n');
      todo_correcto = false;
      nombre.focus();
    }
    else {
 
        if (!validarEmail(email.value)) {
           alert('El formato del email no es válido.\n');
          todo_correcto = false;
          email.focus();
        }
        else {
          if (mensaje.value.length < 1 ) {         
            alert('El campo mensaje no puede estar vacío.\n');
            todo_correcto = false;
            mensaje.focus();
           }
          else {
            console.log(archivos.value);
            if (archivos.length <1){
                alert('Debe seleccionar un archivo de imagen.\n');
                todo_correcto = false;
                archivos.focus();
              }
             else {
               $selectionArchivos.addEventListener("change",() =>
               {
             //Recuperamos el input que desencadeno la acción
               const archivos = $selectionArchivos.files;
                   if (!archivos || archivos.length) {
                   $imgPreview.src ="";
                   alert('El formato del archivo no es válido.\n');
                   todo_correcto = false;
                 }
                 else{
                     // Verificamos si existe una imagen seleccionada    
                     //Recuperamos el archivo subido
                     const primerArchivo = archivos[0];  
                     //Creamos un objeto de tipo objeturl
                     const  objectURL = URL.createObjectURL(primerArchivo);    
                     // Y a la fuente de la imagen le ponemos el objectURL
                     $imgPreview.src = objectURL;
                     //todo_correcto = false;
                     }             
                 });
              }
            }
          }    
       }
       if(!todo_correcto){
        //alert(mensajeError);
          todo_correcto = false;    
       }
       else {   
       alert("Mensaje enviado. Le contestaremos en breve. Gracias");    
       formulario.submit();
       }        
    });
    
 }

 /*if (nombre.value.trim().length < 1 ){
  mensajeError += 'El campo nombre no puede estar vacío.\n';
  //alert('El campo nombre no puede estar vacío.\n');
  todo_correcto = false;
  nombre.focus();
}
if (!validarEmail(email.value)) {
  mensajeError += 'El formato del email no es válido.\n';
  //alert('El formato del email no es válido.\n');
 todo_correcto = false;
 email.focus();
}
if (mensaje.value.length < 1 ) { 
  mensajeError += 'El campo mensaje no puede estar vacío.\n';       
  //alert('El campo mensaje no puede estar vacío.\n');
  todo_correcto = false;
  mensaje.focus();
 }
if (archivos.length <1){
  mensajeError += 'Debe seleccionar un archivo de imagen.\n';
  //alert('Debe seleccionar un archivo de imagen.\n');
  todo_correcto = false;
  archivos.focus();
}
else {
 $selectionArchivos.addEventListener("Change",() =>
 {
//Recuperamos el input que desencadeno la acción
 const archivos = $selectionArchivos.files;
     if (!archivos || archivos.length) {
     $imgPreview.src ="";
     mensajeError += 'El formato del archivo no es válido.\n'
     //alert('El formato del archivo no es válido.\n');
     todo_correcto = false;
   }
   else{
       // Verificamos si existe una imagen seleccionada    
       //Recuperamos el archivo subido
       const primerArchivo = archivos[0];  
       //Creamos un objeto de tipo objeturl
       const  objectURL = URL.createObjectURL(primerArchivo);    
       // Y a la fuente de la imagen le ponemos el objectURL
       $imgPreview.src = objectURL;
       //todo_correcto = false;
       }             
   });
  }
if(!todo_correcto){
   alert(mensajeError);
    todo_correcto = false;    
 }
 else {   
 alert("Mensaje enviado. Le contestaremos en breve. Gracias");    
 formulario.submit();
 }

 })

}*/
//el formulario se envia
