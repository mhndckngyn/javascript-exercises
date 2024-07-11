const convertToCelsius = function(fahrenheit) {
  return Math.round((fahrenheit - 32) / 1.8 * 10) / 10 // * 10 / 10 is for rounding
};

const convertToFahrenheit = function(celcius) {
  return Math.round((celcius * 1.8) * 10) / 10 + 32
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
