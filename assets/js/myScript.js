
const formulario2 = document.getElementById('formulario2');
const botoncontacto2 = document.getElementById("botonContacto2");
botoncontacto2.addEventListener('click',validar);

function validar() {
  let nombre2 = document.getElementById('nombre2')
  let password2 = document.getElementById('password2')
// Validación de los campos
formulario2.addEventListener('submit', function (event) {
  event.preventDefault();   
  var todo_correcto = true;

if(nombre2.value.length < 2 ){
  alert('El campo nombre no puede estar vacío.\n');
  nombre2.focus();
  todo_correcto = false;
}else{
if(password2.value.length < 8 ){
       alert('Password inválido.\n');
       password2.focus()
       todo_correcto = false;
    }
    else{
      todo_correcto = true;
    }
}
      if(!todo_correcto){
       todo_correcto = false;
  }
  else {
    alert ("Usuario logueado");
    setTimeout(function() {w.close();}, 2000);
    let isBoss = confirm('Bienvenido');
     console.log(isBoss);
    URL(location.href="https://romanopablo8.github.io/Smart_Optics/productos.html");
    return todo_correcto;
  }
})
}





///Validacion del Formulario de Registrar usuario

const formulario1 = document.getElementById('formulario1');
const genero = document.querySelector('input[name="genero"]:checked');
const botoncontacto1 = document.getElementById('botonContacto1');
botoncontacto1.addEventListener('click',registrar);
const terminos = document.getElementById('terminos');
let termino = document.querySelector('input[name="terminos"]:checked');

function registrar() {
  let nombre1 = document.getElementById('nombre1');
  let apellido = document.getElementById('apellido');
  let email = document.getElementById('email');
  let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
  let Mujer = document.querySelector('#Mujer').value;
  let Hombre = document.querySelector('#Hombre').value;
  let Otro = document.querySelector('#Otro').value; 
  
  function validarEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(String(email).toLowerCase());
   }
// Validación de los campos
formulario1.addEventListener('submit', function (event) {
  event.preventDefault();
  var todo_correcto = true;
  if(nombre1.value.length < 2 ){
  alert('El campo nombre no puede estar vacío.');
  nombre1.focus();
  todo_correcto = false;
  }
  else{
    if(apellido.value.length < 2 ){
      alert('El campo apellido no puede estar vacío.');
      apellido.focus();
      todo_correcto = false;
    }
    else{
      if (!validarEmail(email.value)) {
        alert('El formato del email no es válido.\n');
        todo_correcto = false;
        email.focus();
      }
      else{
        if(password1.value.length < 8 ){
           alert('El campo contraseña no debe ser menor a 8 caracteres.');
           password1.focus();
           todo_correcto = false;
        }
        else {
           console.log(password1.value);          
            if (password1.value !== password2.value) {
              alert('Las contraseñas no coinciden.');
              password2.focus();
              todo_correcto= false;
            }
            else {                   
              if (genero.checked !== false) {
                alert('Debes elegir un genero.');
                // Mujer.radio();
                todo_correcto = false;
              }
              else {
                  genero.addEventListener('click',(event)=>{
                  if (genero.checked == true) {
                      // alert('Debes elegir un tipo genero.');
                      // Hombre.focus();  
                      todo_correcto = true;
                    }
                 })               
              }               
            }
           }
        }
       }
    }
    
    if (terminos.checked !== true ) {
      alert('Debes aceptar los términos y condiciones.');
     // terminos.checkbox();
      todo_correcto = false;
      return
    }
    else {
        console.log(termino);
        terminos.addEventListener('click', function (event) {
        console.log(termino);
        if(termino.checked == true){
          todo_correcto = true;
        }
        else {
          todo_correcto = false;
        }
       })
    }
    if(!todo_correcto){
        todo_correcto = false;
        alert("Los campos deben estar completos")
     }
     else {
           alert("Usuario registrado");
           setTimeout(function() {formulario1.reset();}, 6000);
          let isBoss = confirm("¿Desea Loguearse?");
          if (isBoss == true){
          window.location.href ="https://romanopablo8.github.io/Smart_Optics/login.html";
           }
         return todo_correcto;
        }
   })
}
//el formulario se envia



// Validacion de Formulario de contacto mas imagen 

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
