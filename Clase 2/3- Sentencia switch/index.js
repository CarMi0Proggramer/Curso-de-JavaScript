/*
Cuando usamos las condicionales if, else y else if puede que sean demasiadas
y el código se haga difícil de mantener, para esto podemos usar la sentencia switch
que lo que nos permite es agrupar condiciones de una manera mucho más sencilla
*/

// Sintaxis:
/*
switch (key) {
    case value:
        // Código a ejecutar
        break;

    default:
        // Código a ejecutar
        break;
}
*/

/*
Analicemos la sintaxis...
- La palabra key representa un valor al que le daremos seguimiento.
- La palabra case define un caso a comparar con key.
- La palabra value representa el valor que queremos comparar con key.
- El código a ejecutar es el código que se ejecutará cuando key sea igual al value
- La palabra break es importante ya que nos permite salir de la sentencia switch y evitar que se ejecute
otro código en el caso de que ya se haya cumplido una condición.
- La palabra default es importante ya que nos permite ejecutar código cuando no se cumple ninguna de
las condiciones.
- No necesariamente necesitar poner un break en el default ya que generalmente se pone de último, pero
si lo pones al principio o en otro lugar, pues si lo necesitarás.
*/

// Veamos un ejemplo:
let dia = 3;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("No es un día de la semana");
}

/*
Simplemente estamos como matcheando los casos y mostrando un mensaje
diferente en cada caso que el día coincida
*/

/*
Recuerda usar la palabra reservada break ya que si no la usas lo que sucederá
es que sucederá se continuarán ejecutando casos hasta que encuentre un break
*/

let tipo_de_animal = 1;

switch (tipo_de_animal) {
    case 1:
        console.log("Perro"); // ❌
    default:
        console.log("No es un perro");
        break;
}
// Se terminarán viendo los dos console.log

// No necesariamente es malo, podemos usarlo por ejemplo para sacar agrupar condiciones
// Por ejemplo, tratemos de sacar los meses que tengan 28, 30 y 31 días;
let mes = 5;
switch (mes) {
    case 2:
        console.log("Tiene 28 días");
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Tiene 31 días");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Tienen 30 días");
        break;
    default:
        console.log("No es un mes válido");
}
