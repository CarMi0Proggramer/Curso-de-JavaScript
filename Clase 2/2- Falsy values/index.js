// Los falsy values son valores que siempre al ser evaluados se tomarán como falsos
// Existen cuatro:
/*
- null
- undefined
- 0
- "" (string vacío)
*/

// Ejemplo
// Al utilizar una condicional, a veces necesitamos evaluar si nos han pasado un valor y hacer algo con él
let nombre = prompt("Escriba su nombre");
if (nombre !== null) {
    console.log("Te llamas ", nombre);
}

// Podemos ahorrarnos el nombre !== null simplemente comprobando que la variable no esté vacía
if (nombre) {
    console.log("Te llamas ", nombre);
}

/*
En el caso de que la variable sea null, es un falsy value, lo que quiere decir que al comprobarse
con la condición if (nombre) se tomará como falsa.
Por lo tanto, no se ejecutará el console.log("Te llamas ", nombre);
*/

// Lo mismo para los demás falsy values

// Ejemplo adicional:
let datos; // Traer datos de una API;
if (datos) {
    // Manejar los datos
}
