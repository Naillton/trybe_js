/* O parametro rest ira te auxiliar a criar funcoes que recebem um numero ilimitado de argumentos
assim suas funcoes ficam mais flexiveis, os argumentos acessados no parametro sao salvos em um array
que podem ser acessados de dentro da funcao vamos para um exemplo */

function params(...args) {
    console.log('parametros:', args);
    return `Voce passou ${args.length} parametros para a funcao`;
};

//console.log(params(0, 1, 2));
//console.log(params('string', null, [1, 2, 4], {}));

const sum = (...args) => args.reduce((acc, current) => acc + current, 0);
console.log(sum(4, 7, 8, 9, 60));

//nesse segundo exemplo usamos a HOF reduce para calcular os argumentos passados pelo rest paremeter