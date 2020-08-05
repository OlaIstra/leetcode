
/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
   
    let current = "1";
    
    for (let i = 1; i < n; ++i) {
        let temp = "";
        
        let pointer = 0;
        let lastChar = current[0];
        let count = 0;
        
        while (pointer < current.length) {
            if (lastChar !== current[pointer]) {
                temp += count + lastChar;
                lastChar = current[pointer];
                count = 0;
            }
            pointer++;
            count++;
        }
        
        temp += count + lastChar;
        current = temp;
    }
    
    return current;
    
};
