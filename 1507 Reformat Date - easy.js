/**
 * @param {string} date
 * @return {string}
 */

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

var reformatDate = function(date) {
    const array = date.split(' ')
    
    const year = array[2]
    const idx = months.indexOf(array[1]) + 1
    const month = idx < 10 ? `0${idx}` : idx
    
    const number = [array[0][0]]
    
    if (Number(array[0][1]) >= 0) {
        number.push(array[0][1])
    }
    
    const dateToDisplay = number.join('')
    
    const resDate = dateToDisplay.length < 2 ? `0${dateToDisplay}` : dateToDisplay
    
    return `${year}-${month}-${resDate}`
    
};
