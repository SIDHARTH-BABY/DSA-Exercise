function factorial(val) {
  if (val === 1) {
    return 1;
  }

  return val * factorial(val - 1) 
}

let val = 5;
console.log(factorial(val));

// 1 , 2 , 3, 4 , 5 = 120