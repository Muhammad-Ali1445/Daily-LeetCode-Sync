/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(arr) {
     arr.sort((a, b) => a - b);
    let resArr = [];
    
    for (let i = 0; i < arr.length - 2; i++) {
      if (i > 0 && arr[i] === arr[i - 1]) continue;
  
      let left = i + 1;
      let right = arr.length - 1;
      
      while (left < right) {
        let sum = arr[i] + arr[left] + arr[right];
        
        if (sum === 0) {
          resArr.push([arr[i], arr[left], arr[right]]);
          
          while (left < right && arr[left] === arr[left + 1]) left++; 
          while (left < right && arr[right] === arr[right - 1]) right--; 
          
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  
    return resArr;
};