//Utilizando a funcao map() podemos percorrer o array e retornar um novo array de objetos
//utilizamos o map() abaixo para imprimir o first name e o last name de cada uma das pessoas unidos

/* const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];

  const fullNames = persons.map((person) => {
    return `${person.firstName} ${person.lastName}`;
  });

  console.log(names); */

/*   const listaNumeros = [10, 20, 30];

  const multiplyBy2 = listaNumeros.map((numbers) => numbers * 2);

  console.log(multiplyBy2);
 */
  //no exemplo anterior usamos o map para multiplicar cada valor do nosso array
  //e claro nos retornar um array com os valores modificados

  /* const numbers = [1, 2, 3, 4, -5];

  const resultNegative = numbers.map((number) => (number > 0) ? number * -1 : number);

  console.log(resultNegative); */

  const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
  const prices = [2.99, 3.99, 1.5, 2];

  const unir = (product, price) => product.map((product, index) => ({[product]: price[index]}));

  const list = unir(products, prices);
  console.log(list);