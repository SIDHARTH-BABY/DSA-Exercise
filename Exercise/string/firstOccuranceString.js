function firstOcc(first, sec) {
  let index = 0;
  let count = 0;
  for (i = 0; i < sec.length; i++) {
    console.log(sec[i]);
    for (j = 0; j < first.length; j++) {
      if (sec[i] === first[j]) {
        count++;
        if (count === sec.length - 1) {
          index = j - sec.length - 1;
          return index;
        }
        break;
      } else {
        count = 0;
      }
    }
  }
}

const haystack = "sadbutsad";
const needle = "sad";
console.log(firstOcc(haystack, needle));
