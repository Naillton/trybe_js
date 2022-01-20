//Utilizando a funcao map() podemos percorrer o array e retornar um novo array de objetos
//utilizamos o map() abaixo para imprimir o first name e o last name de cada uma das pessoas unidos

/* const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];

  const fullNames = persons.map((person) => {
    return `${person.firstName} ${person.lastName}`;
  });

  console.log(names); */

/*   const listaNumeros = [10, 20, 30];

  const multiplyBy2 = listaNumeros.map((numbers) => numbers * 2);

  console.log(multiplyBy2);
 */
  //no exemplo anterior usamos o map para multiplicar cada valor do nosso array
  //e claro nos retornar um array com os valores modificados

  /* const numbers = [1, 2, 3, 4, -5];

  const resultNegative = numbers.map((number) => (number > 0) ? number * -1 : number);

  console.log(resultNegative); */

  const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
  const prices = [2.99, 3.99, 1.5, 2];

  const unir = (product, price) => product.map((product, index) => ({[product]: price[index]}));

  const list = unir(products, prices);
  //console.log(list);

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
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' },
      ],
    },
  ];

  //const filter = estudantes.filter((turn) => turn.turno === 'Manhã').map((student) => `${student.nome} ${student.sobrenome}`);
  const filter = estudantes.filter((turn) => turn.turno === 'Manhã');

  const names = filter.map((student) => `${student.nome} ${student.sobrenome}`);

  //console.log(names);

  const reportStatus = (name, students) => { 
      const studentInfo = students.find((student) => student.nome === name);
      return studentInfo.materias.map((materia) => (`${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`));
  };

  console.log(reportStatus('Wilson', estudantes));