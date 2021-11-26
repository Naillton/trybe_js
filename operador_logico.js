const comida = 'Pao na chapa';
const bebida = 'cafezinho';

if(bebida == 'cafezinho' && comida == 'Pao na chapa'){
    //console.log("Muito obrigado pela refeicao");
}else{
    //console.log("Meu pedido veio errado garcom");
}

const condicaoUm = true;
const condicaoDois = false;

//console.log(condicaoUm && condicaoDois); //Usando o operador || com os valores acima podemos dizer que o resultado sera true por conta da tabela da verdade

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaCompras = cenouras && leite && arroz && feijao;

//console.log(listaCompras);

const currentHour = 20;
let message;

if(currentHour >= 22){
    message = "Nao deveriamos comer nada, e hora de dormir";
}else if(currentHour >= 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D";
}else if(currentHour >= 14 && currentHour <= 18){
    message = "Vamos fazer um bolo pro cafe da tarde ? ";
}else if(currentHour > 11 && currentHour < 14){
    message = "Hora do almoco";
}else if(currentHour > 4 && currentHour < 11){
    message = "Hmmmm, cheiro de cafe recem passado";
}

//console.log(message);

const bebidaPrincipal = 'coca-cola';
const bebidaAlternativa = 'suco de laranja';

if(bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja'){
    //console.log("Obrigado por me atender :D")
}else{
    //console.log("Ei, eu nao pedi isso!");
}

let weekDay = "sabado";

if(weekDay === "segunda feira" || weekDay === "terca feira" || weekDay === "quarta feira" || weekDay === "quinta feira" || weekDay === "sexta feira"){
    //console.log("Oba mais um dia de aprendizado na trybe");
}else if(weekDay === "sabado" || weekDay === "domingo"){
    //console.log("Finalmente, final de semana e descanso merecido");
}

const squirtle = "melhor pokemon inicial";
console.log(!squirtle);