

$.ajax({
    type: "GET",
    url: 'https://randomuser.me/api/?inc=gender,name,nat,picture',
    dataType: 'json',
    success: function(data) {
        $.each(data, function(gender,name,nat,picture){
            console.log(gender, name, nat, picture);
            $("#comenta1_nombre").inner(name);
        }
)}
});