
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellidos');
const email = document.getElementById('email');
const formulario = document.getElementById('formulario');
const contraseña = document.getElementById('contraseña');


formulario.addEventListener('submit', e => {
    e.preventDefault();
    let enviar = false;
    let validarEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

    if(nombre.value.length <= 2){
        alert("Lo siento, el nombre tiene que tener más de 3 caracteres")
        enviar = true;
        
    }
    if(apellido.value.length <= 4){
        alert("Lo siento, el apellido tiene que tener más de 5 caracteres")
        enviar = true;
    }
    if(!validarEmail.test(email.value)){
        alert("Lo siento, tu email no cumple con los requisitos")
        enviar = true;
    }
    if(contraseña.value.length < 8){
        alert("Lo siento, tu contraseña tiene que tener más de 8 caracteres")
        enviar = true;
    }
    if(enviar){
        alert("Por favor, asegurate de que todos los campos esten correctos")
    } else {
        alert('Enviado correctamente')
    }

    
})
