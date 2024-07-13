/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(arr) {
     let resArr = [];
  let uniqueSet = new Set();
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum == 0) {
        let triplet = [arr[i], arr[left], arr[right]];
        let tripletStr = JSON.stringify(triplet);
        if (!uniqueSet.has(tripletStr)) {
          uniqueSet.add(tripletStr);
          resArr.push(triplet);
          // console.log(resArr);
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return resArr;
};