/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(arr) {
     let evenIndex = 0;
  let oddIndex = 1;

  while (evenIndex < arr.length && oddIndex < arr.length) {
    while (evenIndex < arr.length && arr[evenIndex] % 2 === 0) {
      evenIndex += 2;
    }

    while (oddIndex < arr.length && arr[oddIndex] % 2 !== 0) {
      oddIndex += 2;
    }

    if (evenIndex < arr.length && oddIndex < arr.length) {
      let temp = arr[evenIndex];
      arr[evenIndex] = arr[oddIndex];
      arr[oddIndex] = temp;
    }
  }

  return arr;
};