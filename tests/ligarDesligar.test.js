const { ligarDesligar } = require('../src/functions');

describe('1 - Crie uma função que ligue e desligue um motor de um carro', () => {

  it('Ao receber como parâmetro `desligado` retorna `ligado`', () => {
    expect(ligarDesligar('desligado')).toBe('ligado');
  });

  it('Ao receber como parâmetro `ligado` retorna `desligado`', () => {
    expect(ligarDesligar('ligado')).toBe('desligado');
  });

  it("Ao receber 'ligado' chama o console.log com a mensagem 'O motor está desligado'", () => {
    console.log = jest.fn();
    ligarDesligar('ligado')
    expect(console.log).toHaveBeenCalledWith('O motor está desligado');
  });

  it("Ao receber 'desligado' chama o console.log com a mensagem 'O motor está ligado'", () => {
    console.log = jest.fn();
    ligarDesligar('desligado')
    expect(console.log).toHaveBeenCalledWith('O motor está ligado');
  });

});
