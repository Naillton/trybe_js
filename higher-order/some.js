/* const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames));
console.log(verifyFirstLetter('x', listNames));
 */
//no exemplo acima usamos o some() uma funcao que retornara o primeiro eleento que conter a nossa condicao
//no caso se a minha lista de nomes conter uma letra por exemplo J e retorna true, caso nao ele me retornara false

const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

//console.log(verifyGrades(grades));

//ja no nosso exemplo com o every(), temos um objeto e uma constante de verificacao
//onde com o Object.values eu pego todos os valores dos objetos e uso o every() para verificar se
//todos os valores sao aprovados se sim retorna true mas se um unico valor for reprovado retorna false

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  const result = arr.some((array) => array === name);
  return result;
}

//console.log(hasName(names, 'Ana'))

/* no nosso exemplo anterior usamos o some para verificar se algum dos nomes existe no nosso array
se o nome existir recebemos true se nao recebemos false. */

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    const result = arr.every((array) => array.age >= minimumAge ? true : false);
    return result;
  }
  
  console.log(verifyAges(people, 18));

/*   O nosso codigo anterior percorre o array e se a idade for maior ou igual que a idade minima passada
  retornamos true caso contrario retornamos false */
