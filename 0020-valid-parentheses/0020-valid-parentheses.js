/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
      let stack = [];
  for (let char of str) {
    if (char == "(") {
      stack.push(")");
    } else if (char == "[") {
      stack.push("]");
    } else if (char =="{") {
      stack.push("}");
    } else {
      if (stack.length === 0 || char != stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
};