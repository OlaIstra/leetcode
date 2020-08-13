/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = function(logs) {
    const digits = []
    const letter = []
    
    for(let i = 0; i < logs.length; i++){
         isDigit(getString(logs[i])) ? digits.push(logs[i]) : letter.push(logs[i]);
    }
    
    return [...letter.sort(sortFunc),...digits];
};


const getString = (string) => {
    return string.slice(string.indexOf(' ') + 1);
}

const isDigit = (string) => {
    return string[0]>= '0' && string[0] <= 9
}

const sortFunc = (a, b) => {
    const res = getString(a).localeCompare(getString(b));
    if (res !== 0) return res;
    return a.localeCompare(b);
}
