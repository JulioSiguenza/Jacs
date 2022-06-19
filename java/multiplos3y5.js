
// encontrar la suma de los numeros que son multiplos de 3 o de 5 menores que 1000 


function multiplos3y5(limite) {
    let sumaDeMultiplos = 0;
    for (i = 1; i < limite; i++){
        if (i % 3 == 0 || i % 5 == 0) {
            console.log(i);
            sumaDeMultiplos = sumaDeMultiplos + i;
        }
    }
    return sumaDeMultiplos;
    

}
console.log(multiplos3y5(1000));