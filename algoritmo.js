let fruits = [3, 4, 10, 1, 12];
let soma = 0;
for(let i = 0; i < fruits.length; i++){

    //soma = soma + fruits[i];
    soma += fruits[i]
}

if(soma > 15){
    console.log(soma);
}else{
    console.log("valor menor que 16");
} 

//console.log(soma > 15 ? soma : "Valor menor que 16");

/* if(soma <= 15){
    console.log("valor menor que 16")
}else{
    console.log(soma)
} */



//Baby steps
//tenho um array fruits com alguns valores
//quero somar esses valores
//devo criar uma varivel que armazene o valor da soma, incialmente ela vale 0
//para isso eu percorro o array com o for e guardar coda elemento na variavel i
//depois disso utilizo a varivel soma que tem como valor inicial 0 e digo que ela vai receber o seu valor que no caso e o 0 mais o valor do array
//ficamos com o codigo da seguinte forma soma += fruits[i]
//depois disso uso o if para fazer uma comparacao do valor imprimindo sua soma se valor > 15 e se for menor ou igual a 15 o codigo informa que o valor e menor que 16
