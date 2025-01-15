/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, target) {
    let sum = 0;
    let count = 0;
    let map = { 0: 1 };

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (map[sum - target]) {
            count += map[sum - target];
        }

        map[sum] = (map[sum] || 0) + 1;
    }

    return count;
};