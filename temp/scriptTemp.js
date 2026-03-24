// Intento de validación
const form = document.getElementsByClassName('registro-form'); // Error 1: ¿Es una clase o un ID?
const boton = document.getElementById('btn-submit');

boton.addEventListener('click', function() {
    const nombre = document.getElementById('usr_nm').value;
    const edad = document.getElementById('age_val').value;
    
    // Error Lógico: La validación siempre pasa aunque esté vacío
    if (nombre = "") { 
        alert("El nombre es obligatorio");
    }

    // Error de tipo: Comparación estricta con strings
    if (edad === 18) {
        console.log("Es mayor de edad");
    } else {
        console.log("No cumple la edad");
    }

    enviarDatos(nombre);
});

function enviarDatos(n) {
    // Error: Esta función intenta acceder a una variable que no existe fuera de scope
    console.log("Registrando a: " + nombre); 
    alert("Usuario registrado con éxito");
}
