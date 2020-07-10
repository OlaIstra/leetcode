/**
 * @param {string} s
 * @return {string}
 */
const sortString = function(s) {
    let stringSorted = s.split('').sort().join('');
    let length = stringSorted.length;
    let result = '';
    let turn = 0;
    while (length) {
        let  stringFiltered= '';
        let previous;
        if (turn) {
            previous = stringSorted[length - 1];
            result += previous;
            for (let i = length - 2; i >= 0; i--) {
                let current = stringSorted[i];
                if (current < previous) {
                    result += current;
                    previous = current;
                } else {
                    stringFiltered = current + stringFiltered;
                };
            };
            turn = 0;
        } else {
            previous = stringSorted[0];
            result += previous;
            for (let i = 1; i < length; i++) {
                let current = stringSorted[i];
                if (current > previous) {
                    result += current;
                    previous = current;
                } else {
                    stringFiltered += current;
                };
            };
            turn = 1;
        };
        stringSorted = stringFiltered;
        length = stringSorted.length
    };
    return result;
};
