// array - to store multiple data with different data types

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array);

// slice

let slice = array.slice(2, 8);

console.log(slice);

// pop method

array.pop();

console.log(array);

// push method

array.push(9);

console.log(array);

// shift

array.shift();

console.log(array);

// unshift
array.unshift(1);

console.log(array);

// splice

array.splice(3, 0, 444, 555, 666);

console.log(array);

//

let arrObj = [
  { name: "Raj", age: 20 },
  { name: "Pushpraj", age: 30 },
  {
    name: "Vihaan",
    age: 50,
  },
];

console.log(arrObj);

arrObj.pop();

console.log(arrObj);

arrObj.push({ name: "Bhumi", age: 21 });

console.log(arrObj);
