/* 
Las funciones de JavaScript console.log y alert nos permiten 
mostrar mensajes en pantalla pero de forma distinta, mientras que
console.log muestra el mensaje en la consola del navegador, alert muestra
un cuadro de diálogo con el mensaje.
*/

console.log("Hola mundo"); // -> Hola mundo
alert("Hola mundo"); // -> Cuadro de diálogo con el mensaje "Hola mundo"

// Diferencias entre ambos:

// console.log es más específico y mucho más utilizado que alert

console.log({ name: "Juan" }); // -> { name: "Juan" }
alert({ name: "Juan" }); // -> [Object object]

// alert bloquea la ejecución del código, mientras que console.log no
// console.log es más adecuado para depurar código, mientras que alert es más adecuado para mensajes de error o advertencia

// console.log no tiene un límite de argumentos, mientras que alert sí.
alert("Uno solo");
//alert("Dos", "argumentos"); // -> ❌

console.log("Uno", "Dos", "Tres"); // -> ✅
