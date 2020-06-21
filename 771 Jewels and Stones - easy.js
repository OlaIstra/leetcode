var numJewelsInStones = function(J, S) {
    return S.split('').filter( s => J.includes(s) ).length    
};
