function fibonacci(num) {
  if (n <= 1) {
    return n;
  }
  
  let fibPrev = 0;
  let fibCurrent = 1;
  
  for (let i = 2; i <= n; i++) {
    let fibNext = fibPrev + fibCurrent;
    fibPrev = fibCurrent;
    fibCurrent = fibNext;
  }
  
  return fibCurrent;
}

module.exports = fibonacci;
