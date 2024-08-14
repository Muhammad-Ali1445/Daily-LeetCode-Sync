/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */

function isPossibleSol(bloomDays, bouqets, flowers, mid) {
    let bouqetCount = 0;
    let counter = 0;
    for (let i = 0; i < bloomDays.length; i++) {

        if (bloomDays[i] <= mid) {
            counter++;
        }

        else {
            bouqetCount += Math.floor(counter / flowers);
            counter = 0;
        }
    }

    bouqetCount += Math.floor(counter / flowers); // Check the last segment
    return bouqetCount >= bouqets;
}
var minDays = function (bloomDays, bouqets, flowers) {
    if (flowers * bouqets > bloomDays.length) {
        return -1; // Impossible to make the bouquets
    }

    let s = Math.min(...bloomDays);
    let e = Math.max(...bloomDays);
    let mid;
    let ans = -1;

    while (s <= e) {
        mid = Math.floor((s + e) / 2);
        if (isPossibleSol(bloomDays, bouqets, flowers, mid)) {
            ans = mid;
            e = mid - 1;
        } else {
            s = mid + 1;
        }
    }
    return ans;
};