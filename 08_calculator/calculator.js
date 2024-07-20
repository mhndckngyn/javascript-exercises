const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, current) => total += current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total *= current, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	let result = 1;
  for (let i = num; i >= 2; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
