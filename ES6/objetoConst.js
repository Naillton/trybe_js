const userInfo = {
    name: 'Cláudio',
    id: '5489-2',
    email: 'claudio@email.com',
  };
  
  userInfo.name = 'João';
  userInfo.id = 34567;
  
  console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }
  //com constantes objetos, conseguimos mudar o valor setando a opcao que queremos como por exemplo userInfo.name
  //se tentarmos mudar todo o objeto ele retornara um erro