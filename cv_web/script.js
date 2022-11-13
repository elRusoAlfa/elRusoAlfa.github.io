function __(id){
  return document.getElementById(id);
}


function validarContrasena() {
  var password = "LookingForAJob-Geneve99",
      password2 = __('inpPass').value;
  if(password == password2){
    window.open("cv_web/index_esp.html", "_self");
  } else {
    __('resultado').innerHTML = '<p class="error"><strong>Error: </strong>¡Las contraseñas no coinciden!</p>';
  }
}

function enterEnviar(event){
  if(event.keyCode == 13){
    validarContrasena()
  }
}