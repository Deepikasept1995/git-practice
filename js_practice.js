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

console.log(fib(40));*/

function fib(n) {
    if (n<= 1) return n;
    return fib(n-1) + fib(n-2);
}
console.log(fib(4));
