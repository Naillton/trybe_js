const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const calc = [80, 1.80];

console.log(imc(...calc));
//neste exemplo usamos o spread operator para calcular o imc passando como parametro da funcao imc

//podemos aplicar o spread em funcoes ja prontas

const randomNumbers = [57, 8, 9, 10, 100, 98, 5, 4];

console.log(Math.max(...randomNumbers));
console.log(Math.min(...randomNumbers));