/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
const distributeCandies = function(candies, num_people) {
    const array = Array(num_people).fill(0)
    let i = 0
    let amountCandies = 1
    let restOfCandies = candies
    
    while (restOfCandies > 0) {
        restOfCandies > amountCandies 
            ? array[i] += amountCandies
            : array[i] += restOfCandies
        
        restOfCandies -=  amountCandies
        amountCandies++
        i++
        if (i >= num_people) {
            i = 0
        }
    }
    
    return array
};
