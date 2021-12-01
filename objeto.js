/* let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
  };
//as chaves de um objeto sao armazenadas como strings
//para acessar as chaves que tem como nome valores numericos
//teremos que colocalas entra colchetes [1] ['1']
  console.log(diasDaSemana[1]); */

//neste exemplo utilizamos os valores da conta no objeto tanto com o conta. como conta[]
//ja que todos tem a chave o tipo string podemos fazer isso
/* let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };

  console.log("conta: "+conta.banco.id);
  console.log("agencia: "+conta['agencia']); */

//acessando objetos dentro de objetos
/* let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
};

console.log("O usuario "+usuario.infoPessoal.nome+" mora na rua: "+usuario.infoPessoal.endereco.rua+" no estado de "+usuario.infoPessoal.endereco.estado);
console.log("Cidade: "+usuario['infoPessoal']['endereco']['cidade']);
console.log(usuario.id);
console.log(usuario['email']); */

let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];

  let primeiroMorador = moradores[0];
  console.log(primeiroMorador);
  console.log(primeiroMorador.andar);
  console.log("\n")
  
  let segundoMorador = moradores[1];
  console.log(segundoMorador['nome']);
  console.log(segundoMorador.apartamento);
  console.log("\n")
  console.log("A pessoa "+moradores[3].nome+" mora no andar "+moradores[3].andar+" no apartamento "+moradores[3].apartamento);