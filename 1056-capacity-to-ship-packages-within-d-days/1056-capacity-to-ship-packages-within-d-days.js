/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
function shipWithinDays(arr, givenDays) { 

  function isPossibleSol(arr, givenDays, mid) {
    let daysCount = 1;
    let weightSum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (weightSum + arr[i] <= mid) {
        weightSum += arr[i];
      } else {
        daysCount++;
        if (daysCount > givenDays || arr[i] > mid) {
          return false;
        }
        weightSum = arr[i];
      }
    }
    return true;
  }
  
  let s = 0;
  let sum = 0;
  let ans;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let e = sum;
  let mid;
  while (s <= e) {
    mid = Math.floor((s + e) / 2);
    if (isPossibleSol(arr, givenDays, mid)) {
      ans = mid;
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return ans;
}