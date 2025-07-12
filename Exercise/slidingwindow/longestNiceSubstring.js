function longestNiceSubstring(s) {
  console.log(s);

  if (s.length < 2) return "";

  let set = new Set(s);

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (set.has(char.toLowerCase()) && set.has(char.toUpperCase())) {
      continue;
    }

    // Split and conquer
    console.log("left");
    const left = longestNiceSubstring(s.substring(0, i));
    console.log(left,'left');
    
    console.log("right");

    const right = longestNiceSubstring(s.substring(i + 1));
    console.log(right,'right');

    return left.length >= right.length ? left : right;
  }

  // If the entire string is nice
  return s;
}

let s = "YazaAay";
console.log(longestNiceSubstring(s));
