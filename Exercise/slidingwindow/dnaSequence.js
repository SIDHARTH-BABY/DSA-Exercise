function dnaSequence(val) {
  let obj = {};

  let res = [];

  let i = 0;
  while (i + 10 <= val.length) {
    let seq = val.slice(i, i + 10);
    obj[seq] = obj[seq] + 1 || 1;

    if (obj[seq] === 2) {
      res.push(seq);
    }
    i++;
  }
  return res;
}

let val = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
console.log(dnaSequence(val));
