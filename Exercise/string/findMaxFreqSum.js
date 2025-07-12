function maxFreqSum(str) {
  let mapVow = new Map();
  let maxCountVow = 0;
  let maxCountCon = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      if (mapVow.has(str[i])) {
        mapVow.set(str[i], mapVow.get(str[i]) + 1);
      } else {
        mapVow.set(str[i], 1);
      }
      maxCountVow = Math.max(mapVow.get(str[i]), maxCountVow);
    } else {
      console.log(str[i], "as");

      if (mapVow.has(str[i])) {
        mapVow.set(str[i], mapVow.get(str[i]) + 1);
      } else {
        mapVow.set(str[i], 1);
      }
      maxCountCon = Math.max(mapVow.get(str[i]), maxCountCon);
    }
  }

  return maxCountVow + maxCountCon;
}

const str = "aeiaeia";

console.log(maxFreqSum(str));
