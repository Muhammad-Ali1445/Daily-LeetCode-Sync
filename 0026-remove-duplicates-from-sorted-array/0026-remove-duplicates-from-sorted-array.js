/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(arr) {
    let j = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[j++] = arr[i];
    }
  }
  arr[j++] = arr[arr.length - 1];
  return j;
};