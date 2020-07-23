/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    
    if (prices.length < 2) return 0
    
    let maxProfit = -Infinity
    let maxStock = -Infinity

    for (let j = prices.length - 1; j >= 0; j--) {
        maxStock = Math.max(maxStock, prices[j])
        maxProfit = Math.max(maxProfit, maxStock - prices[j])
    }
       
    return maxProfit
};
