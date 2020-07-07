/**
 * @param {number[]} A
 * @return {number}
 */
const peakIndexInMountainArray = function(A) {
    let max = 0
    let idx = 0
    
    A.forEach((elem, index) => {
        if (elem > max) {
            max = elem
            idx = index
        }
    })
    
    return idx
};
