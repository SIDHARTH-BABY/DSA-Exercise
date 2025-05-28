function createOrder(carts, cb) {
  console.log(carts, "inside create order");
  let orderId = "124";
  cb(orderId);
}

function proceedToPayment(orderId, cb) {
  cb("payment success");
}
function orderStatus(cb) {
  cb("order confirmed");
}

let carts = ["book", "pencil"];
createOrder(carts, (id) => {
  console.log(id);
  proceedToPayment(id, (status) => {
    console.log(status);
    orderStatus((order) => {
      console.log(order);
    });
  });
});
