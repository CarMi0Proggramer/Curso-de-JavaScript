/*
Existen tres tipos de operadores:
- Aritméticos
- Comparativos
- Lógicos
*/

// Aritméticos 📐
// Suma -> +
// Resta -> -
// División -> /
// Multiplicación -> *
// Resto de la división -> %
// Exponenciación -> **

let resultado = 10 * 5; // -> 50

// Qué pasa si tenemos una variable que le estaremos sumando constantemente?
let num = 0;
// Las variables se pueden reasignar y reutilizar antes de ser reasignadas
num = num + 10; // ✅
// Una forma más abreviada
num += 10; // ✅

// Funciona para todos los casos
num -= 5;
num /= 5;
num *= 5;

/*
En el caso de una cadena de texto, el proceso de sumar se llama concatenación
ya que lo que se hace es formar una nueva cadena a partir de las antiguas
*/

let cadena1 = "Hola";
let cadena2 = "Mundo";

//console.log(cadena1 + cadena2); // -> HolaMundo ❌ los espacios cuentan
console.log(cadena1 + " " + cadena2); // -> ✅

/*
Si se intenta sumar una cadena de texto con número, JavaScript convertirá el número
a cadena de texto internamente para concatenarlos 
*/
console.log("Texto" + 1234); // -> Texto1234

// El operador del resto funciona de la siguiente manera
console.log(10 % 5); // -> 0 División exacta
console.log(10 % 3); // -> 1 División inexacta
// Es simplemente el resto de una división

// El operador de exponenciación funciona de la siguiente manera
console.log(10 ** 2); // -> 100

// Comparativos ❔
// Comparan un valor y el resultado es un booleano

// Mayor que >
// Mayor o igual que >=
// Menor que <
// Menor o igual que <=
// Igualdad ==
// Igualdad estricta ===
// Diferencia !=
// Diferencia estricta !==

console.log(10 > 2); // -> true

// En el caso de igualdad o diferencia vemos que existen estricto y no estricto
console.log(10 == 10); // -> true
// Su uso está en este caso:
console.log(10 == "10"); // -> true
console.log(10 === "10"); // -> false
/*
Dado que JavaScript tiene tipado débil lo que hace es comparar por valor
por eso el segundo da verdadero, para que compare por valor y por tipo de dato
se utilizan los operadores estrictos
*/

// Lógicos 🧠

// And -> &&
// Or -> ||
// Not -> !
// Nullish Coalescing Operator -> ??

// Podemos hacer comparaciones o análisis más complejos gracias a estos operadores

/*
Un caso de uso puede ser el necesitar validar más de un dato al mismo tiempo
que te proporcione un usuario y tuvieras que asegurarte de que ambos sean correctos
*/

/*
Podemos pedir los datos con la función prompt de JavaScript
la cual pide los datos mediante un cuadro parecido al de alert
*/

let input = prompt(
    "Mensaje opcional a mostrar: ",
    "Valor por defecto opcional"
);
/* 
Aquí guardamos la entrada en una variable input, la cual es devuelta como una cadena de texto
o null en caso de que no se halla insertado y no se haya proporcionado valor por defecto
*/

let nombre = prompt("Escriba su nombre: ");
let edad = prompt("Escriba su edad: ");

console.log(nombre != null && edad != null); // -> booleano

/*
Aquí utilizamos el operador && para asegurarnos de que ambos valores
no pueden ser nulos, así funciona este operador, al realizar la comparación se devolverá
un booleano.
Para que este sea true, todas las comparaciones se deben cumplir:

true && true -> true
false && false -> false
false && true -> false
true && false -> false
*/

/*
En caso contrario, el operador || solo necesita que se cumpla una condición

true || true -> true
false || false -> false
false || true -> true
true || false -> true
*/

// El operador ! simplemente convierte todo a lo contrario
let mi_variable = "Definida";
console.log(mi_variable == undefined); // -> false

// Abreviación
console.log(!mi_variable); // -> false

// El operador ?? lo que hace es elegir en una comparación un valor que no sea nulo o no definido
console.log(null ?? 3000); // -> 3000
console.log(3000 ?? undefined); // -> 3000

// Aún con booleanos
console.log(null ?? false); // -> false
