const nota_pessoa = 200;

if(nota_pessoa >= 80 && nota_pessoa <= 100){
    console.log("Parabens, voce foi aprovado");
}else if(nota_pessoa < 80 && nota_pessoa >= 60){
    console.log("voce esta na nossa lista de espera")
}else if(nota_pessoa < 60 && nota_pessoa >= 0){
    console.log("Voce foi reprovado")
}else{
    console.log("Nota inexistente insira uma nota valida")
}