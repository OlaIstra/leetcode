/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function(n) {
    if(guess(n) === 0) return n
    
    let left = 1
    let right = n 
    
    while (left <= right) {
        const possible = Math.floor((left+right)/2)
        
        if (guess(possible) === 0) return possible
        
        if (guess(possible) === -1) {
            right = possible
        }
        
        if (guess(possible) === 1) {
            left = possible
        }
    }
};
