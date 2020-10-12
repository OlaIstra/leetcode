/**
 * @param {number} n
 * @return {number}
 */
const numPrimeArrangements = function(n) {
    let primes = 0 
    let all = new Array(n).fill(2) 
    
    for (let i = 2; i <= n; i++) {
        if (all[i - 1] === 2) {
            primes += 1
        }
        
        for (let k = 2 k < n k++) {
            if (!all[i * k - 1]) {
                break
            }
            all[i * k - 1] = 1
        }
    }
    
    all = all.length - primes
    let result = 1
    let modulo = 10 ** 9 + 7
    
    for (let i = 1; i <= primes; i++) {
        result = (result * i) % modulo
    }
    
    for (let i = 1; i <= all; i++) {
        result = (result * i) % modulo
    }
    
    return result
}
