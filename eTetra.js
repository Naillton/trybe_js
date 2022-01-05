//utilizamos a biblioteca moment para sabermos a quantos anos atras o brasil foi tetra
//com a iconica frase do galvao bueno

let moment = require("moment")

let brasilTetra = moment('17071994', 'DDMMYYYY');
let fromNow = brasilTetra.fromNow();

console.log('Ouvimos o "E TETRAAAA!!" ha: ' + fromNow);
