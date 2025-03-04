function decodeString(s) {
  let stack = [];
  let currentString = "";
  let currentNum = 0;

  for (let char of s) {
    if (!isNaN(char)) {
      // If the character is a number, update the currentNum
      console.log(char, "=char");

      currentNum = currentNum * 10 + parseInt(char);
      console.log(currentNum,'current num');
    } else if (char === "[") {
      console.log(currentString,'in [ case');
      
      // Push the current string and number onto the stack
      stack.push(currentString);
      stack.push(currentNum);
      // Reset current string and number
      currentString = "";
      currentNum = 0;
    } else if (char === "]") {
      // Pop the number and previous string from the stack
      let num = stack.pop();
      let prevString = stack.pop();
      console.log(num, "= are we getting the popnnum =", prevString);

      // Repeat the current string num times and append to the previous string
      currentString = prevString + currentString.repeat(num);
      console.log(currentString, "= cuurent string",prevString);
    } else {
      // Append the character to the current string
      currentString += char;
    }
  }

  return currentString;
}

// Example usage
console.log(decodeString("3[a]2[bc]")); // Output: "aaabcbc"
console.log(decodeString("2[abc]3[cd]ef")); // Output: "abcabccdcdcdef"
