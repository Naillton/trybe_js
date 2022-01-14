//para conseguirmos fazer testes com o node teremos que importar o assert
//uma ferramenta que testa expressoes, o modulo ja vem instalado com o nodeJS

const assert = require('assert');

assert.strictEqual(50, 50);
//como podemos observar ao rodar o codigo nao temos erros no 50 === 50
//e nao temos nenhum retorno.

assert.strictEqual(50, 70);
//ja na segunda comparacao teremos um assertionError pois 50 nao e igual a 70
//deste modo teremos o erro retornado no console