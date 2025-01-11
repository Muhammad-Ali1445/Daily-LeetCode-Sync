/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
     const n = nums.length;
  let resultArr = Array(n).fill(1);
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    resultArr[i] = prefix;
    prefix *= nums[i];
  }
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    resultArr[i] *= suffix;
    suffix *= nums[i];
  }
  return resultArr;
};