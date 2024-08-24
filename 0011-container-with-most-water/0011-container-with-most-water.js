/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  let width;
  let currArea;
  while (left < right) {
    width = right - left;
    currArea = Math.min(height[left], height[right]) * width;
    maxArea = Math.max(maxArea, currArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};