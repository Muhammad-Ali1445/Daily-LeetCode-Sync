/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = prices[0];
    let maxProfit = 0;
    let profit;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
        }
        profit = prices[i] - buy;

        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
    return maxProfit;
}