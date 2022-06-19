/* en este programa se encontraran los factores primos del numero 600851475143, por ejemplo del numero 13195, sus factores primos son 5, 7, 13 y 29 */


function factoresPrimos(numero) {
    

//recorremos un for para que me encuentre los primos desde el 1 hasta el numero
    for (i = 1; i < numero; i++){
        let divisores = 0
//aca sacamos si el numero es primo, como se esta recorriendo al numero, el numero a analizar sera "i"
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                divisores = divisores + 1;
            }
        }
        if (divisores == 0) {
            if (numero % i == 0) {
                let factorPrimo = true;
                console.log(`este numero SI es primo ` + i+ factorPrimo);
            }
        }
        
    }
   

}
factoresPrimos(600851475143);