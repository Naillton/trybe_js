let numerosPares = [1, 3, 5, 6, 8, 10, 12];

//console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

const values = numerosPares.filter((value) => value % 2 === 0);

const [ first, second, third, fourth ] = values;

console.log(`Primeiro numero par do array ${ first }`);
console.log(`Segundo numero par do array ${ second }`);
console.log(`Terceiro numero par do array ${ third }`);
console.log(`Quarto numero par do array ${ fourth }`);