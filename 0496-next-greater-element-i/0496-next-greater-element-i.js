/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(arr1, arr2) {
      let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    let found = -1;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        found = arr2.slice(j + 1).find((element) => element > arr2[j]);
        newArr.push(found !== undefined ? found : -1);
        break;
      }
    }
  }

  return newArr;
};