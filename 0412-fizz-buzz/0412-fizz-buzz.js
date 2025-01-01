/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (num) {
    let resltArr = [];
    for (let i = 1; i <= num; i++) {
        let string = "";
        if (i % 3 === 0) string += "Fizz";
        if (i % 5 === 0) string += "Buzz";
        if (string === "") string += i;
        resltArr.push(string);
    }
    return resltArr;
};