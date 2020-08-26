/**
 * @param {number} num
 * @return {string}
 */
const toHex = function(num) {
    if(num === 0) return '0';
   
   const hexMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
   let hex = '';
    
   if (num > 0 ) {
   	while(num !== 0) {
    	hex = hexMap[num % 16] + hex;
        num = parseInt(num/16);
    }
   } else {
       hex = toHex(0xffffffff - Math.abs(num) + 1);
   }
   return hex;
};
