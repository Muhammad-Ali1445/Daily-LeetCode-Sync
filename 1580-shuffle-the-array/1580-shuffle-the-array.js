/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let result = []
    let half = nums.length / 2
    for (let i = 0; i < half; i++) {
        fPair = nums[i]
        lPair = nums[half + i]
        result.push(fPair, lPair)
    }
    return result;
};