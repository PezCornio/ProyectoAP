$(document).ready(function () {

$.ajax({
    method: "GET",
    url: 'https://randomuser.me/api/?nat=uk,us,au',
}).done(function (data) {
    
    data.results.forEach(usuario => {
        let firstName = new Object(usuario.name.first); //usuario.name.last, usuario.nat, 
        let pais = new Object(usuario.nat);
        let apellido = new Object(usuario.name.last);
        let foto = new Object(usuario.picture.large);
        console.log(firstName, pais, foto, apellido);
        $("#profesor1_foto").attr("src", foto);
        
        $("#profesor1_nombre").html(firstName + " " + apellido);
    });
    
    $.ajax({
        method: "GET",
        url: 'https://randomuser.me/api/?nat=uk,us,au?gender=female',
    }).done(function (dataSegundo) {
        
        dataSegundo.results.forEach(usuario => {
            let firstName = new Object(usuario.name.first); //usuario.name.last, usuario.nat, 
            let pais = new Object(usuario.nat);
            let apellido = new Object(usuario.name.last);
            let foto = new Object(usuario.picture.large);
            console.log(firstName, pais, foto, apellido);
            $("#profesor2_foto").attr("src", foto);
            
            $("#profesor2_nombre").html(firstName + " " + apellido);
        });

        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?nat=uk,us,au',
        }).done(function (dataTercero) {
            
            dataTercero.results.forEach(usuario => {
                let firstName = new Object(usuario.name.first); //usuario.name.last, usuario.nat, 
                let pais = new Object(usuario.nat);
                let apellido = new Object(usuario.name.last);
                let foto = new Object(usuario.picture.large);
                console.log(firstName, pais, foto, apellido);
                $("#profesor3_foto").attr("src", foto);
                
                $("#profesor3_nombre").html(firstName + " " + apellido);
            });

            $.ajax({
                method: "GET",
                url: 'https://randomuser.me/api/?nat=uk,us,au',
            }).done(function (dataCuarto) {
                
                dataCuarto.results.forEach(usuario => {
                    let firstName = new Object(usuario.name.first); //usuario.name.last, usuario.nat, 
                    let pais = new Object(usuario.nat);
                    let apellido = new Object(usuario.name.last);
                    let foto = new Object(usuario.picture.large);
                    console.log(firstName, pais, foto, apellido);
                    $("#profesor4_foto").attr("src", foto);
                    
                    $("#profesor4_nombre").html(firstName + " " + apellido);
                });
});

$.ajax({
    method: "GET",
    url: 'https://randomuser.me/api/?nat=uk,us,au?gender=female',
}).done(function (dataQuinto) {
    
    dataQuinto.results.forEach(usuario => {
        let firstName = new Object(usuario.name.first); //usuario.name.last, usuario.nat, 
        let pais = new Object(usuario.nat);
        let apellido = new Object(usuario.name.last);
        let foto = new Object(usuario.picture.large);
        console.log(firstName, pais, foto, apellido);
        $("#profesor5_foto").attr("src", foto);
        
        $("#profesor5_nombre").html(firstName + " " + apellido);
    });
});

$.ajax({
    method: "GET",
    url: 'https://randomuser.me/api/?nat=uk,us,au',
}).done(function (dataSexto) {
    
    dataSexto.results.forEach(usuario => {
        let firstName = new Object(usuario.name.first); //usuario.name.last, usuario.nat, 
        let pais = new Object(usuario.nat);
        let apellido = new Object(usuario.name.last);
        let foto = new Object(usuario.picture.large);
        console.log(firstName, pais, foto, apellido);
        $("#profesor6_foto").attr("src", foto);
        
        $("#profesor6_nombre").html(firstName + " " + apellido);
    });
});

});
});
});
})
/*
const profesoresRandom = {
    profesor1 : {
        idFunction: "data",
        foto: "#profesor1_foto",
        nombre:"#profesor1_nombre",
    },

    profesor2 : {
        idFunction: "dataSegundo",
        foto: "#profesor2_foto",
        nombre:"#profesor2_nombre",
    },

    profesor3 : {
        idFunction: "dataTercero",
        foto: "#profesor3_foto",
        nombre:"#profesor3_nombre",
    },

    profesor4 : {
        idFunction: "dataCuarto",
        foto: "#profesor4_foto",
        nombre:"#profesor4_nombre",
    },

    profesor5 : {
        idFunction: "dataQuinto",
        foto: "#profesor5_foto",
        nombre:"#profesor5_nombre",
    },

    profesor6 : {
        idFunction: "dataSexto",
        foto: "#profesor6_foto",
        nombre:"#profesor6_nombre",
    },
}
    const listaProfesores = [profesoresRandom.profesor1, profesoresRandom.profesor2, profesoresRandom.profesor3, profesoresRandom.profesor4, profesoresRandom.profesor5, profesoresRandom.profesor6];
    const crearProfesores =  for (let i=1; i<= listaProfesores.length; i++) {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?nat=uk,us,au',
        }).done(function () {
            
            $("idFuntion").results.forEach(usuario => {
                let firstName = new Object(usuario.name.first); //usuario.name.last, usuario.nat, 
                let pais = new Object(usuario.nat);
                let apellido = new Object(usuario.name.last);
                let foto = new Object(usuario.picture.large);
                console.log(firstName, pais, foto, apellido);
                $("foto").attr("src", foto);
                
                $("nombre").html(firstName + " " + apellido);
            });
    
        })

    
    }*/
    
 