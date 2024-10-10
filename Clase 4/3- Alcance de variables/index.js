/*
Si te has fijado, o has intentado acceder a variables que están dentro
de una función, bucle o condicional desde fuera te habrás dado cuenta de que no puedes
hacerlo, pero, por qué?
*/

if (true) {
    let num = 100;
}
console.log(num); // -> ❌ undefined

/*
Esto sucede por el ámbito en el que se declara una variable, 
ya que si se declara en la ruta principal, o sea, fuera de cualquier estructura
como bucles, funciones, etcétera, puede ser accedida desde cualquier lugar,
esto se denomina alcance global
*/
let num = 100;
if (true) {
    console.log(num); // -> ✅ 100
}

/*
Las variables que solo pueden ser accedidas dentro de su ámbito tienen alcance local
*/
function funcion1() {
    let variableLocal = 100;

    function funcion2() {
        console.log(variableLocal);
    }

    funcion2(); // 100
}

funcion1(); // 100
/*
El alcance básicamente va desde afuera hacia adentro, pasa igual con la función
funcion2, solo se puede acceder dentro del ámbito de la funcion1
*/

/*
La variable más global en JavaScript se llama globalThis, la cual
hace referencia a dos cosas, en el navegador al objeto window, que es
la variable más global en JavaScript en este ámbito y en caso de estar en 
un entorno de ejecución de JavaScript como Node.js hace referencia a la variable global
*/

// Del objeto window salen todas las cosas a las que podemos acceder en JavaScript de forma normal...
window.console.log("Hola"); // -> Hola
window.Math.round(10.9); // -> 11
