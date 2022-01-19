const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* numbers.forEach((element) => {
    console.log(`2 X ${element} = ${element * 2}`);
}); */
//essa seria nossa tabuada com apenas o forEach()
//agora vamos adcionar uma funcao e depois so chamar essa funcao dentro do nosso forEach()

const multi = (element) => {
    console.log(`2 X ${element} = ${element * 2}`);
};

numbers.forEach(multi);
//vamos para mais um exemplo

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertUpperCase = (name, index) => {
    names[index] = name.toUpperCase();
};

names.forEach(convertUpperCase);
console.log(names);