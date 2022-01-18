//Agora comecaremos a entender o que sao funcoes de ordem maior e advinha ? ja utilizamos elas muitas vezes
//as funcoes de ordem maior sao funcoes que usam outras funcoes em suas operacoes seja como parametros ou como retorno
//no nosso exemplo abaixo temos uma funcao que simula o registro de uma pessoa
//e passamos cmo argumento uma segunda funcao
//HOF addEventListener first-class registerUser

const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);