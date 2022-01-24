const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const userDeveloper = {...user, ...jobInfos};
  
  //console.log(userDeveloper);
  //Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"

  const phrase = (obj) => {
    const {name, age, nationality, profession, squad, squadInitials} = obj;
    return `Hi, my name is ${ name }, I'm ${ age } years old and I'm ${ nationality }. I work as a ${ profession } and my squad is ${squadInitials}-${ squad }`
  }

  console.log(phrase(userDeveloper));