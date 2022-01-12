const printName = () =>{
    const myName = 'Nailton';
    return myName
};

console.log(printName());

//a arrow function serve para simplificar ainda mais nosso codigo

const name = (nome) => nome;

console.log(name('Junior'))

//podemos simplificar nossa arrow function em uma unica linha como vemos no codigo anterior e nao precisamos passar o return
//pois o return ja vem definido na arrow function

const fullName = (nome, sobrenome) => `${ nome } ${ sobrenome }`;
console.log(fullName('Nailton', 'Junior'));

//no ultimo exemplo usamos template literals , arrow function e const variable