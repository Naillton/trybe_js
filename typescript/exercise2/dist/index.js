"use strict";
var readlineSync = require('readline-sync');
var meses;
(function (meses) {
    meses["janeiro"] = "janeiro";
    meses["fevereiro"] = "fevereiro";
    meses["marco"] = "marco";
    meses["abril"] = "abril";
    meses["maio"] = "maio";
    meses["junho"] = "junho";
    meses["julho"] = "julho";
    meses["agosto"] = "agosto";
    meses["setembro"] = "setembro";
    meses["outubro"] = "outubro";
    meses["novembro"] = "novembro";
    meses["dezembro"] = "dezembro";
})(meses || (meses = {}));
var estacoes;
(function (estacoes) {
    estacoes["verao"] = "verao";
    estacoes["inverno"] = "inverno";
    estacoes["outono"] = "outono";
    estacoes["primavera"] = "primavera";
})(estacoes || (estacoes = {}));
const estacao = readlineSync.question('Escolha a estacao do ano:');
function estacoesDoAno(estacao) {
    const { janeiro, fevereiro, marco, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro } = meses;
    if (estacao === 'verao') {
        console.log(`
      ${estacao} 21 de ${dezembro} a 20 de ${marco}
    `);
    }
    if (estacao === 'inverno') {
        console.log(`
      ${estacao} 21 de ${junho} a 22 de ${setembro}
    `);
    }
    if (estacao === 'outono') {
        console.log(`
      ${estacao} 20 de ${marco} a 21 de ${junho}
    `);
    }
    if (estacao === 'primavera') {
        console.log(`
      ${estacao} 22 de ${setembro} a 21 de ${dezembro}
    `);
    }
}
estacoesDoAno(estacao);
