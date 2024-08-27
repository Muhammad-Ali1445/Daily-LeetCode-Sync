/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(num) {
    let newArr = [];
  for (let i = 0; i < num.length ; i++) {
    let count = 0;
    for (let j = 0; j < num.length; j++) {
      if (num[i] > num[j]) {
        count++;
      }
    }
    newArr.push(count);
  }
  return newArr;
};