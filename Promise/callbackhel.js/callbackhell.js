const cart = ["shoes", "footwear"];
function createOrder(cart, callBack) {
  let orderid = 100;
  callBack(orderid);
}

function proceedtopayment(id, callBack) {
  let val = 2000;
  console.log("payment page is here " + id);
  callBack(val);
}
function showOrderSummary(val, callBack) {
  console.log("summar showing " + val);
  callBack("success page");
}

function successPage(msg) {
  console.log(msg);
}

//callback hell is here
createOrder(cart, (orderid) => {
  proceedtopayment(orderid, (val) => {
    showOrderSummary(val, (msg) => {
      successPage(msg);
    });
  });
});

