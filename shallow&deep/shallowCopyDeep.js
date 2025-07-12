// A shallow copy means that only the first level of the object or array is copied.
//  If the array contains nested objects, the references to those objects are copied instead of creating new ones.

// shallow copy array

const val = [1, 2, 3, 4,[7]];

let val2 = [...val];
val2[4][0] = 99;
console.log(val,'and ',val2); 
// here i edited val2 but the changes reflected to both val2 and val 

// shallow copy object
const obj1 = {
  name: "Alice",
  details: { age: 25, city: "New York" },
};

const obj2 = { ...obj1 }; // Shallow copy
obj2.details.age = 30;

console.log(obj1.details.age); // 30 (original object is affected 😱)
console.log(obj2.details.age); // 30

// deep copy
// A deep copy creates a completely independent copy, including all nested objects or arrays. Changes in the copied structure do not affect the original.
const valDeepg = [1, [2, 3], 4];

let valDeep2 = JSON.parse(JSON.stringify(valDeepg)); // Deep copy
valDeep2[1][0] = 99;

console.log(valDeepg); // [1, [2, 3], 4] (original remains unchanged)
console.log(valDeep2); // [1, [99, 3], 4] (copied version is modified)

// deep copy object
const obj1Deep = {
  name: "Alice",
  details: { age: 25, city: "New York" },
};

const obj2Deep = JSON.parse(JSON.stringify(obj1Deep)); // Deep copy
obj2Deep.details.city = "Los Angeles";

console.log(obj1Deep.details.city); // "New York" (original remains unchanged ✅)
console.log(obj2Deep.details.city); // "Los Angeles"




