/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = function(A) {

    A.forEach(item => {
        item.reverse()
        item.forEach((element, idx) => {
            item[idx] = (element === 0) ? 1 : 0
        })
    })

    return A
};
