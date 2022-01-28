// neste exemplo o jest nos dara um falso positivo pois os testes por default sao sincronos enquanto nossa funcao e assincrona

/* test('Não deveria passar!', () => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
    }, 500);
  }); */

  // com a callback done podemos resolver o problema de sincronia do test e com isso ele nos retorna uma mensagem de erro no timeout

/* test('Nao deveria passar!', (done) => {
    setTimeout(() => {
        expect(10).toBe(5);
        console.log('Deveroa falhar!');
        done();
    }, 500);
}); */

// mas o codigo ainda noa esta correto pois ele falha com a mensgaem de timeout, ou seja antes da instrucao done executar o codigo crasha por erro no timeout

/* test('Não deveria passar!', (done) => {
    setTimeout(() => {
      try {
        expect(10).toBe(5);
        console.log('Deveria falhar!');
        done();
      } catch (error) {
        done();
      }
    }, 500);
  }); */

  // Opss o codigo acima gerou um falso positivo pois nao foi passado nenhum erro no done() entao ele executa normalmente

  test('Não deveria passar!', (done) => {
    setTimeout(() => {
      try {
        expect(10).toBe(5);
        console.log('Deveria falhar!');
        done();
      } catch (error) {
        done(error);
      }
    }, 500);
  });

  // Agora sim o teste falhou corretamente e assim conseguimos colocar codigos assincronos nos nossos testes
