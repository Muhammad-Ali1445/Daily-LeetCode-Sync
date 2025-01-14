/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[][]}
 */
 var findDifference = function(num1, num2) {
 let set1 = new Set(num1);
 let set2 = new Set(num2);

 num1 = [...set1].filter((num) => !set2.has(num));
 num2 = [...set2].filter((num) => !set1.has(num));

 return [num1, num2];
};