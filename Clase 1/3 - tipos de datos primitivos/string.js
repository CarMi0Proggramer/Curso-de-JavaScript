// Strings
//let cadena1 = 'Hola"; // ❌ Tienen que ser iguales
let cadena1 = "Hola";

// Qué pasaría si quisieras agregar otra comilla dentro de la cadena de texto?
// Por ejemplo, personas que escriben en inglés, bueno puedes escapar el caracter con \
cadena1 = 'I\'m Carlos'; // ✅

// O puedes poner comillas dobles y usar simples dentro
cadena1 = "I'm Carlos"; // ✅

// También existen caracteres de salto de línea
cadena1 = "Hola \nMundo";
// Hola
// Mundo

/* 
Existen muchas más formas de manipular las cadenas de texto de esta forma,
personalmente no las uso mucho
*/

/*
Existen en JavaScript otros tipos de comillas que son las
literales ``, y vienen a solucionar estos problemas
*/
cadena1 = `I'm Carlos`; // ✅

// Lo genial es que puedes meter una variable dentro de otra usando ${nombre_de_variable}
cadena1 = "Hola";
let cadena2 = `${cadena1} Mundo`;

// Y no solo eso, en realidad puedes ejecutar código JavaScript dentro como hacer una suma
let resultado = `El resultado de la suma es: ${10 + 5}`;
// El resultado de la suma es: 15

// Los strings tienen algunos métodos interesantes que se pueden usar
let mi_cadena = 'hola';

// Convierte todas las letras a mayúsculas
console.log(mi_cadena.toUpperCase()); // -> HOLA

// Convierte todas las letras a minúsculas
console.log(mi_cadena.toLowerCase()); // -> hola