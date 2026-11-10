// Seleccionamos un elemento con la clase '.test' y le añadimos un escuchador para el evento "click".
document.querySelector(".test").addEventListener("click", function (event) {
    // Detenemos la propagación del evento para que no suba a los elementos padres (event bubbling).
    event.stopPropagation();
    // Mostramos una ventana emergente (alert) indicando que se hizo clic en el botón.
    alert("click en el boton");
});

/* 
// (Bloque comentado) Ejemplo para interceptar el menú contextual (clic derecho) 
// y evitar que aparezca el menú nativo del navegador mediante preventDefault().
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("menu contextual esta intervenido");
});
*/

// Añadimos un escuchador global a la ventana (window) para detectar cualquier clic en la web.
window.addEventListener("click", function (event) {
    // Imprimimos un mensaje en la consola cada vez que se haga clic en cualquier parte de la ventana.
    console.log("hemos hecho click en la ventana de la web");
});