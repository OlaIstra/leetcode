/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
    const result = []
    const max = Math.max(...candies)

    candies.forEach(item => {
        (item + extraCandies) >= max
            ? result.push(true)
            : result.push(false)
    })

    return result
};
