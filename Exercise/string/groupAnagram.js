function groupAnagrams(str) {
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    let val = str[i].split("").sort().join("");  // O(m log m)
    console.log(val);
    if (map.has(val)) {
      map.get(val).push(str[i])
    } else {
      map.set(val, [str[i]]);
    }
  }
  return Array.from(map.values());
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));


// time complexity : O (n m log m)
// space complexity : O (n m)
// n = num of string
// m = max length of each string