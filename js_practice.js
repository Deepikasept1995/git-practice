/*const orders = [
  { id: 1, user: "Aman", product: "Laptop", amount: 50000, status: "DELIVERED" },
  { id: 2, user: "Riya", product: "Phone", amount: 20000, status: "CANCELLED" },
  { id: 3, user: "Aman", product: "Mouse", amount: 2000, status: "DELIVERED" },
  { id: 4, user: "Rahul", product: "Laptop", amount: 55000, status: "DELIVERED" },
  { id: 5, user: "Riya", product: "Keyboard", amount: 3000, status: "DELIVERED" },
  { id: 6, user: "Aman", product: "Monitor", amount: 15000, status: "CANCELLED" }
];
const result = orders.reduce ((acc, order) => {
    acc.totalOrders += 1;
    acc.highestOrder = Math.max(acc.highestOrder, order.amount);
    if (!acc.users[order.user]) {
    acc.users[order.user] = { orders: 0, revenue: 0 };
  }

  acc.users[order.user].orders += 1;

  if (!acc.status[order.status]) {
    acc.status[order.status] = { count: 0, revenue: 0 };
  }

  acc.status[order.status].count += 1;

  if (order.status === "DELIVERED") {
    acc.totalRevenue += order.amount;
    acc.users[order.user].revenue += order.amount;
    acc.status[order.status].revenue += order.amount;
  }
    return acc;
},{totalOrders: 0, totalRevenue: 0, highestOrder: 0, users: {}, status: {}});

console.log(result);

{
  totalOrders: 6,
  totalRevenue: 110000,
  highestOrder: 55000,

  users: {
    Aman: { orders: 3, revenue: 52000 },
    Riya: { orders: 2, revenue: 3000 },
    Rahul: { orders: 1, revenue: 55000 }
  },

  status: {
    DELIVERED: { count: 4, revenue: 110000 },
    CANCELLED: { count: 2, revenue: 0 }
  }
}*/

/*const orders1 = [
  { id: 1, user: "Aman", product: "Laptop", category: "Electronics", amount: 50000, status: "DELIVERED" },
  { id: 2, user: "Riya", product: "Phone", category: "Electronics", amount: 20000, status: "CANCELLED" },
  { id: 3, user: "Aman", product: "Mouse", category: "Accessories", amount: 2000, status: "DELIVERED" },
  { id: 4, user: "Rahul", product: "Laptop", category: "Electronics", amount: 55000, status: "DELIVERED" },
  { id: 5, user: "Riya", product: "Keyboard", category: "Accessories", amount: 3000, status: "DELIVERED" },
  { id: 6, user: "Aman", product: "Monitor", category: "Electronics", amount: 15000, status: "CANCELLED" },
  { id: 7, user: "Rahul", product: "Mouse", category: "Accessories", amount: 2500, status: "DELIVERED" }
];

const result1 = orders1.reduce((acc, order) => {
    if (!acc.categoryStats[order.category]) {
        acc.categoryStats[order.category] = {orders: 0, deliveredRevenue: 0}
    }
    acc.categoryStats[order.category].orders += 1;

    if (!acc.productStats[order.product]) {
        acc.productStats[order.product] = {orders: 0, delivered: 0, cancelled: 0, revenue: 0}
    }
     acc.productStats[order.product].orders += 1;
    
    if (order.status === "DELIVERED") {
        acc.totalDeliveredRevenue += order.amount;
        acc.productStats[order.product].delivered += 1;
        acc.productStats[order.product].revenue += order.amount;
        acc.categoryStats[order.category].deliveredRevenue +=order.amount;
    } else {
        acc.productStats[order.product].cancelled += 1;
    }
  return acc;
}, {
  totalDeliveredRevenue: 0,
  categoryStats: {},
  productStats: {}
});

result1.topProduct = Object.keys(result1.productStats).reduce((top, product) => {
  return result1.productStats[top].revenue > result1.productStats[product].revenue ? top : product;
}, Object.keys(result1.productStats)[0]);


console.log(result1);

{
  totalDeliveredRevenue: 112500,

  categoryStats: {
    Electronics: { orders: 4, deliveredRevenue: 105000 },
    Accessories: { orders: 3, deliveredRevenue: 7500 }
  },

  productStats: {
    Laptop: { orders: 2, delivered: 2, cancelled: 0, revenue: 105000 },
    Phone: { orders: 1, delivered: 0, cancelled: 1, revenue: 0 },
    Mouse: { orders: 2, delivered: 2, cancelled: 0, revenue: 4500 },
    Keyboard: { orders: 1, delivered: 1, cancelled: 0, revenue: 3000 },
    Monitor: { orders: 1, delivered: 0, cancelled: 1, revenue: 0 }
  },

  topProduct: "Laptop"
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log("Hello " + this.name);
    console.log("My age is " + this.age);
  }
}  
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}
async function run () {
  const p1 = new Person("Sandeep", 28);
  const p2 = new Person("Neha", 30);  
  p1.introduce();
  await delay (2000);
  p2.introduce();
}

run();

function debounce(fn, delay) {
  let timer;

  return function(...args) {
    console.log("Function triggered");

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const debounced = debounce(() => console.log("API call"), 1000);

debounced();
debounced();
debounced();
debounced();

function memoSquare() {
  const cache = {};

  return function(n) {
    if (cache[n]) {
      console.log("From cache")
      return cache[n];
    }

    console.log("Calculating...");
    const result = n * n;
    cache[n] = result;

    return result;
  };
}

const square = memoSquare();

console.log(square(5));
console.log(square(5));
console.log(square(5));

function memoFib() {
  const cache = {};

  return function fib(n) {
    if (n in cache) return cache[n];

    if (n <= 1) return n;

    const result = fib(n-1) + fib(n-2);
    cache[n] = result;

    return result;
  };
}

const fib = memoFib();

console.log(fib(40));

function fib(n) {
    if (n<= 1) return n;
    return fib(n-1) + fib(n-2);
}
console.log(fib(4));

const numbers = [3, 7, 2, 9, 4];

const result = numbers.reduce ((acc, number) => {
  acc.sum += number;
  acc.count++;
  acc.average = acc.sum / acc.count;  
  return acc;
},{sum: 0, count: 0, average: 0});
console.log(result);

const numbers = [2,5,8,3,6,1];

const result = numbers.reduce ((acc, num) => {
  if (num % 2 === 0) {
    acc.evenSum +=num;
  } else acc.oddSum +=num;
  return acc;
},{evenSum: 0, oddSum: 0});

console.log(result);

const orders = [
 {user:"A", amount:200},
 {user:"B", amount:150},
 {user:"A", amount:100},
 {user:"C", amount:300},
 {user:"B", amount:50}
];

const result = orders.reduce ((acc, order) => {
    acc[order.user] = (acc[order.user] || 0) + order.amount;
  return acc;
},{});
console.log(result);

const words = ["apple","banana","apple","orange","banana","apple"];

const result = words.reduce ((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
},{});
console.log(result);

const obj = {
  user: {
    name: "Sandeep",
    address: {
      city: "Bangalore",
      pincode: 560001
    }
  },
  age: 30
};

function flattenObject(input, prefix = "", result = {}) {
  for (const key in input) {
    const value = input[key];
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }
  return result;
}
console.log(flattenObject(obj));

const orders = [
 {user: "A", amount: 100},
 {user: "B", amount: 400},
 {user: "A", amount: 200},
 {user: "B", amount: 100},
 {user: "C", amount: 400}
];

const metrics = orders.reduce ((acc, order) => {
    acc.totals[order.user] = (acc.totals[order.user] || 0) + order.amount;
  return acc;

},{totals: {}, topSpender: {}});

const topSpender = Object.keys(metrics.totals).reduce ((top, p) => {
  return metrics.totals[top] > metrics.totals[p] ? top : p;
});
metrics.topSpender = topSpender;

console.log(metrics);

const arr = [1, [2, [3, [4]], 5]];

function flattenArray(input) {
  let result = [];

  for (const item of input) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArray(arr));

const str = "javascript";
function firstNonRepeatingChar(s) {
  const count = {};

  for (const ch of s) {
    count[ch] = (count[ch] || 0) + 1;
  }

  for (const ch of s) {
    if (count[ch] === 1) {
      return ch;
    }
  }

  return null;
}

console.log(firstNonRepeatingChar(str));

chunk([1,2,3,4,5,6,7], 3)

function chunk(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3));


function debounce(fn, delay) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}

const debounced = debounce(() => {
  console.log("API Call");
}, 1000);

debounced();
debounced();
debounced();

const user = {
  name: "Sandeep",
  age: 30,
  city: "Bangalore"
};

function printObject(user) {
  for (const key in user) {
    console.log(key, user[key]);
  }
}

printObject(user);


const obj = {
  user: {
    name: "Sandeep",
    city: "Bangalore"
  },
  age: 30
};

function flattenObject(obj, prefix = "") {
  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix ? prefix + "." + key : key;

    if (typeof value === "object" && value !== null) {
      flattenObject(value, newKey);
    } else {
      console.log(newKey, value);
    }
  }
}

flattenObject(obj);

const obj = {
  a: 1,
  b: {
    c: {
      d: 4
    },
    e: 5
  }
};

function flatternObject(obj, prefix = "") {
  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix ? prefix + "." + key : key;
    
    if (typeof value === "object" && value !== null) {
      flatternObject(value, newKey);
    } else {
      console.log(newKey, value);
    }
  }
}
flatternObject(obj);

const obj = {
  a: 1,
  b: {
    c: 2,
    d: 3
  }
};


function flattenObject(obj, prefix = "", result = {}) {
  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix ? prefix + "." + key : key;
    if (typeof value === "object" && value !== null) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }
  return result;
}
console.log(flattenObject(obj));

const obj = {
  a: 1,
  b: {
    c: {
      d: 4
    },
    e: 5
  }
};

function flattenObject (obj, prefix = "", result = {}) {
  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix ? prefix + "." + key : key;
    if (typeof value === "object" && value !== null) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }
  return result;
}
console.log(flattenObject(obj));

const obj = {
  a: 2,
  b: {
    c: 4,
    d: {
      e: 6
    }
  }
};

function countValues (obj) {
  let count = 0;
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "object" && value !== null) {
      count += countValues(value)
    } else if (typeof value === "number") {
      count++;
    }
  }
  return count;
}
console.log(countValues(obj));

const obj = {
  a: 5,
  b: {
    c: 12,
    d: {
      e: 3
    }
  }
};
function findMax(obj) {
  let max = 1;
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "object") {
      max *= findMax(value);
    } else {
      max *= value;
    }
  }
  return max;
}

console.log(findMax(obj));

const arr = [1, [2, 3], [4, [5, 6]], 7];

function flattenArray(input) {
  let result = [];
  for (const item of input) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArray(arr));

const nums = [1, 2, 3, 4, 5, 6];

let result = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    result.push(nums[i]);
  }
}

console.log(result);

const nums = [1, 2, 3, 4, 5, 6];

let sum = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    sum += nums[i];
  }
}

console.log(sum);

const arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
}

console.log(sum);

const arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];

let maxNumber = -Infinity;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j< arr[i].length; j++) {
    if (arr[i][j] > maxNumber) {
      maxNumber = arr[i][j];
    }
  } 
}
console.log(maxNumber);

const arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];

let maxRow = [];
let maxSum = -Infinity;

for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = 0; j < arr[i].length; j++){
      sum += arr[i][j];
    }
    if (sum > maxSum){
      maxSum = sum;
      maxRow = arr[i];
    }
  }
  console.log (maxRow);


const arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];

let maxSum = -Infinity;
let maxIndex = -1;

for (let i = 0; i < arr.length; i++) {
  let sum = 0;

  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }

  if (sum > maxSum) {
    maxSum = sum;
    maxIndex = i;
  }
}

console.log(maxIndex);


const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let maxSum = -Infinity;
let maxIndex = -1;

for (let i = 0; i < arr.length; i++) {
  let sum = 0;

  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }

  if (sum > maxSum) {
    maxSum = sum;
    maxIndex = i;
  }
}

console.log(maxIndex);

const arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];

let result = [];

for (let j = 0; j < arr[0].length; j++) {
  result[j] = [];

  for (let i = 0; i < arr.length; i++) {
    result[j][i] = arr[i][j];
  }
}

console.log(result);

const arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];

let result = [];

for (let j = 0; j < arr[0].length; j++) {
  console.log(`\n👉 Outer Loop Start (j = ${j})`);

  result[j] = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(`   i = ${i} → arr[${i}][${j}] = ${arr[i][j]}`);

    result[j][i] = arr[i][j];

    console.log(`   result[${j}][${i}] = ${result[j][i]}`);
  }

  console.log(`👉 After j = ${j}, result =`, result);
}

console.log("\n✅ Final Result:", result);

const arr = [
  [1, 2],
  [3, 4]
];

// Step 1: Transpose
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    let temp = arr[i][j];
    arr[i][j] = arr[j][i];
    arr[j][i] = temp;
  }
}

// Step 2: Reverse each row
for (let i = 0; i < arr.length; i++) {
  arr[i].reverse();
}

console.log(arr);

const arr = [
  [1, 3, 5],
  [7, 9, 11]
];

function searchMatrix(arr, target) {
  for (let i = 0; i < arr.length; i++) {
  for (j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === target) {
      return true;
    }
  }
}
return false;
}
console.log(searchMatrix(arr, 9));

const arr = [
  [1, 2, 3],
  [2, 2, 4],
  [5, 2, 6]
];


function firstOccurence(arr, target) {
  for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === target) {
      return [i, j];
    }
  }
  return [-1, -1];
}
}
console.log(firstOccurence(arr, 2));

const arr = [
  [1,2],
  [3,4],
  [5,6]
];
let result = [];

for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr[i].length; j++) {
    result.push(arr[i][j]);
    }
  }
  console.log(result);

const arr = [
  [1,2,3],
  [4,5,6]
];

let result = [];

for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr[i].length; j++) {
    if (arr[i][j] % 2 === 0) {
      result.push(arr[i][j]);
    }
    }
  }
  console.log(result);

  const arr = [
  [1,2,3],
  [4,5,6]
];

let result = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] % 2 === 0) {
      result += arr[i][j];
    }
    }
  }
console.log(result);

const arr = 
[
  [1,2,3],
  [4,5,6]
];

let result = 0;

for (i = 0; i < arr.length; i++) {
  for (j =0; j < arr[i].length; j++) {
    if (arr[i][j] % 2 === 0) {
      result++;
    }
  }
}
console.log(result);

const arr = 
[
  [1,2,3],
  [4,5,6]
];

let number = -Infinity;

  for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr[i].length; j++) {
    if (arr[i][j] % 2 === 0 && arr[i][j] > number) {
      number = arr[i][j];
    }
  }
}
console.log(number);

const arr = 
[
  [1,2,3],
  [4,5,6]
];

let max = -Infinity;
let secondMax = -Infinity;

  for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr[i].length; j++) {
    let num = arr[i][j];
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num !== max ){
      secondMax = max;
    }
  }
}

console.log(secondMax);

const arr = [
  [1,2,3],
  [4,5,6]
];

let max = -Infinity;
let secondMax = -Infinity;
let thirdMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    let num = arr[i][j];

    if (num > max) {
      thirdMax = secondMax;
      secondMax = max;
      max = num;
    } 
    else if (num > secondMax && num !== max) {
      thirdMax = secondMax;
      secondMax = num;
    } 
    else if (num > thirdMax && num !== secondMax && num !== max) {
      thirdMax = num;
    }
  }
}

console.log([max, secondMax, thirdMax]);

const arr = [
  [1,2,3],
  [4,5,6]
];

function kthLargest (arr, k) {
  let flat = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    flat.push(arr[i][j]);
  }
}

flat.sort((a,b) => b - a);

return flat [k -1];
}

console.log(kthLargest(arr, 2));
console.log(kthLargest(arr, 3));

const arr = [
  [1,2,9],
  [4,8,7]
];
function kthLargestDistinct(arr, k) {
  let flat = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flat.push(arr[i][j]);
    }
  }

  let unique = [];

  for (let i = 0; i < flat.length; i++) {
    if (!unique.includes(flat[i])) {
      unique.push(flat[i]);
    }
  }

  unique.sort((a, b) => b - a);

  if (k < 1 || k > unique.length) {
    return "Invalid k";
  }

  return unique[k - 1];
}

console.log(kthLargestDistinct(arr, 2));
console.log(kthLargestDistinct(arr, 3));

const arr = [1,2,3,4,5,6];
function kthLargest(arr, k) {
  let top = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    top.push(num);

    // descending sort of small array
    top.sort((a, b) => b - a);

    if (top.length > k) {
      top.pop(); // smallest hata diya
    }
  }

  return top[k - 1];
}

console.log(kthLargest([1,2,3,4,5,6], 3));

const arr = [10, 5, 20, 8, 15];

let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];

  if (num > max) {
    secondMax = max;
    max = num;
  } 
  else if (num > secondMax && num !== max) {
    secondMax = num;
  }
}

console.log(secondMax); // 15

const arr = [10, 5, 20, 8, 15];

let min = Infinity;
let secondMin = Infinity;

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
if (num < min) {
  secondMin = min;
  min = num;
}
else if (num < secondMin && num !== min) {
  secondMin = num;
}
}
console.log (secondMin);

const arr = [2, 7, 11, 15];

function combinedSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [-1];
}

console.log(combinedSum(arr, 9));

const arr = [2, 7, 11, 15];

function combinedSum(arr, target) {
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let needed = target - num;

    if (seen[needed]) {
      return [needed, num];
    }

    seen[num] = true;
  }

  return [-1];
}

console.log(combinedSum(arr, 9));

const arr = [2, 7, 11, 15];

function twoSumIndex(arr, target) {
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let needed = target - num;

    if (seen[needed] !== undefined) {
      return [seen[needed], i];
    }

    seen[num] = i;
  }

  return [-1, -1];
}

console.log(twoSumIndex(arr, 9));

const arr = [-1, 0, 1, 2, -1, -4];


function threeSum (arr) {
  arr.sort ((a, b) => a - b);
  let result = [];
  for (let i = 0; i < arr.length -2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let left = i + 1; 
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);

        while (arr[left] === arr[left + 1]) left++;
        while (arr[right] === arr[right - 1]) right--;

        left++;
        right--;
      }
      else if (sum < 0) {
        left++;
      }
      else {
        right--;
      }
    }
  } 
  return result;
}
console.log(threeSum([-1,0,1,2,-1,-4]));

const arr = [1, 2, 3, 4, 5];

function targetSum (arr, target) {
  let seen = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j< arr.length; j++) {
      let num1 = arr[i];
      let num2 = arr[j];
      if (num1 + num2 === target) {
        seen.push([num1, num2]);
    }
    }
  }
  return seen;
}
console.log(targetSum(arr, 6));

const arr = [1, 2, 3, 4, 5];

function targetIndices(arr,target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([i, j]);
      }
    }
  }
  return result;
}
console.log(targetIndices(arr, 6));

const arr = [1, 2, 3, 4, 5];

function findPairsIndexOptimized(arr, target) {
  let seen = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let needed = target - num;

    if (seen[needed] !== undefined) {
      result.push([seen[needed], i]);
    }

    seen[num] = i;
  }

  return result;
}

console.log(findPairsIndexOptimized(arr, 6));

const str = ["loveleetcode"];
function firstNonRepeating(str) {
  let count = {};

  // Step 1: count
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    count[char] = (count[char] || 0) + 1;
  }

  // Step 2: find first unique
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return str[i];
    }
  }

  return null;
}

console.log(firstNonRepeating("loveleetcode"));

const str = "loveleetcode";

function firstNonRepeatingIndex(str) {
  let count = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    count[char] = (count[char] || 0) + 1;
  }
  for (let i = 0; i< str.length; i++) {
    if (count[str[i]] === 1) {
      return i;
    }
  }
  return -1;
}
console.log(firstNonRepeatingIndex("loveleetcode"));

const arr = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

  for (let j = 0; j < result.length; j++) {
    if (result[j] === num) {
      found = true;
      break
    }
  }
  if (!found) {
    result.push(num);
  }      
  }
  return result;
}
console.log(removeDuplicates[1, 2, 2, 3, 4, 4, 5]);

function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}
console.log(removeDuplicates[1, 2, 2, 3, 4, 4, 5]);

const arr = [1, 2, 2, 3, 3];

function checkFrequency (arr) {
  let maxCount = 0;
  let count = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]; 
    count[num] = (count[num] || 0) + 1;

    if (count[num] > maxCount) {
      maxCount = count[num];
    }
  }
  let result = [];

  for (let key in count ) {
    if (count[key] === maxCount) {
      result.push(Number(key));
    }
  }
  return result;
}
console.log(checkFrequency([1, 2, 2, 3, 3]));

const arr = ["eat","tea","tan","ate","nat","bat"];

function groupAnagrams(arr) {
  let map = {};

  for (let i = 0; i< arr.length; i++) {
    let word = arr[i];

    let key = word.split ("").sort().join("");

    if(!map[key]) {
      map[key] = [];
    }
    map[key].push(word);
  } 
  return Object.values(map);
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

const arr = [3, 7, 2, 9, 4];

function findMin(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num < min) {
      min = num;
    }
  }
  return min;
}
console.log (findMin(arr));

const arr = [3, 7, 2, 9, 4];

function secondLargestNumber(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num > max) {
      secondMax = max;
      max = num;
    } 
    else if (num > secondMax && num !== max) {
      secondMax = num;
    }
  }

  return secondMax;
}
console.log(secondLargestNumber(arr));

const arr = [2,2,2,1];

function secondMin(arr) {
  let min = Infinity;
  let secondMin = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num < min) {
      secondMin = min;
      min = num;
    } 
    else if (num < secondMin && num !== min) {
      secondMin = num;
    }
  }
  return secondMin === Infinity ? -1 : secondMin;
}
console.log(secondMin(arr));

const arr = [0,1,0,3,12];

function mapZeros(arr) {
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[pos];
      arr[pos] = temp;

      pos++;
    }
  }
  return arr;
}
console.log(mapZeros(arr));

const arr = [1,2,3,4];
 
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr;
}
console.log(reverseArray(arr));

const arr = [1,2,3,4];

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    sum += num;
  }
  return sum;
}
console.log(sumArray(arr));

const arr = [1,2,3,4,5,6];

function countEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num % 2 === 0) {
      sum++;
    }
  }
  return sum;
}
console.log(countEvenNumbers(arr));

const arr = [1,3,5,6,8];

function firstEvenNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num % 2 === 0) {
      return num;
    }
  }

  return -1;
}

console.log(firstEvenNumber(arr));

const arr = [1,3,5,6,8];

function firstEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num % 2 === 0) {
      return i;
    }
  }
  return -1;
}
console.log(firstEvenIndex(arr));

const arr = [2,7,1,9];

function largestDifference(arr) {
  let max = -Infinity;
  let min = Infinity;
  let diff = 0;

  for (i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num < min) {
      min = num;
    } 
    else if (num > max && num !== min) {
      max = num;
    } 
  }
  return max - min;
}
console.log(largestDifference(arr));

const arr = [7,1,5,3,6,4];

function maxDifference(arr) {
  let min = arr[0];
  let maxDiff = 0;

  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];

    let diff = num - min;

    if (diff > maxDiff) {
      maxDiff = diff;
    }

    if (num < min) {
      min = num;
    }
  }

  return maxDiff;
}

console.log(maxDifference([7,1,5,3,6,4]));

const arr = [5,4,3,2,1];

function maxDifference(arr) {
  let min = arr[0];
  let maxDiff = 0;

  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];

    let diff = num - min;

    if (diff > maxDiff) {
      maxDiff = diff;
    }

    if (num < min) {
      min = num;
    }
  }

  return maxDiff;
}

console.log(maxDifference(arr));

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const freq = words.reduce((acc, word) =>  {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
},{});

let maxWord = "";
let maxCount = 0;

for (let word in freq) {
  if (freq[word] > maxCount) {
    maxCount = freq[word];
    maxWord = word;
  }
}
console.log(maxWord);

const orders = [
  {user: "A", amount: 100},
  {user: "B", amount: 200},
  {user: "A", amount: 300},
  {user: "B", amount: 100},
  {user: "C", amount: 200}
];

const freq = orders.reduce ((acc, order) => {
  acc[order.user] = (acc[order.user] || 0) + order.amount;
  return acc;
},{});

let maxUser = "";
let maxCount = 0;

for (let order in freq) {
  if (freq[order]> maxCount) {
    maxCount = freq[order];
    maxUser = order;
  }
}
console.log(maxUser);

const orders = [
  {user: "A", amount: 100},
  {user: "B", amount: 200},
  {user: "A", amount: 300},
  {user: "B", amount: 100},
  {user: "C", amount: 200}
];

const result = orders.reduce((acc, order) => {
  acc.totals[order.user] = (acc.totals[order.user] || 0) + order.amount;

  if (acc.totals[order.user] > acc.maxAmount) {
    acc.maxAmount = acc.totals[order.user];
    acc.maxUser = order.user;
  }

  return acc;
}, { totals: {}, maxUser: "", maxAmount: 0 });

console.log(result.maxUser);

const nums = [4, 2, 7, 2, 9, 4, 1];

const freq = nums.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
},{});

const result = "";

for (let num of nums) {
  if (freq[num] === 1) {
    console.log(num);
    break;
  }
}

const nums = [2, 3, 5, 3, 2, 6, 5];

const freq = nums.reduce ((acc, num) => {
  acc[num] = (acc[num] || 0)+ 1;
  return acc;
},{});

let result = [];

for (let num of nums) {
  if (freq[num] === 1) {
    result.push(num);
  }
}
console.log(result);

const nums = [1, 2, 3, 2, 1, 4, 5];

const seen = new Set();

for (let num of nums) {
  if (seen.has(num)) {
    console.log(num);
    break;
  }
  seen.add(num);
}

const nums = [4, 5, 6, 7, 4, 5];

const seen = new Set();

for (let num of nums) {
  if (seen.has(num)) {
    console.log(num);
    break;
  }
  seen.add(num);
}

const nums = [2,1,3,4,2,1,5];

const freq = nums.reduce ((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
},{});

for (let num of nums) {
  if (freq[num] > 0) {
    console.log(num);
    break;
  }
}

const nums = [5, 3, 4, 3, 5, 6];

const freq = nums.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
},{});

let maxCount = 0;
let maxNum = 0;

for (let num in freq) {
  if (freq[num]> maxCount) {
    maxCount = freq[num];
    maxNum = num;
  }
}
console.log(maxNum);


const nums = [5, 3, 4, 3, 5, 6];

const freq = nums.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
},{});

for (let num of nums) {
  if (freq[num] > 1) {
    console.log(num);
    break;
  }
}

const nums = [1, 2, 3, 4, 5];

const freq = nums.reduce ((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
},{});
const result = nums.find(num => freq[num] > 1) || null;
//let result = null;

//for (let num of nums) {
//  if (freq[num] > 1) {
//    result = num;
//  }
//}
console.log(result);

const nums = [1, 2, 1, 3, 4, 2, 3];

let left = 0;
let maxLength = 0;
const seen = new Set();

for (let right = 0; right < nums.length; right++) {
  while (seen.has(nums[right])) {
    seen.delete(nums[left]);
    left++;
  }

  seen.add(nums[right]);
  maxLength = Math.max(maxLength, right - left + 1);
}

console.log(maxLength);


const nums = [1, 2, 3, 2, 4];

let seen = new Set();
let hasDuplicate = false;

for (let i = 0; i < nums.length; i++) {
  if (seen.has(nums[i])) {
    hasDuplicate = true;
    break;
  }
  seen.add(nums[i]);
}
console.log(hasDuplicate);

const set = new Set([1, 2, 3, 4]);

const result = new Set();

for (let num of set) {
  if (num % 2 !== 0) {
    result.add(num);
  }
}

console.log(result);

const nums = [5, 1, 9, 3];

let max = nums[0];

for (let i = 1; i < nums.length; i++) {
  max = Math.max(max, nums[i]);
}

console.log(max);

let num = 1234;
let reversed = 0;

while (num > 0) {
  let digit = num % 10;
  reversed = reversed * 10 + digit;
  num = Math.floor(num / 10);
}
console.log(reversed);

const nums = [2, 3, 2, 4, 5, 3, 6];

const freq = nums.reduce ((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
},{});

let result = null;

for (let num of nums) {
  if (freq[num] === 1) {
    result = num;
    break;
  }
}
console.log(result);

const nums = [2, 3, 2, 4, 5, 3, 6];

const freq = nums.reduce ((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
},{});

let result = null;

for (let i = 0; i < nums.length; i++) {
  if (freq[nums[i]] === 1) {
    result = i;
    break;
  }
}
console.log(result);

const nums = [1, 2, 3, 4, 2, 3, 5];

let left = 0;
let maxLength = 0;
const seen = new Set();

for (let right = 0; right < nums.length; right++) {
  while (seen.has(nums[right])) {
    seen.delete(nums[left]);
    left++;
  }

  seen.add(nums[right]);
  maxLength = Math.max(maxLength, right - left + 1);
}

console.log(maxLength);

const nums = [2, 1, 5, 1, 3, 2];
const k = 3;

let windowSum = 0;
for (let i = 0; i < k; i++) {
  windowSum += nums[i];
}
console.log(windowSum);

let maxSum = windowSum;

for (let i = k; i < nums.length; i++) {
  windowSum = windowSum - nums[i - k] + nums[i];
  maxSum = Math.max(maxSum, windowSum);
}
console.log(maxSum);

const nums = [1, 2, 3, 4, 5];

const result = nums.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc += num;
  }
  return acc;
},0);
console.log(result);

const users = [
  {name: "A", age: 20},
  {name: "B", age: 30},
  {name: "C", age: 25}
];

const result = users.reduce((acc, user) => {
  return acc + user.age;
},0);
const averageAge = result / users.length;

console.log(averageAge);

const str = "aabbbcdd";
const freq = str.split("").reduce((acc, ch) => {
  acc[ch] = (acc[ch] || 0) + 1;
  return acc;
},{});

let maxChar = "";
let maxCount = 0;

for (let ch in freq) {
  if (freq[ch] > maxCount) {
    maxCount = freq[ch];
    maxChar = ch;
  }
}
console.log(maxChar);

const nums = [1, 2, 3, 4, 5];

const result = nums.filter(num => num % 2 === 0);
const result1 = result.map (num => num * num);
console.log(result1);

const nums = [1, 2, 3, 4, 5];

const result = nums.filter(num => num % 2 === 0);
const result1 = result.map (num => num * num);

const result2 = result1.reduce ((acc, rt) => {
  acc += rt;
  return acc;
},0);
console.log(result2);

const orders = [
  {user: "A", amount: 100},
  {user: "B", amount: 200},
  {user: "A", amount: 300},
  {user: "C", amount: 400}
];

const result = orders.reduce((acc, order) => {
  acc[order.user] = (acc[order.user] || 0) + order.amount;
  return acc;
},{});

console.log(result);

const orders = [
  {user: "A", amount: 100},
  {user: "B", amount: 200},
  {user: "A", amount: 300},
  {user: "C", amount: 400}
];

const totals = orders.reduce((acc, order) => {
  acc[order.user] = (acc[order.user] || 0) + order.amount;
  return acc;
},{});

let maxUser = "";
let maxAmount = 0;

for (let user in totals) {
  if (totals[user] > maxAmount) {
    maxAmount = totals[user];
    maxUser = user;
  }
}

console.log(maxUser);

const orders = [
  {user: "A", amount: 100},
  {user: "B", amount: 200},
  {user: "A", amount: 300},
  {user: "C", amount: 400}
];

const result = orders.reduce((acc, order) => {
  acc.totals[order.user] = (acc.totals[order.user] || 0) + order.amount;

  if (acc.totals[order.user] > acc.maxAmount) {
    acc.maxAmount = acc.totals[order.user];
    acc.maxUser = order.user;
  }

  return acc;
}, { totals: {}, maxUser: "", maxAmount: 0 });

console.log(result.maxUser);

const nums = [1, 2, 3, 2, 1, 4];

const totals = nums.reduce ((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
},{}); 

const result = nums.filter(num => totals[num] === 1);

console.log(result);

const nums = [1, 2, 3, 4, 5, 6];

const result = nums.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.evenSum += num;
  } else {
    acc.oddSum += num;
  }
  return acc;
}, { evenSum: 0, oddSum: 0 });
console.log(result);

const nums = [1,2,3,4,5,6];

const result = nums.reduce ((acc, num) => {
  if (num % 2 === 0) {
    acc.even.push(num);
  } else {
    acc.odd.push(num);
  }
  return acc;
},{even: [], odd: []});
console.log(result);

const nums = [1,2,3,4,5,6];

const result = nums.reduce ((acc, num) => {
  if (num % 2 === 0) {
    acc.evenSum += num;
  } else {
    acc.odd.push(num);
  }
  return acc;
}, {evenSum: 0, odd: []});
console.log(result);

const orders = [
  {user: "A", amount: 100},
  {user: "B", amount: 200},
  {user: "A", amount: 300},
  {user: "C", amount: 400}
];

const result = orders.reduce ((acc, order) => {
  acc.totals[order.user] = (acc.totals[order.user] || 0) + order.amount;
  if (acc.totals[order.user] >= 300 && !acc.highSpenders.includes(order.user)) {
    acc.highSpenders.push(order.user);
  }
  return acc;
}, {totals: {}, highSpenders:[]});
console.log(result);

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const result = words.reduce ((acc, word) => {
  acc.freq[word] =(acc.freq[word] || 0) + 1;
  if (acc.freq[word] > acc.maxCount) {
    acc.maxCount = acc.freq[word];
    acc.mostFrequent = word;
  }
  return acc;
},{freq: {}, mostFrequent: "", maxCount: 0});

const finalResult = {...result.freq,mostFrequent:result.mostFrequent};

console.log(finalResult);

const nums = [2,3,4,5,6,7];

const result = nums.reduce ((acc, num) => {
  if (num % 2 === 0) {
    acc.evenSquares.push(num * num);
  } else {
    acc.oddCubes.push(num * num * num);
  }
  return acc;
},{evenSquares: [], oddCubes: []});
console.log(result);

const orders = [
  {user: "A", items: [10,20]},
  {user: "B", items: [5]},
  {user: "A", items: [15,5]},
  {user: "C", items: [50]}
];

const result = orders.reduce ((acc, order) => {
  acc.totals[order.user] = (acc.totals[order.user] || 0) + order.items.reduce ((a,b) => a + b, 0);
  if (acc.totals[order.user] > acc.maxItems) {
    acc.maxItems = acc.totals[order.user];
    acc.highestUser = [order.user];
  } else if (acc.totals[order.user] === acc.maxItems) {
    acc.highestUser.push(order.user);
  }

  return acc;

},{totals: {}, highestUser: [], maxItems: 0});
delete result.maxItems;
console.log(result);

const nums = [1, 2, 3, 4, 5];

let evenSum = 0;
let oddSum = 0;

for ( i = 0; i < nums.length; i++) {
  let num = nums[i];
  if (num % 2 === 0) {
    evenSum += num;
  } else {
    oddSum += num;
  }
}
console.log({evenSum, oddSum});

const nums = [1,2,3,4,5,6];

let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < nums.length; i++) {
  let num = nums[i];
  if (num % 2 === 0) {
    evenNumbers.push(num);
  } else {
    oddNumbers.push(num);
  }
}
console.log({evenNumbers, oddNumbers});

const nums = [3, 8, 5, 12, 7, 6];

let evenSum = 0;
let oddCount = [];

for (let i = 0; i < nums.length; i++) {
  let num = nums[i];
  if (num % 2 === 0) {
    evenSum += num;
  } else {
    oddCount++;
  }
}  
console.log({evenSum, oddCount});

const nums = [10, 5, 25, 8, 30, 2];

let largestNumber = 0;

for (let i = 1; i < nums.length; i++) {
  let num = nums[i];
  if (num > largestNumber ) {
    largestNumber = num;
  }
}
console.log(largestNumber);

const nums = [10, 5, 25, 8, 30, 2];

let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < nums.length; i++) {
  let num = nums[i];

  if (num > max) {
    secondMax = max;
    max = num;
  } else if (num > secondMax && num !== max) {
    secondMax = num;
  }
}

console.log(secondMax);

const str = "aabcbcde";

let freq = {};

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  freq[char] = (freq[char] || 0) + 1;
}
for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (freq[char] === 1) {
    console.log(char);
    break;
  }
}

const str = "abcaef";

let seen = {};

for (let i = 0; i < str.length; i++) {
  let char = str[i];

  if (seen[char]) {
    console.log(char);
    break;
  }

  seen[char] = true;
}

const str = "abcabcbb";

let seen = {};
let left = 0;
let maxLength = 0;

for (let right = 0; right < str.length; right++) {
  let char = str[right];

  if (seen[char] >= left) {
    left = seen[char] + 1;
  }

  seen[char] = right;
  maxLength = Math.max(maxLength, right - left + 1);
}

console.log(maxLength);

const str = "pwwkew";

let seen = {};
let left = 0;
let maxLength = 0;

for (right = 0; right < str.length; right++) {
  let char = str[right];

  if (seen[char] >= left) {
    left = seen[char] + 1;
  }
  seen[char] = right;
  maxLength = Math.max(maxLength, right - left + 1);
}
console.log(maxLength);

const nums = [2, 1, 5, 1, 3, 2];

const k = 3;

let windowSum = 0;

for (let i = 0; i < k; i++) {
  windowSum += nums[i];
}

let maxSum = windowSum;

for (let i = k; i < nums.length; i++) {
  windowSum = windowSum - nums[i - k] + nums[i];
  maxSum = Math.max(maxSum, windowSum);
}
console.log(maxSum);

const orders = [
  {
    orderId: "ORD001",
    customer: "Amit",
    city: "Bangalore",
    status: "delivered",
    items: [
      { name: "Shoes", price: 2000, quantity: 1 },
      { name: "Socks", price: 200, quantity: 3 }
    ],
    couponDiscount: 300
  },
  {
    orderId: "ORD002",
    customer: "Neha",
    city: "Mumbai",
    status: "cancelled",
    items: [
      { name: "Bag", price: 1500, quantity: 1 }
    ],
    couponDiscount: 0
  },
  {
    orderId: "ORD003",
    customer: "Amit",
    city: "Bangalore",
    status: "delivered",
    items: [
      { name: "T-shirt", price: 800, quantity: 2 },
      { name: "Cap", price: 500, quantity: 1 }
    ],
    couponDiscount: 100
  },
  {
    orderId: "ORD004",
    customer: "Sara",
    city: "Delhi",
    status: "pending",
    items: [
      { name: "Watch", price: 3000, quantity: 1 }
    ],
    couponDiscount: 200
  },
  {
    orderId: "ORD005",
    customer: "Neha",
    city: "Mumbai",
    status: "delivered",
    items: [
      { name: "Laptop Sleeve", price: 1200, quantity: 1 },
      { name: "Mouse", price: 700, quantity: 1 }
    ],
    couponDiscount: 150
  }
];

function getOrderAnalytics(orders) {
  let totalOrders = orders.length;
  let statusCounts = {};
  let totalRevenue = 0;
  let revenueByCustomer = {};
  let deliveredCityCounts = {};
  let itemQuantityMap = {};
  let deliveredOrderCount = 0;
  let cancelledOrderIds = [];

  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    statusCounts[order.status] = (statusCounts[order.status] || 0) + 1;
    if (order.status === "cancelled") {
      cancelledOrderIds.push(order.orderId);
    }
    if (order.status === "delivered") {
      deliveredOrderCount++; 
      deliveredCityCounts[order.city] = (deliveredCityCounts[order.city] || 0) + 1;

      let orderTotal = 0;

      for (let j = 0; j < order.items.length; j++) {
        let item = order.items[j];
        let itemTotal = item.price * item.quantity;

        orderTotal += itemTotal;
        itemQuantityMap[item.name] = (itemQuantityMap[item.name] || 0) + item.quantity;
      }

      orderTotal = orderTotal - order.couponDiscount;
      totalRevenue += orderTotal;

      revenueByCustomer[order.customer] = (revenueByCustomer[order.customer] || 0) + orderTotal;
    }
  }
  let topCustomer = "";
  let highestRevenue = 0;

  for (let customer in revenueByCustomer) {
    if (revenueByCustomer[customer] > highestRevenue) {
      highestRevenue = revenueByCustomer[customer];
      topCustomer = customer;
    }
  }
  let mostSoldItem = "";
  let highestQuantity = 0;

  for (let itemName in itemQuantityMap) {
    if (itemQuantityMap[itemName] > highestQuantity) {
      highestQuantity = itemQuantityMap[itemName];
      mostSoldItem = itemName;
    }
  }
  let averageOrderValue = 0;

  if (deliveredOrderCount > 0) {
    averageOrderValue = totalRevenue / deliveredOrderCount;
  }
  averageOrderValue = Number(averageOrderValue.toFixed(2));

  return {
    totalOrders,
    statusCounts,
    totalRevenue,
    revenueByCustomer,
    topCustomer,
    deliveredCityCounts,
    mostSoldItem,
    averageOrderValue,
    cancelledOrderIds
  };
}
console.log(getOrderAnalytics(orders));

const tickets = [
  {
    ticketId: "T1",
    customer: "Amit",
    department: "Payments",
    priority: "high",
    status: "open",
    createdAt: "2026-04-01",
    resolvedAt: null,
    messages: 4
  },
  {
    ticketId: "T2",
    customer: "Neha",
    department: "Orders",
    priority: "medium",
    status: "resolved",
    createdAt: "2026-04-02",
    resolvedAt: "2026-04-03",
    messages: 6
  },
  {
    ticketId: "T3",
    customer: "Amit",
    department: "Payments",
    priority: "high",
    status: "resolved",
    createdAt: "2026-04-01",
    resolvedAt: "2026-04-05",
    messages: 8
  },
  {
    ticketId: "T4",
    customer: "Sara",
    department: "Delivery",
    priority: "low",
    status: "open",
    createdAt: "2026-04-04",
    resolvedAt: null,
    messages: 2
  },
  {
    ticketId: "T5",
    customer: "Neha",
    department: "Orders",
    priority: "high",
    status: "resolved",
    createdAt: "2026-04-03",
    resolvedAt: "2026-04-04",
    messages: 5
  }
];

function getTicketAnalytics(tickets) {
  try {
    if (!Array.isArray(tickets)) {
      throw new Error("Invalid input: tickets must be an array");
    }

    let totalTickets = tickets.length;
    let statusCounts = {};
    let priorityCounts = {};
    let departmentCounts = {};
    let countByCustomer = {};
    let openTickets = 0;
    let resolvedTickets = 0;
    let highPriorityOpenTicketIds = [];
    let resolvedTicketIds = [];
    let totalMessages = 0;

    for (let i = 0; i < tickets.length; i++) {
      let ticket = tickets[i];

      if (!ticket) continue;

      statusCounts[ticket.status] = (statusCounts[ticket.status] || 0) + 1;
      priorityCounts[ticket.priority] = (priorityCounts[ticket.priority] || 0) + 1;
      departmentCounts[ticket.department] = (departmentCounts[ticket.department] || 0) + 1;
      countByCustomer[ticket.customer] = (countByCustomer[ticket.customer] || 0) + 1;

      totalMessages += ticket.messages || 0;

      if (ticket.status === "open") openTickets++;

      if (ticket.status === "resolved") {
        resolvedTickets++;
        resolvedTicketIds.push(ticket.ticketId);
      }

      if (ticket.priority === "high" && ticket.status === "open") {
        highPriorityOpenTicketIds.push(ticket.ticketId);
      }
    }

    let topCustomer = "";
    let highestTicketCount = -Infinity;

    for (let customer in countByCustomer) {
      if (countByCustomer[customer] > highestTicketCount) {
        highestTicketCount = countByCustomer[customer];
        topCustomer = customer;
      }
    }

    let topDepartment = "";
    let topDepartmentCount = -Infinity;

    for (let department in departmentCounts) {
      if (departmentCounts[department] > topDepartmentCount) {
        topDepartmentCount = departmentCounts[department];
        topDepartment = department;
      }
    }

    let averageMessages = totalTickets > 0
      ? Number((totalMessages / totalTickets).toFixed(2))
      : 0;

    return {
      totalTickets,
      statusCounts,
      priorityCounts,
      departmentCounts,
      openTickets,
      resolvedTickets,
      topCustomer,
      averageMessages,
      highPriorityOpenTicketIds,
      topDepartment,
      resolvedTicketIds
    };

  } catch (error) {
    console.error("Error in getTicketAnalytics:", error.message);

    return {
      error: true,
      message: error.message
    };
  }
}
console.log(getTicketAnalytics(tickets));

const orders = [
  { status: "delivered", amount: 1000 },
  { status: "cancelled", amount: 500 },
  { status: "delivered", amount: 2000 },
  { status: "pending", amount: 800 }
];

async function getDeliveredRevenue(orders) {
  try {
    if (!Array.isArray(orders)) {
      throw new Error("Invalid input: orders must be an array");
    }
    let deliveredRevenue = 0;

    for (let i = 0; i < orders.length; i++) {
      let order = orders[i];
      if (order.status === "delivered") {
        deliveredRevenue += order.amount;
      }
    }
    return deliveredRevenue;

  } catch (error) {
    console.error("Error:", error.message);
    return 0;
  }
}
getDeliveredRevenue(orders).then(console.log);

const nums = [1, 2, 3, 4, 5, 6];

let even = 0;
let odd = 0;

for (let i = 0; i < nums.length; i++) {
  let num = nums[i];
  if (num % 2 === 0) {
    even++;
  } else odd++;
}
console.log({even, odd});

const nums = [2, 4, 6, 8, 10];

let sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
let average = sum / nums.length;

let greaterCount = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > average) {
    greaterCount++;
  }
}
console.log(greaterCount);

const nums = [2, 4, 6, 8, 10];

let sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}

let average = sum / nums.length;

let firstGreater = null;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > average) {
    firstGreater = nums[i];
    break;
  }
}
console.log(firstGreater);

const nums = [5, 2, 8, 1, 3];

let secondSmallestNumber = Infinity;
let smallestNumber = Infinity;

for (let i = 0; i < nums.length; i++) {
  let num = nums[i];
  if (num < smallestNumber) {
    secondSmallestNumber = smallestNumber
    smallestNumber = num;
  } else if (num < secondSmallestNumber && num !== smallestNumber) {
    secondSmallestNumber = num;
  }
}
if (secondSmallestNumber === Infinity) {
  console.log(null);
} else {
  console.log(secondSmallestNumber);
}

const nums = [3, 0, 1];

let n = nums.length;

let expectedSum = (n * (n + 1)) / 2;

let actualSum = 0;

for (let i = 0; i < nums.length; i++) {
  actualSum += nums[i];
}
let missing = expectedSum - actualSum;

console.log(missing);

const nums = [1, 3, 4, 2, 2];

let seen = {};

for (let i = 0; i < nums.length; i++) {
  let num = nums[i];
  if (seen[num]) {
    seen.delete(num);
//    console.log(num);
//    break;
  }
  
  seen[num] = true;
}
console.log(seen);

const nums = [1, 2, 3, 2, 3, 4, 5, 1];

let result = [];
let seen = {};
let added = {};

for (let i = 0; i < nums.length; i++) {
  let num = nums[i];

  if (seen[num] && !added[num]) {
    result.push(num);
    added[num] = true;
  } else {
    seen[num] = true;
  }
}

console.log(result);

const nums = [1, 2, 2, 3, 3, 3];

let result = {};

for (let i = 0; i < nums.length; i++) {
  let num = nums[i];
  result[num] = (result[num] || 0) + 1;
}
console.log(result);

const nums = [1, 2, 2, 3, 3, 3];

let result = {};
let mostFreq = null;
let maxCount = 0;

for (let i = 0; i < nums.length; i++) {
  let num = nums[i];
  result[num] = (result[num] || 0) + 1;
}
for (let key in result ) {
  if (result[key] > maxCount) {
    maxCount = result[key];
    mostFreq = Number(key);
  }
}
console.log(mostFreq);

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let currentSum = nums[0];
let maxSum = nums[0];

for (let i = 0; i < nums.length; i++) {
  let num = nums[i];

  currentSum = Math.max(num, currentSum + num);
  maxSum = Math.max(maxSum, currentSum);
}
console.log(maxSum);

const nums = [5, 4, -1, 7, 8];

let currentSum = nums[0];
let maxSum = nums[0];

for (let i = 1; i < nums.length; i++) {
  let num = nums[i];

  currentSum = Math.max(num, currentSum + num);
  maxSum = Math.max(maxSum, currentSum);
}
console.log(maxSum);

const nums = [2, 3, -2, 4];

let currentMax = nums[0];
let currentMin = nums[0];
let maxProduct = nums[0];

for (let i = 1; i < nums.length; i++) {
  let num = nums[i];

  if (num < 0) {
    let temp = currentMax;
    currentMax = currentMin;
    currentMin = temp;
  }

  currentMax = Math.max(num, currentMax * num);
  currentMin = Math.min(num, currentMin * num);

  maxProduct = Math.max(maxProduct, currentMax);
}
console.log(maxProduct);

const nums = [2, 3, -2, 4];

function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    currentSum = Math.max(num, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
console.log(maxSubArray(nums));

const nums = [2, 3, -2, 4];
function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    if (num > currentSum + num) {
      currentSum = num;
      tempStart = i;
    } else {
      currentSum = currentSum + num;
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }

  return nums.slice(start, end + 1);
}

console.log(maxSubArray([2, 3, -2, 4]));

const nums = [2, 3, -2, 4];

let currentMax = nums[0];
let currentMin = nums[0];
let maxProduct = nums[0];

for (let i = 1; i < nums.length; i++) {
  let num = nums[i];

  if (num < 0) {
    let temp = currentMax;
    currentMax = currentMin;
    currentMin = temp;
  }

  currentMax = Math.max(num, currentMax * num);
  currentMin = Math.min(num, currentMin * num);

  maxProduct = Math.max(maxProduct, currentMax);
}
console.log(maxProduct);

const str = "leetcode"

function firstUniqueChar(str) {
  let count = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    count[char] = (count[char] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return i;
    }
  }
  return null;
}
console.log(firstUniqueChar(str));

const str = "loveleetcode"

function firstNonRepeatingChar(str) {
  let count = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    count[char] = (count[char] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return i;
    }
  }
  return null;
}
console.log(firstNonRepeatingChar(str));

const str = "aabb";

function firstNonRepeatingChar(str) {
  let count = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    count[char] = (count[char] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return i;
    }
  }
  return -1;
}
console.log(firstNonRepeatingChar(str));

const str = "abcabcbb";

function lengthOfLongestSubstring(str) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));

const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(2);

console.log([...set]);
console.log(set.size);

const arr = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(arr) {
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    set.add(num);
  }
  return [... new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


const str = "abca";

function processString(str) {
  let set = new Set(); 

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (set.has(char)) {
      set.delete(char);
    } else {
      set.add(char);
    }
  }
  return [...new Set(str)];
}
console.log(processString("abca"));

const str = "abcabc"

function longestSubstring(str) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(longestSubstring("abcabc"));

const nums = [1, 2, 2, 3, 3, 3, 4];

function aggregatedCount(nums) {
  let freq = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}
console.log(aggregatedCount(nums));

const aggregatedCount = nums.reduce ((freq, num) => {
  freq[num] = (freq[num] || 0) + 1;
  return freq;
},{});
console.log(aggregatedCount);

const nums = [1, 2, 2, 3, 3, 4];

let freq = {};

for (let i = 0; i < nums.length; i++) {
  let num = nums[i];
  freq[num] = (freq[num] || 0) + 1;
}

let firstNonRepeating = null;

for (let i = 0; i < nums.length; i++) {
  if (freq[nums[i]] === 1) {
    firstNonRepeating = nums[i];
    break;
  }
}
console.log(firstNonRepeating);

const nums = [1, 2, 2, 3, 3, 4];

function firstRepeatingNumber(nums) {
  let seen = new Set()

  for (let num of nums) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }
  return null;
}
console.log(firstRepeatingNumber(nums));

const str = "aabbcde";
function firstNonRepeatingChar(str) {
  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }
  return null;
}
console.log(firstNonRepeatingChar(str));

const str = "abcabcbb";

function lengthOfLongestSubstring(str) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));

let count = 1;
const max = 100;

const timer = setInterval(() => {
  console.log(count);
  
  if (count >= max) {
    clearInterval(timer);
    console.log("Timer Finished!");
  }
  
  count++;
}, 1000);

let count = 1;
const max = 100;

function startRandomTimer() {
  if (count <= max) {
    console.log(count);
    
    const randomDelay = Math.floor(Math.random() * (2000 - 500 + 1)) + 500;
    
    count++;
    
    setTimeout(startRandomTimer, randomDelay);
  } else {
    console.log("Timer Finished!");
  }
}

startRandomTimer();

const timer = setInterval(() => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  console.log(randomNumber);
}, 1000);

let numbers = Array.from({ length: 10 }, (_, i) => i + 1);

for (let i = numbers.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}

const timer = setInterval(() => {
  if (numbers.length > 0) {
    const nextNum = numbers.pop();
    console.log(nextNum);
  } else {
    clearInterval(timer);
    console.log("All unique numbers generated!");
  }
}, 1000);

function delayMessage(msg, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, time);
  });
}
/*async function main() {
  await delayMessage("Hello", 2000);
  console.log("Done");
}
main();

async function main() {
  await delayMessage("Step 1", 1000);
  await delayMessage("Step 2", 1000);
  await delayMessage("Step 3", 1000);
}

main();


function delayMessage(msg,time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, time);
  });
}
async function main() {
  await Promise.all([delayMessage("Task 1", 2000),
  delayMessage("Task 2", 2000),
  delayMessage("Task 3", 2000)
]);
} 
main();

async function fetchWithRetry(fn, retries) {
  for (let i = 0; i <= retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === retries) throw error;
      console.log(`Attempt ${i + 1} failed. Retrying...`);
    }
  }
}

let count = 0;
const apiCall = async () => {
  count++;
  if (count < 3) {
    throw new Error("Server Down");
  }
  return "Success! Data received.";
};

async function run() {
  try {
    const result = await fetchWithRetry(apiCall, 3);
    console.log(result);
  } catch (err) {
    console.log("Final Failure:", err.message);
  }
}

run();*/









