/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(arr) {
  let numbers = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (numbers.has(arr[i])) {
      return true;
    }
    numbers.add(arr[i]);
  }
  return false;
};