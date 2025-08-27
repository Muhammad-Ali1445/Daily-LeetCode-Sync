/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = nums[0]
    let currSum=0
    for (let val of nums) {
        currSum += val
        if (currSum > maxSum) {
            maxSum = currSum
        }

        if (currSum < 0) {
            currSum = 0
        }
    }
    return maxSum
};