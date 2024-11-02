/*
El concepto de la desestructuración nos permite extraer propiedades de un objeto
en variables con el mismo nombre de la clave asociado a esa propiedad.

Por ejemplo, veamos el siguiente objeto...
*/
let user = {
    name: "Carlos Miguel",
    email: "carlos@test.com",
    token_de_acceso: "1idjkjdjaj9d01ijedkq01jdakd93rjhf28hf2871ig1ed23r42",
};

/*
Ahora imagina que necesitas acceder al email de usuario en varias partes del código.
Podrías hacerlo con la notación de punto "user.email" pero lo puedes simplificar
con la desestructuración.

La desestructuración permite crear variables a partir de las propiedades de un objeto
utilizando el mismo nombre de sus claves.
*/
const { email } = user;
console.log(email); // -> carlos@test.com

/*
Repasemos lo que acabamos de hacer:

- Declaramos una variable constante
- Abrimos llaves y escribimos el nombre de la propiedad a extraer del objeto
- Igualamos la variable al objeto

Esto lo que hace es extraer una variable con el nombre de la clave de la propiedad y el valor
actual que tiene asignado esa clave.

Es como hacer esto:

const email = user.email;

De esta forma nos ahorramos el tener constantemente que acceder a la propiedad a través del objeto.

Para extraer más de una propiedad las separamos por coma.
*/
const { name, token_de_acceso } = user;

/*
La desestructuración funciona también con los arrays solo que extraemos valores
en función de la posición (índice) del elemento en el array.
*/
const arr = [1, 2, 3];

// Para desestructurar un array se usan corchetes en lugar de llaves
const [uno, dos, tres] = arr;
console.log(uno); // -> 1
console.log(dos); // -> 2
console.log(tres); // -> 3

// Si las propiedades extraídas no existen simplemente se declaran undefined
const { country } = user;
console.log(country); // -> undefined

let array = [];
const [a] = array;
console.log(a); // -> undefined

/* 
Ahora que conocemos la desestructuración, pasemos a ver el "spread operator" que
utiliza el símbolo "..."

El spread operator nos permite expandir el contenido de un array o un objeto
en otro array o objeto.
*/

// Ejemplo
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];
console.log(moreNumbers); // -> [1, 2, 3, 4, 5, 6]

/*
El spread operator toma todos los números del array numbers y los agrega uno a uno dentro del
otro array al que luego agregamos 4, 5 y 6. Técnicamente los está "propagando".

El spread operator también funciona con los objetos aunque de una forma ligeramente distinta.
Veamos un ejemplo:
*/
const person = {
    name: "Juan",
    age: 30,
};
const newPerson = { ...person, occupation: "Desarrollador" };
console.log(newPerson); // -> {name: 'Juan', age: 30, occupation : 'Desarrollador'}

/*
En este caso lo que hace es copiar todas las propiedades en el objeto person y las
agrega en el objeto newPerson.

Si el objeto que está siendo copiado tiene una propiedad que está siendo añadida
en el objeto destino, el objeto destino sobreescribe la propiedad del objeto copiado.
*/

// Ejemplo
const p = {
    name: "Juan",
    age: 30,
    country: "España",
};
const newP = { ...p, country: "United States" };
console.log(newP.country); // -> United States

/*
Similar al spread operator está el rest operator que utiliza el mismo símbolo "..."
pero en contextos diferentes.

En este caso el rest operator lo que hace es recopilar un número indefinido de elementos y
los pone en un array.

Por ejemplo, cuando creamos una función sumar no queremos que solo se puedan pasar 2 parámetros
sino que se puedan pasar cualquier número de parámetros y que se sumen.
*/
function sumar(...numbers) {
    return numbers.reduce((a, b) => a + b);
}

/*
Nuestra función está recogiendo todos los parámetros y crea un array a partir
de ellos para luego internamente usar el método reduce para sumar los números del array.
*/
const resultado = sumar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(resultado); // -> 55

/*
También puedes extraer determinados datos de un array o objeto y luego con el rest operator
recopilar el resto de datos.
*/
const nums = [0, 1, 2, 3, 4, 5];
const [zero, ...rest] = nums;

console.log(zero); // -> 0
console.log(rest); // -> [1, 2, 3, 4, 5]

/*
En el caso de los objetos el rest operator recopila los datos en un nuevo objeto en lugar
de un array.
*/
const obj = {
    prop1: "prop1",
    prop2: "prop2",
    prop3: "prop3",
};
const { prop1, ...restProps } = obj;

console.log(restProps); // -> { prop2: "prop2", prop3: "prop3" }

/*
Diferencias:
- El spread operator se utiliza para crear una copia de un objeto o array, permitiendo expandir sus elementos.

- El rest operator se utiliza para recopilar múltiples elementos en un array o propiedades en un objeto.
*/
