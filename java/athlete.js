// LOS 4 ATLETAS. 
// De cuatro corredores de atletismo se sabe que C ha llegado inmediatamente detras de B, y D ha llegado en medio de A y C. Podria calcular el orden de llegada? 




// Se crea una variable objeto con una funcion dentro con las condiciones que se dieron en el problema 

var orden = {

    A:0,
    B:0,
    C:0,
    D:0,

    condiciones: function () {
        if (orden.C > orden.B &&
            orden.D > orden.B &&
            orden.D > orden.C &&
            orden.D < orden.A) {
            return true;


        }
        return false;

    },


    //  Creamos un intervalo de tiempo para que vaya ejecutando la funcion y revisando la condicion si se cumple o no , el tiempo en este ejemplo de cada intervalo es cada 10 ms
    intervaloTiempo: setInterval(function () {

        orden.A = Math.ceil(Math.random() * 4)
        orden.B = Math.ceil(Math.random() * 4)
        orden.C = Math.ceil(Math.random() * 4)
        orden.D = Math.ceil(Math.random() * 4)




        if (orden.condiciones() == true) {
            clearInterval(orden.intervaloTiempo);
            console.log("Athlete A ", orden.A)
            console.log("Athlete B ", orden.B)
            console.log("Athlete C ", orden.C)
            console.log("Athlete D ", orden.D)
        }
    }, 10 )






}
