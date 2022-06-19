// Encontrar la suma de los numeros de fibonnacci menores de 4 millones y que son pares : Resultado esperado y encontradoo 4613732


function numerosFibonacci(limite) {
    let numeroAnterior = 0;
    let numeroActual = 1;
    let resultadoSuma = 1;
    let sumaMultiplos2 = 0;

    while (resultadoSuma < limite) {
        console.log(resultadoSuma);
        numeroAnterior = numeroActual;
        numeroActual = resultadoSuma;
        resultadoSuma = numeroActual + numeroAnterior;
        if (resultadoSuma % 2 == 0) {
            sumaMultiplos2 = sumaMultiplos2 + resultadoSuma;
        }
    } return (sumaMultiplos2);

    
}
console.log(`La suma de los numeros fibonacci multiplos de 2 es ` + numerosFibonacci(4000000));