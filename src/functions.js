// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.
let ligarDesligar = (carro) => {
  if (carro === 'desligado') {
    carro = 'ligado';
  } else {
    carro = 'desligado';
  }
  console.log(`O motor está ${carro}`);
  return carro;
};
// 2 - Crie a função circleArea, que calcule a área de um círculo.
const circleArea = (raio) => {
  const pi = 3.14;
  if (typeof raio !== 'number') {
    return 'O parâmetro raio deve ser um número';
  }
  let area = pi * (raio ** 2);
  return `Esta é a área do circulo: ${area}`;
};
console.log(circleArea(10));
// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.

// Não modifique as linhas abaixo
module.exports = {
  ligarDesligar: typeof ligarDesligar === 'function' ? ligarDesligar : (() => {}),
  circleArea: typeof circleArea === 'function' ? circleArea : (() => {}),
  longestWord: typeof longestWord === 'function' ? longestWord : (() => {}),
};
