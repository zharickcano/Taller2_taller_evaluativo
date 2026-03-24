# Taller Practica 1

* ** En el directorio * **`./formulario/`**: Esta todo el contenido realizado
* ** En el directorio * **`./temp/`**: Esta todo lo crudo rescatado del documento

Errores encontrados en el texto crudo del documento

## Errores en el HTML

| Error | Etiqueta | Descripción |
| :--- | :--- | :--- |
| **Error de identación** | <span class="label">Nombre Completo:</span> | En la linea 5 del html, se encuentra un span, que no sigue con el orden de los demas textos del formulario, que son <label> |
| **Error de botón** | <button type="button" id="btn-submit">Enviar Registro</button> | En la linea 20, el error del boton es su "type", este debe ser tipo submit, sin embargo, el boton se puede usar si se llama su id en el script del programa |

---

## Errores en el JavaScript

| Error | Linea | Descripción |
| :--- | :--- | :--- |
| **Error de llamado** | const form = document.getElementsByClassName('registro-form');  | Linea 2. El error esta en que, llama a una id de la etiqueta form como clase, lo cual es incorrecto |
| **Error de lógico** | if (nombre = "") | Linea 10. El error esta a la hora de comparar, ya que solo tiene un =, no esta comparando, sino asignando un valor, que tampoco es posible de asignar, porque la variable "nombre" es constante |
| **Error de tipo** | if (edad === 18) | Linea 15. El error es que, intenta comparar un valor string con uno numérico. El dato edad es string porque desde el html el dato del campo lo rescata con ese tipo |
| **Error de scope** | console.log("Registrando a: " + nombre);  | Linea 26. El console.log intenta concatenar una variable que no existe dentro del scope local de la funcion. La variable a usar debe ser "n", que hace referencia al nombre |

---

### Errores en el CSS 

| Error | Linea | Descripción |
| :--- | :--- | :--- |
| **Error de diseño** | #main-container  | Linea 2. El contenido de los labels se carga en una linea, y los estilos estan forzando a las etiquetas a reorganizarce, por eso pueden quedar desalineadas |
| **Error de identación** | #registro-form div span | Linea 13. No presenta un error lógico, sin embargo, acumular estilos en etiquetas generales puede dañar los estilos de otras secciones |
