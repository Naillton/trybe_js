//const sum = (value1, value2) => value1 + value2;
//console.log(sum(5, 5));
//o resultado do codigo acima e 10 pois 5 + 5 = 10.
//agora se tentarmos somar 5 + '5', receberemos qual resultado ?
//console.log(sum(5, '5'));
//o resultado recebido e 55 pois um numero + uma string vai retornar uma string que e a juncao dos dois parametros da nossa funcao

//Agora vamos adcioar uma condicao para imprimir que sejam passadas strings
//no lugar dos numeros
/* const sum = (value1, value2) =>{
    if(typeof value1 !== 'number' || typeof value2 !== 'number'){
        return 'Tipos diferentes de dados, so posso calcular numeros'
    }
    return value1 + value2
}
 */
//console.log(sum(4, 3));
//com a condicao passada acima avisamos a pessoa usuaria que a funcao so aceita numeros mas nao tratamos o erro devidamente
//para tratar o erro usaremos a funcao throw que vai interromper o funcionamento do codigo
/* const soma = (value1, value2) => {
    if(typeof value1 !== 'number' || typeof value2 !== 'number'){
        throw new Error('Os valores nao sao numericos')
    }
    return value1 + value2;
}

console.log(soma(2, 3)) */
//com o fluxo do codigo interrompido com o throw usamos o new que e uma instancia js que cria novos objetos e passamos o objeto Error que nos manda uma mensagem de erro
//para melhorar mais o funcionamento do codigo podemos usar o try/catch que vai nos da uma tentativa com o try e se caso tiver algum erro ele cai no catch
//podemos tambem refatorar a funcao e melhorar o codigo

const verificacao = (value1, value2) =>{
    if( typeof value1 !== 'number' || typeof value2 !== 'number'){
        throw new Error `${value1} ou ${value2} invalidos, so posso calcular numeros`;
    }
};

const sum = (value1, value2) =>{
    try{
        verificacao(value1, value2);
        return value1 + value2
    }catch (error){
        throw error.message;
    }
};

console.log(sum(3, '3'));