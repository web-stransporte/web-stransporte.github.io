

const verPersona=()=>{
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var genero = document.getElementById("genero").value;
    
    const persona = {nombre
        ,telefono
        ,email
        ,genero};

    
    document.getElementById("persona").innerHTML = "<div>"+JSON.stringify(persona)+"</div>";
};

//init();