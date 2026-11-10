// Declaramos una variable llamada 'hasPizza' y le asignamos el texto "No tengo".
let hasPizza = "No tengo";

// Comprobamos si 'hasPizza' es estrictamente igual al booleano 'false'.
// Como 'hasPizza' es un String ("No tengo"), esta condición se evalúa como falsa.
if (hasPizza == false) {
    console.log("No tengo pizza");
} 
// Comprobamos si 'hasPizza' es estrictamente igual al booleano 'true'.
// Como tampoco lo es, esta condición también se evalúa como falsa.
else if (hasPizza == true) {
    console.log("Tengo pizza");
} 
// Si ninguna de las condiciones anteriores se cumple, se ejecuta este bloque 'else por defecto'.
else {
    // Imprimimos el valor actual de la variable 'hasPizza', que mostrará "No tengo".
    console.log(hasPizza);
}