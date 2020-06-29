/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function(x, y) {
    let count = 0;
    while (x || y) {
        x = x / 2;
        y = y / 2;
        (x % 1 - y % 1 !== 0) && count ++;
        x = Math.floor(x);
        y = Math.floor(y);
    };
    return count;
};
