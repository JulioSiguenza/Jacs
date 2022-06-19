var almuerzos = [
    { principal: 'Arepa', postre: 'Helado' },
    { principal: 'Tacos', postre: 'Torta de queso' },
    { principal: 'Pizza', postre: 'Mazamorra' },
    { principal: 'Sushi', postre: 'Gelatina' }
];

// var platosPrincipales = [];
// for (i = 0; i < almuerzos.length; i++){
//     platosPrincipales.push(almuerzos[i].principal);
// }


var platosPrincipales = almuerzos.map(function (almuerzo) {
    return almuerzo.principal //aca puede retonar cualquier cosa, es independiente de la linea de arriba, de esta manera se resume a las lineas anteriores con el for
})
console.log(almuerzos);
console.log(platosPrincipales);