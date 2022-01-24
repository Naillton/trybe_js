/* com o spread operator podemos mutar arrays e objetos, por exemplo se nao queremos mudar o valor de um array podemos criar outro array
e adcionar ao mesmo o valor do nosso antigo array preservando assim o antigo array e o novo */

const numbers1to10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Agora vamos ter que criar um array com numeros de 1 a 20 entao usaremos o spread operator para isso

const numbers1to20 = [...numbers1to10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//console.log(numbers1to20);

//Agora temos dois arrays diferentes onde preservamos os valores do primeiro e adcionamos os outros valores
//Podemos fazer a mesma coisa com objetos onde os valores serao inseridos da mesma forma;

const personCarachter = {
    nome: "Nailton",
    idade: 21,
    sexo: "M",
}

const personDeveloper = {
    hardSkills: {
        HTML: true,
        CSS: true,
        JavaScript: true,
        ECM6: true,
    },

    softSkills: {
        Lideranca: true,
        Autoconhecimento: true,
        FeedBacks: true,
        Autocritica: true,
    }
}

const personDeveloperTrybe = {...personCarachter, ...personDeveloper};

//console.log(personDeveloperTrybe);

//como fizemos no exercicio anterior usar o spread e bem simples mas requer muita atencao

const numbers = [1, 2, 3, 4];

const numeros = [...numbers, 5, 6, 7];

console.log(numeros);

//mais uma vez utilizamos o spread para modificar e atualizar um array

//Agora vamos usar o spread para unir um array de strings

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];

console.log(months);

//com o spread conseguimos adcionar arrays em um array month para mostrar os meses do ano