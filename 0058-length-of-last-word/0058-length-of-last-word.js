/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let tokens=s.trim(" ").split(" ")
    return tokens[tokens.length-1].length
};