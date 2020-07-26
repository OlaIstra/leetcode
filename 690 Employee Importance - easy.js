/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
const GetImportance = function(employees, id) {
    
    let queue = [id]
    
    let total = 0
    
    const getEmployee= (idx) => employees.filter(el => el.id === idx)
    
    while (queue.length > 0) {
        const current = getEmployee(queue.shift())
        total += current[0].importance
        if (current[0].subordinates.length > 0) {
            queue = [...queue, ...current[0].subordinates]
        }
    }
    
    return total
};
