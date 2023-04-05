// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.
let ligarDesligar = (carro) => {
  if (carro === 'desligado') {
    carro = 'ligado';
  } else {
    carro = 'desligado';
  }
  console.log(`O motor está ${carro}`);
};
ligarDesligar('ligado');
// 2 - Crie a função circleArea, que calcule a área de um círculo.
// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.
// Não modifique as linhas abaixo
module.exports = {
  ligarDesligar: typeof ligarDesligar === 'function' ? ligarDesligar : (() => {}),
  circleArea: typeof circleArea === 'function' ? circleArea : (() => {}),
  longestWord: typeof longestWord === 'function' ? longestWord : (() => {}),
};