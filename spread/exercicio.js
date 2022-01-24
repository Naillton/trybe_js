const acaiCreams = ['Acai', 'Acai com ninho', 'Acai com nutella'];

const additionalItens = ['M&Ms', 'Gotas de chocolate', 'Jujuba', 'leite em po', 'tortuguita'];

const acai = (fruit, additional) => {
    return `escolha algum de nossos cremes ${[...fruit]}
escolha 3 adcionais , ${[...additional]}`;
};

console.log(acai(acaiCreams, additionalItens));