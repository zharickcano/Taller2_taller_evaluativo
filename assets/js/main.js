// Intento de validación
const form = document.getElementById('registro-form'); // Error 1: ¿Es una clase o un ID?
const boton = document.getElementById('btn-submit');
const campoNombre = document.getElementById('usr_nm');
const campoEdad = document.getElementById('age_val');
const campoEmail = document.getElementById('correo_elect');
const logNombre = document.getElementById("logNombre");
const logEdad = document.getElementById("logEdad");
const logCorreo = document.getElementById("logEmail");  
const r = document.getElementById("registroFinal");
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


//para dar enter y enviar formulario por funcion anonima
/*
form.addEventListener("submit", function(e)
{
    e.preventDefault(); // Evita que se recargue la página
    procesarRegistro();
});
*/ 

//arrow functin
form.addEventListener("submit",(e) =>
{
    e.preventDefault(); // eevita que se recargue la página
    procesarRegistro();
});

function procesarRegistro()
{
    //rescata los valores de los label
    let nombre = campoNombre.value;
    let edad = parseInt(campoEdad.value, 10);
    let email = campoEmail.value;
    if(validarDatos(nombre, edad, email))
        enviarDatos(nombre);
    else
        console.log("Datos Incorrectos");
}

function validarDatos(n, e, c)
{
    let boolN = true;
    let boolE;
    let boolC;
    if (n == "")
    {
        boolN = false;
        console.log("nombre no valido");
        logNombre.innerHTML = "El nombre es obligatorio";
        logNombre.style.color = "red";
    }
    else
    {
        logNombre.innerHTML = "";
    }

    if (e >= 18)
    {
        console.log("Es mayor de edad");
        boolE = true;
        logEdad.innerHTML = "";
    }
    else
    {
        console.log("No cumple la edad");
        boolE = false;
        logEdad.innerHTML = "No cumple la edad";
        logEdad.style.color = "red";
    }
    
    boolC = regexEmail.test(c);
    if(!boolC)
    {
        logCorreo.innerHTML = "Correo no valido";
        logCorreo.style.color = "red";
    }
    else
        logCorreo.innerHTML = "";

    return (boolN && boolE && boolC);
}

function enviarDatos(n) {
    r.style.color = "rgba(0, 255, 4, 0.918)";
    r.innerHTML = `<br>Registrando a ${n} 😁👌`;
    console.log("Registrando a: " + n); 
    alert("Usuario registrado con éxito");
}
