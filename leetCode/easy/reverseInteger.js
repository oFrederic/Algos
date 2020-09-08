/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const overflow = Math.pow(2, 31) - 1;
  const underflow = -Math.abs(overflow);
  const arr = x.toString().split("");
  let isPositif = true;

  if (arr[0] === "-") {
    isPositif = false;
    arr.shift();
  }

  arr.reverse();
  if (!isPositif) arr.unshift("-");

  result = arr.join("");

  if (result < underflow || result > overflow) {
    return 0;
  } else {
    return result;
  }
};