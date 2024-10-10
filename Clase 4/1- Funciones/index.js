/*
Una función es similar a un procedimiento, con ellas podemos guardar acciones
repetitivas en algo similar a una variable, se declaran con la palabra clave function
de la siguiente manera...
*/

function saludar() {
    console.log("Hola, qué tal?");
}

// Aquí simplemente hemos declarado una función saludar que emite un mensaje saludando
/*
Una vez definida la función en cualquier lugar del ámbito en el que se va a usar
debemos de invocarlas para usarlas
*/
saludar(); // -> Hola, qué tal?

/*
Al invocar a una función debemos abrir y cerrar los paréntesis,
de lo contrario, solo hacemos referencia a la función, que se puede
almacenar en otra variable...
*/
let saludar2 = saludar;
saludar2(); // -> Hola, qué tal?

// Las funciones también pueden tomar valores para trabajar con ellos, estos se conocen como parámetros
// Por ejemplo:
function sumar(num1, num2) {
    let resultado = num1 + num2;
    console.log("El resultado de la suma es: ", resultado);
}

sumar(10, 10); // -> El resultado de la suma es: 20
// Al invocar a la función se le pasan entonces los 2 parámetros, o sea, los números a sumar
// Una función puede tomar hasta 255 parámetros

/*
Los parámetros de una función también pueden tener valores por defecto
*/
function multiplicar(num1 = 10, num2 = 10) {
    let resultado = num1 * num2;
    console.log("El resultado de la multiplicación es: ", resultado);
}

multiplicar(); // -> El resultado de la multiplicación es: 100
// En caso de no tener valor por defecto y no pasarlos daría un error y esas variables serían undefined

// Así como las funciones toman valores para usarlos también pueden devolverlos
// Para ello usamos la palabra reservada return
function restar(num1, num2) {
    return num1 - num2;
}

// Podemos tomar el valor devuelto y guardarlo en variables
let resultado = restar(10, 5); // -> 5
console.log("El resultado de la resta es: ", resultado);

/*
Básicamente le estamos diciendo que retorne o devuelva un valor,
nota que cualquier código luego de una declaración return no se 
ejecutará ya que return se toma como el fin de la función
*/
function dividir(num1, num2) {
    return num1 / num2;
    console.log("Resultado: ", num1 / num2); // -> ❌ No se ejecutará
}
