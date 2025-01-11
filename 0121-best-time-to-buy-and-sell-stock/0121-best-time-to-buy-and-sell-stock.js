/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
        } else if (prices[i] - buy > maxProfit) {
            maxProfit = prices[i] - buy;
        }
    }
    return maxProfit;
}