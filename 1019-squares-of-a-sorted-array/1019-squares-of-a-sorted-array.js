/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(arr) {
    let newArr = [];
  arr = arr.sort((a, b) => a + b);
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * arr[i]);
  }
  return newArr;
};