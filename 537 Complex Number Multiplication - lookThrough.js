/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const complexNumberMultiply = function(a, b) {
    const aArray = a.split('+')
    const bArray = b.split('+')
    const imagNumA = aArray[1].substring(0, aArray[1].length-1)
    const imagNumB = bArray[1].substring(0, bArray[1].length-1)
    const realPart = (Number(aArray[0])*Number(bArray[0])) - (Number(imagNumA)*Number(imagNumB))
    const imagPart = (Number(imagNumA)*Number(bArray[0]) + Number(aArray[0])*Number(imagNumB))
    
    return `${String(realPart)}+${String(imagPart)}i`
};
