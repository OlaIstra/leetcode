/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = function(numBottles, numExchange) {
    let result = numBottles
    while (numBottles >= numExchange){
        let exchange = Math.floor(numBottles/numExchange)
        result += exchange
        let leftover = numBottles%numExchange
        numBottles = leftover+exchange
    }
    return result  
};
