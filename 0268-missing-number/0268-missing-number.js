/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let map = {}
    for (let num of nums) {
        map[num] = true
    }

    for (let i = 0; i <= nums.length; i++) {
        if (!map.hasOwnProperty(i)) {
            return i
        }
    }
};


// Second Method 

// let range = nums.length;
// let expectedSum = 0;
// let actualSum = 0;
// for (let i = 0; i <= range; i++) {
//     expectedSum += i;
// }
// for (let i = 0; i < nums.length; i++) {
//     actualSum += arr[i];
// }
// let missingNum = expectedSum - actualSum;
// return missingNum;