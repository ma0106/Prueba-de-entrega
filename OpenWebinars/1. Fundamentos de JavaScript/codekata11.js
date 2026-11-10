// Seleccionamos el elemento de entrada de texto con la clase '.saluda' y lo guardamos en 'inputName'.
let inputName = document.querySelector(".saluda");

// Seleccionamos el botón con la clase '.boton' y lo guardamos en 'buttonSaluda'.
let buttonSaluda = document.querySelector(".boton");

// Añadimos un escuchador de eventos de tipo "click" al botón.
buttonSaluda.addEventListener("click", function(event) {
    // Comprobamos mediante un condicional si el valor del input NO está vacío.
    if (inputName.value !== "") {
        // Si hay texto, mostramos una alerta saludando con el valor introducido en el input.
        alert("Hola " + inputName.value);
        // Limpiamos el campo de texto asignándole una cadena vacía.
        inputName.value = "";
    }
});