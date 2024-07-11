const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  if (a < 0 || b < 0) return "ERROR";

  let startNumber = Math.min(a, b);
  let endNumber = Math.max(a, b);
  let sum = 0;
  for (startNumber; startNumber <= endNumber; startNumber++) sum += startNumber;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
