/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(nums) {
    let left = 0;
  let right = nums.length - 1;
  let maxArea = 0;
  let width;
  let currArea;
  while (left < right) {
    width = right - left;
    currArea = Math.min(nums[left], nums[right]) * width;
    maxArea = Math.max(maxArea,currArea);
    if (nums[left] < nums[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};