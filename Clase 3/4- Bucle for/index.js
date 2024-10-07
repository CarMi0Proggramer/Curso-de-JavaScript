/*
El bucle for es el bucle más usado de todos ya que te permite abreviar
todo el proceso de creación de iteradores y es muy sencillo para iterar arreglos que
los veremos más adelante
*/

// Sintaxis
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/*
Repasemos la sintaxis:
- Primero declaramos un iterador
- Luego separamos con punto y coma y declaramos la condición que debe de cumplir el bucle para ejecutarse
- Luego decimos como se va aumentar o decrementar el iterador
*/

// Puedes omitir cualquiera de estos pasos, por ejemplo...
//for (;;) {} // Bucle infinito

// Nota que si debes de poner los puntos y coma

// Obtengamos un número del usuario y digamos si es un número primo o no
// Los números primos son números divisibles por ellos mismos y el 1
// Nuestro bucle debería comenzar en 2

let num = parseInt(prompt("Escriba un número"));
let esPrimo = true; // Es primo hasta que se demuestre lo contrario

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        // Si tiene divisor no es primo, por lo que detenemos el bucle
        esPrimo = false;
        break;
    }
}

let mensaje = esPrimo ? "Es un número primo" : "No es un número primo";
console.log(mensaje);
