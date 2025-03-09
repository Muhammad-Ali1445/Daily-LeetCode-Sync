/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (s,t) {

     t=t.split(" ")
    if (s.length !== t.length) {
        return false;
    }



    let map_s_to_t = {};
    let map_t_to_s = {};

    for (let i = 0; i < s.length; i++) {
        let s_char = s[i];
        let t_char = t[i];

        if (map_s_to_t.hasOwnProperty(s_char)) {
            if (map_s_to_t[s_char] !== t_char) {
                return false;
            }
        } else {
            map_s_to_t[s_char] = t_char;
        }

        if (map_t_to_s.hasOwnProperty(t_char)) {
            if (map_t_to_s[t_char] !== s_char) {
                return false;
            }
        } else {
            map_t_to_s[t_char] = s_char;
        }
    }
    return true;
};