// El caballo de Mac es mas oscuro que el caballo de Smith, pero mas rapido y mas viejo que el cabello de jack, que es aun mas lento que el caballo de Willy, que es mas joven que el caballo de Mac, que es mas viejo que el de Smith, que es mas claro que el de Willy, aunque el de Jack es mas oscuro y lento que el de Smith. Cual caballo es mas viejo, mas lento,y mas claro ? 


// Declaro las una variable objeto que almacene varias caballo


var caballo = {
    mac: { velocidad: 0, vejez: 0, oscuridad: 0 },
    smith: { velocidad: 0, vejez: 0, oscuridad: 0 },
    jack: { velocidad: 0, vejez: 0, oscuridad: 0 },
    willy: { velocidad: 0, vejez: 0, oscuridad: 0 },


    resultado: function () {
        if (caballo.mac.oscuridad > caballo.smith.oscuridad &&
            caballo.mac.velocidad > caballo.jack.velocidad &&
            caballo.mac.vejez > caballo.jack.vejez &&
            caballo.jack.velocidad < caballo.willy.velocidad &&
            caballo.willy.vejez < caballo.mac.vejez &&
            caballo.mac.vejez > caballo.smith.vejez &&
            caballo.smith.oscuridad < caballo.willy.oscuridad &&
            caballo.jack.oscuridad > caballo.smith.oscuridad &&
            caballo.jack.velocidad < caballo.smith.velocidad) {
            return true
        }
        return false

    },
// Se va ejecutando la funcion con intervalos de tiempo de 1ms, hasta encontrar numeros que cumplan la condicion
    intervalo: setInterval(function(){
        
        caballo.mac.velocidad = Math.ceil(Math.random() * 5);
        caballo.mac.vejez = Math.ceil(Math.random() * 5);
        caballo.mac.oscuridad = Math.ceil(Math.random() * 5);

        caballo.jack.velocidad = Math.ceil(Math.random() * 5);
        caballo.jack.vejez = Math.ceil(Math.random() * 5);
        caballo.jack.oscuridad = Math.ceil(Math.random() * 5);

        caballo.willy.velocidad = Math.ceil(Math.random() * 5);
        caballo.willy.vejez = Math.ceil(Math.random() * 5);
        caballo.willy.oscuridad = Math.ceil(Math.random() * 5);

        caballo.smith.velocidad = Math.ceil(Math.random() * 5);
        caballo.smith.vejez = Math.ceil(Math.random() * 5);
        caballo.smith.oscuridad = Math.ceil(Math.random() * 5);
        
// Si se cumple se detiene el setinterval para que ya no se siga ejecutando la funcion y se imprime en consola los resultados
        if (caballo.resultado() == true) {

            clearInterval(caballo.intervalo);
            console.log("caballo de Mac", caballo.mac);
            console.log("caballo de Smith", caballo.smith);
            console.log("caballo de Jack", caballo.jack);
            console.log("caballo de Willy", caballo.willy);
           
            if (caballo.mac.velocidad == Math.max(caballo.mac.velocidad, caballo.jack.velocidad, caballo.smith.velocidad, caballo.willy.velocidad)) {
                console.log("El caballo mas rapido es El CABALLO DE MAC")
            }
    
            else if (caballo.jack.velocidad == Math.max(caballo.mac.velocidad, caballo.jack.velocidad, caballo.smith.velocidad, caballo.willy.velocidad)) {
                console.log("el caballo mas rapido es EL CABALLO DE JACK")
            }
            else if (caballo.smith.velocidad == Math.max(caballo.mac.velocidad, caballo.jack.velocidad, caballo.smith.velocidad, caballo.willy.velocidad)) {
                console.log("el caballo mas rapido es EL CABALLO DE SMITH")
            }
        
            else if (caballo.willy.velocidad == Math.max(caballo.mac.velocidad, caballo.jack.velocidad, caballo.smith.velocidad, caballo.willy.velocidad)) {
                console.log("el caballo mas rapido es EL CABALLO DE WILLY ")
            }

            if (caballo.mac.vejez == Math.max(caballo.mac.vejez, caballo.jack.vejez, caballo.smith.vejez, caballo.willy.vejez)) {
                console.log("El caballo mas viejo es El CABALLO DE MAC")
            }

            else if (caballo.jack.vejez == Math.max(caballo.mac.vejez, caballo.jack.vejez, caballo.smith.vejez, caballo.willy.vejez)) {
                console.log("el caballo mas viejo es EL CABALLO DE JACK")
            }
            else if (caballo.smith.vejez == Math.max(caballo.mac.vejez, caballo.jack.vejez, caballo.smith.vejez, caballo.willy.vejez)) {
                console.log("el caballo mas viejo es EL CABALLO DE SMITH")
            }

            else if (caballo.willy.vejez == Math.max(caballo.mac.vejez, caballo.jack.vejez, caballo.smith.vejez, caballo.willy.vejez)) {
                console.log("el caballo mas viejo es EL CABALLO DE WILLY ")
            }


            if (caballo.mac.oscuridad == Math.max(caballo.mac.oscuridad, caballo.jack.oscuridad, caballo.smith.oscuridad, caballo.willy.oscuridad)) {
                console.log("El caballo mas oscuro es El CABALLO DE MAC")
            }

            else if (caballo.jack.oscuridad == Math.max(caballo.mac.oscuridad, caballo.jack.oscuridad, caballo.smith.oscuridad, caballo.willy.oscuridad)) {
                console.log("el caballo mas oscuro es EL CABALLO DE JACK")
            }
            else if (caballo.smith.oscuridad == Math.max(caballo.mac.oscuridad, caballo.jack.oscuridad, caballo.smith.oscuridad, caballo.willy.oscuridad)) {
                console.log("el caballo mas oscuro es EL CABALLO DE SMITH")
            }

            else if (caballo.willy.oscuridad == Math.max(caballo.mac.oscuridad, caballo.jack.oscuridad, caballo.smith.oscuridad, caballo.willy.oscuridad)) {
                console.log("el caballo mas oscuro es EL CABALLO DE WILLY ")
            }
            


        }
        

    },1)

}



// cada caballo tendra 3 valores, que los representara en 3 aspectos, la posicion 0 para la velocidad del caballo, la posicion 1 para la vejez y la 2 para la oscuridad o claridad del caballo 

// console.log(macHorse.length); imprime la cantidad de elementos (no tiene nada que ver con el ejercicio)

//bien ahora definamos las condiciones del problema en una funcion











