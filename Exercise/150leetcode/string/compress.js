function compress(char) {
  let count = 1;
  let index = 0;

  for (let i = 0; i < char.length; i++) {
    if (i === char.length - 1 || char[i + 1] != char[i]) {
      char[index] = char[i];
      index += 1;

      if (count > 1) {
        //if we get count 12 then the output should be [ "b" ,"1", "2"]
        const countStr = count.toString();
        console.log(countStr,'countsstr');
        
        const countLength = countStr.length;
        for (let j = 0; j < countLength; j++) {
          char[index] = countStr[j];
          index += 1;
        }
      }
      count = 1;
    } else {
      count++;
    }
  }
  console.log(char);

  return index;
}

let char = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
console.log(compress(char));
