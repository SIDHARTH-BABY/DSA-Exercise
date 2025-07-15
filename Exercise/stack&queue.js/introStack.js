// LIFO
let stack = [];

stack.push(1); // push elements to the stack
stack.push(2);
stack.push(3);
stack.pop(); //remove the last value from stack
let top = stack[stack.length - 1]; //to see the top value of stack
console.log(stack);
console.log(top);

// FIFO
let queue = [];

queue.push(1);
queue.push(2); //add elements to the queue
queue.shift(); //remove the first element

let front  = queue[0]
console.log(front);

console.log(queue);
