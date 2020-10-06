/**
 * @param {string} s
 * @return {number}
 */
const maxScore = function(s) {    
    if (!s || s.length < 2) return 0;
    
    const last = s.length - 1;
    
    let max = s.length; // assume we have the best score out of a string
    if (s[0] === "1") max--;
    if (s[last] === "0") max--;
    
    let ones = 0, zeros = 0;    
    
	// travel from left to right
    for(let i = 1; i < last; i++) { 
        if (s[i] === "1") {
            ones++;  // count the number of "1"          
        } else {
            zeros++; // count the number of "0"
            max--; // We know every "0" on the right will reduce possible max by 1                    
            if (zeros > ones) { // if we have more zeros than ones on the right, correct max
                max = max + zeros - ones;  // correct it !
				
				// reset counters since we have the new max
                zeros = 0;
                ones = 0;
            }
        }        
    }
    
    return max;
}
