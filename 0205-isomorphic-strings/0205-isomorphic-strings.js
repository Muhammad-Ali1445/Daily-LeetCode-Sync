/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const map_s_to_t = {};
    const map_t_to_s = {};

    for (let i = 0; i < s.length; i++) {
        const s_char = s[i];
        const t_char = t[i];

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