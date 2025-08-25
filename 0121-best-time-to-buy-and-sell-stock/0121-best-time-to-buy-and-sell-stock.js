/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = prices[0];
    let maxProfit = 0;
    let sell;
    for (let i = 1; i < prices.length; i++) {
        sell = prices[i];
        if (sell < buy) {
            buy = sell;
        }

        let profit = sell - buy;

        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
    return maxProfit;
};