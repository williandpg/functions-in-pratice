const { longestWord } = require('../src/functions');

describe('3 - Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase', () => {

  it('Ao receber a frase: `Antônio foi ao banheiro e não sabemos o que aconteceu` o retorno será `aconteceu`', () => {
    expect(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu')).toBe('aconteceu');
  });

  it('Ao receber a frase: `Eu estudo na Trybe com muita dedicação` o retorno será `dedicação`', () => {
    expect(longestWord('Eu estudo na Trybe com muita dedicação')).toBe('dedicação');
  });
});
