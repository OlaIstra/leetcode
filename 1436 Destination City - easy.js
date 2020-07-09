/**
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = function(paths) {
    const array = []
    let destination = null
    
    for (path of paths) {
        array.push(path[0])
    }

    for (path of paths) {
        if (!array.includes(path[1])) {
            destination = path[1]
        }
    }
    
    return destination
};
