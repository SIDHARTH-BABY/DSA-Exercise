function computeAmount() {
  let totalAmt = 0
  this.lacs = (amount) => {
    totalAmt += amount * 100000;
    return this
  };
  this.crores = (amount) => {
    totalAmt += amount * 1000000;
    return this
  };
  this.val = () => {
    return totalAmt;
  };
}

console.log(new computeAmount().lacs(15).crores(5).val());





// The this keyword refers to the object that is currently being constructed or used. In your code:

// this.lacs, this.crores, and this.val define methods on the object being constructed.
// Inside the methods, this allows access to other methods or properties of the same object.
// Using this enables method chaining: each method modifies the same object and returns it.

// IMP
// {return this} is essential for method chaining, allowing multiple method calls on the same object in a single statement.  
// Without {return this}, the intermediate calls wouldn't work because they wouldn't return the object needed for chaining.





// console.log(init)
// let val = init
// console.log(val)

// const increment = () => {
//     return ++val
// }
// const decrement = () => {
//     return --val
// }
// const reset = () => {
//     val = init
//     return init
// }
//     return {
//         increment,
//         decrement,
//         reset
//     }