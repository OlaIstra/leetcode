/**
 * @param {number[]} candies
 * @return {number}
 */
const distributeCandies = function(candies) {
    const amount = candies.length
    
    const forEach = amount / 2
    
    const unique = new Set(candies)
    
    return (forEach >= unique.size) ? unique.size : forEach
};
