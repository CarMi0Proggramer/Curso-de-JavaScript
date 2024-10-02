/*
Ahora que conocemos el bucle while veamos las declaraciones break, continue y labeled
*/

// Declaración break
/*
Supongamos que quieres pedir datos a un servidor y en caso de que falle la
operación volver a hacer el intento
*/

let intentos = 3;
while (intentos > 0) {
    let datos; // Pedir datos
    if (datos) {
        // Manejar datos
        break; // Detener el bucle
    }

    intentos--;
}

/*
Analicemos un segundo que estamos haciendo:
- Primero pedimos los datos.
- Luego comprobamos si se obtuvieron esos datos con una condicional
- En caso de haberse obtenido esos datos pues los manejaríamos
- Luego tenemos una declaración 'break', con ella simplemente estamos pidiendo que se detenga el bucle ya que la
operación fue exitosa, significa lo mismo que en la declaración switch, básicamente es romper el bucle
- En el caso de que los datos no se hallan traído correctamente disminuimos el intento en 1 para volver a ejecutar la acción mientras queden intentos
*/

// Declaración continue
/*
Imagina que quisiéramos obtener la suma de todos los números hasta 30
exceptuando los múltiplos de 3
*/

let suma = 0;
let i = 0; // Iterador

while (i < 30) {
    i++;

    if (i % 3 == 0) {
        continue;
    }

    suma += i;
}

console.log(suma); // 30

/*
Dentro del bucle comprobamos si el iterador es múltiplo de 3 con el operador del
resto, en caso de ser cierto tenemos la declaración continue, que simplemente lo que
hace es saltar a la siguente iteración, o sea, deja de ejecutar código y pasa a la siguiente
vuelta del bucle, antes aumentamos el iterador para no generar un bucle infinito.
*/

// Declaración labeled
/* 
Cuando tenemos un bucle anidado dentro de otro, ocurren casos en los que queremos
detener el bucle entero cuando el que está adentro ya nos dio un resultado,
para ello tenemos la declaración labeled o etiqueta.
*/

let x = 0;
let z = 0;
bucleMayor: while (true) {
    console.log("Bucles externos: " + x);
    x += 1;
    z = 1;
    while (true) {
        console.log("Bucles internos: " + z);
        z += 1;
        if (z === 10 && x === 10) {
            break bucleMayor;
        } else if (z === 10) {
            break;
        }
    }
}

// Se ve un poco complejo, pero vamos a desglosarlo
/*
- Primero tenemos un bucle externo que infinito que va aumentando el iterador x
- Luego designamos a z el valor 1
- Luego el bucle interno comienza a incrementar z y en caso de que z y x lleguen a ser iguales
a 10 ejecutamos break bucleMayor, bucleMayor es la etiqueta que designamos para el mayor bucle,
de esa manera podemos detener el bucle más grande desde cualquier lugar
- O en caso de que z haya llegado a 10 el bucle que se detiene es el interno dando paso a la 
siguiente iteración del bucle mayor
*/

// Igual se puede usar con continue para saltar la iteración de un bucle más grande
// continue [etiqueta]
