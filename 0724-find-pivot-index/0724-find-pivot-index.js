/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(arr) {
    let totalSum = arr.reduce((acc, curr) => acc + curr, 0);
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (leftSum === totalSum - leftSum - arr[i]) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
};