// Las variables se declaran de tres formas distintas, usando las palabras reservadas let, var o const
// Se pueden inicializar o no al ser creadas, si no se inicializan su valor por defecto es undefined

// let mi_variable; ✅
// console.log(mi_variable) // -> undefined

var mi_variable = 15;
let mi_variable2 = 15;

// También se pueden inicializar más de una variable al mismo tiempo separándolas con coma

// let num1, num2; ✅
// let num1 = 10, num2 = 20; ✅

// Estas variables pueden ser inicializadas de vuelta
mi_variable = "Hola mundo";
mi_variable2 = "Hola mundo";

// Las variables constantes no pueden ser inicializadas de vuelta y se deben inicializar al ser creadas

// const constante; ❌
const constante = "Esto es una constante";
// constante = true; ❌

/*
No puede haber más de una variable con el mismo nombre
Aquí radica la diferencia entre var y let ya que var si te permite
crear más de una variable con el mismo nombre y presenta otros errores.
Lo recomendable es usar let o const 
*/
