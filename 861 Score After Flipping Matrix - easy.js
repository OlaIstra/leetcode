/**
 * @param {number[][]} A
 * @return {number}
 */
const matrixScore = function(A) {

  for (let i = 0; i < A.length; i++) {
    if (A[i][0] === 0) {
        for (let j = 0; j < A[i].length; j++) {
            A[i][j] = A[i][j] === 0 ? 1 : 0
        }
    }
  }
  
  for (let i = 1; i < A[0].length; i++) {
  	let count = 0
    for (let j = 0; j < A.length; j++) {
        count += A[j][i]
    }
      
  	if (A.length - count > count) {
    	for (let j = 0; j < A.length; j++) {
      	    A[j][i] = A[j][i] === 0 ? 1 : 0
        }    
    }
  }
  
  return A.reduce((acc, curr) => {
    let count = 0
    curr.forEach((v, i) => {
        count += (v * Math.pow(2, curr.length - i - 1))
    })
    return acc + count
  }, 0);
};
