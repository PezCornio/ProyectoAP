
$(document).ready(function () {
                $("#enviar").click(function() {

                    
                let nombre = $("#nombre").val();
                let apellido = $("#apellido").val();
                let mail = $("#mail").val();
                let pais = $("#pais").val();

                if (nombre == undefined && apellido == undefined && mail == "" && pais == "") {
                    $("#enviar").removeClass("disabled");
                    
                } else {
                $("#tabla_nombre").append("<p>" + nombre + "</p>");
                $("#tabla_apellido").append("<p>" + apellido + "</p>");
                $("#tabla_mail").append("<p>" + mail + "</p>");
                $("#tabla_pais").append("<p>" + pais + "</p>");
            }

                    

                console.log(nombre,apellido,mail,pais);
                                    });

                                    });


