/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
function isPossibleSol(positions, givenBalls, mid) {
  let ballCount = 1;
  let lastPos = positions[0];

  for (let i = 1; i < positions.length; i++) {
    if (positions[i] - lastPos >= mid) {
      ballCount++;
      if (ballCount === givenBalls) {
        return true;
      }
      lastPos = positions[i];
    }
  }

  return false;
}

var maxDistance = function(positions, givenBalls) {
     positions.sort((a, b) => a - b);
  let s = 1;
  let e = positions[positions.length - 1] - positions[0];
  let ans = 0;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    if (isPossibleSol(positions, givenBalls, mid)) {
      ans = mid;
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }

  return ans;
};