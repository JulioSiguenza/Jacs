/*Un número palindrómico dice lo mismo en ambos sentidos. El palindrome más grande hecho del producto de dos números de 2 dígitos es 9009 = 91 × 99.

Encuentra el palíndromo más grande hecho del producto de dos números de 3 dígitos.*/



// function numeroArreglo(numeroArreglo) {
//     if (typeof (numeroArreglo) !== 'number' || !Number.isInteger(numeroArreglo)) {
//         throw TypeError('El numero debe ser un entero');
//     }
//     if (numeroArreglo < 0) {
//         return null;
//     }
//     //Aca el numero se convierte en un arreglo pero una cadena de texto, por lo que con map se va convertir a enteros cada digito
//     return [...`${numeroArreglo}`].map(n => parseInt(n));
// }

// function numeroPalindromico(numeroPalindromico) {
//     let numeroConvertido = numeroArreglo(numeroPalindromico);
//     var reversaArreglo = numeroConvertido.reverse();
//     console.log(reversaArreglo);
//     return reversaArreglo === numeroConvertido;
// }
// console.log(numeroPalindromico(90002));





function palindromeChecker(str) {
    //tiene que ser una cadena de caracteres, se dividira con split, se sacara reversa y se juntara, luego se comparara con el numero ingresado.
    let palindromo = false;
    const strReversed = str.split("").reverse().join("");
    if (strReversed === str) {
        palindromo = true;
        return (palindromo);
    } 
}
for (i = 100; i <= 999; i++){  
    let resultado = 0;
    for (j = 100; j <= 999; j++) {
        resultado = i * j;
        if (palindromeChecker(resultado.toString()) === true) {
            console.log(`El numero ${resultado} numero SI es Palindromo, y es obtenido de la multiplicacion de ${i} y ${j}`)
        } 
    }

}


