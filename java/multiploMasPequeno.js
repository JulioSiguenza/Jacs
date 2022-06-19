//2520 es el número más pequeño que se puede dividir por cada uno de los números del 1 al 10 sin ningún resto.¿Cuál es el número positivo más pequeño que es uniformemente divisible por todos los números del 1 al 20 ?



// primero encuentro cuantos divisores exactos tiene un numero n

function divisores(numero, cantidadDivisibles) {
    let resultado = 0;
    let contador = 0;   
        for (i = 1; i <= cantidadDivisibles; i++) {
            resultado = numero % i;
            if (resultado == 0) {
                contador++;
            }
        } return (contador);      
}

console.log(divisores(200, 20));



//luego comparo numero por numero si tiene la cantidad de divisores exactos que se ingreso, por ejemplo se ingresa 20, este debe tener 20 divisores exactos, que se puede comparar gracias a la funcion anterior.

function multiplo(divisibles) {

    let numero = 1;
    while (divisores(numero, divisibles) != divisibles) {
        numero++;
    } return (numero);
}
console.log(multiplo(20));



