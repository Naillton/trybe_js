interface Automovel {
  marca: string;
  cor: string;
  velocidadeMax: number;
  descricao(): string;
}

interface Felino {
  nome: string;
  filo: string;
  ordem: string;
  descricao(): string;
}

let animal: Felino = {
  nome: 'Leão',
  filo: 'chordata',
  ordem: 'carnivora',
  descricao() {
    return `O ${this.nome} é da ordem ${this.ordem} e do filo ${this.filo}`
  }
}

let auto: Automovel = {
  marca: 'Nissan',
  cor: 'Prata',
  velocidadeMax: 200,
  descricao() {
    return `O carro da marca ${this.marca} a cor ${this.cor} vai até ${this.velocidadeMax} /h`;
  }
}

console.log(animal.descricao());

console.log(auto.descricao());