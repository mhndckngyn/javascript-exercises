const standardize = function (str) {
  const NON_ALPHANUMERIC = /[^a-zA-Z0-9]/g;
  return str.replaceAll(NON_ALPHANUMERIC, "").toLowerCase();
};

const palindromes = function (str) {
  str = standardize(str);

  let i = 0,
    j = -1;
  while (i <= Math.floor(str.length / 2)) {
    if (str.at(i) !== str.at(j)) return false;
    i++;
    j--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
