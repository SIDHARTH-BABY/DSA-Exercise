// debounce function is technique used in search inputs , these are used in flipkart and amzon

//if user enters "I" --> it will make an api call gets data , "IP" then it will those datas, but if the user is speed enough , then we can skip the previous letters api calls

function debounce(printn, delay) {
  let setTimoutId;
  return function (...args) {
    clearTimeout(setTimoutId);
    setTimoutId = setTimeout(() => {
      printn(...args);
    }, delay);
  };
}

function print(data) {
  console.log(data);
}

let printOptimised = debounce(print, 1000);

printOptimised("s");
printOptimised("si");
printOptimised("sid");
printOptimised("sidh");
