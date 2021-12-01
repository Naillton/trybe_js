/* //criando funcao para retornar bom dia para o usuario
function bomDia(usuario){
    return "Bom dia "+usuario;
}
//imprimindo a funcao e passando o usuario como parametro
console.log(bomDia('Marilia'));

 */

/* function multi(a,b){
    return a * b
}
console.log(multi(10, 4)); */

function maiorNumero(num1, num2){
    if(num1 > num2){
        return "O numero "+num1+" e maior que o numero "+num2;
    }else if(num2 > num1){
        return "O numero "+num2+" e maior que o numero "+num1;
    }else{
        return "Os numeros sao Iguais";
    }
}

console.log(maiorNumero(5, 5));



