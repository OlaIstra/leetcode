// LOOK THROUGH - second solution based on bit operation

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const hash = {}
    
    arr.sort((a, b) => a > b ? 1 : -1)
    
    arr.forEach(el => {
        const rest = el.toString(2).split('').filter(elem => elem === '1').length
        hash[rest] 
            ? hash[rest].push(el)
            : hash[rest] = [el]
    })
    
    const hashArr = Object.entries(hash)
    
    hashArr.sort((a, b) => Number(a[0]) > Number(b[0]) ? 1 : -1)
    
    let result = []
    
    hashArr.forEach(elem => {
        result = result.concat(elem[1])
    })
    
    return result
};

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const bitCount = (n) => {
        let c = 0
        while (n > 0) {
          if (n % 2) c++
          n >>>= 1
        }
        return c
      }
      return arr
        .map((v) => ({ v: v, b: bitCount(v) }))
        .sort((a, b) => a.b - b.b || a.v - b.v)
        .map((v) => v.v)
};
