/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[left], nums[i]] = [nums[i], nums[left]]
            left++;
        }
    }
    return nums
};
// second method

//  let nonZeroIndex = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[nonZeroIndex] = nums[i];
//       nonZeroIndex++;
//     }
//   }
//   for (let i = nonZeroIndex; i < nums.length; i++) {
//     nums[i] = 0;
//   }
//   return nums;