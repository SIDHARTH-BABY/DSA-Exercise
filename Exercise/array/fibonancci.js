var fib = function (n) {

    let sum = 0

    for(let i=0;i<n.length;i++){
    sum = i+1 + i+2
    if(sum === n){
        console.log();
        
    }
    }
};

let n = 2;
console.log(fib(n));
