// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value ?

 function sleep(millis) {
  let val = new Promise((res, rej) =>
    setTimeout(() => {
      res(millis);
    }, millis)
  );
  return val
  
}

sleep(3000).then((val)=>console.log(val))

