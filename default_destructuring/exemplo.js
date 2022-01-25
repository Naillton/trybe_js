/* ja aprendemos array e object destructuring e como acessar seus valores mas e se algum valor nao existir ? o valor undefined sera retornado mas esse valor nao e muito amigavel
dado isso temos o default destructuring que vai nos da a opcao de passar um valor como parametro */

const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };

  //const { nationality } = person;

  //console.log(nationality);

  //neste exemplo temos o valor undefined retornado, caso precisemos deixar um valor como parametro vamos usar o default destructuring

  const { nationality = "Brasileiro(a)"} = person;

  console.log(nationality);

  //com isso conseguimos deixar um valor default para a nacionalidade