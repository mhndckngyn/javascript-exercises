const standardize = function (str) {
  // const NON_ALPHANUMERIC = /[^a-zA-Z0-9]/g;
  // return str.replaceAll(NON_ALPHANUMERIC, "").toLowerCase();
  const ALPHANUMERIC = "0123456789abcdefghikjlmnopqrstuvwxyz";
  return str
    .toLowerCase()
    .split("")
    .filter((char) => ALPHANUMERIC.includes(char))
    .join("");
};

const palindromes = function (str) {
  str = standardize(str);

  const reversed = str.split("").reverse().join("");
  return reversed === str;
  

  // let i = 0,
  //   j = -1;
  // while (i <= Math.floor(str.length / 2)) {
  //   if (str.at(i) !== str.at(j)) return false;
  //   i++;
  //   j--;
  // }

  // return true;
};

// Do not edit below this line
module.exports = palindromes;
