/*
La programación orientada a objetos es uno de los paradigmas de programación
más utilizados que nos permite organizar y estructurar el código para construir
software escalable y sostenible a largo plazo.

Un objeto se puede entender como cualquier entidad física de la vida real, por
ejemplo, una persona, un perro o una casa.

Los objetos cuentan con propiedades y métodos, por propiedad se puede entender sus características
y por método se puede entender las acciones que puede realizar. Por ejemplo: un perro tiene
propiedades como su raza, edad y color, y métodos como ladrar o comer.

Los objetos como cualquier otra cosa en JavaScript pueden ser almacenados en variables,
así que comencemos por ahí...
*/

// Para crear un objeto utilizamos llaves
const persona = {};

/*
Sus propiedades son variables almacenadas en el objeto como un par "clave":"valor", si no están definidas
devolverán undefined si accedemos a ellas.

Para acceder a una propiedad de un objeto utilizamos una notación de punto seguido de la clave.
*/
console.log(persona.nombre); // -> undefined

// También podemos establecer una propiedad o cambiar su valor ya que son variables
persona.nombre = "Juan";
console.log(persona.nombre); // -> Juan

/*
Los objetos comúnmente son llamados arrays asociativos debido a que cada propiedad está
asociado a un valor de cadena de texto que se puede utilizar para acceder a ella, o sea la clave asociada
al valor de la propiedad.
*/
console.log(persona["nombre"]); // -> Juan

/*
De hecho, los arrays son objetos y funcionan exactamente igual solo que la clave
para acceder a la propiedad es un número entero (índice) y no puede ser accedido
con la notación de punto solo con los corchetes.
*/
let array = [1, 2, 3];
console.log(array[0]); // -> 1

// Las claves que establezcas son convertidas a cadenas de texto a menos que sean símbolos
// Para definir propiedades al crear un objeto simplemente separas por coma una sucesión de pares clave:valor
const persona2 = {
    nombre: "Juan",
    edad: 30,
};

// Nota que para asociar el valor se utilizan dos puntos ":"
/*
Los nombres de las propiedades no contienen las mismas reglas para ser creadas que una variable,
pueden contener espacios, guiones, etc... pero en esos casos deben ser delimitadas 
como si fueran cadenas de texto y solo podrían ser accedidas con la notación de corchetes.
*/
const persona3 = {
    "nombre completo": "Juan Pérez",
};
console.log(persona3["nombre completo"]);

/*
Los métodos de un objeto son también propiedades en sí mismas pero que son funciones en lugar
de variables
*/

const perro = {
    nombre: "Fido",
    raza: "Pastor Alemán",
    edad: 3,
    /* Lo creamos tal cual, una clave asignada a la función */
    ladrar: function () {
        console.log("¡Guau guau!");
    },
};

// Para acceder a un método accedemos como si fuera una propiedad y la ejecutamos
perro.ladrar(); // -> ¡Guau guau!

// Un objeto puede contener más objetos dentro de él
const persona4 = {
    nombre: "Juan",
    edad: 30,
    direcciones: {
        calle: "Calle falsa",
        ciudad: "Ciudad falsa",
    },
};
console.log(persona4.direcciones.calle); // -> Calle falsa

/*
Los objetos a diferencia de los arreglos no pueden ser recorridos
con un bucle normal, debido a que no tienen un tamaño fijo pero si podemos recorrer sus propiedades
con un bucle for...in
*/
for (let key in persona4) {
    console.log("Clave: " + key + " Valor: " + persona4[key]);
}

/*
Lo que hace este bucle es recorrer todas las claves de un objeto una a una.
Luego con ella podremos acceder al valor asociado a esa clave de propiedad.

Las claves de un objeto también se pueden obtener utilizando la clase global Object de
la cual provienen casi todos los objetos en JavaScript, con su método keys el cual devuelve un array
con todas las claves como cadenas de texto.
*/
console.log(Object.keys(persona4)); // -> Array con las claves como cadena de texto

// Usando Object.keys para iterar un objeto
for (const key of Object.keys(persona4)) {
    console.log("Clave: " + key + " Valor: " + persona4[key]);
}

/*
Podemos revisar si un objeto tiene una propiedad utilizando el método hasOwn, que toma
dos parámetros primero el objeto y luego el nombre de la clave (propiedad)
*/
console.log(Object.hasOwn(persona4, "nombre")); // -> true

/* 
Como sabemos la variables constantes no pueden ser reinicializadas, pero las propiedades de los objetos
no son variables constantes entonces todo el tiempo se pueden modificar, si queremos que a un objeto no se
le puedan seguir agregando propiedades después de ser creado podemos usar el método freeze de la clase Object.
*/
let obj = {
    propiedad_inmutable: 10,
};

Object.freeze(obj);
obj.propiedad_inmutable = 100; // -> ❌ No se le va a asignar
console.log(obj.propiedad_inmutable); // -> 10

// Este método es superficial o sea no funciona para objetos anidados
let otherObj = {
    obj: {
        propiedad_inmutable: 10,
    },
};
Object.freeze(otherObj);

otherObj.obj.propiedad_inmutable = 100; // -> ✅ Se le va a asignar

// Para congelar este objeto también se debería aplicar Object.freeze manualmente
console.log(otherObj.obj.propiedad_inmutable); // -> 100

/*
Así como existe un método para detener la asignación de propiedades también existe un método
para asignar propiedades en la clase Object pasándole un objeto del cual tomar las propiedades.
*/
let obj2 = {};

Object.assign(obj2, { nombre: "Juan" });
console.log(obj2.nombre); // -> Juan

// No solo le puedes pasar un objeto para asignar, puedes pasarle más y combinarlos
let a = { a: 10, c: 40 };
let b = { b: 10, c: 50 };
let combined = Object.assign({}, a, b);

// En el caso de las propiedades duplicadas las sobreescribe
console.log(combined);

/*
Hasta ahora hemos visto como crear objetos sin partir de una estructura base o prototipo
específico, para ello pasemos a ver que son los prototipos y como podemos usarlos para
crear y extender objetos heredando propiedades y métodos de otros.
*/
