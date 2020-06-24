/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function(n) {
    const array = n.toString().split('').map(elem => Number(elem))

    return array.reduce((total, amount) => total * amount) - array.reduce((total, amount) => total + amount)
};
