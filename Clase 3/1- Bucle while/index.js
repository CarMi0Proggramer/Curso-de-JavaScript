/* 
Los bucles nos permiten ejecutar código repetidas veces mientras se cumpla una condición,
es muy útil para ejecutar acciones repetitivas, todos cumplen el mismo objetivo solo que nos
proporcionan formas distintas de hacerlo, veamos el bucle while
*/

// Sintaxis
/* 
while (condition) {
    // Código a ejecutar
} 
*/

// Supongamos que quieres imprimir todos los número del 1 al 10
// Manuelmente es cansado, pero podemos usar el bucle while

// Declaramos un contador
let count = 1;
while (count <= 10) {
    console.log(count);
    count = count + 1;
}

// Lo que estamos haciendo es imprimir el contador y sumarle uno al final
/*
El objetivo de sumar 1 es que el contador llegue al punto en que la condición
no se cumpla y se detenga el bucle, ya que un bucle infinito genera problemas
*/

// Un bucle infinito se genera cuando la condición siempre es verdadera
// Ejemplo:
/* 
while (true) {
    // Código
} */

// Analicemos un segundo como estamos aumentado el contador
count = count + 1;

/*
Tomamos su valor actual y le sumamos uno para formar
su próximo valor, esto se puede abreviar
*/
count += 1; // Significa lo mismo que antes

// Es lo mismo para las demás operaciones
count *= 10;
count /= 10;
count -= 10;

// En el caso de las operaciones de suma y resta hay una forma más abreviada de sumar o restar 1
count++;
count--;

// Volvamos al bucle
/*
Cada vez que se ejecuta el código del bucle
estamos volviendo a evaluar la condición, esa vuelta
completa se llama iteración, el contador en este caso es
comúnmente llamado iterador por lo que vas a ver que
muchas veces en lugar de nombrar la variable como contador
la nombran con estas letras: i, j, k y z (nombres comunes para iteradores)
*/

/*
En la condición del bucle pudiéramos tener múltiples condiciones
agrupadas con los operadores lógicos al igual que también podemos anidar más de un bucle dentro
de cada uno.
*/
