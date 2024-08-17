/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arr) {
    let maxDistance = 0;

    let globalMin = arr[0][0];
    let globalMax = arr[0][arr[0].length - 1];

    for (let i = 1; i < arr.length; i++) {
        const currentMin = arr[i][0];
        const currentMax = arr[i][arr[i].length - 1];


maxDistance = Math.max(maxDistance, Math.abs(currentMax - globalMin), Math.abs(globalMax - currentMin));

        globalMin = Math.min(globalMin, currentMin);
        globalMax = Math.max(globalMax, currentMax);

    }
    return maxDistance;
};