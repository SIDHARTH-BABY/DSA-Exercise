function mutiply(x, y) {
  return x * y;
}

const mutiplyByTwo = mutiply.bind(this, 2);

console.log(mutiplyByTwo(3));


//this is also an example of currying 
