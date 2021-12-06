let ingredientItems = [
    '500g de feijao carioca cozido',
    '200g de bacon',
    '1 concha de oleo',
    '1 cebola media picada',
    '4 dentesde alho',
    '5 ovos',
    'cheiro verde a gosto',
    '200g de farinha de mandioca'
];

let cont = 0;
let lista = document.querySelector('.ingredients-list');
do{

    let ingredient = ingredientItems[cont];

    //agora para criar a lista e deixar a mesma preparada para o html usamos o createElement e passamos li como parametro
    let ingredientList = document.createElement('li');
    //depois de criar o elemento adcionaremos na ingredientList os valores recebidos no array
    ingredientList.innerText = ingredient;
    //feito isso vamos colocar as listas no html
    lista.appendChild(ingredientList);
    cont += 1
}while( cont < ingredientItems.length)

