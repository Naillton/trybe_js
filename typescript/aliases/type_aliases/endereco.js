"use strict";
function endereco(address) {
    console.log(`endereco:
    rua ${address.rua}, numero ${address.numero}, cep ${address.cep}
  `);
}
endereco({
    rua: 'jkjskfjksfjksf',
    numero: 20,
    cep: '445566-89'
});
