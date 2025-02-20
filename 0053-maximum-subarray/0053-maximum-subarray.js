/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (arr) {
    let maxSum = -Infinity;
    // let newArr = [];
    let currSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];
        if (currSum > maxSum) {
            // newArr.push(arr[i]);
            maxSum = currSum;
        }

        if (currSum < 0) {
            currSum = 0;
        }
    }
    //   return {newArr,maxSum};
    return maxSum;
};