/**
 * @param {number[]} A
 * @return {number}
 */
const minCostToMoveChips = (A) => {
    const even = [...A].filter(x => x % 2 == 0);
    const odd  = [...A].filter(x => x % 2 == 1);
    return Math.min(even.length, odd.length);
};
