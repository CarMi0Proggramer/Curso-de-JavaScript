/*
Una forma popular de crear funciones son las funciones flecha, 
estas son funciones que no necesitan ser nombradas para ser creadas,
se conocen también como funciones anónimas, se crea de la siguiente manera...
*/

() => {
    console.log("Hola, qué tal?");
};

/*
Esta no se ejecutará, ya que simplemente es como una declaración anónima,
pero podemos almacenarlas en una variable, para luego invocarla...
*/

const saludar = () => {
    console.log("Hola, qué tal?");
};
saludar(); // -> Hola, qué tal?

// Podemos enviarle parámetros
const sumar = (num1, num2) => {
    return num1 + num2;
};

let resultado = sumar(10, 5); // -> 15

/*
Cuando solo tenemos una línea de código no es necesario poner la declaración
return y las llaves, si se ponen las llaves si habría que poner la declaración
return
*/
const restar = (num1, num2) => num1 - num2;

// Esto entiende que retorna la resta de dos números
resultado = restar(10, 5); // -> 5

/*
Debido a que son anónimas, no tenemos forma de hacer referencia a ellas
a menos que las almacenemos en variables para luego invocarlas, pero,
podemos invocarlas al mismo momento de declararlas, para ello, la rodeamos de
paréntesis y las invocamos de manera normal...
*/
(() => console.log("Hola, qué tal?"))(); // -> Hola, qué tal

/*
Notas que no abrí las llaves {}, eso es porque solo tiene una línea
de código, por ende no es necesario
*/

// Pasando parámetros
((num1, num2) => console.log("La suma es: ", num1 + num2))(10, 15); // -> La suma es: 25
