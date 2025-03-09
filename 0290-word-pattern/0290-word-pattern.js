/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    
    s = s.split(" ");

    if (pattern.length !== s.length) {
        return false;
    }

    let map_patt_to_s = {};
    let map_s_to_patt = {};

    for (let i = 0; i < pattern.length; i++) {
        let patt_char = pattern[i];
        let s_char = s[i];

        if (map_patt_to_s.hasOwnProperty(patt_char)) {
            if (map_patt_to_s[patt_char] !== s_char) {
                return false;
            }
        } else {
            map_patt_to_s[patt_char] = s_char;
        }

        if (map_s_to_patt.hasOwnProperty(s_char)) {
            if (map_s_to_patt[s_char] !== patt_char) {
                return false;
            }
        } else {
            map_s_to_patt[s_char] = patt_char;
        }
    }
    return true;
};