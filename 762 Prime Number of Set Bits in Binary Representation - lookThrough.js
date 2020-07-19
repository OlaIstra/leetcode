/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const countPrimeSetBits = function(L, R) {
    let counter = 0;
    
    for (let i = L; i <= R; i++) {
        let bits = i.toString(2).split('').filter(x => x !== '0');
        if (isPrime(bits.length)) counter++;
    }
    
    return counter;
};

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
