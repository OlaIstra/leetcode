/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = function(path) {
    const points = ['00']
    let coor = [ 0, 0]
    
    for (let idx in path) {
        if (path[idx] === 'N') coor[1]++
        if (path[idx] === 'E') coor[0]++
        if (path[idx] === 'S') coor[1]--
        if (path[idx] === 'W') coor[0]--
        
        if (points.includes(coor.join(''))) {
            return true
        }
        
        points.push(coor.join(''))
    }
    
    return false
    
};
