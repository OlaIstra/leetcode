/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
const busyStudent = function(startTime, endTime, queryTime) {
    let count = 0
    
    const finished = []
    endTime.forEach((time, idx) => {
        if (time >= queryTime) {
            finished.push(idx)
        }
    })

    finished.forEach(idx => {
        if (startTime[idx] <= queryTime) {
            count++
        }
    })
    
    return count
};
