// Real-Life Example
// Imagine a user interface where:

// You show a "Loading..." indicator after a delay (e.g., 500ms).
// If the data arrives before the delay finishes, you cancel the "Loading..." display.

var cancellable = function (fn, args, t) {
  let timeoutId = setTimeout(() => {
    fn(...args);
  }, t);

  function cancelFn() {
    console.log("coming here");

    clearTimeout(timeoutId);
  }
  return cancelFn;
};

let random = (...args) => {
  console.log(args);
};

let cancel = cancellable(random, [1, 2], 1500);

setTimeout(() => {
  cancel(); // Cancels the timeout before 1000ms
}, 1000);

//so here if u r passing 1 ms to the cancellable function , then setTImout will call the function and conosle hte value becuase we put 500 in the second "setTimout cancel()"
//if hte cancel is called before the passed time then it will execute or we will clear the timeout

// how it works
// 1. call the cancellale fun then pass te random , arg , time
// 2. from the cancellable fun, we will start executing line by line, firs one is setTimeout - it will start initiating the time and once timer finished it will be put in the task queue
// 3. the we will return the cancelFn , in line no 26 we are making a setTimout and calling cancel() =  once the timeout finished this will be put inside the task queue
//4. so here which will first finish there timer and that fun will comes to the task queue first , from there event loop will put that in the call stack
//5. so if it is random function ,then it will execute first and console the values 
//6. but if the cancel() function finishes first then it will be put in the call stack - if that happens then clearTimeout(timeoutId) is called because of that the random funciton will be stopped 
