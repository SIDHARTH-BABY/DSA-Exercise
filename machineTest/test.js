function reverse(halVal) {
    let val = halVal.split("");
    let result = [];
    result.push(val.join(""));
    for (let i = 0; i <= result.length; i++) {
      console.log(result[i]);
      if (i % 2 !== 0) {
        let temp = val[i];
        val[i] = val[i + 1];
        val[i + 1] = temp;
        result.push(val.join(""));
        break;
      }
    }
    return result;
  }
  
  const val = "abc";
  console.log(reverse(val));
  