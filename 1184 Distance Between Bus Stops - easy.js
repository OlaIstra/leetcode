/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
const distanceBetweenBusStops = function(distance, start, destination) {
    if (start > destination) [start, destination] = [destination, start]
    return Math.min(sum(distance.splice(start, destination - start)), sum(distance));
};

const sum = (num) => {
    return num.reduce((a, b) => a + b, 0);
}
