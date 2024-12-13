var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] != 9) {
      digits[i] += 1;
      return digits;
    } else if (digits[i] === 9) {
        if(i === 0){
            
            digits[i] = 1
            digits.push(0)
            return digits
        }else{
            digits[i]=0
        }
    } else {
      digits[i] = 0;
    }
  }
};

const digits = [9, 9,9];

console.log(plusOne(digits));
