/**
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPrices = function(prices) {
    const result = []
    
    for (let i = 0; i < prices.length; i++) {
        let j = 1
        let added = false
            while (j < prices.length) {
                if (i < j && prices[i] >= prices[j]) {                
                    result.push(prices[i] - prices[j])
                    added = true
                    break
                } 
                j++
            }
        if (!added) {
            result.push(prices[i])
        } 
    }
    return result
};
