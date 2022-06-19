let number = parseInt(prompt("Ingresa un numero para calcular su factorial"));

//Aca se ira almacenando el valor del factorial, en la primera vuelta resultado vale 1 y i= al numero, por ejemplo 5 , seria 5*1=5 , ahora resultado ya vale 5 , en la siguiente vuelta resultado vale 5 y i=4 , asi que a la proxima valdra 20 y i=3, a la siguiente 60 y i=2, y al final sera 120 el resultado.
let resultado = 1

for (i = number; i > 1; i--){
    resultado *= i;
}
document.write(`el factorial de ${number} es ${resultado}`)