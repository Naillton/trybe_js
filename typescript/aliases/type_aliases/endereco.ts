type end = {
  rua: string,
  numero: number,
  cep: string
}

function endereco(address: end) {
  console.log(`endereco:
    rua ${address.rua}, numero ${address.numero}, cep ${address.cep}
  `);
}

endereco({
  rua: 'jkjskfjksfjksf',
  numero: 20,
  cep: '445566-89'
});