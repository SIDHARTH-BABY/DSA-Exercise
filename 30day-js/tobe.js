var expect = function (val) {
  return {
    toBe: (num) => {
      if (num === val) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (num) => {
      if (num !== val) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

console.log(expect(3).toBe(3));
