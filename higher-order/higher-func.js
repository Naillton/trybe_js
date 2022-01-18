//As HOF os permitem compactar acoes e nao somente repassar valores
/* const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
        action(count);
    }
};

repeat(5, console.table); */
//Agora vamos aumentar a complexidade da funcao construindo uma mais especializada e definida
/* const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
        action(count);
    }
};

repeat(10, (number) => {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else if ((number % 2 ) > 0) {
        console.log(`${number} is odd`);
    }
}); */
//aumentando a complexidade da funcao conseguimos modificar e pegar os valores pares e impares
//Agora vamos dividir o nosso resultado em duas funcoes uma para par e outra para impar
/* 
const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
        action(count);
    }
};

const isEven = (number) => {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    }
};

const isOdd = (number) => {
    if (number % 2 > 0) {
        console.log(`${number} is odd`);
    }
}; */

const numberGenerator = () => {
    let number = Math.random() * 100;
    return Math.round(number);
}

console.log(numberGenerator());


