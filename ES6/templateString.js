//Com o template string, podemos temos um modo mais atualizado de criar strings complexas de forma facil
//veja o exemplo abaixo
const myName = 'Nailton';
console.log(`Ola ${ myName } seja bem vindo`);

//com essa nova forma de criarmos strings nao precisamos mais ficar concatenando variaveis e strings
//diminuindo sua complexidade e o tamanho da frase

//com o template literals tmabem podemos adcionar expressoes dentro do ${} como por exeplo ${ a + b }
//outra novidade e poder adcionar quebras de linha sem a necessidade de concatenalas

console.log(`Primeira Linha;
Segunda Linha;
Terceira Linha;
`);

//com isso podemos pular de linha em linha sem a necessidade de usar um \n
