/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function(N, trust) {
    if (trust.length === 0 && N === 1) return 1
    if (trust.length === 0 && N !== 1) return -1

    const hash = {}
    const people = []
    
    trust.forEach(el => {
        people.push(el[0])
        hash[el[1]] ? hash[el[1]]++ : hash[el[1]] = 1
    })

    const arr = Object.entries(hash).sort((a, b) => b[1] - a[1])
    
    return arr[0][1] === N-1 && !people.includes(Number(arr[0][0])) 
                ? Number(arr[0][0])
                : -1
};
