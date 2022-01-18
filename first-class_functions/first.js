//Comecando nossos estudos em HOF vamos utiliza nos procimos exemplos a first-class functions
//nos ja utilizamos first-class nos projetos e exercicios anteriores e agora temos uma explicacao
//as first-class sao funcoes que suportam as mesmas operacoes disponiveis para outros tipos
//ou seja podemos passar as funcoes para atribuirlas em variaveis

const sum = (number1, number2) => {
    return number1 + number2;
};

const somaVarivael = sum(5,5);

console.log(somaVarivael);

const sayHello = () => {
    return `Hello Trybers`;
};

const print = (callback) => {
    console.log(callback());
};

print(sayHello);

const sumFix = (amount) => {
    return (number) => amount + number;
};

const initialSum = sumFix(15);
console.log(initialSum(5));