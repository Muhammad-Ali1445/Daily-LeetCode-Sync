/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (arr) {

 arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1] + arr[i + 2]) {
      return arr[i] + arr[i + 1] + arr[i + 2];
    }
  }

  return 0;

};