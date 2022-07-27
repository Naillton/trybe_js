type bird = {
  nome: string,
  age: number,
  asas: boolean,
}

function eUmPassaro(passaro: bird): void {
  console.log("O nome do passaro é: " + passaro.nome);
  console.log("O passaro tem: " + passaro.age + " de idade");
  console.log("O passaro tem asas: " + passaro.asas);
}

eUmPassaro({
  nome: 'catatinha',
  age: 20,
  asas: true
});