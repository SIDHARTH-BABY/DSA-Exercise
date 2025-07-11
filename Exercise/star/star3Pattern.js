function starPattern(n) {
  for (let i = 0; i < n; i++) {
    let star = "";
    for (j = 0; j <= i; j++) {
      if (j % 2 === 0) {
        star = star + "1";
      } else {
        star = star + "0";
      }
    }
    console.log(star);
  }
}

let n = 8;
console.log(starPattern(n));

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
// 1 0 1 0 1 0
