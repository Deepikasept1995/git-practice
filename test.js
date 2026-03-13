const orders = [
 {user:"Ravi", amount:200},
 {user:"Neha", amount:300},
 {user:"Ravi", amount:150},
 {user:"Amit", amount:500},
 {user:"Neha", amount:100}
];

const result1 = orders.reduce ((acc, order) => {
  if (!acc[order.user]) {
    acc[order.user] = [];
  }
  acc[order.user].push(order.amount);
  return acc;
},{});
console.log(result1);


const nums = [10,5,8,20,15];

const result2 = nums.reduce(
  (acc, num) => {
    if (num > acc.largest) {
      acc.secondLargest = acc.largest;
      acc.largest = num;
    } else if (num > acc.secondLargest && num < acc.largest) {
      acc.secondLargest = num;
    }
    return acc;
  },
  { largest: -Infinity, secondLargest: -Infinity }
).secondLargest;

console.log(result2);


const arr = [1,[2,3],4,[5,6]];

function flatten(arr) {
  return arr.reduce ((acc, val) => {
    if (Array.isArray(val)) {
      acc.push(...flatten(val));
    } else {
      acc.push(val);
    }
    return acc;
  },[]);
}
console.log(flatten([1,[2,3],[4,[5,6]]]));


const orders1 = [
 {user:"Ravi", amount:200},
 {user:"Neha", amount:500},
 {user:"Ravi", amount:400},
 {user:"Amit", amount:300}
];

const totals = orders1.reduce((acc, order) => {
  acc[order.user] = (acc[order.user] || 0) + order.amount;
  return acc;
}, {});

const result4 = Object.keys(totals).reduce((maxUser, user) => {
  return totals[user] > totals[maxUser] ? user : maxUser;
});

console.log(result4);

const str = "javascript";

const result5 = str.split("").reduce ((acc, st) => {
  acc[st] = (acc[st] || 0) + 1;
  return acc;
},{});

console.log(result5);

const orders3 = [
  { id: 1, user: "Ravi", amount: 200, status: "DELIVERED" },
  { id: 2, user: "Neha", amount: 500, status: "PENDING" },
  { id: 3, user: "Ravi", amount: 400, status: "DELIVERED" },
  { id: 4, user: "Amit", amount: 300, status: "CANCELLED" },
  { id: 5, user: "Neha", amount: 250, status: "DELIVERED" },
  { id: 6, user: "Amit", amount: 700, status: "DELIVERED" }
];

const userMetrics = orders3.reduce((acc, order) => {

  acc.totalOrders += 1;

  acc.statusCounts[order.status] =
    (acc.statusCounts[order.status] || 0) + 1;

  if (order.status === "DELIVERED") {
    acc.deliveredRevenue += order.amount;
  }

  acc.userTotals[order.user] =
    (acc.userTotals[order.user] || 0) + order.amount;

  return acc;

}, {
  totalOrders: 0,
  deliveredRevenue: 0,
  statusCounts: {},
  userTotals: {}
});

const topSpender = Object.keys(userMetrics.userTotals).reduce(
  (maxUser, user) => {
    return userMetrics.userTotals[user] >
      userMetrics.userTotals[maxUser]
      ? user
      : maxUser;
  }
);

console.log(userMetrics);
console.log(topSpender);