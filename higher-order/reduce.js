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

const soma = collection.reduce(sum, 5);
console.log(soma);
 */
//const sum = collection.reduce((acc, number) => acc + number);
//console.log(sum);
//no exemplo anterior fizemos mais uma funcao para somar valores olhar no course o gif explicando como o reduce funciona

const numberss = [50, 85, -30, 3, 15];

/* let count = 0;

for ( let i = 0; i < numberss.length; i += 1) {
    count += numberss[i];
} */

const count = numberss.reduce((acc, number) => acc + number);

//console.log(`A soma do array e ${count}`);

//no exemplo acima criamos dois modos para visualizar como o reduce funciona, o primeiro modo utiliza o for
//o que nao fica nada legal pois alem de criar mais duas variaveis usamos mais linhas no codigo
//o segundo modo temos a nossa const que recebe o reduce onde eu passo o acc e o number como parametros e depois somo ambos tendo o resultado em uma so linha

//Agora vamos pegar o maior valor do arary e exibilo na tela

const getBig = numberss.reduce((big, number) => big > number ? big : number);

//console.log(`O maior numero do array e ${getBig}`);

const numeros = [10, 5, 3, 60, 20, 7, 80]

const par = numeros.filter((number) => number % 2 === 0);

const sumPar = par.reduce((acc, number) => acc + number);

//console.log(sumPar)

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];

  const nota = (acc, materia) => {
      if (acc.nota > materia.nota){ 
      return acc;
    }
      return materia;
  }

  const resultado = (student) => student.map((student) => ({
      nome: student.nome,
      materia: student.materias.reduce(nota).name
  }));

  console.log(resultado(estudantes));