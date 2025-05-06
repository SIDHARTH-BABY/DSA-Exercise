// function createOrder(items, callback) {
//   let orderId = 1;
//   console.log('creating order');

//   callback(orderId);
// }
// function proceedToPayment(callback) {
//   console.log("payment processing");
//   let paymentId = 123;
//   callback(paymentId);
// }

let carts = ["cloth", "bag"];

//   createOrder(carts, (id) => {
//     if (id) {
//       proceedToPayment((id) => {
//         console.log("payment scusses page ", id);
//       });
//     }
//   })





// promise solving the callback hell
function createOrder(items) {
  return new Promise((res, rej) => {
    let orderId = 123;
    console.log("creating order");
    res(orderId);
  });
}
function proceedToPayment() {
  return new Promise((res, rej) => {
    res("payment processing");
  });
}

const promise = createOrder(carts);

promise.then((res) => {
  console.log(res);
  proceedToPayment().then((val) => console.log(val,));
});
