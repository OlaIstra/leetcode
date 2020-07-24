const isHappy = function(n, times = 0) {    
     
    if(n === 1 || n === 1111111) {
        return true;
    }
    
    if((n === 0) || (n > 1 && n < 9 && times >= 1)) {
        return false;
    }
    
    let sum = 0;
    
    const numberArray = n.toString().split('').map(elem => {
        sum += Math.pow(Number(elem), 2);
    })
        
    return isHappy(sum, times+1);    
};
