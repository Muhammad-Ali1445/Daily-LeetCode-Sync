/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(str1, str2) {
    let result = "";
    let i = 0, j = 0;
  
    while (i < str1.length || j < str2.length) {
      if (i < str1.length) {
        result += str1[i];
        i++;
      }
      if (j < str2.length) {
        result += str2[j];
        j++;
      }
    }
  
    return result;
};