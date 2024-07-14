/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (arr) {
    let left = 0;
    let mid = 0;
    let right = arr.length - 1;

    while (mid <= right) {
        if (arr[mid] == 0) {
            [arr[left], arr[mid]] = [arr[mid], arr[left]];
            left++;
            mid++;
        } else if (arr[mid] == 1) {
            mid++;
        } else {
            [arr[mid], arr[right]] = [arr[right], arr[mid]];
            right--;
        }
    }
    return arr;
};