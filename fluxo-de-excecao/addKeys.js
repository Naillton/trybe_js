//Como ja vimos nos blocos anteriores uma das maneiras de adcionar masi chaves em um objeto e reescrevendo o mesmo
//desta forma uma propriedade seria adcionada

//mas temos outras formas de adcionar chaves e valores em um objeto
//veremos abaixo
const customer = {
    firstName: 'Nailton',
    age: 21,
    job: 'Developer'
}

console.log(customer);

customer.lastName = 'Junior';

console.log(customer);

//como mostrado acima podemos adcionar chave e valor passando o nome do objeto em seguida a sua chave e depois recemos o valor com o =
//Ex: objeto.chave = valor;

//Agora para adcionarmos mais de um valor a um objeto podemos criar variaveis que recebem valores e depois passarmos os valores para o objeto

const aluno = {
    firstName: 'Nailton',
    age: 22,
    job: 'Developer',
};

/* let newKey = 'lastName'
const lastName = 'Junior';
aluno[newKey] = lastName;
newKey = 'fullName';
const fullName = `${aluno.firstName} ${customer.lastName}`;
aluno[newKey] = fullName;
console.log(aluno); */

aluno.lastName = 'Junior';
aluno.fullName = `${aluno.firstName} ${aluno.lastName}`;
console.log(aluno);