let cities = [];

const addCity = (city) => {
  cities.push(city);
};

const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
};

beforeEach(() => {
    cities = [Pimdamonhagaba];
});

afterEach(() => {
    cities = [];
});

test('Testa a função addCity', () => {
    expect.assertions(4);
    addCity('Campinas');
    addCity('Goiania');
    addCity('Recife');
    expect(cities).toHaveLength(3);
    expect(cities).toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
  });
  
  test('Testa a função removeCity', () => {
    expect.assertions(4);
    removeCity('Campinas');
    expect(cities).toHaveLength(2);
    expect(cities).not.toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
  });

  /* No codigo acima declaramos o beforeEach e o afterEach que sao usados para definir funcoes onde nossos 
  testes executaram uma condicao antes e outra depois, com isso nos conseguimos passar pelos nossos ciclos de teste  
  setup, testes,  teardown*/