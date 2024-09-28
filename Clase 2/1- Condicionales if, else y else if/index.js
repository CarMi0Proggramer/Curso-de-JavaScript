/*
Las condicionales nos permiten decidir que camino debe tomar nuestro programa
cuando se cumpla determinada condición
*/

// Sintaxis
/*
if (condition) {
    // Código a ejecutar
}
*/

// Nota la palabra reservada if

// Ejemplo
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
}

/* 
Lo que estamos haciendo es evaluar si la edad es mayor o igual a 18 años.
Si se cumple la condición le mostraremos al usuario un mensaje. 
Recuerda que cuando evaluamos algo siempre devuelve un valor booleano.
*/

// También podemos decidir que hacer si no se cumple la condición
// Para ello utilizamos la palabra reservada else
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

/*
Las condicionales se pueden anidar unas dentro de otras,
de la siguiente manera.
*/

if (edad >= 18) {
    if (edad == 18) {
        console.log("Tienes dieciocho años");
    } else {
        console.log("Eres mayor de edad");
    }
} else {
    console.log("Eres menor de edad");
}

/*
De la forma anterior puede ser un poco confuso, pero no te preocupes,
podemos agrupar más de una condición a la vez, obviamente, debemos ponerlas en un
orden lógico.
Para ello utilizaremos la declaración else if
*/

if (edad == 18) {
    console.log("Tienes dieciocho años");
} else if (edad > 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

/*
Básicamente lo que estamos diciendo es, si la edad es 18 años, carga este
mensaje, o si la edad es mayor a 18 años carga este otro, en cualquier otro caso, carga este mensaje.
*/

/*
Puedes tener tantas condicionales como quieras, pero para agrupar muchas deberás
utilizar la palabra reservada else if
*/

// Bonus ⭐
/*
Sabías que no necesitas usar las llaves {} para delimitar el código cuando
solo tienes una línea de código en tu condicional
*/

if (edad == 18) console.log("Tienes dieciocho años");
else if (edad > 18) console.log("Eres mayor de edad");
else console.log("Eres menor de edad");
