// El operador condicional ternario nos permite abreviar la clásica condición if/else
// Sintaxis:
// condición ? "Tomará este valor en caso de ser true" : "En caso de ser false, tomará este";

// Ejemplo:
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// Podemos abreviarlo con el operador ternario;
console.log(edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad");

// Funciona de la siguiente manera:
/*
- Primero determinamos la condición.
- Luego abrimos signo de interrogación.
- Designamos el valor que tomará en casa de ser verdadera.
- Ponemos dos puntos.
- Designamos el valor que tomará en caso de ser falsa.
*/

// Muy útil para casos que tienen solo dos opciones
// Otro ejemplo:
let isAuthorized = false;
let shouldShowContent = isAuthorized
    ? "Cargar componente de contenido"
    : "Cargar componente de no autorizado";
