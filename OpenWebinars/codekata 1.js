// Declaramos una constante llamada 'year' con el valor de texto "2023".
// Al ser una constante, su valor no podrá ser cambiado más adelante en el programa.
const year = "2023";

// Declaramos una variable llamada 'town' con el valor de texto "Centro".
// Al usar 'let', permitimos que el valor de esta variable pueda ser modificado posteriormente.
let town = "Centro";

// Imprimimos en la consola los valores actuales de las dos variables: 'town' ("Centro") y 'year' ("2023").
console.log(town, year);

// Modificamos el valor de la variable 'town', asignándole ahora el texto "Sur".
// Nota: No podemos hacer lo mismo con 'year' porque fue declarada con 'const'.
town = "Sur";

// Volvemos a imprimir en la consola los valores actualizados: 'town' ("Sur") y 'year' ("2023").
console.log(town, year);