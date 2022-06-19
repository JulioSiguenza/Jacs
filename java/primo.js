
// Se crea una variable divisores para ver si el numero ingresado se recorre con un for para poder dividir al numero entre todos, a partir del 2 y menos que el mismo numero, ya que para ser numero primo solo son los que son divisibles entre el mismo numero y entre la unidad. de esa manera descartamos si es primo. y si no es primo va aumentando en unidad los divisores, ya si divisores es igual a 0 quiere decir que es primo.

let number = parseInt(prompt("Ingresa un numero mayor que 1 : "));

//primero se obtienen los divisores del numero
let divisores = 0;
if (number == 1) write.document(`El numero ingresado no es valido`)
else {
    for (i = 2; i < number; i++) {
        if (number % i == 0) {
            document.write(`Este numero no es primo, tiene los siguientes divisores<br>`);
            document.write(`${number}/${i} es ${number / i}<br>`);
            divisores++;

        }
    }
}
//si no encontraron divisores excepto el 1 y el mismo numero, que no estan incluidos en el for, entonces quiere decir que si es un numero primo
if (divisores == 0) {
    document.write(`el numero ${number} es primo`);
}