let pizzas = ['Mussarela', 'Calabresa', 'Frango', 'Lombo Canadense', '4 Queijos'];

pizzas.push('chocolate'); //adicionando elemento no final do array

pizzas.unshift('M&Ms'); //usando o unshift adicionamos um elemento no comeco do array

pizzas[6] = 'Portuguesa';

pizzas.pop(); // removendo o ultimo indice de um array

pizzas.shift(); // removendo o primeiro indice de um array

let index = pizzas.indexOf('Calabresa'); // com o indexof podemos procurar pela posicao do determinado indice passado no parenteses
console.log(index+"\n");

for(let contador = 0; contador < pizzas.length; contador++){
    console.log(pizzas[contador]);
}

// for(let index in pizzas){

//     console.log(pizzas[index])

// }

// let cont = pizzas[pizzas.length -1];

// console.log(cont);
