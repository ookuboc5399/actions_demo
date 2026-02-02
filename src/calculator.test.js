/**
 * Calculatorクラスのテスト
 */

const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('加算が正しく動作する', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, 1)).toBe(0);
  });

  test('減算が正しく動作する', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(1, 1)).toBe(0);
  });

  test('乗算が正しく動作する', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-1, 5)).toBe(-5);
  });

  test('除算が正しく動作する', () => {
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.divide(5, 2)).toBe(2.5);
  });

  test('ゼロ除算でエラーが発生する', () => {
    expect(() => calculator.divide(5, 0)).toThrow('ゼロ除算はできません');
  });

  test('累乗が正しく動作する', () => {
    expect(calculator.power(2, 3)).toBe(8);
    expect(calculator.power(5, 2)).toBe(25);
    expect(calculator.power(10, 0)).toBe(1);
    expect(calculator.power(2, -1)).toBe(0.5);
  });
});

