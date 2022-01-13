//como vimos nos arquivos anteriores podemos imprimir valores de um objeto com o object.values e as suas chaves com o object.keys
//mas tudo isso e forma separada, entao que tal fazermos tudo de uma vez 
//usaremos agr o object.entries que vai nos dar o prazer de imprimir chaves e valores de um objeto no mesmo array
//e claro vai nos mostrar como u objeto dentro do outro se comporta com as nossas funcoes

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
    plataforms: {
        name: 'PrimeVideo',
        dono: 'Amazon'
    }
  };

  console.log(Object.entries(coolestTvShow));
  //com o entries pegamos as chaves e os valores de um objeto e se o objeto tiver outro objeto dentro dele
  //o mesmo sera tratado como um array de objetos como vemos no console