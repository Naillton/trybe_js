var readlineSync = require('readline-sync');

enum meses {
  janeiro = 'janeiro',
  fevereiro = 'fevereiro',
  marco = 'marco',
  abril = 'abril',
  maio = 'maio',
  junho = 'junho',
  julho = 'julho',
  agosto = 'agosto',
  setembro = 'setembro',
  outubro = 'outubro',
  novembro = 'novembro',
  dezembro = 'dezembro',
}

enum estacoes {
  verao = 'verao',
  inverno = 'inverno',
  outono = 'outono',
  primavera = 'primavera'
}

const estacao = readlineSync.question('Escolha a estacao do ano: ');

function estacoesDoAno(estacao: string): void {
  const {
    janeiro, fevereiro, 
    marco, abril,
    maio, junho,
    julho, agosto, 
    setembro, outubro,
    novembro, dezembro
  } = meses;
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