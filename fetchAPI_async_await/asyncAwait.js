const fetch = require('node-fetch');

/* const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke(); */

// Chuck Norris can write multi-threaded applications with a single thread.
// desta forma colocamos async em nosso codigo

// agora vamos refatorar esse codigo e fazelo usando await

/* const fetchJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';

    const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.value)
    .catch((error) => `Algo de errado nao esta certo \n${error}`);

    console.log(result);
}

fetchJoke(); */

// como podemos ver a implementacao do async e await sao rapidas e o await so pode ser implementado com o async
// desta forma o await funciona como se digita ele espera ate o ultimo .then e .catch executarem para executar o console.log

// outra forma de implementacao e usar o try catch com o aync await

const fetchJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';

    try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.value);
    } catch (error) {
    console.log(`Algo de errado nao esta certo \n${error}`);
    }

    console.log(result);
}

fetchJoke();

// desta forma conseguimos usar try catch com async await