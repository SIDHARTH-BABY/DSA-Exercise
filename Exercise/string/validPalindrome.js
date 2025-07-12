function isPalindrome(str) {
  let arr = str.split("");
  console.log(arr);

  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left].match(/[a-z0-9]/i)) {
     if (str[right].match(/[a-z0-9]/i)) {
      if (str[left].toLowerCase() === str[right].toLowerCase()) {
        left++;
        right--;
      } else {
        return false;
      }
    } else {
      right--;
    }
    } else {
      left++;
    }
   
  }
  return true;
}

let str = "A :man, a plan, a canal: Panama";
console.log(isPalindrome(str));


// facing regex an isssue then use s[left].charCodeAt() >= "a".charCodeAt() && s[left].charCodeAt() >= "z".charCodeAt()