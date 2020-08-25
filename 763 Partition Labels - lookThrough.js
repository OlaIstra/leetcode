/**
 * @param {string} S
 * @return {number[]}
 */
const partitionLabels = function(S) {
    let i = 0;
    const result = [];
    while (i < S.length){
        let start = i;
        let j = i;
        while (j <= i){
            i = Math.max(i, S.lastIndexOf(S[j]));
            j++;
        }
        result.push(j-start);
        i++;
    }
    return result;
};
