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

// Second Method 

//   let left = 0;
//   let right = arr.length - 1;
//   let resultArr = Array(arr.length);
//   let index = arr.length - 1;

//   while (left <= right) {
//     let leftSqr = arr[left] * arr[left];
//     let rightSqr = arr[right] * arr[right];
//     if (leftSqr > rightSqr) {
//       resultArr[index] = leftSqr;
//       left++;
//     } else {
//       resultArr[index] = rightSqr;
//       right--;
//     }
//     index--;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = resultArr[i];
//   }
//   return arr;