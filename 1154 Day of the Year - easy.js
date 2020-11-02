/**
 * @param {string} date
 * @return {number}
 */
const months = [31,28,31,30,31,30,31,31,30,31,30,31]

const dayOfYear = function(date) {
    const arr = date.split('-')
    let day = Number(arr[2])
    for (let i = 0; i < arr[1] - 1; i++) {
        day += months[i]
    }
    
    if (arr[1] > 2) {
        if (arr[0] % 400 === 0) {
            return day + 1
        }

        if (arr[0] % 100 === 0) {
            return day
        }

        if (arr[0] % 4===0) {
            return day + 1
        }   
    }
    return day
};
