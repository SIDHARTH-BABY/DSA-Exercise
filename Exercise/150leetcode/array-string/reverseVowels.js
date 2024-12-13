function reverseVowels(vals) {

  let val = vals.split("");  //to make the array to string

  let start = 0;
  let end = vals.length - 1;

  //   let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

  let vowels = {};  //hashtable ,just for making the vowes as true

  for (v of "aeiouAEIOU") {
    vowels[v] = true;
  }

  //instead of hashtable we can also use includes() , just store the vowels in an array, and use includes in the condition/
  console.log(vowels);

  while (start < end) {
    while (start < end && !vowels[val[start]]) {
      start++;
    }
    while (start < end && !vowels[val[end]]) {
      end--;
    }

    swap(val, start, end);
    start++;
    end--;
  }
  function swap(val, start, end) {
    let temp = val[start];
    val[start] = val[end];
    val[end] = temp;
  }
  return val.join("");
}

let words = "IceCreAm";
console.log(reverseVowels(words));
