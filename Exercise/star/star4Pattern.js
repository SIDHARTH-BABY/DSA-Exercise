function starPattern(n) {
  let track = 0;
  for (let i = 0; i < n; i++) {
    let star = "";

    for (let j = 0; j <= i; j++) {
      if (track % 2 === 0) {
        star = star + "1";
      } else {
        star = star + "0";
      }
      track += 1;
    }
    console.log(star);
  }
}

let n = 5;
console.log(starPattern(n));

// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1
