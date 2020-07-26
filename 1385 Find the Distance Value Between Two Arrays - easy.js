/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
const findTheDistanceValue = function(arr1, arr2, d) {
    return arr1.reduce((acc, a1) => {
        for (a2 of arr2) {
            if (Math.abs(a1 - a2) <= d) {
                return acc;
            } 
        }
        return acc + 1;
    },0);
};
