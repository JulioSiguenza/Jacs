
/*La suma de los cuadrados de los primeros diez números naturales es:385
El cuadrado de la suma de los primeros diez números naturales es: 3025
Por lo tanto, la diferencia entre la suma de los cuadrados de los primeros diez números naturales y el cuadrado de la suma es
3025−385=2640.
Encuentra la diferencia entre la suma de los cuadrados de los primeros cien números naturales y el cuadrado de la suma.

*/

//primero creamos una funcion para encontrar la suma de los cuadrados de  los n primeros numeros
function sumaDeCuadrados(numero) {
    let i = 1;
    let sumaCuadrada = 0;
    while (i <= numero) {
        sumaCuadrada = sumaCuadrada+ (i ** 2);
        i++;
    } return sumaCuadrada;
}

console.log(sumaDeCuadrados(100));

//luego encontramos el cuadrado de la suma de los n primeros numeros
function cuadradoDeSuma(numero) {
    let suma = 0;
    for (i = 1; i <= numero; i++){
        suma = suma + i;
    } 
    cuadradoSuma = suma ** 2;
    return (cuadradoSuma);
}
console.log(cuadradoDeSuma(100));


//Al final en una funcion se obtiene la diferencia.

function diferenciaSumaYCuadrados(numero) {

    let diferencia = cuadradoDeSuma(numero) - sumaDeCuadrados(numero);
    return diferencia;
}
console.log(diferenciaSumaYCuadrados(prompt(`Ingresa la cantidad de numeros que deseas restar :`)));