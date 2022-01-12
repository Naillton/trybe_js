//Podemos tambem diminuir o tamanho dos nossos if
//usando o operador ternario temos uma possibilidade de diminuir o codigo e deixalo mais limpo

//aqui temos a ideia antiga com if normal
const idade = 20;
if(idade >= 18){
    console.log('Voce ja chegou na maior idade');
}else{
    console.log('Voce ainda e menor de idade');
}

//aqui temos o operador ternariio em acao
const result = (idade >= 18) ? 'Voce ja chegou na maior idade' : 'Voce ainda e menor de idade';
console.log(result)
