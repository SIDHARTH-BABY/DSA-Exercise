// https://www.youtube.com/watch?v=_tNErId8xlc&t=1455s&ab_channel=ChiragGoel
// check above youtuve for clarity
// 1 st qst

const obj = {
  helloWorld: function () {
    return `hello ${this.name}`;
  },
  name: "sid",
};
const obj2 = {
  helloWorld: obj.helloWorld,
  name: "ish",
};

console.log(obj2.helloWorld());




// 2nd qst
// here it will point to sid , because here we are passing obj while calling
const obj4 = {
  helloWorld: function () {
    return `hello ${this.name}`;
  },
  name: "sid",
};
const obj3 = {
  helloWorld: obj.helloWorld,
  name: "ish",
};

console.log(obj2.helloWorld.call(obj));