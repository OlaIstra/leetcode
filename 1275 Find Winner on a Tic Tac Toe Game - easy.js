/**
 * @param {number[][]} moves
 * @return {string}
 */
const valid = [
    	['00', '10', '20'],
    	['01', '11', '21'],
    	['02', '12', '22'],
    	['00', '01', '02'],
    	['10', '11', '12'],
    	['20', '21', '22'],
    	['00', '11', '22'],
    	['02', '11', '20']
    ]

const findPart = (bigArr, smArr) => {
    for (let i = 0; i < bigArr.length; i++) {
        if (smArr.includes(bigArr[i][0]) && smArr.includes(bigArr[i][1]) && smArr.includes(bigArr[i][2])) {
            return true
        }
    }
    return false
}

const tictactoe = function(moves) {
    if (moves.length < 5) return "Pending"
    
    const hash = { A: [], B: []}
    
    moves.forEach((arr, idx) => {
        idx % 2 !== 1 ? hash['A'].push(arr.join('')) : hash['B'].push(arr.join(''))
    })
    
    if ( findPart(valid, hash['A']) ) return 'A'
    if ( findPart(valid, hash['B']) ) return 'B'

    return moves.length === 9 ? 'Draw' : 'Pending'
};

