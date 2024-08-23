/**
 * @param {string} expression
 * @return {string}
 */

 function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}
var fractionAddition = function(expression) {
    let fractions = expression.match(/[+-]?\d+\/\d+/g);
  let numeratorSum = 0;
  let denominator = 1;

  // Calculate common denominator
  for (let frac of fractions) {
    let [num, den] = frac.split("/").map(Number);
    denominator *= den / gcd(denominator, den);
  }

  // Adjust numerators and sum
  for (let frac of fractions) {
    let [num, den] = frac.split("/").map(Number);
    numeratorSum += num * (denominator / den);
  }

  // Simplify the fraction
  let commonDivisor = gcd(Math.abs(numeratorSum), denominator);
  numeratorSum /= commonDivisor;
  denominator /= commonDivisor;

  return `${numeratorSum}/${denominator}`;
};