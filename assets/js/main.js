// Intento de validación
const form = document.getElementById('registro-form'); // Error 1: ¿Es una clase o un ID?
const boton = document.getElementById('btn-submit');
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


//para dar enter y enviar formulario
form.addEventListener("submit", function(e)
{
    e.preventDefault(); // Evita que se recargue la página
    procesarRegistro(); // Llamas a la misma función del botón
});

//boton.addEventListener('click', procesarRegistro);

function procesarRegistro()
{
    const nombre = document.getElementById('usr_nm').value;
    const edad = document.getElementById('age_val').value;
    const email = document.getElementById('correo_elect').value;
    let edadInt = parseInt(edad,10);
    // Error Lógico: La validación siempre pasa aunque esté vacío
    
    /* if (nombre == "") { 
        alert("El nombre es obligatorio");
    }

    // Error de tipo: Comparación estricta con strings
    if (edadInt >= 18) {
        console.log("Es mayor de edad");
    } else {
        console.log("No cumple la edad");
    }

    if((regexEmail.test(email)) && (validaciones == 2))
        enviarDatos(nombre);
    else
        alert("correo no valido")
    */
   if(validarDatos(nombre, edadInt, email))
        enviarDatos(nombre);
    else
        console.log("Datos Incorrectos");
}

function validarDatos(n, e, c)
{
    const logNombre = document.getElementById("logNombre");
    const logEdad = document.getElementById("logEdad");
    const logCorreo = document.getElementById("logEmail");  
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
    const r = document.getElementById("registroFinal");
    r.style.color = "rgba(0, 255, 4, 0.918)";
    r.innerHTML = `<br>Registrando a ${n} 😁👌`;
    // Error: Esta función intenta acceder a una variable que no existe fuera de scope
    console.log("Registrando a: " + n); 
    alert("Usuario registrado con éxito");
}
