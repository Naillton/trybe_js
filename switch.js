let estado = "aprovada";

switch(estado){
    case 'aprovada':
        console.log("Voce foi aprovado(a) no processo seletivo");
        break;
    case 'lista':
        console.log("Voce esta na lista de espera");
        break;
    case 'reprovada':
        console.log("Que pena voce foi reprovado(a) :(");
        break;
    default:
        console.log("Nao se aplica a vaga");
}