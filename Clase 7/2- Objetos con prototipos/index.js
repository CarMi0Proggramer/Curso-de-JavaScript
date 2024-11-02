/*
Como había mencionado anteriormente JavaScript utiliza un paradigma orientado
a objetos basado en prototipos, un prototipo no es más que una base para crear
objetos a partir de una estructura definida, permitiendo la herencia de propiedades y métodos entre sí.

Todos los objetos tienen un enlace a su prototipo que se puedo obtener usando la clase Object y
el método getPrototypeOf.
*/
let obj = {};

console.log(Object.getPrototypeOf(obj));

/*
En JavaScript, prácticamente todo es un objeto. Cada objeto tiene un prototipo, 
y a su vez, ese prototipo tiene otro prototipo, formando una cadena que culmina 
en la clase Object, que se sitúa en el nivel más alto de la jerarquía de prototipos.

El prototipo base de todos los objetos es Object.prototype, que contiene propiedades 
y métodos que están disponibles para todos los objetos en JavaScript.

También puedes crear objetos sin prototipos utilizando el método create de la clase 
Object. Este método toma como parámetro un prototipo, y podemos pasarle null 
para indicar que el nuevo objeto no tendrá un prototipo.
*/
obj = Object.create(null); // -> crea un objeto sin prototipo
console.log(Object.getPrototypeOf(obj)); // -> null

/*
Como decía un prototipo permite definir una estructura para crear objetos, por ejemplo para crear
animales, podemos tener en cuenta su tipo y sonido característico como propiedades y un método sonar.

Hay varias formas de definir prototipos, la que más vas a utilizar es a través de clases, las clases definen
la estructura del objeto y el objeto se considera una instancia de esa clase, para crear una clase usamos la palabra
reservada class seguida del nombre de la clase con la primera letra en mayúsculas.
*/

/* 
class Animal {} 
*/

/*
Para crear el objeto usamos la palabra reservada new, para indicar que vamos a crear una nueva instancia
de esa clase, seguido del nombre de la clase e invocándola como si fuera una función.
*/

/* const animal = new Animal();
console.log(animal); */

/*
Hasta ahora tenemos un objeto prácticamente vacío, ¿Cómo podemos añadirle propiedades?
Bueno para ello tenemos la función constructor, la función constructor es una función que se ejecuta
internamente cada vez que instanciamos un objeto con esa clase, en ella podemos definir parámetros a pasar
al momento de crear el objeto los cuales usaremos para establecer sus propiedades
*/
class Animal {
    // Así se define el constructor, con la palabra reservada constructor
    constructor(tipo, sonido) {
        // Para poder establecer sus propiedades utilizaremos la palabra reservada this
        this.tipo = tipo;
        this.sonido = sonido;

        /*
        La palabra reservada 'this' hace referencia al objeto actual que se está instanciando.
        Es como esto:

        let obj = {};
        obj.propiedad = "valor";

        Con 'this', podemos acceder a todas las propiedades y métodos del objeto desde dentro 
        de la clase antes de que se instancie el objeto.
        */
    }

    /*
    Para crear un método (una función) dentro de una clase en JavaScript, 
    no es necesario usar la palabra clave 'function'. Simplemente nombramos 
    el método seguido de paréntesis y luego definimos su cuerpo entre llaves.
    */
    sonar() {
        console.log(this.sonido);
    }

    /*
    Para acceder a un método de instancia, necesitamos primero crear una instancia de esa clase. 
    Sin embargo, podemos definir métodos que se pueden invocar sin necesidad de crear un objeto; 
    estos métodos se llaman estáticos. Para crearlos, simplemente añadimos la palabra reservada 
    'static' antes del nombre del método.

    Los métodos estáticos solo se pueden acceder usando la clase directamente, no a través de instancias.

    Vamos a definir un método estático que permite crear un animal a partir de un objeto plano. 
    Un objeto plano es un objeto que no proviene de ninguna clase, como uno creado con llaves {}.
    */
    static fromPlainObject(obj) {
        return new Animal(obj.tipo, obj.sonido);
    }
}

// Utilicemos nuestra nueva clase mejorada
const perro = new Animal("Perro", "Guau Guau!!");
perro.sonar(); // -> Guau Guau!!

const gato = new Animal("Gato", "Miau Miau!!");
gato.sonar(); // -> Miau Miau!!

// Usando nuestro método estático, para acceder a él usamos la clase ya que no necesitamos crear un objeto
const caballo = Animal.fromPlainObject({
    tipo: "Caballo",
    sonido: "Brrrrrrr Brrrrrrr!",
});
caballo.sonar(); // -> Brrrrrrr Brrrrrrr!

/*
Todos estos objetos son diferentes, pero comparten el mismo prototipo.
Todos son instancias de `Animal`. Podemos comprobar esto verificando
si el prototipo del objeto `perro` es igual al de `Animal`.
*/
console.log(Object.getPrototypeOf(perro) == Animal.prototype); // -> true

/*
Nos podemos ahorrar esto comprobando directamente si el objeto perro 
es una instancia de `Animal` usando el operador instanceOf
*/
console.log(perro instanceof Animal); // -> true
/*
Además, la mayoría de los objetos heredan de la clase Object, por lo que
`perro` también es una instancia de Object.
*/
console.log(perro instanceof Object); // -> true

/*
Hasta ahora hemos estado creando clases e instanciando objetos a partir de ellas,
pero la clase Animal es muy genérica para definir algún tipo de animal específico.
Por ejemplo, la acción 'sonar' varía entre los diferentes animales: un perro ladra,
un gato maulla, y así sucesivamente.

Para abordar esta variabilidad, existe la herencia, donde una clase hereda las propiedades
y métodos de otra clase. La clase que hereda se llama subclase, y la clase de la que hereda
se llama clase padre.

Para extender una clase usamos la palabra reservada extends en la declaración de la clase seguido
del nombre de la clase de la cual quieres heredar.
*/

class Perro extends Animal {
    /*
    Tomamos los mismos parámetros que la clase padre (tipo y sonido) y añadimos uno adicional (raza).
    Debemos llamar al constructor de la clase padre para inicializar las propiedades heredadas.
    */
    constructor(sonido, raza) {
        /*
        Para llamar al constructor de la clase padre usamos la función 'super' y le enviamos
        los parámetros que necesita: en este caso, "Perro" como tipo y 'sonido'.

        Esto es equivalente a hacer:

        this.tipo = "Perro";
        this.sonido = sonido;
        */
        super("Perro", sonido);

        // Inicializa la propiedad específica de la subclase
        this.raza = raza;
    }

    // Sobreescribimos el método sonar, esto se llama sobreescritura de métodos
    sonar() {
        console.log(`Un ${this.raza} ladra así: ${this.sonido}`);
    }
}

// Instanciando nuestro perro mejorado
const perro2 = new Perro("Brrrrrrr Brrrrrrr!", "Pastor Alemán");
perro2.sonar(); // -> Un Pastor Alemán ladra así: Brrrrrrr Brrrrrrr!

/*
Puedes usar la herencia para crear perros aún más específicos, como un perro
de caza, que podría tener propiedades y métodos adicionales relacionados con
sus habilidades especiales. En este caso, la clase `PerroDeCaza` hereda 
de la clase `Perro`, que a su vez hereda de `Animal`, formando así una
cadena de prototipos. Esto permite que `PerroDeCaza` tenga acceso a todas
las propiedades y métodos de `Perro` y `Animal`.
*/
class PerroDeCaza extends Perro {
    // No es necesario sobreescribir el constructor, utiliza el de la clase Perro

    // Método específico del perro de caza
    cazar() {
        console.log(`El ${this.raza} está cazando...`);
    }
}

// Ejemplo de uso
const labrador = new PerroDeCaza("Guau Guau!", "Labrador");
labrador.sonar(); // -> Un Labrador ladra así: Guau Guau!
labrador.cazar(); // -> El Labrador está cazando...

/*
En otros lenguajes de programación orientados a objetos, las propiedades tienen
varios niveles de acceso: public, protected y private.

public -> puede ser accedido desde cualquier lugar.
private -> solo puede ser accedido desde dentro de la misma clase.
protected -> similar a private, pero también puede ser accedido por subclases que hereden de la clase padre.

En JavaScript, no tenemos una forma directa de declarar propiedades como privadas o protegidas, 
pero podemos simularlo utilizando el símbolo `#`, que se introdujo en ECMAScript 2022.
ECMAScript es el estándar que define el comportamiento de JavaScript, dictando cómo
debe funcionar y cuáles son sus características.
*/

/* 
Los distintos niveles de acceso se utilizan para ocultar propiedades que son solo para uso interno
dentro de la clase, evitando que se accedan desde fuera. Esto es especialmente útil cuando se trabaja
con clases complejas y se necesita mantener la coherencia del estado de la clase.

Por ejemplo, creemos una clase Persona y ocultemos la propiedad isAdmin, que determina el nivel de
acceso que tiene esa persona a tu aplicación...
*/
class Persona {
    // Las propiedades privadas deben ser declaradas usando el símbolo '#' en el nivel superior de la clase
    #isAdmin;

    constructor(nombre, edad, isAdmin) {
        this.nombre = nombre;
        this.edad = edad;

        /*
        Esta propiedad solo podrá ser inicializada al momento de crear el objeto,
        y no podrá ser modificada posteriormente, permitiendo así controlar internamente el acceso a la aplicaión.
        */
        this.#isAdmin = isAdmin;
    }

    // Un método privado sería así
    #verificarAcceso(ruta) {
        if (ruta === "/admin" && this.#isAdmin) {
            return true;
        } else {
            return false;
        }
    }

    // Ahora podemos usar nuestros métodos privados de forma interna
    cargarContenido(ruta) {
        if (this.#verificarAcceso(ruta)) {
            console.log("Cargando contenido para administradores...");
        } else if (ruta === "/usuario") {
            console.log("Cargando contenido para usuarios...");
        } else {
            console.log(
                "Acceso denegado. No tienes permisos para acceder a esta ruta."
            );
        }
    }
}

// Ejemplo de uso
const persona1 = new Persona("Juan", 30, true);
persona1.cargarContenido("/admin"); // Cargando contenido para administradores...

const persona2 = new Persona("Ana", 25, false);
persona2.cargarContenido("/admin"); // Acceso denegado. No tienes permisos para acceder a esta ruta.

const persona3 = new Persona("Carlos", 18, false);
persona3.cargarContenido("/usuario"); // Cargando contenido para usuarios...

/*
Y así el código cliente nunca se entera de lo que estamos haciendo de forma interna, solo sabe
que estamos intentando acceder a una ruta para administradores o usuarios y que dependiendo del nivel de acceso
que tenga la persona, se cargará o no el contenido.

Este concepto de ocultar propiedades de esta forma se llama encapsulación. La encapsulación no solo 
mejora la seguridad de los datos y la organización del código, sino que también permite una mayor 
flexibilidad al facilitar la modificación de la lógica interna sin afectar el código cliente.
*/

/*
Además de la encapsulación, en JavaScript podemos utilizar 'setters' y 'getters' para controlar el acceso a las propiedades de un objeto de manera más controlada.

Los 'getters' son métodos que permiten acceder a propiedades privadas, mientras que los 'setters' permiten modificar esas propiedades de forma segura. Esto nos brinda la posibilidad de implementar lógica adicional al leer o modificar un valor.

Por ejemplo, imagina que tienes un administrador de stock para los productos de tu tienda online, y no quieres
que nadie pueda modificar las propiedades del objeto producto a excepción del administrador de stock, una forma
de restringir el acceso es declarar las propiedades del objeto como privadas usando el caracter '#' y declarar
los métodos setter y getters.
*/

class Product {
    #name;
    #price;

    constructor(name, price) {
        /* Propiedades privadas */
        this.#name = name;
        this.#price = price;
    }

    /* 
    Un método getter para obtener el nombre del producto, al inicio deben de llevar la palabra reservada get,
    y la convención para nombrar estos métodos tanto setters como getters es la palabra respectiva al tipo de
    método (set o get) y luego el nombre de la propiedad en la que se enfoca la función
    */
    get getName() {
        return this.#name;
    }

    get getPrice() {
        return this.#price;
    }

    // Método setter para cambiar el precio
    // Estos métodos nos ayudan a añadir lógica adicional
    set setPrice(price) {
        if (price > 0) {
            this.#price = price;
        } else {
            console.error("El precio debe ser mayor a 0");
        }
    }
}

/*
Estos métodos son un poco diferentes, en el caso de los getters, para usarlos simplemente
se hace referencia a ellos con la notación de punto y en los setters se igualan al valor a establecer.
*/
const product = new Product("Laptop HP", 300.99);
console.log(product.getName); // -> Laptop HP

product.setPrice = 400.99; // ✅
console.log(product.getPrice); // -> 400.99
