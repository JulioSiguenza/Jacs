//Este programa ayuda a encontrar las areas de algunas figuras geometricas
//Parseint vuelve lo que se encuentra dentro numero
//en la del circulo tambien se puede utilizar Math.pow(radio,2) para elevar al cuadrado y tambien 
//Math.PI para obtener el numero pi exacto



let eleccion = prompt('1 : Area de Triangulo\n2 : Area de rectangulo\n3: Area de un circulo');
if (eleccion == 1) {
    let base = parseInt(prompt('Ingresa la base del triangulo'));
    let altura = parseInt(prompt('Ingresa la altura del triangulo'));
    document.write(`El area del triangulo es ${base * altura / 2}`)
}
else if (eleccion == 2) {
    let base = parseInt(prompt('Ingresa la base del Rectangulo'));
    let altura = parseInt(prompt('Ingresa la altura del Rectandulo'));
    document.write(`El area del Rectangulo es ${base * altura}`);

}
else if (eleccion == 3) {
    let radio = parseInt(prompt('Ingresa el radio del circulo'));
    const pi = 3.1415;
    document.write(`El area del Rectangulo es ${radio**2 * pi}`);

}
else {
    alert("El numero ingresado no es valido");
}