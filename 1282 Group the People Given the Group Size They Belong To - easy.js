/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = function(groupSizes) {
    const hash = {};
    const result = [];
    
    for (let i = 0; i < groupSizes.length; i++) {
        const size = groupSizes[i];
        if (!hash[size]) hash[size] = [];
        hash[size].push(i);
        if (hash[size].length === size) {
            result.push(hash[size]);
            hash[size] = [];
        }
    }
        
    return result;
};
