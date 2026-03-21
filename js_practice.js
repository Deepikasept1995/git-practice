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

console.log(arr);*/

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