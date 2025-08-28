/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.myArray = nums
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    let sum = 0
    for (let i = left; i <= right; i++) {
        sum += this.myArray[i]
    }
    return sum
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

 // second Method -- Optimized ----

//  var NumArray = function(nums) {
//     // prefixSum[i] = sum of nums[0...i-1]
//     this.prefixSum = new Array(nums.length + 1).fill(0);
    
//     for (let i = 0; i < nums.length; i++) {
//         this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
//     }
// };

// NumArray.prototype.sumRange = function(left, right) {
//     // sum = prefix[right+1] - prefix[left]
//     return this.prefixSum[right + 1] - this.prefixSum[left];
// };
 