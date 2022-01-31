const fetch = require('node-fetch');

/* const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  console.log(fetch(url));
}

fetchJoke(); */

// o retorno dessa funcao vai ser um Promise { <pending> }, como vimos nas aulas anteriores
// esse retorno se da pois o fluxo asssincrono do codigo nao foi controlado e ele ainda esta no estado de execucao o pending

// Corrigindo o problema

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
    // controlando o fluxo de codigo com o .then()
    // o .then() espera uma resposta do fetch ou do .then() anterior ser concluida para executar
}

fetchJoke();
