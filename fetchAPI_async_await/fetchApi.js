const fetch = require('node-fetch');

/* const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  console.log(fetch(url));
}

fetchJoke(); */

// o retorno dessa funcao vai ser um Promise { <pending> }, como vimos nas aulas anteriores
// esse retorno se da pois o fluxo asssincrono do codigo nao foi controlado e ele ainda esta no estado de execucao o pending

// Corrigindo o problema

/* const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
    // controlando o fluxo de codigo com o .then()
    // o .then() espera uma resposta do fetch ou do .then() anterior ser concluida para executar
}

fetchJoke(); */

// mas e se algo der erro , podemos usar o .catch para contornar esse erro!!

const fetchJoke = () => {
    const url = 'api.chucknorris.io/jokes/random?category=dev';

    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
    // com o catch qualquer erro que acontecer no codigo sera tratado, desde uma mudanca na url como fizemos ou algum erro em algum then() por isso sempre usaremos o catch() no final
}

fetchJoke();