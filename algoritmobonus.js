//programa que diz se um numero definido numa variavel e primo ou nao
//definindo variavel
let numero = 5;
//definindo variavel que ira contar quantas vezes o numero % i deu 0
let primos = 0;
//estrutura de repeticao percorrendo todos os valores anteriores ao da variavel numero
for(let i = 0; i <= numero; i++){
    //se o numero % i for == 0 ele sera adcionado na variavel divisores
    if(numero % i == 0){
        primos++
    }
}
//usando o o if para saber se o valor de divisores e maior que dois se sim ele nao e primo se for igual e primo
if(divisores === 2){
    console.log(numero +" E um numero primo");
}else{
    console.log(numero +" Nao e numero primo");
}