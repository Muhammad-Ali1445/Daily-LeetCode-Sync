/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    const stack = [];

    for (let char of s) {
        if (mapping[char]) {
            const topElement = stack.length ? stack.pop() : '#';
            if (topElement !== mapping[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};