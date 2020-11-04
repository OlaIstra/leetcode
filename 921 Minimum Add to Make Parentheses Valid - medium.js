/**
 * @param {string} S
 * @return {number}
 */
const minAddToMakeValid = function(S) {
    let countClose = 0
    let countOpen = 0
    
    for(let s of S) {
        if(s === '(') {
            countOpen++
        } else {
            countOpen === 0 ? countClose++ : countOpen--
        }    
    }
    return countOpen + countClose
};
