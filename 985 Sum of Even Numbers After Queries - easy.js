/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumEvenAfterQueries = function(A, queries, ans = []) {
    for(let [a, i] of queries) {
        A[i] += a;
        ans.push(A.reduce((a, b) => (!(b & 1)) ? a += b : a, 0));
    }
    return ans;
};
