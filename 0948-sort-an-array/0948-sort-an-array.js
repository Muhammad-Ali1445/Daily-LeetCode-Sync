/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
     function mergeSort(arr) {
    // Base case: if the array has one or zero elements, it's already sorted
    if (arr.length <= 1) {
      return arr;
    }

    // Step 1: Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    // Step 2: Recursively sort both halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Step 3: Merge the sorted halves
    return merge(sortedLeft, sortedRight);
  }

  // Merge function to combine two sorted arrays into one sorted array
  function merge(left, right) {
    let sortedArray = [];
    let i = 0;
    let j = 0;

    // Compare elements from both halves and merge them in sorted order
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        sortedArray.push(left[i]);
        i++;
      } else {
        sortedArray.push(right[j]);
        j++;
      }
    }

    // If there are any remaining elements in the left half, add them
    while (i < left.length) {
      sortedArray.push(left[i]);
      i++;
    }

    // If there are any remaining elements in the right half, add them
    while (j < right.length) {
      sortedArray.push(right[j]);
      j++;
    }

    return sortedArray;
  }

  // Start the merge sort process on the input array
  return mergeSort(nums);
};