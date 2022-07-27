type sum = {
  x: number,
  y: number
}

function somar(soma: sum): number {
  const somando = soma.x + soma.y;
  return somando
}

console.log(somar({x: 20, y: 20}));