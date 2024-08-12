/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(arr, target) {
    function getPivot(arr) {
      let s = 0;
      let e = arr.length - 1;
      let mid;
      let firstIndex = arr[0];
      while (s < e) {
        mid = Math.floor((s + e) / 2);
        if (arr[mid] >= firstIndex) {
          s = mid + 1;
        } else {
          e = mid;
        }
      }
      return s;
    }

    function binarySearch(arr, start, end, target) {
      let s = start;
      let e = end;
      let mid;
      while (s <= e) {
        mid = Math.floor((s + e) / 2);
        if (arr[mid] === target) {
          return mid;
        } else if (target > arr[mid]) {
          s = mid + 1;
        } else {
          e = mid - 1;
        }
      }
      return -1;
    }

    let pivot = getPivot(arr);
    if (target >= arr[pivot] && target <= arr[arr.length - 1]) {
      return binarySearch(arr, pivot, arr.length - 1, target);
    } else {
      return binarySearch(arr, 0, pivot - 1, target);
    }
  }