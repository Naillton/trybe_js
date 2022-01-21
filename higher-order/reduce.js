//A HOF reduce diferente das outras funcoes vai receber um parametro a mais chamado de acumulador o acc, esse parametro serve para acumular dentro de si os resultados das funcoes

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (acc, value) => acc + value;
const result = numbers.reduce(getSum);
//console.log(result);

const value = numbers.reduce((acc, value) => acc + value);

//console.log(value);

//no exemplo acima fizemos de duas formas diferentes cada exempl0
//ambas as formas estao corretas e implementao a funcao reduce corretamente somando os valores

const collection = [1, 2, 3, 4, 5];

/* const sum = (acc, number) => acc + number;

const soma = collection.reduce(sum);
console.log(soma); */

const sum = collection.reduce((acc, number) => acc + number);
//console.log(sum);
//no exemplo anterior fizemos mais uma funcao para somar valores olhar no course o gif explicando como o reduce funciona
