/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (str) {
    let withoutAlphaNum = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
    let reversedStr = withoutAlphaNum.split("").reverse().join("");
    return withoutAlphaNum === reversedStr;
};