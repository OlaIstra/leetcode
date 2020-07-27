/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        const a = stones.pop(), b = stones.pop();
        if(b !== a) {
            stones.push(a - b);
        }        
    }
    return stones.length === 0 ? 0 : stones;
    
};
