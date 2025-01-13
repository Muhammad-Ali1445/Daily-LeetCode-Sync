/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const resultArr = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const lastInterval = resultArr[resultArr.length - 1];
        if (intervals[i][0] <= lastInterval[1]) {
            lastInterval[1] = Math.max(lastInterval[1], intervals[i][1]);
        } else {
            resultArr.push(intervals[i]);
        }
    }

    return resultArr;
};