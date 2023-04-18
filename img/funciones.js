$(document).ready(function(){
    $("#enviar").click(function(){
        function validarNombre() {
            let nombre = $("#nombre").val();
            if (nombre.length == "") {
              alert("Introduzca un nombre valido.")
              return false;
            } else if (usernameValue.length < 3 || usernameValue.length > 10) {
              alert("El nombre debe tener más de tres caracteres.");
              usernameError = false;
              return false;
            } else {
              alert($("#nombre"))
            }
          }
        
      });
    
  
  });

  function validarNombre() {
    let nombre = $("#nombre").val();
    if (nombre.length == "") {
      alert("Introduzca un nombre valido.")
      return false;
    } else if (usernameValue.length < 3 || usernameValue.length > 10) {
      alert("El nombre debe tener más de tres caracteres.");
      usernameError = false;
      return false;
    } else {
      alert($("#nombre"))
    }
  }