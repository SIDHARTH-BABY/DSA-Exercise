function isIsomorphic(s, t) {
  let map = new Map();
  let mapSec = new Map();

  if (s.length != t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    //   console.log(s[i], t[i]);
    if (map.has(s[i])) {
      console.log(map.get(s[i]), t[i], "s[i]");

      if (map.get(s[i]) === t[i]) {
        console.log(map.get(s[i]), t[i], "s[i]");
        continue;
      } else {
        return false;
      }
    } else {
      map.set(s[i], t[i]);
    }
  }
  for (let i = 0; i < t.length; i++) {
    //   console.log(s[i], t[i]);
    if (mapSec.has(t[i])) {
      if (mapSec.get(t[i]) === s[i]) {
        continue;
      } else {
          console.log(s[i], t[i],'here');
        return false;
      }
    } else {
      mapSec.set(t[i], s[i]);
    }
  }
  return true;
}

let s = "paper";
let t = "title";
console.log(isIsomorphic(s, t));
