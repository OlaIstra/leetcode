/**
 * @param {number[]} salary
 * @return {number}
 */
const average = function(salary) {
    salary.sort((a,b) => a < b ? 1 : -1)
    
    salary[0] = salary[salary.length - 1] = 0
    
    const average = salary.reduce((total, amount) => total + amount, 0)
    
    return average/(salary.length - 2)
};
