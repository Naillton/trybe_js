const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  //como aprendemos podemos imprimir as chaves de um objeto usando o for in e os valores das chaves usando o for of
 /*  console.log('Imprimindo Chaves')
  for(let chave in coolestTvShow){
      console.log(`${chave}`)
  }
  console.log('Imprimindo valores');
  for(let value in coolestTvShow){
      console.log(`${coolestTvShow[value]}`)
  } */

  //mas e se dissermos que tem outra maneira mais rapida e limpa de imprimir
  //as chaves de um objeto ? com o object.keys podemos fazer isso
  /* console.log(`Impimindo chaves 
  ${Object.keys(coolestTvShow)}`) */
  //adcionando chave e valor de maneiras diferentes
  coolestTvShow['minAge'] = 18;
  console.log(`Impimindo chaves 
  ${Object.keys(coolestTvShow)}`)

  //Agora que tal imprimirmos os valores dos nossos objetos ?
  //com o onject.keys(objeto) imprimimos as chaves dos objetos em um array
  //agora vamos usar o object.values e imprimir os valores do objeto
  console.log(`Imprimindo valores
  ${Object.values(coolestTvShow)}`)