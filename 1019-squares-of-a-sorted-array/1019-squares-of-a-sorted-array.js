/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(arr) {
   arr = arr.sort((a, b) => a + b);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  return arr;
};