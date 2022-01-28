/* const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers);
 */
const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

// console.log(nubers) O retorno é [2, 3]
setTimeout( () => console.log(numbers), 3000); // o retorno [2, 3, 1]

// nao onseguimos imprimir o 1 com o console.log() normal pois o mesmo e sincrono e logo que lido ja executa
// se colocarmos o console.log() dentro de um Timeout conseguimos reproduzir o codigo