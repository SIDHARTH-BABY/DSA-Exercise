const cart = ["shoes", "footwear"];

function createOrderPromise(cart) {
  return new Promise((resolve, reject) => {
    let cardId;
    resolve(cardId);
  });
}

function proceedtoPayementPromise(cardId) {
  let amount = 1000;
  return new Promise((res, rej) => {
    if (!amount) {
      rej("payment declined");
    } else {
      res(amount);
    }
  });
}

function showOrderSummary(amount) {
  return new Promise((res, rej) => res(amount + " Order summary"));
}
function successPage(amount) {
  console.log("successfully completed your payment", amount);
}
function failPage(msg) {
  console.log(msg);
}
const promise = createOrderPromise(cart);

promise.then((cardId) => {
  proceedtoPayementPromise(cardId)
    .then((amount) => showOrderSummary(amount).then((msg) => console.log(msg)))
    .catch((msg) => failPage(msg));
});

//
