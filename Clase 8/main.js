/*
Es común que al escribir código cometamos algunos errores que luego hacen que
nuestro programa se detenga.

JavaScript al ser un lenguaje interpretado no muestra errores al iniciar el programa como en
otros lenguajes compilados porque el código se va compilando a medida que se va ejecutando,
por lo tanto si llegara a ocurrir un error, tu programa se detendría automáticamente.

A veces suelen ocurrir errores en alguna parte del código aislada pero que no afecta
a la aplicación en general, debido a esto, saber manejar errores es una buena práctica
ya que podemos asegurar que en caso de que aunque un pedazo de nuestra aplicación entera se
caiga, no dejará de funcionar completamente.

JavaScript proporciona diferentes formas de manejar errores que veremos a continuación pero
antes podemos indentificar algunos tipos de errores:
*/

// SyntaxError o error de sintaxis: es cuando escribes código no válido en JavaScript
// const x = ;

// ReferenceError o error de referencia: sucede cuando intentamos acceder a una variable que no se ha definido
// console.log(variableNoDefinida);

// TypeError o error de tipo: es cuando intentamos realizar una operación con un tipo de dato incompatible con la operación que estamos realizando.
// let num = 50;
// num.toUpperCase();

// Estos son los principales tipos errores y los más comunes en JavaScript

/*
JavaScript proporciona un mecanismo para manejar errores de forma controlada, el bloque
try...catch. Este bloque lo que hace es ejecutar el código en un bloque try
y si ocurre un error, el bloque catch se ejecuta.

Ejemplo:
*/
try {
    console.log(variableNoDefinida);
} catch {
    console.log("Ocurrió un error");
}

/*
En el ejemplo anterior intentamos realizar un console.log de una variable que no existe,
generando un error lo cual es capturado por el bloque catch que entonces emite un mensaje
notificando del error.

En este caso manejamos el error pero no lo identificamos, para identificarlo podemos
recibir el error dentro del bloque catch.
*/
try {
    console.log(variableNoDefinida);
} catch (error) {
    // Recibimos el error en una variable
    console.log("Error: ", error);
}

/*
En el ejemplo anterior, el bloque catch recibe el error en una variable llamada error,
esta variable es un objeto que proviene de la clase global "Error" de la cual provienen
la mayoría de los errores y tiene una propiedad "message" que nos permite obtener el mensaje del error.
*/
try {
    console.log(variableNoDefinida);
} catch (error) {
    // Los mayoría de errores provienen de la clase Error
    if (error instanceof Error) {
        console.log("Error: ", error.message);

        // Este objeto error tiene más propiedades útiles que nos pueden ayudar
        console.log(error.name); // Tipo de error
        console.log(error.stack); // Un mensaje conteniendo el error y los lugares donde ocurrió
    }
}

/*
Puede que ocurra una situación donde aunque ocurra el error necesites ejecutar
algún código específico, para ello podemos agregar el bloque "finally" en el try...catch que
permite ejecutar determinado código siempre que ocurra o no ocurra el error.

Por ejemplo, si intentas conectarte a una base de datos para realizar una consulta de algún
dato de algún usuario necesitas cerrar la conexión luego de terminada la acción pero si sucede un 
error esta no se cerrará, para ello podemos utilizar el finally.
*/
try {
    console.log("Conectando a la base de datos...");
    throw new Error("Error de conexión");
} catch (error) {
    console.log("Error:", error.message);
} finally {
    // El bloque finally siempre se va a ejecutar
    console.log("Cerrando conexión a la base de datos...");
}

/*
A veces no solo queremos manejar errores, sino que queremos crear los nuestros
propios para casos específicos, para ello podemos usar la cláusula "throw" que
te permite lanzar errores.

Por ejemplo, imagina que tu sitio web solo admite a personas mayores a 18 años, lo que podríamos
hacer es verificar la edad del usuario y si no es mayor de edad, lanzar un error para ser
manejado y que le prohiba el acceso a la página.
*/

function verificarEdad(edad) {
    if (edad < 18) {
        // La cláusula throw lanza un error que es una instancia de la clase Error en este caso
        throw new Error("Edad insuficiente");
    }

    return "Acceso concedido";
}

try {
    console.log(verificarEdad(15)); // -> Lanzará el error a ser atrapado por el bloque catch
} catch (error) {
    console.log("Error: ", error.message);
}

/*
Otra forma de crear errores personalizados es a través de una clase propia que
herede de la clase Error, por ejemplo imagina que el stock para vender un producto
es insuficiente, puedes lanzar un error InsufficientStock.
*/
class InsufficientStockError extends Error {
    constructor() {
        super("Stock insufuciente");
        this.name = "InsufficientStockError";
    }
}

try {
    const producto = {
        stock: 0,
    };

    venderProducto(producto, 10);
} catch (error) {
    console.log("Error: ", error.message);
}

function venderProducto(producto, cantidad) {
    if (cantidad > producto.stock) {
        throw new InsufficientStockError();
    }

    return;
}
