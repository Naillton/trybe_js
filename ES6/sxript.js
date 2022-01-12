function userInfo(){
    let userEmail = 'nailton@mail.com';
    var user = 'Nailton';
    const userId = 1234

    //toda expressao dentro do escopo da funcao userInfo vai ter acesso a userEmail
    console.log(userEmail);
    console.log(user);
    console.log(userId);
}
//se tentarmos usar a variavel fora da funcao vai dar erro de definicao pois nao conseguimos acessar a mesma
//console.log(userEmail);

userInfo();