//A funcao filter() vai nos retornar um array de elementos filtrados, ela funciona parecida com a find a diferenca e o retorno do array
/* const listaNumeros = [10, 20, 30, 40];

const list = listaNumeros.filter((number) => number > 20);
console.log(list);
 */
//como vemos acima o retorno da variavel list e um array [30, 40]

const numbers = [19, 21, 30, 3, 45, 22, 15];

/* const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);
 */

const isEven = numbers.filter((number) => number % 2 === 0);

console.log(isEven);

//no segundo exemplo utilizamos o filter() para encontrar os numeros que tinham modulo 0 qunado divididos por 2
//tambem fizemos dois modos de criar a condicao um com uma funcao pra definida e outro sem funcao passando
//direto na variavel

const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];

  const verifyAge = (array) => (
    array.filter((people) => (people.age < 18))
  );

  console.log(verifyAge(objPeople));
  //no nosso exemplo anterior temos um array de objetos com a idade das pessoas e a nossa funcao vai verificar aqueles menores de 18
  //a nossa funcao verifyAge vai retornar um objeto que esta sendo percorrifo e filtrado com o .filter() retornando as pessoas menores de idade em um array de objetos
  //a ausencia do {} e presenca do () na primeira funcao ser ve para indicarmos que aquela funcao retorna uma expressao literal de objeto

  const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

  const removeStudentByName = (name, listStudents) => {
    return listStudents.filter((student) => student !== name);
  };

  const newListStudent = removeStudentByName('Ricardo', arrayMyStudents);
  console.log(newListStudent);