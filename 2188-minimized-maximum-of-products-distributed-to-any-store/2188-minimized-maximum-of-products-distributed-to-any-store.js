/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(stores, quantities) {
    function isPossibleSol(quantities, mid, stores) {
    let storeCount = 0;
    for (let i = 0; i < quantities.length; i++) {
      storeCount += Math.ceil(quantities[i] / mid);
      if (storeCount > stores) {
        return false;
      }
    }
    return true;
  }
  let s = 1;
  let mid;
  let ans;
  let totalSum = quantities.reduce((acc, curr) => acc + curr, 0);
  let e = totalSum;
  while (s <= e) {
    mid = Math.floor((s + e) / 2);
    if (isPossibleSol(quantities, mid, stores)) {
      ans = mid;
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return ans;
};