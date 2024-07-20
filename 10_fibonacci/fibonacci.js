const fibonacci = function (num) {
  if (isNaN(num)) return;
  else num = parseInt(num);
  if (num < 0) return "OOPS";
  if (num == 0) return 0;

  // const fib = [1, 1];

  // for (let i = 2; i < num; i++) {
  //   fib.push(fib[i - 2] + fib[i - 1]);
  // }

  // return fib.at(-1);

  let firstPrev = 0;
  let secondPrev = 1;

  for (let i = 2; i <= num; i++) {
    let current = firstPrev + secondPrev;
    firstPrev = secondPrev;
    secondPrev = current;
  }
  
  return secondPrev;
};

// Do not edit below this line
module.exports = fibonacci;
