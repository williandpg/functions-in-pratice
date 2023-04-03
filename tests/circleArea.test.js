const { circleArea } = require('../src/functions');

describe('2 - Crie uma função que calcule a área de um círculo', () => {

  it('Retorne `Essa é a área do círculo: 314` ao receber 10 como parâmetro', () => {
    expect(circleArea(10)).toBe(`Essa é a área do círculo: 314`);
  });

  it('Retorne `Essa é a área do círculo: 78.5` ao receber 5 como parâmetro', () => {
    expect(circleArea(5)).toBe(`Essa é a área do círculo: 78.5`);
  });
  
    it('Retorne uma mensagem de erro quando Radius não for um número', () => {
    expect(circleArea('duna')).toBe('O parâmetro radius deve ser um número');
  });
});
