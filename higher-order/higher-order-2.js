/* recapitulando
as HOFs sao funcoes dentro de outras funcoes ou funcoes passadas como parametro para outras funcoes
 ja utilicamos elas antigamente quando fomos adcionar um evento. */

/*  const students = [
    {name: 'Maria', grade: 70, approved: ''},
    {name: 'Jose', grade: 56, approved: ''},
    {name: 'Roberto', grade: 90, approved: ''},
    {name: 'Ana', grade: 81, approved: ''},
 ];

 function verifyGrades() {
     for (let i = 0; i < students.length; i +=1 ) {
        const student = students[i];
        if (student.grade >= 60) {
            student.approved = 'Aprovado';
        } else {
            student.approved = 'Recuperacao';
        }
     }
 }

 verifyGrades();

 console.log(students);
 */
 //no exemplo anterior usamos um for para percorrer todo o objetos students
 //mas agora que ja sabemos o que sao higher order functions pq nao utilizamos o forEach para percorrer o array de objetos ?
/* 
 const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];

  function verifyGrades() {
      students.forEach((student) => {
        if (student.grade >= 60) {
            student.approved = 'Aprovado';
        } else {
            student.approved = 'Recuperacao';
        }     
      });
  }

  verifyGrades();

  console.log(students); */
  //com o exemplo com forEach() nao precisamos fazer todos os passo a passos do for
  //com o forEach() percorremos cada elemento um a um e em cada elemento a funcao executa um processo

  //agora vamos para outro exemplo

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
/* let firstMultipleOf5;
for (let index = 0; index < numbers.length; index += 1) {
    let numberss = numbers[index];
    if (numberss % 5 === 0) {
        firstMultipleOf5 = numberss;
        break;
    }
}

console.log(firstMultipleOf5); */
//no exemplo anterior usamos o o for para percorrer o array e imprimir o resultado do modulo de 5

//agora vamos usar o array.find que vai nos permitir fazer exatamente o mesmo codigo em poucas linhas
const firstMultipleOf5 = numbers.find((number) => {
    return number % 5 === 0
});

console.log(firstMultipleOf5);
//com o array.find percorremos o array numbers e passamos como parametro da nossa arrowfunction o number
//o number e o responsavel por ter toda a informacao do nosso array numbers