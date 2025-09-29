function apiCall() {
  return new Promise(async (res, rej) => {
    const apiRes = { name: "sid", designation: "software eng" };
    const statusCode = 200;
    if (statusCode === 200) {
      res(apiRes);
    } else {
      rej("something went wrong");
    }
  });
}

function retryMechanism(callback, retries, delays) {
  return new Promise((resolve, reject) => {
    callback()
      .then((res) => {
        console.log("now here it is");
        resolve(res);
      })
      .catch((err) => {
        retries--;
        if (retries >= 0) {
          console.log("retries count", retries);
          setTimeout(
            () =>
              callback()
                .then((res) => resolve(res))
                .catch((err) => {
                  console.log("coming here");
                  reject(err);
                }),
            delays
          );
        }
      });
  });
}

const retries = 3;
const delays = 2000;
retryMechanism(apiCall, retries, delays)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
