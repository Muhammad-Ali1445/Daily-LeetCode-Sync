/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    // Map of Roman numerals to their values
    const romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;
    for (let i = 0; i < s.length; i++) {
        const currentValue = romanToIntMap[s[i]];

        if (currentValue > prevValue) {
            total += currentValue - 2 * prevValue;
        } else {
            total += currentValue;
        }

        prevValue = currentValue;
    }

    return total;
};