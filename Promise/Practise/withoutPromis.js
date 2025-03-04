const cart = ["shoes", "footwear"];

// createOrder(cart, (orderid) => {
//   proceedtopayment(orderid);
// });

// function proceedtopayment(id) {
//   // making the payment and completing the order
// }
// function createOrder(cart, callBack) {
//   // saving the cart item and returing the id

//   callBack(orderid);
// }

// above case we are using the callbacks to make the payment - over they we might face the inversion of control issue
//to solve that issue we can use Promise

function createOrderPromise(cart) {
  return new Promise((resolve, reject) => {
    let cardId = 20;
    resolve(cardId);
  });
}
function proceedtoPayementPromise(cardId) {
  console.log(cardId, "inside teh payment func");
}
const promise = createOrderPromise(cart);

promise.then((cardId) => {
  console.log(cardId);
  proceedtoPayementPromise(cardId);
});



//////////////////////////////
const promise = new Promise((res, rej) => {
  document.getElementById("btn1").addEventListener("click", () => {
    res("btn clicked");
  });
});
// promise.then((res) => console.log(res).catch((val) => console.log(val)));

async function myFunction() {
    await promise
}


