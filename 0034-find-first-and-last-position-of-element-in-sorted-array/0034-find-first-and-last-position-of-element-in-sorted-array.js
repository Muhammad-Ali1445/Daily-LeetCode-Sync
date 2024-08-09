/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    let first = -1;
    let last = -1;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] == target) {
            first = mid;
            end = mid - 1;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    start = 0;
    end = arr.length - 1;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] == target) {
            last = mid;
            start = mid + 1;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return [first, last];
};