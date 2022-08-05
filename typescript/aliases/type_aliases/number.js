"use strict";
function somar(soma) {
    const somando = soma.x + soma.y;
    return somando;
}
console.log(somar({ x: 20, y: 20 }));
