interface House {
    rua: string;
    numero: number;
    descricao(): string;
    abrirPorta(): string;
    fecharPorta(): string;
  }
  
  
  class House {
    constructor(rua: string, numero: number) {
      this.rua = rua;
      this.numero = numero;
    }
  
    descricao() {
      return `
      Minha casa está localizada na rua: ${this.rua}
      e tem o numero ${this.numero}
      `; 
    }
  
    abrirPorta() {
      return `abrindo a porta`;
    }
  
    fecharPorta() {
      return `estou fechando a porta`;
    }
  }
  
  const House1 = new House('rua dos alfeneiros', 23);
  const House2 = new House('rua da má fama', 69);
  
  console.log(House1.descricao());
  console.log(House1.abrirPorta());
  console.log(House1.fecharPorta());