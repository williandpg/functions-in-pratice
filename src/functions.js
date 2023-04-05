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
  if (typeof (raio) === 'number') {
    const area = pi * (raio ** 2);
    return `Essa é a área do círculo: ${area}`;
  }
  return 'O parâmetro radius deve ser um número';
};
// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.
const longestWord = (frase) => {
  const array = frase.split(' ');
  let tamanhoPalavra = 0;
  let maiorPalavra = '';

  for (const palavra of array) {
    if (palavra.length > tamanhoPalavra) {
      tamanhoPalavra = palavra.length;
      maiorPalavra = palavra;
    }
  }
  return maiorPalavra;
}
// Não modifique as linhas abaixo
module.exports = {
  ligarDesligar: typeof ligarDesligar === 'function' ? ligarDesligar : (() => {}),
  circleArea: typeof circleArea === 'function' ? circleArea : (() => {}),
  longestWord: typeof longestWord === 'function' ? longestWord : (() => {}),
};
