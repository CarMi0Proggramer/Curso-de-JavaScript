/*
Una función de alto orden es simplemente una función que es
enviada como parámetro hacia otra función o retornada como resultado
de ejecutar una función
*/

/*
Como hemos visto anteriormente, las funciones son algo parecido a una variable
y también pueden ser almacenadas en ellas
*/
const sumar = (a, b) => a + b;

/*
Esto lo que nos permite es que se puedan enviar como parámetros
o devueltas como resultado de una operación
*/

// Ejemplo
/* 
Intentemos filtrar un arreglo creando una función
que filtre mediante una condición que nosotros definamos
*/
let arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function filtrar(arr, filterFunction) {
    let newArray = [];

    for (let element of arr) {
        const matched = filterFunction(element);
        if (matched) {
            newArray.push(element);
        }
    }

    return newArray;
}

/*
Repasemos:

- Definimos el nuevo array a ser devuelto conteniendo el resultado de filtrar los elementos
- Recorremos el arreglo original
- Para cada elemento, aplicamos la función de filtro
- Si la función de filtro devuelve true, lo agregamos al nuevo arreglo
- Devolvemos el nuevo arreglo
*/

// Implementación
function esPar(num) {
    return num % 2 === 0;
}

// Usamos la función filtrar y la función de filtro esPar
const resultado = filtrar(arr, esPar);
console.log(resultado); // [10, 20, 30, 40, 50]

/*
Con esto podríamos hasta crear nuestro propio bucle
for que recorra el arreglo y aplique la función de filtro
*/

function loop(array, condition, callback, iterator = 0) {
    if (iterator >= array.length) return;

    let result = condition(array[iterator]);
    if (result) {
        callback(array[iterator]);
    }

    loop(array, condition, callback, ++iterator);
}

/*
Repasemos:

- Definimos la función que va a tomar el array, la condición que en este caso es una función
y la función de callback que un callback no es más que una función que se
ejecuta cuando termina un proceso en este caso luego de comprobar que se cumple la condición
- Revisamos si el iterador es mayor o igual al largo del array para ver si ya debemos detenernos
- Ejecutamos la función de la condición y si se cumple invocamos al callback
- Volvemos a llamar a la función loop de forma recursiva
*/

// Implementación
loop(
    arr,
    (n) => n % 2 === 0,
    (n) => console.log(n)
);

/*
En estos casos estamos pasando funciones como parámetros, pero también podríamos
devolverlas como resultado de la ejecución de una función e incluso que la función
recuerde el entorno donde se creó, estas funciones que recuerdan el entorno donde son
creadas se llaman Closures
*/

// Ejemplo
function crearContador() {
    let contador = 0;

    return () => {
        contador++;
        console.log(contador);
    };
}

const contador = crearContador();
contador(); // -> 1
contador(); // -> 2
contador(); // -> 3

/*
Básicamente la función devuelta al crear el contador, recuerda a la variable contador
ya que tiene acceso a ella en el ámbito donde se creó, por lo tanto, cada vez que se ejecuta,
seguirá aumentando el contador y imprimiéndolo
*/

// Otro ejemplo
function multiplicar(a) {
    return (b) => a * b;
}

const porDos = multiplicar(2);

console.log(porDos(10)); // -> 20
console.log(porDos(5)); // -> 10
console.log(porDos(100)); // -> 200

/*
Volviendo a los arreglos, no necesitamos crear una función para filtrar
un arreglo ya los arreglos tienen métodos que hacen exactamento esto y funcionan con
funciones de orden superior
*/

// Método para filtrar
// Devuelve un nuevo arreglo con los elementos filtrados
arr.filter((element) => element % 2 === 0);

// Método para recorrer un arreglo
// Recorre el arreglo y en cada iteración ejecuta la función enviada
// Todos estos métodos de los arrays reciben 2 parámetros, el primero es el elemento y el segundo su índice con algunas excepciones
arr.forEach((element, index) =>
    console.log("Índice: ", index, " Elemento: ", element)
);

// Método para mapear un arreglo
// Ejecuta la función pasada a cada elemento y devuelve un nuevo array con esos valores
let newArray = arr.map((element) => element * 2);
console.log(newArray); // -> Todos los elementos multiplicados por dos

// Método para reducir un arreglo
// Recorre el arreglo y devuelve el valor formado de aplicar una función a los elementos
// En este caso tenemos cuatro parámetros:
// - El valor anterior
// - El valor actual
// - El índice actual
// - El arreglo original
let value = arr.reduce((previousValue, currentValue, currentIndex, array) => {
    console.log("Índice actual: ", currentIndex, " en array: ", array);

    return previousValue + currentValue;
});
console.log(value); // -> La suma de los elementos del array;

// Método sort
// Ordena una array según una función y lo devuelve
arr = arr.sort((a, b) => b - a);
console.log(arr); // Los ordena al revés

// Si no se le envía una función los ordena de forma ascendente según el orden de los caracteres en ASCII
arr = arr.sort();
console.log(arr);

//Método some
// Devuelve true si al menos un elemento cumple una condición pasada en una función
let haveFive = arr.some((el) => el == 5);
console.log(haveFive); // -> 5

// Método every
// Devuelve true si todos los elementos de un array cumplen la condición enviada en una función
arr = arr.fill(1);
let isAllOne = arr.every((el) => el == 1);
console.log(isAllOne); // -> true
