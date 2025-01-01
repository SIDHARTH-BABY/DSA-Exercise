function isSubsequence(num1, num2) {
  let first = 0;
  let sec = 0;
  let numF = num1.split("");
  let numS = num2.split("");
  let count = 0;
  if(numF.length <=0){
    return true
  }
  while (sec <= numS.length-1) {
    console.log(numF[first] , numS[sec]);
    
    if (numF[first] === numS[sec]) {
      count++;
      first++;
      sec++;
    } else {
      sec++;
    }
    if (count === numF.length ) {
      return true;
    }
    
  }
  return false;
}

let num1 = "b";
let num2 = "c";
console.log(isSubsequence(num1, num2));
