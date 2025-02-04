var users = [];

const verPersona=()=>{
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var genero = document.getElementById("genero").value;
    
    const persona = {nombre
        ,telefono
        ,email
        ,genero};

    users.push(persona);

    var cuerpo = "<div>";

    users.map(user=>{
        cuerpo+="<div>"+user.nombre+" "+user.telefono+"</div>";
    });
    
    cuerpo +="</div>";
    document.getElementById("persona").innerHTML = cuerpo;
};

//init();
