/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[][]}
 */
var findDifference = function(arr1, arr2) {
 let set1 = new Set(arr1);
 let set2 = new Set(arr2);

 arr1 = [...new Set(arr1.filter((item) => !set2.has(item)))];
 arr2 = [...new Set(arr2.filter((item) => !set1.has(item)))];

 return [arr1, arr2];
};