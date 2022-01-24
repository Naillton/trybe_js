/* O object destructuring veio com o ES6 para nos dar maior flexibilidade e velocidade na hora de mexermos com objetos
com ele podemos trbalhar sobre chaves e valores de um objeto de maneira rapida e facil. */

/* const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

  const { name, seller } = product;

  console.log(name, seller); */

//essa e a sintaxe do object destructuring, primeiro passamos a chave e depois o nosso objeto, com isso podemos acessar qualquer chave existente no nosso objeto

//mas e se a chave do objeto tiver outro objeto como valor o que faremos ?

/* const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };

  const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character; */
  //console.log(`Esse e o ${name} ele tem ${age} anos, mora em ${planetName} ele e um jedi ? ${ jedi }`);
  
  //desta forma podemos acessar chaves e valores, note que uma varivael foi passada para o name do planeta, guardando nela o valor do nome tatooine

  const daysOfWeek = {
      workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      weekend: ['Saturday', 'Sunday'],
  }

  const { workDays, weekend } = daysOfWeek;

  //console.log([...workDays, ...weekend]);

  //como mostrado acima podemos acessar os valores com o nosso spread operator, onde em vez de deixar os valores separados em arrays podemos juntalos

  //com a desestruturacao podemos redefinir o nome das nossas propriedades como veremos a seguir

  const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };

  const { a: name, b: classAssigned, c: subject } = student;

  const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

  const productDetails = (({name, price, seller}) => {
    return `Produto ${ name }, preco ${ price }, onde encontro: ${ seller }`;
  });

  console.log(productDetails(product));

  