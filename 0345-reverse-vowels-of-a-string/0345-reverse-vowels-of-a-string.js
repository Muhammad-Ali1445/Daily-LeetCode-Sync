/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (str) {
  let left = 0;
  let right = str.length - 1;
  const vowels = new Set("aeiouAEIOU");
  const arr = str.split("");

  while (left < right) {
    if (!vowels.has(arr[left])) {
      left++;
      continue;
    }
    if (!vowels.has(arr[right])) {
      right--;
      continue;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
};