/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function(graph) {
    const length = graph.length
    const result = []
    
    const getPath = (node, array) => {
        if (node === length - 1) {
            result.push([...array, node])
            return;
        }
        
        for(let next of graph[node]) {
            getPath(next, [...array, node]);
        }
    }
    
    getPath(0, []);
    return result;
};
