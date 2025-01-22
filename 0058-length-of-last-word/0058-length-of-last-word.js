/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(str) {
   let tokens = str.trim(" ").split(" ");
  for (let i = 0; i < tokens.length; i++) {
  return tokens[tokens.length - 1].length;
  }
};