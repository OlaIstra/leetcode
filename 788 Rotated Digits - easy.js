/**
 * @param {number} N
 * @return {number}
 */
const rotatedDigits = function(N) {
  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (isValid(i)) count++;
  }
  return count;
};

const isValid = n => {
  let valid = false;
  while (n) {
    const current = n % 10;
    if (current === 3 || current === 4 || current === 7) return false;
    if (current === 2 || current === 5 || current === 6 || current === 9) valid = true;
    n = Math.floor(n / 10);
  }
  return valid;
};
