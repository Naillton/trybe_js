//vamos comecar vendo sobre o forEach no nosso exemplo
//temos um array que contem algumas informacoes
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

/* arrayOfValues.forEach((element) => {
    console.log(`elemento presente no aray:`, element);
}); */
//com o forEach percorremos o array e imprimimos cada elemento passado
/* 
const meuArray = [2, 4, 5, 6, 8, 10, 22];

meuArray.forEach((element) => {
    if (element % 2 === 0) {
        console.log(`${element} e dividido por 2`);
    }
}); */
//podemos tambem passar como parametro do forEach o index e o array do elemento

arrayOfValues.forEach((element, index, array) => {
    console.log('Elementos do array: ', element);
    console.log('Indexs do array: ', index);
    console.log('Array completo: ', array);


});

//no nosso forEach() todos os parametros retornam algum resultado
//apesar de nao serem muito usados os nossos parametros index e array podem ser de grande ajuda para o entendimento do forEach()
