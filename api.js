$(document).ready(function () {

$.ajax({
    method: "GET",
    url: 'https://randomuser.me/api/',
}).done(function (data) {
    
    data.results.forEach(usuario => {
        let firstName = new Object(usuario.name.first); //usuario.name.last, usuario.nat, 
        let pais = new Object(usuario.nat);
        let apellido = new Object(usuario.name.last);
        let foto = new Object(usuario.picture.medium);
        console.log(firstName, pais, foto, apellido);
        $("#comenta1_foto").attr("src", foto);
        $("#comenta1_nombre").append('<h4 class="card-title" id="comenta1_nombre">' + ($(firstName)).val() + '<h4>');
    });
    
    })
        

            
        
     
    
  });
  $(document).ready(function () {

function verDatos(usuarioRandom) {
    $.ajax({
        method: "GET",
        url: usuarioRandom
    }).done(function (datosUsuarioRandom) {
        $("#comenta1_card").show();

        $("#comenta1_foto").attr("src", datosUsuarioRandom.picture.thumbnail);

        $("#comenta1_nombre").html(datosUsuarioRandom.name.first);
console.log(datosUsuarioRandom);

    })
}
})