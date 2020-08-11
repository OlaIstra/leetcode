/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = function(costs) {
    costs.sort((a , b) => (a[0] -a[1]) - (b[0] - b[1]));
    
    let result = 0
    const N = costs.length /2;
    
    for(let i = 0 ; i < N ; i++){
        result += (costs[i][0] + costs[i + N][1]);
    }
    return result;
};
