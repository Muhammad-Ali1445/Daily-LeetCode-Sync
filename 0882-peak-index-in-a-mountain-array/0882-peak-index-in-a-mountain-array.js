/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (nums) {
    let start = 1;
    let end = nums.length - 2;
    let mid;
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {
            return mid;
        }

        if (nums[mid] > nums[mid - 1]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return start;
};