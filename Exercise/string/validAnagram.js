function isAnagram(s, t) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i])) {
      map.set(t[i], map.get(t[i]) - 1);
      if (map.get(t[i]) === 0) {
        map.delete(t[i]);
      }
    } else {
      return false
    }
  }
  if (map.size === 0) {
    return true;
  } else {
    return false;
  }
}

let s = "a";
let t = "abb";
console.log(isAnagram(s, t));
