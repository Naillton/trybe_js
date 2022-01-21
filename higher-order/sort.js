const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
//console.log(food);

//no exemplo anterior ordenamos o array de nomes com a funcao sort()

//agora vamos ordenar um array e numeros

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
//console.log(numbers);

//no exemplo de ordenacao de numeros a um erro pois o sort ordena de orma alfabetica por isso
//que o 10 vem depois do 1 e nao o 2.

const result = numbers.sort((a, b) => a - b);
//console.log(result);
//colocando os valores em uma funcao com o sort() e passando como parametro a - b os valores serao ordenados em forma correta


const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];

  people.sort((a, b) => a.age - b.age);

  //console.log(people);

  people.sort((a, b) => b.age - a.age);

  console.log(people);