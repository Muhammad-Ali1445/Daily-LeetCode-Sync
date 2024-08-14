/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
function isPossibleSol(quantities, mid, stores) {
    let storeCount = 0;
    for (let i = 0; i < quantities.length; i++) {
        storeCount += Math.ceil(quantities[i] / mid);
        if (storeCount > stores) {
            return false;
        }
    }
    return true;
}

var minimizedMaximum = function (stores, quantities) {
    let s = 1;
    let e = Math.max(...quantities);
    let ans = e;

    while (s <= e) {
        let mid = Math.floor((s + e) / 2);
        if (isPossibleSol(quantities, mid, stores)) {
            ans = mid;
            e = mid - 1;
        } else {
            s = mid + 1;
        }
    }
    return ans; 
};

