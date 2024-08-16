/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(arr) {
    let fiveCount = 0;
  let tenCount = 0;
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === 5) {
      fiveCount += 1;
    } 
    
    else if (arr[i] === 10) {
      if (fiveCount > 0) {
        fiveCount -= 1;
        tenCount += 1;
      } else {
        return false;
      }
    } 
    
    else if (arr[i] === 20) {
      if (fiveCount > 0 && tenCount > 0) {
        fiveCount -= 1;
        tenCount -= 1;
      } else if (fiveCount >= 3) {
        fiveCount -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};