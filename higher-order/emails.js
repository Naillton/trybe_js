const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email, index) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!
seu indice e: ${index + 1}`);
  };

  emailListInData.forEach(showEmailList);