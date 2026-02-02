/**
 * シンプルな計算機のサンプルコード
 * デモ用のファイルです
 */

class Calculator {
  /**
   * 2つの数値を加算する
   * @param {number} a - 最初の数値
   * @param {number} b - 2番目の数値
   * @returns {number} 加算結果
   */
  add(a, b) {
    return a + b;
  }

  /**
   * 2つの数値を減算する
   * @param {number} a - 最初の数値
   * @param {number} b - 2番目の数値
   * @returns {number} 減算結果
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * 2つの数値を乗算する
   * @param {number} a - 最初の数値
   * @param {number} b - 2番目の数値
   * @returns {number} 乗算結果
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * 2つの数値を除算する
   * @param {number} a - 被除数
   * @param {number} b - 除数
   * @returns {number} 除算結果
   * @throws {Error} ゼロ除算エラー
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('ゼロ除算はできません');
    }
    return a / b;
  }

  /**
   * 累乗を計算する
   * @param {number} base - 底
   * @param {number} exponent - 指数
   * @returns {number} 累乗結果
   */
  power(base, exponent) {
    return Math.pow(base, exponent);
  }
}

module.exports = Calculator;

