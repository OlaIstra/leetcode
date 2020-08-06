/**
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = function(area) {
    let W = Math.floor(Math.sqrt(area));
    
    while (W > 0) {
        const L = area / W
        if (Number.isInteger(L)) {
            return [L, W]
        }
        W--
    }
};
