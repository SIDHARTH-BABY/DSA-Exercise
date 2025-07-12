let cartItems = ["phone", "book"];
createOrder(cartItems)
  .then((result) => {
    console.log(result);
    return result;
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((res) => console.log(res, "res is here"));

function proceedToPayment(orderId) {
  return new Promise((res, rej) => {
    console.log(`${orderId}- orderId is in proceedtopayemnet funciton `);

    let paymentId = "789";
    res(paymentId);
  });
}

function createOrder(cartItems) {
  return new Promise((res, rej) => {
    let orderId = "123";
    setTimeout(() => {
      res(`Order Created Successfully - ${orderId}`);
    }, 1000);
  });
}

//result ->

// Order Created Successfully - ${orderId}

// Order Created Successfully - ${orderId} - orderId is in proceedtopayemnet funciton

//789
