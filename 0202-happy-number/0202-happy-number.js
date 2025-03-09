/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {

    let seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = SquaresOfNums(n);
    }
    return n === 1;

    // helper function

    function SquaresOfNums(num) {
        return num
            .toString()
            .split("")
            .map((digit) => Number(digit) ** 2)
            .reduce((sum, squares) => sum + squares, 0);
    }

};