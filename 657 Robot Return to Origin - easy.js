/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = function(moves) {
    let horizontal = 0
    let vertical = 0
    const movesArr = moves.split('')

    while(movesArr.length > 0) {
        const move = movesArr.pop()
        switch (move) {
             case 'R':
                 horizontal++
                break
            case 'L':
                 horizontal--
                break
            case 'U':
                 vertical++
                break
            case 'D':
                 vertical--
                break
        }
           
    }
        
    return (horizontal === 0 && vertical === 0)    
};
