// function primo1001(numeroPrimo) {
//     let divisores = 0;
//     let cantidadNumeroPrimo = 0;
//     while (cantidadNumeroPrimo <= numeroPrimo) {

//         let numero = 200;
//         for (i = 1; i < numero; i++) {
//             for (j = 2; j < i; j++) {
//                 if (i % j == 0) {
//                     divisores = divisores + 1;
//                 }
//             }
//             if (divisores == 0) {
//                 console.log(`El numero es primo` + i);

//             }

//         }
//     }

// }
//Primero se crea una funcion para evaluar un numero y te diga si es o no es primo
function primo(numero) {
    let divisores = 0;
    let esPrimo = false;
    for (i = 2; i < numero; i++){
        if (numero % i == 0) {
            divisores++;
        }
    }
    if (divisores == 0) {
        // console.log(`SI ES PRIMO` + numero);
        esPrimo = true;
    }
    else {
        // console.log(`Este numero no es primo ${numero}`);
        esPrimo = false;
    }
    return (esPrimo)
}
// console.log(primo(20));

//Luego para saber el numero primero exacto, se llenara en un arreglo cada uno de los primos para luego elegir el ultimo y asi dependiendo del numero que ingresemos, saldra el numero primero que se quiere, por ejemplo quiero el primo numero 100, solo ingresaremos el 100 y obtendremos el primo numero 100.

function primoArreglo(cantidad) {


    let contador = 0;
    let arregloPrimos = [];
    let i = 2;
    while (contador <= cantidad - 1) {
            if (primo(i) == true) {
                arregloPrimos.push(i);
                contador++;
            }
        i++;
        }
    return alert(`El numero primo numero ${cantidad} es : ` + arregloPrimos[cantidad - 1]);
    
    
}
console.log(primoArreglo(prompt(`Ingresa el numero primo que deseas saber ??`)));

