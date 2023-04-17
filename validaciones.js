$(document).ready(function() {

    $("#formulario").validate({
  
      
  
      rules: {
  
          
        nombre: {
            required: true,
            minlength: 3,
        },
  
        apellido: {
            required: true,
            minlength: 3,
        }, 
  
        mail: {
            required: true,
            email: true
        },
  
        pais: {
            required: true,
            minlength: 5
        }, 
         mensaje: {
            required: true,
            minlength: 15,
            maxlenght: 150,
         },

         

  
      },
  
       
      messages: {
  
        nombre: "Por favor, introduzca su nombre.",
  
        apellido: "Por favor, introduzca su apellido.",
  
        pais: "Por favor, ingrese su país.",
        
        mail: "Por favor, introduce una dirección de correo electrónico válida."
  
      },
  
      submitHandler: function(form) {
  
        
        form.submit();
  
      }
  
    });
  
  });



