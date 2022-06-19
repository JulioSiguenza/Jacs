// this program give numbers pair and anpairs
// you answer a number, print all of numbers saying if is pair or unpair until the number input
// Tambien se podria
// hacer con un for (let i=1; i<=number ; i++){if ...}

let number = prompt("Please, write a number");
let counter = 1;

while (counter <= number) {
    if (counter % 2 == 0) {
        document.write(`${counter} - Es par<br>`);
    }
    else {
        document.write(`${counter} - Es impar <br>`);
    }
    counter++;
}
