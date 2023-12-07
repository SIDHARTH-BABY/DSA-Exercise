function fib(num) {
let arr =[0,1]
  for (let i = 2; i <= num; i++) {
    arr.push(arr[i-1] + arr[i-2])
  }
  return arr[num];
}

console.log(fib(3));


//fibonacci series means , [0,1,1,2,3,5,8,13....], the last two number sum will be the next number, 
//above question is , if we input a index , it should return the val in the fibonacci series .