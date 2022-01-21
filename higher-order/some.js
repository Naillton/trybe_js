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

console.log(hasName(names, 'Ana'))