function isIsomorphic(s, t) {
  let map = new Map();
  let mapSec = new Map();

  if (s.length != t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) || mapSec.has(t[i])) {
      if (map.get(s[i]) != t[i] || mapSec.get(t[i]) != s[i]) {
        return false;
      }
    } else {
      map.set(s[i], t[i]);
      mapSec.set(t[i], s[i]);
    }
  }

  return true;
}

let s = "paper";
let t = "title";
console.log(isIsomorphic(s, t));

