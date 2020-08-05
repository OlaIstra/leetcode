/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = function(text) {
    const hash = {}
    
    for (let key in text) {
        hash[text[key]] ? hash[text[key]]++ : hash[text[key]] = 1
    }

    const array = Object.entries(hash).filter(elem => elem[0] === 'b' || elem[0] === 'a' || elem[0] === 'l' || elem[0] === 'o' || elem[0] === 'n' )
    
    if (array.length < 5) return 0
    
    array.sort((a, b) => a[1] > b[1] ? 1 : -1)
    let counter = array[0][1]
    
    const elO = array.filter(elem => elem[0] === 'o')
    const elL = array.filter(elem => elem[0] === 'l')
    
    const min = Math.floor(Math.min(elO[0][1], elL[0][1]) / 2)
    
    return counter <= min ? counter : min
};
