/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
     let binary = num.toString(2);
  let complement = "";
  for (let i = 0; i < binary.length; i++) {
    complement += binary[i] === "1" ? "0" : "1";
  }
  return parseInt(complement, 2);
};