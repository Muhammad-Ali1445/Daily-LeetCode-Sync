/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let resultArr = [];
    let sqrNum
    for (let i = 0; i < nums.length; i++) {
        sqrNum = nums[i] * nums[i]
        resultArr.push(sqrNum)
    }
    return resultArr.sort((a, b) => a - b)
};