/*
Una función recursiva es aquella que se llama a sí misma
hasta que se cumple una condición de finalización, por ejemplo, hagamos una cuenta regresiva 
con una función en lugar de un bucle
*/

function cuentaRegresiva(contador = 10) {
    if (contador < 0) return;

    console.log(contador);
    cuentaRegresiva(--contador);
}

cuentaRegresiva(); // 10, 9, 8, 7, 6... 0

/*
Analicemos que está sucediendo:

- Primero llamamos a la función sin ningún tipo de parámetro, por lo tanto,
el parámetro contador, valdrá 10.

- Después tenemos una condición para que en caso de que el contador sea menor a cero, se detenga la
función, recuerda que todo código debajo de un return no se va a ejecutar

- Luego se imprime el contador

- Por último la función se llama a sí misma con el parámetro contador - 1, lo que en algún momento
terminará con el contador en menor a cero y por lo tanto la función hará un return
*/

// Ahora veamos algo, ¿Por qué ponemos --contador en lugar de contador--?
/*
Bueno, nosotros podemos restar o sumar 1 poniendo el -- o ++ como prefijo o sufijo,
la diferencia es que como prefijo --contador, lo resta antes de enviarlo a la función y
como sufijo contador-- lo haría después, pero como ya se envió, no lo haría, por ende, terminaríamos
agotando la pila de llamadas
*/

/*
¿Qué es la pila de llamadas?

Bueno cada vez que se ejecuta código, en este caso se llama a la función,
se apila en una pila y esa pila va ejecutando todo el código
desde el último hacia el primero, en sentido inverso, lo cual quiere decir 
que la ejecución de la primera llamada a la función termina una vez se 
halla terminado la llamada a la última llamada que se hace a la función en la cual ocurre
el return
*/

// Esto sería el diagrama

// Pila
// LLamada 10, ocurre el return
// LLamada 9
// LLamada 8
// LLamada 7
// LLamada 6
// LLamada 5
// LLamada 4
// LLamada 3
// Llamada 2
// Llamada 1

// Así se irían apilando, y comenzaría a limpiarse desde la llamada 10 hacia abajo
