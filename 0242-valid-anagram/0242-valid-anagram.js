/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (str1, str2) {
    if (str1.length !== str2.length) return false;
    let count = {};
    for (let i = 0; i < str1.length; i++) {
        count[str1[i]] = (count[str1[i]] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        if (!count[str2[i]]) {
            return false;
        }
        count[str2[i]]--;
    }
    return true;
};