// declarando quais as despesas no mes
const despesas = [
    {
        gym: 99
    },
    {
        ifood: 200
    },
    {
        phone: 80
    },
    {
        internet: 100
    },
];
// quanto de salario ganhamos ?
const renda = 1000;

// funcao despesa mensal recebe 3 parametros a nossa renda a despesa e uma funcao de calback
// aqui criamos uma constante despesatotal que vai receber o calculo da callback
//depois criamos a renda final que vai reduzir da nossa renda a despeza total e por fim imprimir na tela
const despesaMensal = (renda, despesas, callback) => {
    const despesaTotal = callback(despesas);
    const finalRend = renda - despesaTotal;
    
    console.log(`
    Recebido: ${renda}
    Despesa: ${despesaTotal}
    Sobrou: ${finalRend}
    `);
};

// funcao somaDespesas que recebe uma callback como parametro
// depois percorremos o array com o map e usamos o Object.values que vai nos retornar um array com os items do nosso objeto
// por fim usamos o reduce que vai somar o valor das nossas dividas
const somaDespesas = (callback) => {
    const custoItem = despesas.map((item) => Object.values(item));
    const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
    return despesaTotal;
};

despesaMensal(renda, despesas, somaDespesas);