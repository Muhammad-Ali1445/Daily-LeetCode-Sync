/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gainArr) {
    let sum = 0;
    let max = 0;
    for (let i = 0; i < gainArr.length; i++) {
        sum += gainArr[i];
        if (sum > max) {
            max = sum;
        }
    }
    return max;
};