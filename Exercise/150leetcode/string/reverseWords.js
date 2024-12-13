function reverseWords(words) {
  let val = words.split(" ");
  console.log(val), "val";
  let result = "";

  for (let i = val.length - 1; i >= 0; i--) {
    if (val[i] === "") continue;
    
    if (result.length > 0) result += " ";
    result += val[i];
    console.log(result,'-val');
    
  }
  return result;
}

let words = "the   sky is blue";

console.log(reverseWords(words));
