function countCollisions(str) {
  let coll = 0;
  let stayCount = 0;
  let currColl = false;
  let rCount = 0;
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);

    if (str[i] === "S") continue;

    if (str[i] === "R") {
      if (str[i + 1] === "S") {
        currColl = true;
        if (rCount) {
          coll += rCount;
        }
        coll++;
      } else if (str[i + 1] === "L") {
        if (rCount) {
          coll += rCount;
        }
        currColl = true;
        coll++;
      } else if (str[i - 1] === "R") {
        rCount++;
      }
    }
    if (i > 0) {
      if (str[i] === "L") {
        if (str[i - 1] === "S") {
          currColl = true;
          coll++;
        } else if (str[i - 1] === "R") {
          currColl = true;
          coll++;
        } else if (str[i - 1] === "L") {
          if (currColl) {
            coll++;
          }
        }
      }
    }

    console.log(coll);
  }
  return coll;
}

let directions = "SSRSSRLLRSLLRSRSSRLRRRRLLRRLSSRR";
console.log(countCollisions(directions));
