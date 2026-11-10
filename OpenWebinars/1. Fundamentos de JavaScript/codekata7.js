// Declaramos una variable global de bloque principal llamada 'name' con el valor "Armando".
let name = "Armando";

// Creamos un bloque condicional cuya condición siempre es verdadera (true).
if (true) {
    // Declaramos una variable 'text' utilizando 'let' DENTRO de este bloque.
    // Su alcance (scope) está limitado exclusivamente a este bloque 'if'.
    let text = "Un texto cualquiera";
} 

// Intentamos imprimir la variable 'text' fuera de su bloque de declaración.
// Esto generará un error de referencia (ReferenceError: text is not defined) 
// porque 'let' tiene un ámbito de bloque y 'text' no existe fuera de las llaves del 'if'.
console.log(text);