

//this is the best method 
function romanToInt2(romanNum) {
  let ans = 0;
let obj = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

  for (let i = 0; i < romanNum.length; i++) {
    let currentVal = obj[romanNum[i]]; // Get the integer value from the obj for the current character

    // Check if there's a subtraction rule (e.g., IV, IX, XL, XC, etc.)
    if (i + 1 < romanNum.length) {
      let nextVal = obj[romanNum[i + 1]];
      if (currentVal < nextVal) {
        ans += (nextVal - currentVal); // Subtract the current value if it's a prefix
        i++; // Move to the next character
        continue; // Skip to the next iteration of the loop
      }
    }

    // No subtraction needed, add the current value to the result
    ans += currentVal;
  }

  return ans;
}


let num2 = "IV";
console.log(romanToInt2(num2));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//alternate solution ---beats 70 % best soln

var romanToIntTwo = function (s) {
  const romanValues = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
    ["IV", 4],
    ["IX", 9],
    ["XL", 40],
    ["XC", 90],
    ["CD", 400],
    ["CM", 900],
  ]);

  let ans = 0;
  let i = 0;

  while (i < s.length) {
    if (i + 1 < s.length && romanValues.has(s.substring(i, i + 2))) {
      ans += romanValues.get(s.substring(i, i + 2));
      i += 2;
    } else {
      ans += romanValues.get(s.charAt(i));
      i++;
    }
  }

  return ans;
};

// let num = "MDCCCLXXXIV";
// console.log(romanToIntTwo(num));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//worst method below

var romanToInt = function (s) {
  let newNum = s.split("");
  let ans = 0;
  for (i = 0; i < newNum.length; i++) {
    if (newNum[i] === "I") {
      if (newNum[i] === "I" && newNum[i + 1] === "V") {
        ans += 4;
        i++;
      } else if (newNum[i] === "I" && newNum[i + 1] === "X") {
        ans += 9;
        i++;
      } else {
        ans++;
      }
    } else if (newNum[i] === "V") {
      ans += 5;
    } else if (newNum[i] === "X") {
      if (newNum[i] === "X" && newNum[i + 1] === "L") {
        ans += 40;
        i++;
      } else if (newNum[i] === "X" && newNum[i + 1] === "C") {
        ans += 90;
        i++;
      } else {
        ans += 10;
      }
    } else if (newNum[i] === "L") {
      ans += 50;
    } else if (newNum[i] === "C") {
      if (newNum[i] === "C" && newNum[i + 1] === "D") {
        ans += 400;
        i++;
      } else if (newNum[i] === "C" && newNum[i + 1] === "M") {
        ans += 900;
        i++;
      } else {
        ans += 100;
      }
    } else if (newNum[i] === "D") {
      ans += 500;
    } else if (newNum[i] === "M") {
      ans += 1000;
    }
  }
  return ans;
};

let num = "MDCCCLXXXIV";
console.log(romanToInt(num));
