if (true) {
    // inicio do escopo do if
    var userAge = '20';
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20

  function isTrue(){
      var age = 20;
      //com o var podemos mudar o valor de uma variavel
      age = 21;
      let ano = 2021
      ano = 2022
      for(let number = 0; number < 10; number += 1){
          console.log(number)
      }
      //o let foi criado para resolver o problema do var de sempre ser mutavel
      //o erro no codigo aconteceu pois a varivel number foi declarada dentro do for e nao conseguimos imprimir o seu valor fora dele
      //console.log(number)
      console.log(age);
      console.log(ano)
  }
  //erro causado pois a varivel age nao existe fora da funcao
  //console.log(age)
  isTrue();

  //como o proprio nome ja diz a const cria uma varivael constante ou seja nao pode ser modificada em nenhuma circustancia
  //o uso do const e o mais recomendado em qualquer projeto e so usamos o let quando formos usar um for com a varivel por exemplo
  //nao usamos o var entao descartemos do teclado
  const numero = 2022
  console.log(numero)